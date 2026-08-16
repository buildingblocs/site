import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

export default function NavDropdown({ name, link, children }: { name: string, link: string, children: ReactNode }) {
    return <>
        <Popover>
            <PopoverTrigger
                className="sm:flex translate-y-0 translate-x-0 justify-start text-sm font-medium rounded-md px-2 hidden items-center gap-x-1 outline-0 group transition hover:bg-white hover:text-black data-[state=open]:hover:text-white data-[state=open]:bg-slate-700">
                <a href={link}>
                    {name}
                </a>
                <ChevronDownIcon
                    className="transition group-data-[state=open]:rotate-180 group-data-[state=open]:mt-0.5" />
            </PopoverTrigger>
            <PopoverContent
                className="max-w-xs p-2 flex flex-col mt-5 bg-slate-900/50 backdrop-filter backdrop-blur-[2px] ring-white/15 text-white rounded-2xl gap-0">
                {children}
            </PopoverContent>
        </Popover>
        <Accordion className="sm:hidden flex" type="multiple">
            <AccordionItem value={name}
                           className="data-[state=open]:bg-white/5 transition-all data-[state=open]:py-2 gap-y-2 flex flex-col">
                <AccordionTrigger
                    className="data-[state=open]:mx-2 data-[state=open]:px-1 data-[state=closed]:px-2 py-0 flex items-center data-[state=open]:bg-white/15 rounded-lg">
                    <a href={link} className="text-3xl">
                        {name}
                    </a>
                </AccordionTrigger>
                <AccordionContent className="no-underline! -mx-1 pb-0!">
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>;
}