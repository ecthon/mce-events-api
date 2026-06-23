import Fastify from "fastify"
import cors from "@fastify/cors"
import eventsRoutes from "./routes/events.router.js"

export const app = Fastify({
    logger: true
})

app.register(cors, {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
})

app.register(eventsRoutes)

