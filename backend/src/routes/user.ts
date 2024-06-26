import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signUpSchema } from "ramandeep-formay-medium";
import { signInSchema } from "ramandeep-formay-medium";
import { hashing } from "../utils/hashing";

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


// sign up route
app.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    })
        .$extends(withAccelerate())
    try {
        const body = await c.req.json()
        const { success } = signUpSchema.safeParse(body)
        if (!success) {
            c.status(403)
            return c.json({ error: "Invalid Signup Data" })
        }
        // hashing
        const securedPassword = await hashing(body.password);

        // user creation
        const user = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                password: securedPassword
            }
        })

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ token, name: body.name })
    }
    catch (e) {
        console.error(e)
        c.status(403)
        return c.json({ error: "Error while signing up" })
    }
})

// signin
app.post("/signin", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const { success } = signInSchema.safeParse(body)
        if (!success) {
            c.status(403)
            return c.json({ error: "Invalid Signin Data" })
        }
        const user = await prisma.user.findUnique({
            where: {
                username: body.username,
                password: body.passowrd
            }
        });

        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ token, name:user.name });
    } catch (e) {
        console.error(e)
        c.status(403)
        c.json({ error: "Error while signing in" })
    }


})


export default app