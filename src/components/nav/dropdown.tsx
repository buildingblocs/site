import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

export default function NavDropdown({
    name,
    link,
    children,
}: {
    name: string;
    link: string;
    children: ReactNode;
}) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);

    document.addEventListener("astro:before-preparation", close);
    document.addEventListener("astro:after-swap", close);

    return () => {
      document.removeEventListener("astro:before-preparation", close);
      document.removeEventListener("astro:after-swap", close);
    };
  }, []);
    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger onClick={() => setOpen(false)} className="sm:flex translate-y-0 translate-x-0 justify-start text-sm font-medium rounded-md px-2 hidden items-center gap-x-1 outline-0 group transition hover:bg-white hover:text-black data-[state=open]:hover:text-white data-[state=open]:bg-slate-700 cursor-pointer">
                    {name}
                    <ChevronDownIcon className="transition group-data-[state=open]:rotate-180 group-data-[state=open]:mt-0.5" />
                </PopoverTrigger>
                <PopoverContent className="max-w-xs p-2 flex flex-col mt-5 bg-slate-900/50 backdrop-filter backdrop-blur-[2px] ring-white/15 text-white rounded-2xl gap-0">
                    {children}
                </PopoverContent>
            </Popover>
            <Accordion className="sm:hidden flex" type="multiple">
                <AccordionItem value={name} className="transition-all">
                    <AccordionTrigger className="px-2 py-0 flex items-center no-underline! text-3xl">
                      {name}
                    </AccordionTrigger>
                    <AccordionContent className="py-2 text-xl font-normal flex flex-col gap-y-1">{children}</AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
}
