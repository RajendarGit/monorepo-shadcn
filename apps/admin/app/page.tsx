import Test from "@/components/test";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World Admin</h1>
        <Button size="sm" variant={"secondary"}>
          Button
        </Button>
        <Test />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          incidunt!
        </p>
      </div>
    </div>
  );
}
