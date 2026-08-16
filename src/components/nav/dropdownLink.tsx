import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function NavDropdownLink({ link, parent, name, desc }: {
    link: string,
    parent: string,
    name: string,
    desc: string
}) {
    return <a
        href={link[0] == "/" ? link : `/${parent}/${link}`}
        className="sm:font-semibold justify-between items-center hover:bg-slate-800/75 sm:p-2 py-1 rounded-xl sm:text-sm text-2xl transition flex no-underline! px-0 sm:px-2 w-full"
    >
        <div className="flex flex-col">
            {name}
            <span className="font-normal text-muted-foreground text-sm">{desc}</span>
        </div>
        <ArrowRightIcon className="min-w-5 h-5 sm:hidden block" />
    </a>;
}