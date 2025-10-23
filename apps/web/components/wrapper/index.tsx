import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <main className="mt-20">{children}</main>;
}
