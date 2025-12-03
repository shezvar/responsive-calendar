import { format, startOfWeek, addDays, isSameDay, differenceInMinutes } from 'date-fns'
import { ViewProps } from '../types'
import clsx from 'clsx'
import CurrentTimeIndicator from '../components/CurrentTimeIndicator'

export default function DayView({ currentDate, events, onDateChange, onEventClick, isDateDisabled, onSlotClick }: ViewProps) {
    // Get week start (Monday)
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

    // Filter events for the current day
    const dayEvents = events.filter(event => isSameDay(new Date(event.datetime), currentDate))

    const getEventPosition = (event: any) => {
        const date = new Date(event.datetime)
        const start = date.getHours() * 60 + date.getMinutes()
        const endDatetime = event.endDatetime ? new Date(event.endDatetime) : new Date(date.getTime() + 60 * 60 * 1000)
        const duration = differenceInMinutes(endDatetime, date)

        // gridRow start: (minutes / 5) + 2
        const gridRowStart = Math.floor(start / 5) + 2
        const span = Math.ceil(duration / 5)

        return {
            gridRow: `${gridRowStart} / span ${span}`,
            gridColumn: 1,
        }
    }

    const getEventColorClasses = (eventName: string) => {
        if (eventName.toLowerCase().includes('binge')) {
            return {
                bg: 'bg-blue-100',
                hover: 'hover:bg-blue-200',
                text: 'text-blue-700',
                border: 'border-l-4 border-blue-500'
            }
        }
        if (eventName.toLowerCase().includes('segun') || eventName.toLowerCase().includes('design')) {
            return {
                bg: 'bg-green-100',
                hover: 'hover:bg-green-200',
                text: 'text-green-700',
                border: 'border-l-4 border-green-500'
            }
        }
        if (eventName.toLowerCase().includes('search')) {
            return {
                bg: 'bg-pink-100',
                hover: 'hover:bg-pink-200',
                text: 'text-pink-700',
                border: 'border-l-4 border-pink-500'
            }
        }
        return {
            bg: 'bg-blue-50',
            hover: 'hover:bg-blue-100',
            text: 'text-blue-700',
            border: 'border-l-4 border-blue-500'
        }
    }

    return (
        <div className="flex flex-col h-full bg-white dark:bg-stone-900">
            {/* Day Header */}
            <div className="flex-none border-b border-stone-200 dark:border-white/10 shadow-sm">
                <div className="flex">
                    <div className="w-20 flex-none border-r border-stone-200 dark:border-white/5" /> {/* Time column spacer */}
                    {weekDays.map((day, idx) => {
                        const isToday = isSameDay(day, new Date())
                        const isSelected = isSameDay(day, currentDate)
                        return (
                            <button
                                key={idx}
                                onClick={() => onDateChange(day)}
                                className={clsx(
                                    'flex-1 text-center py-2 border-l border-stone-200 dark:border-white/5 hover:bg-stone-50 dark:hover:bg-white/5',
                                    isSelected && 'bg-white dark:bg-blue-900'
                                )}
                            >
                                <div className={clsx(
                                    'text-xs text-stone-500 dark:text-stone-400',
                                    isToday
                                        ? 'text-blue-700'
                                        : 'text-blue-700 dark:text-white',
                                    isSelected && isToday && 'font-bold'
                                )}>
                                    {format(day, 'EEE')}
                                </div>
                                <div
                                    className={clsx(
                                        'text-lg font-medium',
                                        isToday
                                            ? 'text-blue-600'
                                            : 'text-stone-900 dark:text-white',
                                        isSelected && isToday && 'font-bold'
                                    )}
                                >
                                    {format(day, 'd')}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-1 overflow-auto">
                <div className="flex flex-1 relative min-h-[1344px]"> {/* 24 hours × 56px = 1344px */}
                    {/* Time Labels */}
                    <div className="w-20 flex-none border-r border-stone-200 dark:border-white/5 bg-white dark:bg-stone-900 z-10">
                        <div className="h-7" /> {/* Spacer */}
                        {Array.from({ length: 24 }, (_, i) => (
                            <div key={i} className="h-14 pr-2 text-right relative">
                                <div className="absolute top-0 -translate-y-1/2 right-2 text-xs text-stone-400 dark:text-stone-500">
                                    {i === 0 ? '12 AM' : i < 12 ? `${i} AM` : i === 12 ? '12 PM' : `${i - 12} PM`}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Grid & Events */}
                    <div className="flex-1 relative">
                        {/* Background Grid */}
                        <div className="absolute inset-0">
                            <div className="h-7" />
                            {Array.from({ length: 24 }, (_, i) => (
                                <div key={i} className="relative h-14 border-t border-stone-200 dark:border-white/5">
                                    {/* Render 2 slots per hour (30 min each) for finer granularity if needed, or just 1 hour blocks */}
                                    {/* For simplicity, let's make the whole hour clickable, or split if desired. */}
                                    {/* Let's do 1-hour blocks for now matching the grid */}
                                    <div
                                        className={clsx(
                                            "absolute inset-0 z-0",
                                            isDateDisabled?.(new Date(currentDate.setHours(i, 0, 0, 0)))
                                                ? "bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed"
                                                : "cursor-pointer hover:bg-stone-50 dark:hover:bg-white/5"
                                        )}
                                        onClick={() => {
                                            const clickedDate = new Date(currentDate)
                                            clickedDate.setHours(i, 0, 0, 0)

                                            if (isDateDisabled?.(clickedDate)) return

                                            onSlotClick?.(clickedDate)
                                        }}
                                    />
                                </div>
                            ))}
                            {/* Current Time Indicator (Red Line) */}
                            {isSameDay(currentDate, new Date()) && <CurrentTimeIndicator />}
                        </div>

                        {/* Events Container */}
                        <div
                            className="absolute inset-0 grid grid-cols-1 mr-4 pointer-events-none" // mr-4 for some spacing on right
                            style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr))' }}
                        >
                            {dayEvents.map((event) => {
                                const position = getEventPosition(event)
                                const colors = getEventColorClasses(event.name)

                                return (
                                    <div
                                        key={event.id}
                                        style={{ gridRow: position.gridRow, gridColumn: position.gridColumn }}
                                        className="mt-px relative z-10 cursor-pointer hover:opacity-90 pointer-events-auto"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onEventClick(event)
                                        }}
                                    >
                                        <div
                                            className={clsx(
                                                'h-full rounded p-2 text-xs overflow-hidden flex items-center',
                                                colors.bg,
                                                colors.hover,
                                                colors.border,
                                                colors.text
                                            )}
                                        >
                                            <span className="font-bold mr-2">{event.name}</span>
                                            {/* <span className="opacity-75">{event.time}</span> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
