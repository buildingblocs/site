/* lib/sanity/image.ts */
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "sanity:client";

type ImageUrlBuilder = ReturnType<typeof createImageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

const builder = createImageUrlBuilder(sanityClient);

export interface ImageUrlOptions {
    width?: number;
    height?: number;
    quality?: number;
    fit?: "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min";
    format?: string;
    autoFormat?: boolean;
}

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export const imageUrlFor = (
    source: ImageSource,
    webp: boolean = true,
    options?: ImageUrlOptions
) => {
    let img = urlFor(source);

    if (webp) {
        img = img.format("webp");
    } else if (options?.format) {
        img = img.format(options.format as any);
    }

    if (options?.autoFormat !== false) {
        img = img.auto("format");
    }

    if (options?.width) {
        img = img.width(options.width);
    } else {
        // Cap unconstrained image width to 2000px so raw original dimensions aren't served
        img = img.width(2000);
    }

    if (options?.height) {
        img = img.height(options.height);
    }

    if (options?.fit) {
        img = img.fit(options.fit);
    }

    const quality = options?.quality ?? 80;
    img = img.quality(quality);

    return img.url();
};

export const DEFAULT_RESPONSIVE_WIDTHS = [320, 640, 960, 1200, 1600, 2000];

export const imageSrcSetFor = (
    source: ImageSource,
    webp: boolean = true,
    widths: number[] = DEFAULT_RESPONSIVE_WIDTHS,
    options?: ImageUrlOptions
) => {
    return widths
        .map((w) => {
            const url = imageUrlFor(source, webp, { ...options, width: w });
            return `${url} ${w}w`;
        })
        .join(", ");
};
