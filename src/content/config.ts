
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        client: z.string().default("Privat kund"),
        completionDate: z.date().or(z.string().transform((str) => new Date(str))),
        serviceType: z.enum(['Privat', 'Företag']).default('Privat'),
        coverImage: image().or(z.string()),
        coverAlt: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        filterCategory: z.array(z.string()).optional(),
        gallery: z.array(image().or(z.string())).optional(),
        featured: z.boolean().optional().default(false)
    })
});

const servicesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        id: z.number().optional(), // Optional, mainly for sorting if needed
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        longDescription: z.string().optional(), // Making optional as description might suffice
        features: z.array(z.string()).optional(),
        image: image().or(z.string()),
        processSteps: z.array(z.object({
            step: z.number(),
            title: z.string(),
            description: z.string()
        })).optional()
    })
});

export const collections = {
    'projects': projectsCollection,
    'services': servicesCollection,
};
