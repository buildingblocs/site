import * as React from 'react'
import { cn } from '../lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { HamburgerMenuIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const events: { title: string; href: string; description: string }[] = [
    {
        title: "June Conference",
        href: "/events/june",
        description: "Our flagship conference, featuring workshops, talks, and more."
    },
    {
        title: "March Conference",
        href: "/events/march",
        description: "The March Conference aims to spark an interest in Python and Data Science."
    }
]

export default function Nav() {
    return (
        <>
            <div className="justify-center h-16 sm:flex hidden sticky top-0 z-20">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href='/'>
                                <img src='/favicon.svg' alt="BuildingBloCS logo" className="w-5 h-5" />
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/partners" className={navigationMenuTriggerStyle()}>
                                Our Partners
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[20rem] gap-3 p-2">
                                    {events.map((event) => (
                                        <ListItem
                                            key={event.title}
                                            title={event.title}
                                            href={event.href}
                                        >
                                            {event.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <a className="ml-5 h-16 justify-end flex sticky top-0 z-20" href="/events/june">
                    <div className="pl-6 pr-2.5 rounded-full mt-4 mr-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring ring-1 ring-slate-800 flex items-center gap-x-4">
                        <p>The June Conference is here.</p>
                        <div className="bg-orange-500 hover:bg-orange-600 rounded-full py-1 px-3 pt-0.5 transition flex gap-x-2 items-center font-semibold"><p className="hidden md:block">Sign Up Now</p><ArrowRightIcon className="w-5 h-5 mt-0.5" /></div>
                    </div>
                </a>
            </div>
            <div className="sm:hidden h-16 justify-end flex sticky top-0 z-20">
                <div className="px-6 py-2 rounded-full mt-4 mr-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring ring-1 ring-slate-800 flex items-center gap-x-4">
                    <a href="/">
                        <img src='/favicon.svg' alt="BuildingBloCS logo" className="w-5 h-5" />
                    </a>
                    <Separator orientation="vertical" className="bg-slate-800" />
                    <Sheet>
                        <SheetTrigger><HamburgerMenuIcon /></SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col justify-center h-full text-xl gap-y-2 font-medium relative">
                                <a className="absolute top-5 bg-orange-500 p-3 rounded-xl" href="/events/june">
                                    <h2 className="text-xl font-semibold">The June Conference is here</h2>
                                    <p className="flex items-center justify-center gap-x-1 text-sm bg-white rounded-md mt-1 text-black p-1">Sign Up Now<ArrowRightIcon /></p>
                                </a>
                                <a href="/">Home</a>
                                <a href="/partners">Our Partners</a>
                                {events.map((event) => (
                                    <a href={event.href} key={event.title}>{event.title}</a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
