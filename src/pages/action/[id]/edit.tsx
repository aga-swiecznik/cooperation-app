import { useRouter } from "next/router";
import { ActionEditor } from "~/ui/pages/action/ActionEditor";
import { api } from "~/utils/api";

export default function ActionDetails() {
  const router = useRouter();

  const id = router.query.id?.toString() ?? "";
  const { data: action } = api.action.get.useQuery({
    id,
  });

  // TODO if no action redirect
  if (!action) return null;

  return <ActionEditor action={action} />;
}
