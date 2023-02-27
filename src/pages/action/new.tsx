import { Typography } from "antd";
import { ActionEditForm } from "~/ui/components/action/Form";

const { Title } = Typography;

export default function ActionNew() {
  return (
    <>
      <Title>Nowa akcja</Title>
      <ActionEditForm />
    </>
  );
}
