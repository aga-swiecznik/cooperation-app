import { Role } from "~/enums/Role";
import { assertNever } from "~/utils/neverEver";

export const RoleLabel = ({ role }: { role: Role }) => {
  switch (role) {
    case Role.admin:
      return <>Admin</>;
    case Role.unauthorized:
      return <>Gość</>;
    case Role.user:
      return <>Użytkownik</>;
    default:
      assertNever(role);
      return null;
  }
};
