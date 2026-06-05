import type { FastifyInstance } from 'fastify'
import { getEvent, listEvents } from '../controllers/eventsController.js'

export default async function eventsRoutes(app: FastifyInstance) {
    app.get('/events', listEvents)
    app.get('/events/:id', getEvent)
}
