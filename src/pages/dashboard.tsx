import { Skeleton } from "antd";
import { api } from "~/utils/api";
import { Dashboard } from "~/ui/pages/dashboard";

export default function Home() {
  const { data: actions } = api.dashboard.actions.useQuery();

  if (!actions) return <Skeleton active />;

  return <Dashboard actions={actions} />;
}
