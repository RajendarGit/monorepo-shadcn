import { getAllUsers } from "@/lib/get-users";
import UserCard from "./user-card";
import { UserProps } from "@/lib/type";

export default async function UserGrid() {
  const users = await getAllUsers();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user: UserProps) => (
        <UserCard
          key={user.id}
          user={{
            username: user.username,
            email: user.email,
          }}
        />
      ))}
    </div>
  );
}
