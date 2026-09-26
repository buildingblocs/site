import { sanityClient } from "sanity:client";

export type SanityPage = {
    _id: string;
    title: string;
    desc?: string;
    showList?: boolean;
    parent?: {
        _ref?: string;
    };
    slug?: {
        current?: string;
    };
    useImageHero?: boolean;
    imageHero?: Array<any>;
    content?: any;
};

export interface PageBreadcrumb {
    name: string;
    link: string;
}

export interface ChildPageSummary {
    title: string;
    desc?: string;
    slug: { current: string };
}

export interface FooterLink {
    title: string;
    url: string;
}

export interface FooterSection {
    title: string;
    url: string;
    children: FooterLink[];
}

export const cleanId = (id: string): string => id.replace(/^drafts\./, "");

export async function fetchRawPages(): Promise<SanityPage[]> {
    const rawPages = await sanityClient.fetch<SanityPage[]>(`*[_type == "page"]`);
    return rawPages || [];
}

export function buildPageMap(pages: SanityPage[]): Map<string, SanityPage> {
    const pageMap = new Map<string, SanityPage>();
    pages.forEach((page) => {
        if (page._id) {
            pageMap.set(cleanId(page._id), page);
            pageMap.set(page._id, page);
        }
    });
    return pageMap;
}

export function getPagePathSegments(
    page: SanityPage,
    pageMap: Map<string, SanityPage>
): string[] {
    const segments: string[] = [];
    let currentId: string | undefined = page._id;
    const visited = new Set<string>();

    while (typeof currentId === "string" && currentId.length > 0) {
        const idToClean: string = currentId;
        const cleanCurrentId: string = cleanId(idToClean);
        if (visited.has(cleanCurrentId)) {
            console.warn(
                `Circular reference detected in page parent hierarchy for page ID: ${currentId}`
            );
            break;
        }
        visited.add(cleanCurrentId);

        const currentPage: SanityPage | undefined =
            pageMap.get(cleanCurrentId) || pageMap.get(idToClean);
        if (!currentPage) break;

        const rawSlug = currentPage.slug?.current;
        const cleanSlug = rawSlug ? rawSlug.replace(/^\/|\/$/g, "") : "";
        if (cleanSlug) {
            segments.unshift(cleanSlug);
        }

        currentId = currentPage.parent?._ref;
    }

    return segments;
}

export function getPageHierarchyChain(
    page: SanityPage,
    pageMap: Map<string, SanityPage>
): SanityPage[] {
    const chain: SanityPage[] = [];
    let currId: string | undefined = page._id;
    const visited = new Set<string>();

    while (typeof currId === "string" && currId.length > 0) {
        const idToClean: string = currId;
        const cleanCurrId: string = cleanId(idToClean);
        if (visited.has(cleanCurrId)) break;
        visited.add(cleanCurrId);

        const currPage: SanityPage | undefined =
            pageMap.get(cleanCurrId) || pageMap.get(idToClean);
        if (!currPage) break;

        chain.unshift(currPage);
        currId = currPage.parent?._ref;
    }

    return chain;
}

export function computePagePathsAndHierarchy(rawPages: SanityPage[]) {
    const pageMap = buildPageMap(rawPages);
    const pagePaths = new Map<string, string>();
    const pageHierarchy = new Map<string, SanityPage[]>();

    rawPages.forEach((page) => {
        const segments = getPagePathSegments(page, pageMap);
        const fullPath = segments.join("/");
        pagePaths.set(page._id, fullPath);

        const chain = getPageHierarchyChain(page, pageMap);
        pageHierarchy.set(page._id, chain);
    });

    return { pageMap, pagePaths, pageHierarchy };
}

export function getBreadcrumbsForPage(
    page: SanityPage,
    pageHierarchy: Map<string, SanityPage[]>,
    pagePaths: Map<string, string>
): PageBreadcrumb[] {
    const chain = pageHierarchy.get(page._id) || [page];
    return chain.map((chainItem, index) => {
        const isLast = index === chain.length - 1;
        const itemPath = pagePaths.get(chainItem._id) || "";
        return {
            name: chainItem.title,
            link: isLast ? "" : itemPath ? `/${itemPath}` : "/",
        };
    });
}

export function getChildPagesForPage(
    page: SanityPage,
    rawPages: SanityPage[],
    pagePaths: Map<string, string>
): ChildPageSummary[] {
    if (!page.showList) return [];

    const cleanPageId = cleanId(page._id);
    return rawPages
        .filter((child) => {
            const childParentRef = child.parent?._ref;
            if (!childParentRef) return false;
            const cleanChildParentRef = cleanId(childParentRef);
            return (
                cleanChildParentRef === cleanPageId || childParentRef === page._id
            );
        })
        .map((child) => {
            const childPath = pagePaths.get(child._id) || "";
            return {
                title: child.title,
                desc: child.desc,
                slug: {
                    current: childPath ? `/${childPath}` : "/",
                },
            };
        });
}

export function buildFooterPageLinks(
    rawPages: SanityPage[],
    events: { name: string; slug: { current: string } }[]
) {
    const pageMap = buildPageMap(rawPages);
    const getPagePath = (page: SanityPage): string => {
        const segments = getPagePathSegments(page, pageMap);
        return segments.length > 0 ? `/${segments.join("/")}` : "/";
    };

    const parentIdSet = new Set<string>();
    rawPages.forEach((page) => {
        if (page.parent?._ref) {
            parentIdSet.add(cleanId(page.parent._ref));
        }
    });

    const standaloneLinks: FooterLink[] = [];
    const sections: FooterSection[] = [];
    const getFooterTitle = (page: SanityPage, url: string): string =>
        url === "/" ? "Home" : page.title;

    const topLevelPages = rawPages.filter((page) => !page.parent?._ref);

    topLevelPages.forEach((page) => {
        const cId = cleanId(page._id);
        const pageUrl = getPagePath(page);
        const pageTitle = getFooterTitle(page, pageUrl);

        if (parentIdSet.has(cId)) {
            const directChildren = rawPages.filter((child) => {
                return child.parent?._ref && cleanId(child.parent._ref) === cId;
            });

            const childLinks: FooterLink[] = directChildren.map((child) => ({
                title: child.title,
                url: getPagePath(child),
            }));

            sections.push({
                title: pageTitle,
                url: pageUrl,
                children: childLinks,
            });
        } else {
            standaloneLinks.push({
                title: pageTitle,
                url: pageUrl,
            });
        }
    });

    sections.push({
        title: "Events",
        url: "/events",
        children: (events || []).map((event) => ({
            title: event.name,
            url: `/events/${event.slug.current}`,
        })),
    });

    const homeIndex = standaloneLinks.findIndex(
        (link) => link.title.toLowerCase() === "home" || link.url === "/"
    );

    let finalStandaloneLinks: FooterLink[] = [];
    if (homeIndex !== -1) {
        const [homeLink] = standaloneLinks.splice(homeIndex, 1);
        finalStandaloneLinks = [homeLink, ...standaloneLinks];
    } else {
        finalStandaloneLinks = [{ title: "Home", url: "/" }, ...standaloneLinks];
    }

    return { standaloneLinks: finalStandaloneLinks, sections };
}
