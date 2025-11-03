"use client";

import * as React from "react";
import Link from "next/link";
import { MENU } from "@/lib/data";
import HumburgerMenuIconButton from "@workspace/ui/components/hamburger-menu-icon-button";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

export function NavBarMenu() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <HumburgerMenuIconButton OnClick={() => {}} />
      ) : (
        <NavigationMenuItems />
      )}
    </>
  );
}

export function NavigationMenuItems() {
  return (
    <nav>
      <ul className="flex flex-row gap-6 py-2">
        {MENU.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
