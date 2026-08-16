/* lib/sanity/image.ts */
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "sanity:client";

type ImageUrlBuilder = ReturnType<typeof createImageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

const builder = createImageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export const imageUrlFor = (source: ImageSource, webp: boolean) => {
    if (webp) {
        return urlFor(source).format("webp").url();
    } else {
        return urlFor(source).url();
    }
};
