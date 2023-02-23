import { http } from "@/lib/http";
import { Product } from "@/models/Product";
import { useValidationRules } from "@/ui/hooks/useValidationRules";
import { Button, Col, Form, Input } from "antd";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { toInteger } from "../Money";
import { GuttedRow } from "../styles";

export const ProductForm = ({
  setProducts,
}: {
  setProducts: (products: Product[]) => void;
}) => {
  const [form] = Form.useForm<Product>();
  const { t } = useTranslation();
  const rules = useValidationRules();
  const router = useRouter();

  const handleSubmitForm = (values: Product) => {
    values.price = toInteger(values.price);
    const saveData = async () => {
      const res = await http(
        "POST",
        `/api/actions/${router.query.id}/products/save`,
        values
      );

      setProducts(res.products);
      form.resetFields();
    };
    saveData();
  };
  return (
    <Form form={form} onFinish={handleSubmitForm} layout="vertical">
      <GuttedRow>
        <Col>
          <Form.Item
            label={t("action:product.name")}
            name="name"
            rules={[rules.required()]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label={t("action:product.price")}
            name="price"
            rules={[rules.required()]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label={t("action:product.unit")}
            name="unit"
            rules={[rules.required()]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label={t("action:product.description")} name="description">
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("action:addProduct")}
            </Button>
          </Form.Item>
        </Col>
      </GuttedRow>
    </Form>
  );
};
