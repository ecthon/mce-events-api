export type EventOption = {
    id: number
    name: string
    price: number
    quantity: number
}

export type Event = {
    id: number
    title: string
    description: string
    date: string
    max_people: number
    status: string
    options: EventOption[]
}

const events: Event[] = [
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

export async function listEvents(): Promise<Event[]> {
    return events
}

export async function getEventById(id: number): Promise<Event | undefined> {
    return events.find((item) => item.id === id)
}
