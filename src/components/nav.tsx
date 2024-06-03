import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { HamburgerMenuIcon, ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function Nav() {
    const mobileLinks = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Our Partners",
            href: "/partners"
        }
    ]

    const events = [
        {
            title: "June Conference",
            href: "/events/june",
            desc: "Our flagship conference, featuring workshops, talks, and more."
        },
        {
            title: "March Conference",
            href: "/events/march",
            desc: "The March Conference aims to spark an interest in Python and Data Science."
        }
    ]
    return (
        <>
            <div className="justify-center h-16 sm:flex hidden sticky top-0 z-20 gap-x-4">
                <div className="h-16 justify-end flex sticky top-0 z-20">
                    <div className="px-6 rounded-full mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring ring-1 ring-slate-800 flex items-center gap-x-2">
                        <a href='/'>
                            <img src='/favicon.svg' alt="BuildingBloCS logo" className="w-5 h-5 mr-1" />
                        </a>
                        <a href='/partners' className="text-sm font-medium rounded-md px-2 transition hover:bg-white hover:text-black">
                            Our Partners
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-sm font-medium rounded-md px-2 flex items-center gap-x-1 outline-0 group transition hover:bg-white hover:text-black data-[state=open]:bg-slate-700">Events<ChevronDownIcon className="transition group-data-[state=open]:rotate-180 group-data-[state=open]:mt-0.5" /></DropdownMenuTrigger>
                            <DropdownMenuContent className="max-w-xs p-2 gap-y-2 flex flex-col mt-5">
                                {events.map((event) => (
                                    <DropdownMenuItem key={event.title}>
                                        <a href={event.href} className="font-semibold">
                                            {event.title}
                                            <p className="font-normal">{event.desc}</p>
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <a className="h-16 justify-end flex sticky top-0 z-20" href="/events/june">
                    <div className="pl-6 pr-2.5 rounded-full mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring ring-1 ring-slate-800 flex items-center gap-x-4">
                        <p>The June Conference is here.</p>
                        <div className="bg-orange-500 hover:bg-orange-600 rounded-full py-1 px-3 transition flex gap-x-2 items-center font-semibold"><p className="hidden md:block">Sign Up Now</p><ArrowRightIcon className="w-5 h-5" /></div>
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
                                    <h2 className="text-xl font-semibold text-center">The June Conference is here</h2>
                                    <p className="flex items-center justify-center gap-x-1 text-sm bg-white rounded-md mt-1 text-black p-1 mt-2">Sign Up Now<ArrowRightIcon /></p>
                                </a>
                                {mobileLinks.map((link) => (
                                    <a href={link.href} key={link.title}>{link.title}</a>
                                ))}
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
