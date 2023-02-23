import { Action } from "@/models/Action";
import { useValidationRules } from "@/ui/hooks/useValidationRules";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { ActionForm, ActionFormInitValues } from "@/models/ActionDTO";

export const ActionEditForm = ({ action }: { action?: Action }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<ActionForm>();
  const rules = useValidationRules();
  const router = useRouter();

  const handleSubmitForm = (values: ActionForm) => {
    const saveData = async () => {
      const res = await fetch("/api/actions/save", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json" },
      });
      const json = await res.json();
      if (json && json.id) {
        router.push(`/pl/action/${json.id}`);
      }
    };
    saveData();
  };

  let initValues: ActionFormInitValues | undefined;
  if (action) {
    const { startDate, orderDate, collectDate, payDate, ...rest } = action;

    initValues = {
      ...rest,
      startDate: dayjs(startDate),
      orderDate: dayjs(orderDate),
      collectDate: dayjs(collectDate),
      payDate: dayjs(payDate),
    };
  }
  return (
    <>
      <Form form={form} onFinish={handleSubmitForm} initialValues={initValues}>
        <Form.Item
          label={t("action:name")}
          name="name"
          rules={[rules.required()]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("action:startDate")}
          name="startDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={t("action:orderDate")}
          name="orderDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={t("action:collectDate")}
          name="collectDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={t("action:payDate")}
          name="payDate"
          rules={[rules.required()]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={t("action:description")}
          name="description"
          rules={[rules.required()]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <Form.Item label={t("action:image")}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>{t("action:addImage")}</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("action:submit")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
