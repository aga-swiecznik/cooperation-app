import { Product } from "@/models/Product";
import { SetProductsProp } from "@/pages/[locale]/action/[id]/products/edit";
import { Table } from "antd";
import { useProductColumnDefinition } from "./useProductColumnDefinition";

interface ProductsTableProps extends SetProductsProp {
  products: Product[];
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
