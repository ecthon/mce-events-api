import type { FastifyReply, FastifyRequest } from 'fastify'
import { getEventById, listEvents as listEventsService } from '../services/events.service.js'

export class EventsController {
    listEvents = async () => {
        return listEventsService()
    }

    getEvent = async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string }
        const event = await getEventById(Number(id))

        if (!event) {
            return reply.status(404).send({ message: 'Event not found' })
        }

        return event
    }
}

export const eventsController = new EventsController()  
