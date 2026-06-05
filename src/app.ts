import Fastify from "fastify"
import eventsRoutes from "./routes/events.router.js"

export const app = Fastify({
    logger: true
})

app.register(eventsRoutes)

