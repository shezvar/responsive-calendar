import { Locale } from 'date-fns'

export type ViewType = 'day' | 'week' | 'month' | 'year' | 'scheduled'

export interface Event {
    id: string | number
    name: string
    time: string
    datetime: string
    endDatetime?: string
    allDay?: boolean
    href: string
    creator?: string
}

export interface CalendarClassNames {
    root?: string
    sidebar?: string
    header?: string
    content?: string
    dayView?: string
    weekView?: string
    monthView?: string
    yearView?: string
}

export interface CalendarProps {
    events?: Event[]
    initialView?: ViewType
    initialDate?: Date
    locale?: Locale
    className?: string
    classNames?: CalendarClassNames
    enableSidebar?: boolean

    // Callbacks
    onEventCreate?: (event: Omit<Event, 'id'>) => Promise<Event | void> | void
    onEventUpdate?: (event: Event) => Promise<Event | void> | void
    onEventDelete?: (eventId: string | number) => Promise<void> | void
    onDateChange?: (date: Date) => void
    onViewChange?: (view: ViewType) => void

    // New Props
    isDateDisabled?: (date: Date) => boolean
    onSlotClick?: (date: Date) => void

    // Render Props
    renderHeader?: (props: any) => React.ReactNode
    renderSidebar?: (props: any) => React.ReactNode
}

export interface ViewProps {
    currentDate: Date
    events: Event[]
    onDateChange: (date: Date) => void
    onViewChange: (view: ViewType) => void
    onEventClick: (event: Event) => void
    classNames?: CalendarClassNames
    isDateDisabled?: (date: Date) => boolean
    onSlotClick?: (date: Date) => void
}
