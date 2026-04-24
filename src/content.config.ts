import { defineCollection } from "astro/content/config";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const menu = defineCollection({
    loader: file("src/data/menu.json"),
    schema: z.object({
        name:z.string(),
        price:z.number(),
        category:z.enum(["Appetizer","Main Course","Dessert"]),
        image:z.string(),
        description: z.string(),
        slug:z.string()
    })
})

const reviews = defineCollection({
    loader: file("src/data/reviews.json"),
    schema: z.object({
        name:z.string(),
        role:z.string(),
        review:z.string(),
        rating:z.number()
    })
})

const meals = defineCollection({
    loader: glob({
        pattern:"src/data/meals/*.mdx"
    }),
    schema: z.object({
    name: z.string(),
    price: z.number(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    prepTime: z.number(),
    serves: z.number(),
    slug: z.string(),
    ingredients: z.array(z.string()),
    chefNote: z.string(),
    }),
})

export const collections = {
    menu,
    reviews,
    meals


}