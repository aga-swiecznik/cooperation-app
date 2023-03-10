import { useValidationRules } from "~/ui/hooks/useValidationRules";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { useRouter } from "next/router";
import { PlusOutlined } from "@ant-design/icons";
import { type Action } from "@prisma/client";
import { api } from "~/utils/api";
import {
  fromActionFormDTO,
  toActionFormDTO,
  type ActionFormDTO,
} from "~/dto/ActionDTO";

export const ActionEditForm = ({ action }: { action?: Action }) => {
  const [form] = Form.useForm<ActionFormDTO>();
  const rules = useValidationRules();
  const router = useRouter();

  const { isLoading, mutate: saveAction } = api.action.save.useMutation({
    onSuccess: async (id: string | undefined) => {
      if (id) {
        await router.push(`/action/${id}`);
      }
    },
    onError() {
      console.log("error");
    },
  });

  const handleSubmitForm = (values: ActionFormDTO) => {
    saveAction(fromActionFormDTO(values));
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleSubmitForm}
        initialValues={action ? toActionFormDTO(action) : undefined}
      >
        <Form.Item label="Nazwa" name="name" rules={[rules.required()]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Początek akcji"
          name="startDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Koniec zamawiania"
          name="orderDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Data odbioru"
          name="collectDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Data płacenia"
          name="payDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Opis" name="description" rules={[rules.required()]}>
          <Input.TextArea rows={10} />
        </Form.Item>
        <Form.Item label="Obraz">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Wybierz obraz</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Zapisz
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
