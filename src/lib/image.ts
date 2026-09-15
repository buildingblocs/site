/* lib/sanity/image.ts */
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "sanity:client";

type ImageUrlBuilder = ReturnType<typeof createImageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

const builder = createImageUrlBuilder(sanityClient);

export interface ImageOptions {
    width?: number;
    height?: number;
    fit?: "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min";
    quality?: number;
    format?: "webp" | "jpg" | "pjpg" | "png";
}

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export const imageUrlFor = (
    source: ImageSource,
    webp: boolean = true,
    options?: ImageOptions
) => {
    let imageBuilder = urlFor(source);

    if (webp && (!options || !options.format)) {
        imageBuilder = imageBuilder.format("webp");
    } else if (options?.format) {
        imageBuilder = imageBuilder.format(options.format);
    }

    if (options?.width) {
        imageBuilder = imageBuilder.width(options.width);
    }
    if (options?.height) {
        imageBuilder = imageBuilder.height(options.height);
    }
    if (options?.fit) {
        imageBuilder = imageBuilder.fit(options.fit);
    }
    if (options?.quality) {
        imageBuilder = imageBuilder.quality(options.quality);
    }

    return imageBuilder.url();
};

export const DEFAULT_IMAGE_WIDTHS = [320, 640, 960, 1280, 1600, 1920, 2560];

export const imageSrcSetFor = (
    source: ImageSource,
    widths: number[] = DEFAULT_IMAGE_WIDTHS,
    options?: Omit<ImageOptions, "width">
) => {
    if (!source) return "";
    return widths
        .map((w) => {
            const url = imageUrlFor(source, true, { ...options, width: w });
            return `${url} ${w}w`;
        })
        .join(", ");
};
