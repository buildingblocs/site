// docs.astro.build/en/guides/content-collections/#defining-a-collection-schema

// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const eventsData = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    luma: z.string().optional(),
    details: z.string().array(),
    desc: z.string(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
    prospectus: z.object({
      src: z.string()
    }).array(),
    timeline: z.object({
      title: z.string().optional(),
      events: z.object({
        date: z.string(),
        event: z.object({
          time: z.string().optional(),
          title: z.string(),
          desc: z.string().optional(),
          author: z.string().optional(),
        }).array()
      }).array()
    }).array(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'events': eventsData,
};