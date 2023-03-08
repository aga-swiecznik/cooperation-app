import { ActionList } from "~/ui/pages/action/ActionList";
import { api } from "~/utils/api";

export default function ActionsList() {
  const { data: actions } = api.action.getAll.useQuery();

  if (!actions) return null;
  return <ActionList actions={actions} />;
}
