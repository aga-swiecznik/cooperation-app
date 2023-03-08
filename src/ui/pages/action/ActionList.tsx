import { type Action } from "@prisma/client";
import { Typography } from "antd";
import { ActionElement } from "~/ui/components/ActionElement";

const { Title } = Typography;

export const ActionList = ({ actions }: { actions: Action[] }) => {
  return (
    <>
      <Title>Akcje</Title>
      {actions.map((action) => (
        <ActionElement key={action.id} action={action} level={3} />
      ))}
    </>
  );
};
