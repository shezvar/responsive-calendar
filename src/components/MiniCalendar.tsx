import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    isToday,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns'
import { useState } from 'react'
import clsx from 'clsx'

interface MiniCalendarProps {
    value: Date
    onChange: (date: Date) => void
}

export default function MiniCalendar({ value, onChange }: MiniCalendarProps) {
    const [currentMonth, setCurrentMonth] = useState(value)

    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 }),
    })

    const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

    return (
        <div className="w-64 p-4 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="flex items-center justify-between mb-4">
                <button
                    type="button"
                    onClick={previousMonth}
                    className="p-1 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <h2 className="text-sm font-semibold text-gray-900">
                    {format(currentMonth, 'MMMM yyyy')}
                </h2>
                <button
                    type="button"
                    onClick={nextMonth}
                    className="p-1 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
                {days.map((day) => (
                    <button
                        key={day.toString()}
                        type="button"
                        onClick={() => onChange(day)}
                        className={clsx(
                            'py-1.5 hover:bg-gray-100 rounded-full',
                            !isSameMonth(day, currentMonth) && 'text-gray-400',
                            isSameDay(day, value) && 'bg-blue-600 text-white hover:bg-blue-700',
                            isToday(day) && !isSameDay(day, value) && 'text-blue-600 font-semibold'
                        )}
                    >
                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                            {format(day, 'd')}
                        </time>
                    </button>
                ))}
            </div>
        </div>
    )
}
