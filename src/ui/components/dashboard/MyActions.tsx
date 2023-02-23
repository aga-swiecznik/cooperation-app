import { type Action } from "@prisma/client";
import { ActionElement } from "~/ui/components/ActionElement";

export const MyActions = ({ actions }: { actions: Action[] }) => {
  if (!actions) return null;

  return (
    <>
      {actions.map((action) => (
        <ActionElement key={action.id} action={action} level={3} />
      ))}
    </>
  );
};
