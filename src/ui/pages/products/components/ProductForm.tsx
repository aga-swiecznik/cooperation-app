import { type Product } from "@prisma/client";
import { Button, Col, Form, Input, InputNumber } from "antd";
import { useRouter } from "next/router";
import { type ProductFormDTO } from "~/dto/ProductDTO";
import { toInteger } from "~/ui/components/Money";
import { useValidationRules } from "~/ui/hooks/useValidationRules";
import { api } from "~/utils/api";
import { GuttedRow } from "../../../components/styles";

export const ProductForm = ({
  setProducts,
}: {
  setProducts: (products: Product[]) => void;
}) => {
  const [form] = Form.useForm<Product>();
  const rules = useValidationRules();
  const router = useRouter();

  const { isLoading, mutate: saveProduct } = api.action.saveProduct.useMutation(
    {
      onSuccess: (products: Product[]) => {
        setProducts(products);
        form.resetFields();
      },
      onError() {
        console.log("error");
      },
    }
  );
  const id = router.query.id?.toString() ?? "";
  const handleSubmitForm = (values: ProductFormDTO) => {
    saveProduct({ ...values, price: toInteger(values.price), actionId: id });
  };
  return (
    <Form form={form} onFinish={handleSubmitForm} layout="vertical">
      <GuttedRow>
        <Col>
          <Form.Item
            label="Nazwa productu"
            name="name"
            rules={[rules.required()]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Cena" name="price" rules={[rules.required()]}>
            <InputNumber min={0} />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Jednostka" name="unit" rules={[rules.required()]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Opis" name="description">
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Dodaj produkt
            </Button>
          </Form.Item>
        </Col>
      </GuttedRow>
    </Form>
  );
};
