import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

type breadcrumbs = {
    link: string;
    name: string;
}[]

export default function SiteBreadcrumb({ breadcrumb }: { breadcrumb: breadcrumbs }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumb?.map((singleBreadcrumb, index) => (
                    <Fragment key={singleBreadcrumb.link}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={singleBreadcrumb.link}>
                                {singleBreadcrumb.name}
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {index < breadcrumb.length - 1 && (
                            <BreadcrumbSeparator />
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
