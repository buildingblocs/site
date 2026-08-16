import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import {
    HamburgerMenuIcon,
    ArrowRightIcon,
    InfoCircledIcon,
    ExclamationTriangleIcon,
    QuestionMarkCircledIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils.ts";
import NavDropdown from "@/components/nav/dropdown.tsx";
import NavDropdownLink from "@/components/nav/dropdownLink.tsx";
import type { About, Event, SiteInfo } from "@/sanity.types";

export type NavQuery = {
    event: Array<Pick<Event, "name" | "excerpts" | "status" | "slug">>;
    about: Array<Pick<About, "name" | "slug">>;
    siteInfo: Pick<SiteInfo, "nav"> | null;
};

export default function Nav({ data }: { data: NavQuery }) {
    type EventStatus = "open" | "closed" | "over" | undefined;

    type EventExcerpts = {
        excerpt?: string;
        openExcerpt?: string;
        closedExcerpt?: string;
        overExcerpt?: string;
    } | undefined;

    function getExcerpt(status: EventStatus, excerpts: EventExcerpts): string {
        if (!excerpts) {
            return "";
        }

        switch (status) {
            case "open":
                return excerpts.openExcerpt || "";
            case "closed":
                return excerpts.closedExcerpt || "";
            case "over":
                return excerpts.overExcerpt || "";
            default:
                return "";
        }
    }

    type bannerStatus = "info" | "alert" | "warn";

    function getBannerIcon(type: bannerStatus) {
        switch (type) {
            case "info":
                return <QuestionMarkCircledIcon />;
            case "alert":
                return <InfoCircledIcon />;
            case "warn":
                return <ExclamationTriangleIcon />;
        }
    }

    const bannerBackgrounds: Record<bannerStatus, string> = {
        "info": "bg-blue-500",
        "alert": "bg-orange-500",
        "warn": "bg-red-500"
    };

    function Links() {
        return (<>
            <a
                href="/partners"
                className="flex justify-between items-center font-medium rounded-md px-2 transition hover:bg-white hover:text-black"
            >
                Our Partners
                <ArrowRightIcon className="min-w-5 h-5 sm:hidden block" />
            </a>

            <NavDropdown name="About Us" link="/about-us">
                {data.about.map((page) => (
                    <NavDropdownLink link={page.slug?.current || ""} parent="about-us" name={page.name || ""}
                                     desc="" />
                ))}
            </NavDropdown>

            <NavDropdown name="Events" link="/events">
                {data?.event && data.event.length > 0 ? (
                    data.event.map((event) => (
                        <NavDropdownLink link={event.slug?.current || ""} parent="events" name={event.name || ""}
                                         desc={getExcerpt(event.status, event.excerpts)} />
                    ))
                ) : (
                    <a
                        href="https://buildingblocs.notion.site/343104f6313d80c8a3f2da6bded7b2cf"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:bg-slate-800/75 p-2 rounded-md transition flex flex-col no-underline!"
                    >
                        Coming soon
                        <span className="font-normal text-muted-foreground">
                            Join the newsletter to get notified
                        </span>
                    </a>
                )}
                <Separator className="bg-white/15 my-1" />
                <a
                    href="/about-us/archive"
                    className="sm:font-semibold hover:bg-slate-800/75 sm:p-2 text-md sm:text-sm rounded-lg transition no-underline! flex justify-between"
                >
                    Looking for older events?
                    <ArrowRightIcon className="min-w-5 h-5 sm:hidden block" />
                </a>
            </NavDropdown>
        </>);
    }

    return (
        <>
            {data?.siteInfo?.nav?.banner?.showBanner &&
                <div className={cn(
                    "sticky top-0 z-20 flex items-center justify-center py-2 font-medium gap-2",
                    bannerBackgrounds[data.siteInfo.nav.banner.type as bannerStatus]
                )}>
                    {getBannerIcon(data.siteInfo.nav.banner.type as bannerStatus)}
                    {data.siteInfo.nav.banner.message}
                </div>
            }
            <div
                className={`h-15 sm:left-7 flex-row-reverse sm:flex-row right-3 flex fixed z-20 gap-x-4 ${data?.siteInfo?.nav?.banner?.showBanner ? "top-10" : "top-0"}`}>
                {/* first nav pill */}
                <div
                    className="px-5 sm:px-4 rounded-full mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-[2px] button gap-x-4 sm:gap-x-2 flex items-center">
                    {/* logo */}
                    <a href="/">
                        <img
                            src="/colour_sidetext_dark.svg"
                            alt="BuildingBloCS logo"
                            className="w-full h-7 mr-1 sm:flex hidden"
                        />
                        <img
                            src="/favicon.svg"
                            alt="BuildingBloCS logo"
                            className="w-full h-5 mr-1 sm:hidden flex"
                        />
                    </a>

                    <Separator orientation="vertical" className="bg-white/15" />

                    {/* start of desktop links */}
                    <div className="gap-x-2 sm:flex hidden text-sm">
                        {Links()}
                    </div>

                    {/* start of mobile links */}
                    <div className="sm:hidden flex">
                        <Sheet>
                            <SheetTrigger aria-label="Navigation Menu">
                                <HamburgerMenuIcon className="w-6 h-6" />
                            </SheetTrigger>
                            <SheetContent>
                                <div
                                    className="px-5 flex flex-col justify-center h-full text-3xl gap-y-2 font-medium relative bg-slate-800">
                                    {Links()}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* second nav pill */}
                {data?.siteInfo?.nav?.featured?.showFeatured &&
                    <a
                        className="h-15 flex sticky top-0 z-20"
                        href={data.siteInfo.nav.featured.externalLink}
                    >
                        <div
                            className="px-4 pr-2 rounded-full mt-4 bg-slate-900/50 hover:bg-slate-800/50 transition backdrop-filter backdrop-blur-[2px] button flex items-center gap-x-3">
                            <p>{data.siteInfo.nav.featured.message}</p>
                            <div
                                className="bg-orange-500 rounded-full p-1 px-1.5 transition flex gap-x-2 items-center font-semibold">
                                <ArrowRightIcon className="w-4 h-5" />
                            </div>
                        </div>
                    </a>
                }
            </div>
        </>
    );
}
