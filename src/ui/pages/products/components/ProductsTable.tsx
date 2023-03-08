import { type Product } from "@prisma/client";
import { Table } from "antd";
import { useProductColumnDefinition } from "./useProductColumnDefinition";

interface ProductsTableProps extends SetProductsProp {
  products: Product[];
}

export interface SetProductsProp {
  setProducts: (products: Product[]) => void;
}

export const ProductsTable = ({
  products,
  setProducts,
}: ProductsTableProps) => {
  const columns = useProductColumnDefinition({ setProducts });
  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="id"
      pagination={false}
    />
  );
};
