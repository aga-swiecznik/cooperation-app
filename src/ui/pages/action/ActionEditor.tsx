import { type Action } from "@prisma/client";
import { Typography } from "antd";
import { ActionEditForm } from "~/ui/pages/action/components/Form";

const { Title } = Typography;

interface ActionEditorProps {
  action?: Action;
}

export const ActionEditor = ({ action }: ActionEditorProps) => {
  return (
    <>
      <Title>{action ? "Edytuj akcję" : "Nowa akcja"}</Title>
      <ActionEditForm action={action} />
    </>
  );
};
