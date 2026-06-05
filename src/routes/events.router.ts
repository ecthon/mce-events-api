import type { FastifyInstance } from 'fastify'
import { eventsController } from '../controllers/events.controller.js'

export default async function eventsRoutes(app: FastifyInstance) {
    app.get('/events', eventsController.listEvents)
    app.get('/events/:id', eventsController.getEvent)
}
