import { DeleteOutlined } from "@ant-design/icons";
import { type Product } from "@prisma/client";
import { Button, Popover, Space, Typography } from "antd";
import { type ColumnsType } from "antd/es/table";
import { Money } from "~/ui/components/Money";
import { api } from "~/utils/api";
import { type SetProductsProp } from "./ProductsTable";

const { Text } = Typography;

export const useProductColumnDefinition = ({
  setProducts,
}: SetProductsProp) => {
  const { isLoading, mutate: deleteProduct } =
    api.action.deleteProduct.useMutation({
      onSuccess: (products: Product[]) => {
        setProducts(products);
      },
      onError() {
        console.log("error");
      },
    });
  const handleDelete = (id: string) => {
    deleteProduct({ id });
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
      render: (value: number) => <Money value={value} />,
    },
    {
      title: "Opis",
      dataIndex: "description",
      key: "description",
      render: (value: string) => {
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
          <Button onClick={() => handleDelete(row.id)} loading={isLoading}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return columns;
};
