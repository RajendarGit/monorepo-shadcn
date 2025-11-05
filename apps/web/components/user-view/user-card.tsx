import { UserProps } from "@/lib/type";
import { Card, CardContent } from "@workspace/ui/components/card";

export default function UserCard({ user }: { user: UserProps }) {
  return (
    <Card>
      <CardContent>
        <h3>
          {user.username.charAt(0).toUpperCase() +
            user.username.slice(1).toLowerCase()}
        </h3>
        <p>{user.email}</p>
      </CardContent>
    </Card>
  );
}
