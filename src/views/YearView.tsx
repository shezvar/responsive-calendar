import { ViewProps } from '../types'
import { getYearMonths } from '../utils'
import clsx from 'clsx'

export default function YearView({ currentDate, events, onDateChange, onViewChange }: ViewProps) {
    const months = getYearMonths(currentDate, events)

    const getDayColorClasses = (dayEvents: any[]) => {
        if (dayEvents.length === 0) return {}

        const eventName = dayEvents[0].name

        if (eventName.toLowerCase().includes('binge') || eventName.toLowerCase().includes('figma')) {
            return { bg: 'bg-blue-100', text: 'text-blue-700' }
        }
        if (eventName.toLowerCase().includes('segun') || eventName.toLowerCase().includes('design')) {
            return { bg: 'bg-green-100', text: 'text-green-700' }
        }
        if (eventName.toLowerCase().includes('search')) {
            return { bg: 'bg-pink-100', text: 'text-pink-700' }
        }
        if (eventName.toLowerCase().includes('marketing') || eventName.toLowerCase().includes('review')) {
            return { bg: 'bg-orange-100', text: 'text-orange-700' }
        }

        return { bg: 'bg-stone-100', text: 'text-stone-900' }
    }

    return (
        <div className="bg-white dark:bg-stone-900 overflow-auto h-full">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-4 xl:px-8">
                {months.map((month) => (
                    <section key={month.name} className="text-center">
                        <h2 className="text-sm font-semibold text-stone-900 dark:text-white">{month.name}</h2>
                        <div className="mt-6 grid grid-cols-7 text-xs/6 text-stone-500 dark:text-stone-400">
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-stone-200 text-sm shadow-sm ring-1 ring-stone-200 dark:bg-white/10 dark:shadow-none dark:ring-white/10 min-h-[192px] grid-rows-[repeat(6,minmax(0,1fr))]">
                            {month.days.map((day, dayIdx) => {
                                const eventColors = getDayColorClasses(day.events)
                                const hasEvents = day.events.length > 0

                                return (
                                    <button
                                        key={day.date}
                                        type="button"
                                        onClick={() => {
                                            onDateChange(day.originalDate)
                                            onViewChange('day')
                                        }}
                                        className={clsx(
                                            day.isCurrentMonth ? "bg-white dark:bg-stone-900" : "bg-stone-50 dark:bg-stone-800",
                                            (day.isSelected || day.isToday) && "font-semibold",
                                            day.isSelected && "text-white",
                                            !day.isSelected && day.isCurrentMonth && !day.isToday && "text-stone-900 dark:text-white",
                                            !day.isSelected && !day.isCurrentMonth && !day.isToday && "text-stone-400 dark:text-stone-500",
                                            day.isToday && !day.isSelected && "text-blue-600 dark:text-blue-400",
                                            dayIdx === 0 && "rounded-tl-lg",
                                            dayIdx === 6 && "rounded-tr-lg",
                                            dayIdx === month.days.length - 7 && "rounded-bl-lg",
                                            dayIdx === month.days.length - 1 && "rounded-br-lg",
                                            "py-1.5 hover:bg-stone-100 focus:z-10 dark:hover:bg-stone-700 relative"
                                        )}
                                    >
                                        <time
                                            dateTime={day.date}
                                            className={clsx(
                                                "mx-auto flex size-7 items-center justify-center rounded-full",
                                                day.isSelected && day.isToday && "bg-blue-600",
                                                day.isSelected && !day.isToday && "bg-stone-900 dark:bg-white dark:text-stone-900",
                                                !day.isSelected && !day.isToday && hasEvents && eventColors.bg,
                                                !day.isSelected && !day.isToday && hasEvents && eventColors.text
                                            )}
                                        >
                                            {day.date.split('-').pop()?.replace(/^0/, '')}
                                        </time>
                                    </button>
                                )
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
