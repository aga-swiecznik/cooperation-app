import { ActionElement } from "~/ui/components/ActionElement";
import { type Action } from "@prisma/client";

export const EndingActions = ({ actions }: { actions: Action[] }) => {
  if (!actions) return null;
  return (
    <>
      {actions.map((action) => (
        <ActionElement key={action.id} action={action} level={3} />
      ))}
    </>
  );
};
