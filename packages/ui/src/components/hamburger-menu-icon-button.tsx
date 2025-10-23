import { Menu } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function HumburgerMenuIconButton({
  OnClick,
}: {
  OnClick: () => void;
}) {
  return (
    <Button onClick={OnClick} variant="ghost" className="p-2">
      <Menu size={24} />
    </Button>
  );
}
