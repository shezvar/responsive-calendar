import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { getMonthDays, navigation } from '../utils'
import clsx from 'clsx'
import { Event } from '../types'
import { Checkbox } from '@headlessui/react'

interface SidebarProps {
    currentDate: Date
    onDateChange: (date: Date) => void
    events: Event[]
}

// Mock calendar data
const calendars = [
    { id: 1, name: 'Ademola Johnson', email: 'segun@gmail.com', checked: true },
    { id: 2, name: 'Segun tasks', checked: true },
    { id: 3, name: 'Result tasks', color: 'purple', checked: true },
    { id: 4, name: 'Holidays', checked: true },
]

export default function Sidebar({ currentDate, onDateChange, events }: SidebarProps) {
    const monthDays = getMonthDays(currentDate, events)
    const [calendarStates, setCalendarStates] = useState(calendars.map(c => ({ ...c })))

    const toggleCalendar = (id: number) => {
        setCalendarStates(prev =>
            prev.map(cal => (cal.id === id ? { ...cal, checked: !cal.checked } : cal))
        )
    }

    return (
        <div className="hidden lg:flex lg:flex-col w-64 h-full border-r border-stone-200 bg-stone-50 dark:border-white/10 dark:bg-stone-950">
            {/* Mini Calendar */}
            <div className="p-6">
                <div className="flex items-center justify-between text-stone-900 dark:text-white mb-4">
                    <button
                        type="button"
                        onClick={() => onDateChange(navigation.month.previous(currentDate, 1))}
                        className="p-1.5 text-stone-400 hover:text-stone-500 dark:hover:text-white"
                    >
                        <ChevronLeftIcon className="size-5" />
                    </button>
                    <div className="text-sm font-semibold">{format(currentDate, 'MMMM yyyy')}</div>
                    <button
                        type="button"
                        onClick={() => onDateChange(navigation.month.next(currentDate, 1))}
                        className="p-1.5 text-stone-400 hover:text-stone-500 dark:hover:text-white"
                    >
                        <ChevronRightIcon className="size-5" />
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <div>Mo</div>
                    <div>Tu</div>
                    <div>We</div>
                    <div>Th</div>
                    <div>Fr</div>
                    <div>Sa</div>
                    <div>Su</div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-sm">
                    {monthDays.map((day) => (
                        <button
                            key={day.date}
                            type="button"
                            onClick={() => onDateChange(day.originalDate)}
                            className={clsx(
                                'aspect-square flex items-center justify-center rounded-md text-sm hover:bg-stone-100 dark:hover:bg-stone-700',
                                day.isCurrentMonth ? 'text-stone-900 dark:text-white' : 'text-stone-400 dark:text-stone-500',
                                day.isToday && 'bg-blue-600 text-white hover:bg-blue-700 font-semibold',
                                day.isSelected && !day.isToday && 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                            )}
                        >
                            {day.date.split('-').pop()?.replace(/^0/, '')}
                        </button>
                    ))}
                </div>
            </div>

            {/* Calendar Filters */}
            <div className="px-6 pb-4">
                <div className="border-t border-stone-200 dark:border-white/10 pt-4">
                    <div className="space-y-2">
                        {calendarStates.map((calendar) => (
                            <div key={calendar.id} className="flex items-center group">
                                <Checkbox
                                    checked={calendar.checked}
                                    onChange={() => toggleCalendar(calendar.id)}
                                    className="group/checkbox flex size-4 items-center justify-center rounded border border-stone-300 bg-white data-[checked]:bg-blue-600 data-[checked]:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer dark:border-stone-600 dark:bg-stone-800"
                                >
                                    <CheckIcon className="size-3 text-white opacity-0 group-data-[checked]/checkbox:opacity-100" />
                                </Checkbox>
                                <label className="ml-3 text-sm text-stone-700 dark:text-stone-300 cursor-pointer" onClick={() => toggleCalendar(calendar.id)}>
                                    {calendar.name}
                                    {calendar.email && (
                                        <div className="text-xs text-stone-500 dark:text-stone-400">{calendar.email}</div>
                                    )}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button className="mt-4 flex items-center w-full text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white">
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Add account
                    </button>
                </div>
            </div>

            {/* Invite People Button */}
            <div className="mt-auto p-6 border-t border-stone-200 dark:border-white/10 hidden">
                <button className="w-full flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 dark:border-white/10 dark:bg-stone-800 dark:text-white dark:hover:bg-stone-700">
                    <UserGroupIcon className="h-5 w-5" />
                    Invite people
                </button>
            </div>
        </div>
    )
}
