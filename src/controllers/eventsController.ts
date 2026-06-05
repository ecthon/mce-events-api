import type { FastifyReply, FastifyRequest } from 'fastify'

const events = [
    {
        id: 1,
        title: 'Churrasquinho MCE',
        description: 'Um churrasquinho para confraternizar a comunidade do MCE.',
        date: '2026-06-21',
        max_people: 50,
        status: 'active',
        options: [
            {
                id: 1,
                name: 'Opção 1',
                price: 10,
                quantity: 50
            },
            {
                id: 2,
                name: 'Opção 2',
                price: 20,
                quantity: 100
            }
        ]
    },
    {
        id: 2,
        title: 'Dia dos pais',
        description: 'Um dia dedicado aos pais para confraternizar a comunidade do MCE.',
        date: '2026-08-18',
        max_people: 120,
        status: 'open',
        options: [
            {
                id: 1,
                name: 'Ingresso',
                price: 10,
                quantity: 120
            }
        ]
    }
]

export async function listEvents() {
    return events
}

export async function getEvent(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    const event = events.find((item) => item.id === Number(id))

    if (!event) {
        return reply.status(404).send({ message: 'Event not found' })
    }

    return event
}
