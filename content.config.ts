import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const buttonSchema = z.object({
    label: z.string(),
    to: z.string().optional(),
    icon: z.string().optional(),
});

const heroSchema = z.object({
    title: z.string(),
    description: z.string(),
    links: z.array(buttonSchema),
    heroImage: z.string(),

    features: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
        }),
    ),

    about: z.object({
        title: z.string(),
        description: z.string(),
    }),

    contact: z.object({
        title: z.string(),
        links: z.array(buttonSchema),
    }),
});

const blogSchema = z.object({
    date: z.date(),
});

export default defineContentConfig({
    collections: {
        hero_fr: defineCollection({
            type: "data",
            source: "fr/hero.yml",
            schema: heroSchema,
        }),
        hero_en: defineCollection({
            type: "data",
            source: "en/hero.yml",
            schema: heroSchema,
        }),
        blog_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/blog/*.md",
                prefix: "blog/",
            },
            schema: blogSchema,
        }),
        blog_en: defineCollection({
            type: "page",
            source: {
                include: "en/blog/*.md",
                prefix: "blog/",
            },
            schema: blogSchema,
        }),
    },
});
