"use client";

import * as React from "react";
import Link from "next/link";
import { MENU } from "@/lib/data";
import HumburgerMenuIconButton from "@workspace/ui/components/hamburger-menu-icon-button";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import { Card, CardContent } from "@workspace/ui/components/card";
import { useState } from "react";

export function NavBarMenu() {
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {isMobile ? (
        <HumburgerMenuIconButton OnClick={() => setShowMenu(!showMenu)} />
      ) : (
        <NavigationMenuItems />
      )}

      {showMenu && (
        <Card className="p-4 w-1/3 h-[100vh] absolute top-16 left-0 z-50">
          <CardContent>
            <NavigationMenuItems />
          </CardContent>
        </Card>
      )}
    </>
  );
}

export function NavigationMenuItems() {
  return (
    <nav>
      <ul className="gap-6 py-2 grid lg:flex lg:flex-row">
        {MENU.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium block lg:inline-flex"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
