import { format, startOfWeek, addDays, isSameDay, differenceInMinutes } from 'date-fns'
import { ViewProps } from '../types'
import clsx from 'clsx'
import CurrentTimeIndicator from '../components/CurrentTimeIndicator'

export default function WeekView({ currentDate, events, onDateChange, onEventClick, isDateDisabled, onSlotClick }: ViewProps) {
    // Get week start (Monday)
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

    // Filter events for the current week
    const weekEvents = events.filter(event => {
        const eventDate = new Date(event.datetime)
        return weekDays.some(day => isSameDay(eventDate, day))
    })

    const getEventPosition = (event: any, dayIndex: number) => {
        const date = new Date(event.datetime)
        const start = date.getHours() * 60 + date.getMinutes()
        const endDatetime = event.endDatetime ? new Date(event.endDatetime) : new Date(date.getTime() + 60 * 60 * 1000)
        const duration = differenceInMinutes(endDatetime, date)

        // gridRow start: (minutes / 5) + 2
        const gridRowStart = Math.floor(start / 5) + 2
        const span = Math.ceil(duration / 5)

        return {
            gridRow: `${gridRowStart} / span ${span}`,
            gridColumn: dayIndex + 1,
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
        if (eventName.toLowerCase().includes('segun') || eventName.toLowerCase().includes('design') || eventName.toLowerCase().includes('marketing')) {
            return {
                bg: 'bg-green-100',
                hover: 'hover:bg-green-200',
                text: 'text-green-700',
                border: 'border-l-4 border-green-500'
            }
        }
        if (eventName.toLowerCase().includes('search') || eventName.toLowerCase().includes('figma')) {
            return {
                bg: 'bg-pink-100',
                hover: 'hover:bg-pink-200',
                text: 'text-pink-700',
                border: 'border-l-4 border-pink-500'
            }
        }
        // Orange for "Marketing Discuss..." in Image 2
        if (eventName.toLowerCase().includes('marketing') || eventName.toLowerCase().includes('zoom')) {
            return {
                bg: 'bg-orange-100',
                hover: 'hover:bg-orange-200',
                text: 'text-orange-700',
                border: 'border-l-4 border-orange-500'
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
            {/* Week Header */}
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
                                    isSelected && 'bg-white border-b-2 border-b-blue-600 dark:border-b-blue-500'
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
                    <div className="w-20 flex-none border-r border-stone-100 dark:border-white/5 bg-white dark:bg-stone-900 z-10 sticky left-0">
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
                        <div className="absolute inset-0 grid grid-cols-7">
                            {weekDays.map((day, idx) => (
                                <div
                                    key={idx}
                                    className="border-l border-stone-100 dark:border-white/5"
                                >
                                    <div className="h-7" />
                                    {Array.from({ length: 24 }, (_, i) => (
                                        <div key={i} className="relative h-14 border-t border-stone-100 dark:border-white/5">
                                            <div
                                                className={clsx(
                                                    "absolute inset-0 z-0",
                                                    isDateDisabled?.(new Date(day.setHours(i, 0, 0, 0)))
                                                        ? "bg-stone-100 dark:bg-stone-800/50 cursor-not-allowed"
                                                        : "cursor-pointer hover:bg-stone-50 dark:hover:bg-white/5"
                                                )}
                                                onClick={() => {
                                                    const clickedDate = new Date(day)
                                                    clickedDate.setHours(i, 0, 0, 0)

                                                    if (isDateDisabled?.(clickedDate)) return

                                                    onSlotClick?.(clickedDate)
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {/* Current Time Indicator (Red Line) */}
                            {weekDays.some(day => isSameDay(day, new Date())) && <CurrentTimeIndicator />}
                        </div>

                        {/* Events Container */}
                        <div
                            className="absolute inset-0 grid grid-cols-7 pointer-events-none"
                            style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr))' }}
                        >
                            {weekEvents.map((event) => {
                                const eventDate = new Date(event.datetime)
                                const dayIndex = weekDays.findIndex(day => isSameDay(day, eventDate))
                                if (dayIndex === -1) return null

                                const position = getEventPosition(event, dayIndex)
                                const colors = getEventColorClasses(event.name)

                                return (
                                    <div
                                        key={event.id}
                                        style={{ gridRow: position.gridRow, gridColumn: position.gridColumn }}
                                        className="mx-1 mt-px relative z-10 cursor-pointer hover:opacity-90 pointer-events-auto"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onEventClick(event)
                                        }}
                                    >
                                        <div
                                            className={clsx(
                                                'h-full rounded p-2 text-xs overflow-hidden gap-2',
                                                colors.bg,
                                                colors.hover,
                                                colors.border,
                                                colors.text
                                            )}
                                        >
                                            <div className="font-semibold truncate">{event.name}</div>
                                            <span className="opacity-75">{event.creator || event.time}</span>
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
