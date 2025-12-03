import { ViewProps } from '../types'
import { getMonthDays } from '../utils'
import clsx from 'clsx'

export default function MonthView({ currentDate, events, onEventClick, isDateDisabled, onSlotClick }: ViewProps) {
    const days = getMonthDays(currentDate, events)

    const getEventColorClasses = (eventName: string) => {
        if (eventName.toLowerCase().includes('binge') || eventName.toLowerCase().includes('figma')) {
            return {
                bg: 'bg-blue-100',
                text: 'text-blue-700',
                border: 'border-l-2 border-blue-500'
            }
        }
        if (eventName.toLowerCase().includes('segun') || eventName.toLowerCase().includes('design')) {
            return {
                bg: 'bg-green-100',
                text: 'text-green-700',
                border: 'border-l-2 border-green-500'
            }
        }
        if (eventName.toLowerCase().includes('search')) {
            return {
                bg: 'bg-pink-100',
                text: 'text-pink-700',
                border: 'border-l-2 border-pink-500'
            }
        }
        if (eventName.toLowerCase().includes('marketing') || eventName.toLowerCase().includes('review')) {
            return {
                bg: 'bg-orange-100',
                text: 'text-orange-700',
                border: 'border-l-2 border-orange-500'
            }
        }
        if (eventName.toLowerCase().includes('catch up') || eventName.toLowerCase().includes('workout')) {
            return {
                bg: 'bg-yellow-100',
                text: 'text-yellow-700',
                border: 'border-l-2 border-yellow-500'
            }
        }

        return {
            bg: 'bg-stone-100',
            text: 'text-stone-700',
            border: 'border-l-2 border-stone-500'
        }
    }

    return (
        <div className="flex flex-col h-full bg-white dark:bg-stone-900">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-800/50">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="py-2 text-center text-xs font-semibold text-stone-500 dark:text-stone-400">
                        {day}
                    </div>
                ))}
            </div>

            {/* Month Grid */}
            <div className="flex-1 grid grid-cols-7 grid-rows-5 lg:grid-rows-6">
                {days.map((day) => (
                    <div
                        key={day.date}
                        className={clsx(
                            'relative border-b border-r border-stone-100 dark:border-white/5 p-2 min-h-[100px] cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors',
                            !day.isCurrentMonth && 'bg-stone-50/50 dark:bg-stone-800/50 text-stone-400',
                            day.isCurrentMonth && 'bg-white dark:bg-stone-900',
                            isDateDisabled?.(new Date(day.date)) && 'bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed opacity-75'
                        )}
                        onClick={() => {
                            if (isDateDisabled?.(new Date(day.date))) return
                            onSlotClick?.(day.originalDate)
                        }}
                    >
                        <time
                            dateTime={day.date}
                            className={clsx(
                                'flex h-6 w-6 items-center justify-center rounded-full text-sm',
                                day.isToday && 'bg-blue-600 font-semibold text-white',
                                !day.isToday && day.isCurrentMonth && 'text-stone-900 dark:text-white',
                                !day.isToday && !day.isCurrentMonth && 'text-stone-400 dark:text-stone-500'
                            )}
                        >
                            {day.date.split('-').pop()?.replace(/^0/, '')}
                        </time>

                        {/* Events */}
                        <div className="mt-1 space-y-1">
                            {day.events.slice(0, 3).map((event) => {
                                const colors = getEventColorClasses(event.name)
                                return (
                                    <div
                                        key={event.id}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onEventClick(event)
                                        }}
                                        className={clsx(
                                            'flex items-center px-1.5 py-0.5 text-xs rounded-sm truncate cursor-pointer hover:opacity-80 gap-2',
                                            colors.bg,
                                            colors.text,
                                            colors.border
                                        )}
                                    >
                                        <span className="font-medium">{event.name}</span>
                                        <span className="opacity-75">{event.creator || event.time}</span>
                                    </div>
                                )
                            })}
                            {day.events.length > 3 && (
                                <div className="text-xs text-stone-500 pl-1">
                                    {day.events.length - 3} more
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
