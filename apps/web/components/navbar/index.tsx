import React from "react";
import { NavBarMenu } from "./navbar-menu";
import Logo from "../logo";

export default function NavrBar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background/50 backdrop-blur-md">
      <div className="flex items-center justify-evenly p-4">
        <Logo />

        <NavBarMenu />
      </div>
    </nav>
  );
}
