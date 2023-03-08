import { Typography } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { type ActionWithRelations } from "~/dto/ActionDTO";
import { ProductForm } from "./components/ProductForm";
import { ProductsTable } from "./components/ProductsTable";

const { Title } = Typography;

export const ProductEditor = ({ action }: { action: ActionWithRelations }) => {
  const [products, setProducts] = useState(action?.products);
  const session = useSession();
  const isOwner = session.data?.user?.email === action.user.email;

  return (
    <>
      <Title>Produkty - {action.name}</Title>
      <ProductsTable products={products} setProducts={setProducts} />
      {isOwner && <ProductForm setProducts={setProducts} />}
    </>
  );
};
