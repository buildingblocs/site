// docs.astro.build/en/guides/content-collections/#defining-a-collection-schema

import { z, defineCollection } from "astro:content";

export const eventSchema = z.object({
    title: z.string(),
    status: z.string(),
    partners: z.string().optional(),
    directions: z.string().optional(),
    directionsData: z
        .array(
            z.object({
                title: z.string(),
                tracks: z.array(
                    z.record(
                        z.array(
                            z.object({
                                title: z.string(),
                                directions: z.array(
                                    z.object({
                                        method: z.string().optional(),
                                        bold_method: z.string().optional(),
                                        img: z.string(),
                                        hyperlink: z.string().url().optional(),
                                    }),
                                ),
                            }),
                        ),
                    ),
                ),
            }),
        )
        .optional(),
    luma: z.string().optional(),
    signupLink: z.string().optional(),
    details: z.string().array(),
    excerpt: z.string(),
    desc: z.string(),
    faq: z.array(
        z.object({
            q: z.string(),
            a: z.string(),
        }),
    ),
    prospectus: z
        .object({
            src: z.string(),
        })
        .array()
        .optional(),
    timeline: z
        .object({
            title: z.string().optional(),
            events: z
                .object({
                    date: z.string(),
                    event: z
                        .object({
                            time: z.string().optional(),
                            title: z.string(),
                            desc: z.string().optional(),
                            author: z.string().optional(),
                        })
                        .array(),
                })
                .array(),
        })
        .array(),
});

export type EventData = z.infer<typeof eventSchema>;

const eventsData = defineCollection({
    type: "data",
    schema: eventSchema,
});

export const collections = {
    events: eventsData,
};
