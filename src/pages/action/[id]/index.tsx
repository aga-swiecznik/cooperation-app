import { useRouter } from "next/router";
import { ActionDetails } from "~/ui/pages/action/ActionDetails";
import { api } from "~/utils/api";

export default function ActionPage() {
  const router = useRouter();

  const id = router.query.id?.toString() ?? "";
  const { data: action } = api.action.get.useQuery({
    id,
  });

  // TODO if no action redirect
  if (!action) return null;

  return <ActionDetails action={action} />;
}
