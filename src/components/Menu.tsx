"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const routes = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Shop",
    link: "/",
  },

  {
    title: "Blog",
    link: "/",
  },

  {
    title: "Event",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
];

export function Menu() {
  return (
    <NavigationMenu viewport={false} className="hidden lg:block">
      <NavigationMenuList>
        {routes.map((r) => (
          <NavigationMenuItem key={r.title}>
            <NavigationMenuTrigger className="bg-transparent">
              {r.title}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
