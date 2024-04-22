import { Hono } from "hono";
import userRouter from "./user"
import blogRouter  from "./blog"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from "zod"

const app =new Hono();

app.route("/user", userRouter)

app.route("/blog", blogRouter)

export default app