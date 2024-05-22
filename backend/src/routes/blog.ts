import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { blogCreateSchema } from "ramandeep-formay-medium";
import { updateBlogSchema } from "ramandeep-formay-medium";

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }, Variables: {
        userId: number
    }
}>();


// middleware
app.use("/*", async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        // split token
        const jwt = c.req.header("Authorization") || "";
        console.log(jwt)
        const token = jwt.split(" ")[1];
        console.log(token)
        if (!token) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
        // payload data
        const payload = await verify(token, c.env.JWT_SECRET)
        c.set("userId", payload.id)
        await next()
    } catch (e) {
        c.status(403)
        return c.json("error")
    }
}) 

// create blog
app.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const body = await c.req.json();
        const userId = c.get("userId");
        const { success } = blogCreateSchema.safeParse(body)
       
        if (!success) {
            c.status(403);
            return c.json({ error: "Invalid data to create post" })
        }
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        }) 
        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({ error: "Error while creating the post" })
    }
})

// update blog
app.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const body = await c.req.json()
        const userId = c.get("userId")
        const { success } = updateBlogSchema.safeParse(body);
        const updateBlog = await prisma.blog.update({
            where: {
                id: Number(body.id),
            }, data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            id: updateBlog.id,
            msg: "Updated successfully"
        })
    } catch (e) {
        c.status(403);
        return c.json({ error: "Error to update the blog" })
    }

})

// fetch all the blogs
app.get("/bulk", async (c) => {
    console.log("I am here")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const blogs = await prisma.blog.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({ blogs })
    }
    catch (e) {
        c.status(403)
        c.json({ error: "Error fetchiong all the blogs" })
    }
})

// search
app.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const param = c.req.param("id")
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(param)
            },
            select: {
                id: true,
                content: true,
                title: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if (blog == null) {
            c.status(403)
            return c.json({ msg: "Invalid request" })
        }
        return c.json({ blog })
    }
    catch (e) {
        c.status(403);
        return c.json({ error: "Error fetching blog based on param" })
    }
})



export default app