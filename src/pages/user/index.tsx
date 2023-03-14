import { UsersList } from "~/ui/pages/user/UsersList";
import { api } from "~/utils/api";

export default function ActionsList() {
  const { data: users } = api.user.getAll.useQuery();

  if (!users) return null;
  return <UsersList users={users} />;
}
