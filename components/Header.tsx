import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo */}

        <div className="hidden md:inline">
          <h1 className="text-2xl font-bold">BlackSilver</h1>
        </div>
        <div className="md:hidden">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <div className="">
                <MenuIcon />
              </div>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                {/* ✅ Use DrawerTitle instead of <h2> */}
                <div className="flex justify-between">
                  <DrawerTitle>BlackSilver</DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
                <Button>Continue</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desk top Version */}

        <div className="hidden md:inline">
          <Link
            href="/"
            className="relative px-4 py-2 text-gray-800 font-semibold group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/projects"
            className="relative px-4 py-2 text-gray-800 font-semibold group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* login button */}

        <div>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
