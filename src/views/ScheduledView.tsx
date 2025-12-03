import { format, isSameDay, isAfter, startOfDay } from 'date-fns'
import { ViewProps, Event } from '../types'
import clsx from 'clsx'

export default function ScheduledView({ currentDate, events, onEventClick }: ViewProps) {
    // Filter events: show events from currentDate onwards (up to 1 month ahead for initial load, or just all future?)
    // The requirement says "only show created events", implying a list.
    // Let's show all future events starting from currentDate.

    // Sort events by date
    const sortedEvents = [...events].sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())

    // Filter for events on or after start of current date
    const futureEvents = sortedEvents.filter(event => {
        const eventDate = new Date(event.datetime)
        return isAfter(eventDate, startOfDay(currentDate)) || isSameDay(eventDate, currentDate)
    })

    // Group by date
    const groupedEvents: { [key: string]: Event[] } = {}
    futureEvents.forEach(event => {
        const dateKey = format(new Date(event.datetime), 'yyyy-MM-dd')
        if (!groupedEvents[dateKey]) {
            groupedEvents[dateKey] = []
        }
        groupedEvents[dateKey].push(event)
    })

    // Get unique dates
    const dates = Object.keys(groupedEvents)

    const getEventColorClasses = (eventName: string) => {
        if (eventName.toLowerCase().includes('binge')) return 'bg-blue-500'
        if (eventName.toLowerCase().includes('segun') || eventName.toLowerCase().includes('design')) return 'bg-green-500'
        if (eventName.toLowerCase().includes('search')) return 'bg-pink-500'
        return 'bg-blue-500'
    }

    return (
        <div className="flex flex-col h-full bg-white dark:bg-stone-900 overflow-auto">
            {dates.length === 0 ? (
                <div className="flex items-center justify-center h-full text-stone-500 dark:text-stone-400">
                    No upcoming events scheduled.
                </div>
            ) : (
                <div className="divide-y divide-stone-200 dark:divide-white/10">
                    {dates.map(dateStr => {
                        const date = new Date(dateStr)
                        const dayEvents = groupedEvents[dateStr]

                        return (
                            <div key={dateStr} className="flex flex-row py-4 px-6 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
                                {/* Date Column */}
                                <div className="w-32 flex-none pt-1">
                                    <div className="text-sm font-bold text-stone-900 dark:text-white uppercase">
                                        {format(date, 'd')} <span className="text-stone-500 dark:text-stone-400 font-normal">{format(date, 'MMM, EEE')}</span>
                                    </div>
                                </div>

                                {/* Events Column */}
                                <div className="flex-1 space-y-3">
                                    {dayEvents.map(event => (
                                        <div
                                            key={event.id}
                                            className="group flex items-center gap-4 cursor-pointer"
                                            onClick={() => onEventClick(event)}
                                        >
                                            {/* Dot Indicator */}
                                            <div className={clsx("w-2.5 h-2.5 rounded-full flex-none", getEventColorClasses(event.name))} />

                                            {/* Time */}
                                            <div className="w-32 flex-none text-sm text-stone-500 dark:text-stone-400">
                                                {event.allDay ? 'All day' : (
                                                    <>
                                                        {format(new Date(event.datetime), 'h:mm')}
                                                        {event.endDatetime && ` – ${format(new Date(event.endDatetime), 'h:mm a')}`}
                                                    </>
                                                )}
                                            </div>

                                            {/* Event Name */}
                                            <div className="text-sm font-medium text-stone-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {event.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
