import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { ProductEditor } from "~/ui/pages/products/ProductEditor";

export default function EditProducts() {
  const router = useRouter();

  const id = router.query.id?.toString() ?? "";
  const { data: action } = api.action.get.useQuery({
    id,
  });

  // TODO if no action redirect
  if (!action) return null;

  return <ProductEditor action={action} />;
}
