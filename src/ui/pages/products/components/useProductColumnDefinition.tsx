import { Product } from "@/models/Product";
import { SetProductsProp } from "@/pages/[locale]/action/[id]/products/edit";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Space, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import { Money } from "../Money";

const { Text } = Typography;

export const useProductColumnDefinition = ({
  setProducts,
}: SetProductsProp) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleDelete = (id: string) => {
    const saveData = async () => {
      const res = await http(
        "DELETE",
        `/api/actions/${router.query.id}/products/${id}`
      );

      setProducts(res.products);
    };
    saveData();
  };

  const columns: ColumnsType<Product> = [
    {
      title: "Nazwa",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Jednostka",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Cena",
      dataIndex: "price",
      key: "price",
      render: (value) => <Money value={value} />,
    },
    {
      title: "Opsis",
      dataIndex: "description",
      key: "description",
      render: (value) => {
        return (
          <Popover trigger="click" content={value}>
            <Text style={{ width: 200 }} ellipsis={true}>
              {value}
            </Text>
          </Popover>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (txt, row) => (
        <Space size="middle">
          <Button onClick={() => handleDelete(row.id)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return columns;
};
