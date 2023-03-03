import { Typography } from "antd";
import { ActionElement } from "~/ui/components/ActionElement";
import { api } from "~/utils/api";

const { Title } = Typography;

export default function ActionsList() {
  const { data: actions } = api.action.getAll.useQuery();

  if (!actions) return null;
  return (
    <>
      <Title>Akcje</Title>
      {actions.map((action) => (
        <ActionElement key={action.id} action={action} level={3} />
      ))}
    </>
  );
}
