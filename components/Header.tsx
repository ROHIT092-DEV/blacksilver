import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
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
        <div className="md:inline hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
