import z from "zod"
export const signUpSchema = z.object({
    name: z.string(),
    username: z.string().email(),
    password: z.string()
})

export const signInSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const blogCreateSchema = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional()
})

export type SignUpSchema = z.infer<typeof signUpSchema>
export type SignInSchema = z.infer<typeof signInSchema>
export type BlogCreateSchema = z.infer<typeof blogCreateSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>