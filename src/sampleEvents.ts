import { Event } from './types'

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()

export const sampleEvents: Event[] = [
    {
        id: '1',
        name: 'Design review',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '10:00 AM',
        datetime: new Date(year, month, day, 10, 0).toISOString(),
        endDatetime: new Date(year, month, day, 11, 0).toISOString(),
        href: '#',
        creator: 'Segun Oroyo',
    },
    {
        id: '2',
        name: 'Sales meeting',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '2:00 PM',
        datetime: new Date(year, month, day, 14, 0).toISOString(),
        endDatetime: new Date(year, month, day, 15, 0).toISOString(),
        href: '#',
        creator: 'Ademola Johnson',
    },
    {
        id: '3',
        name: 'Date night',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '6:00 PM',
        datetime: new Date(year, month, day, 18, 0).toISOString(),
        endDatetime: new Date(year, month, day, 20, 0).toISOString(),
        href: '#',
        creator: 'Segun Oroyo',
    },
    {
        id: '4',
        name: 'Sam\'s birthday party',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '2:00 PM',
        datetime: new Date(year, month, day + 2, 14, 0).toISOString(),
        endDatetime: new Date(year, month, day + 2, 17, 0).toISOString(),
        href: '#',
        creator: 'Ademola Johnson',
    },
    {
        id: '5',
        name: 'Maple syrup museum',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '3:00 PM',
        datetime: new Date(year, month, day - 2, 15, 0).toISOString(),
        endDatetime: new Date(year, month, day - 2, 16, 30).toISOString(),
        href: '#',
        creator: 'Segun Oroyo',
    },
    {
        id: '6',
        name: 'Hockey game',
        description: 'A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.',
        time: '7:00 PM',
        datetime: new Date(year, month, day - 2, 19, 0).toISOString(),
        endDatetime: new Date(year, month, day - 2, 22, 0).toISOString(),
        href: '#',
        creator: 'Ademola Johnson',
    },
]
