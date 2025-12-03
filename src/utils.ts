import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    format,
    isSameMonth,
    isSameDay,
    isToday,
    addMonths,
    subMonths,
    addWeeks,
    subWeeks,
    addDays,
    subDays,
    startOfYear,
    endOfYear,
    eachMonthOfInterval,
    addYears,
    subYears,
} from 'date-fns'
import { Event } from './types'

export function getMonthDays(date: Date, events: Event[], selectedDate?: Date) {
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(date)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }) // Monday start
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    let days = eachDayOfInterval({
        start: startDate,
        end: endDate,
    })

    // Ensure we always have exactly 42 days (6 weeks) for consistent height
    while (days.length < 42) {
        const lastDay = days[days.length - 1]
        days.push(addDays(lastDay, 1))
    }

    return days.map((day) => {
        const dayEvents = events.filter((event) => isSameDay(new Date(event.datetime), day))
        return {
            date: format(day, 'yyyy-MM-dd'),
            isCurrentMonth: isSameMonth(day, monthStart),
            isToday: isToday(day),
            isSelected: isSameDay(day, selectedDate || date),
            events: dayEvents,
            originalDate: day,
        }
    })
}

export function getWeekDays(date: Date) {
    const start = startOfWeek(date, { weekStartsOn: 1 })
    const end = endOfWeek(date, { weekStartsOn: 1 })
    const days = eachDayOfInterval({ start, end })
    return days.map((day) => ({
        date: day,
        dateString: format(day, 'yyyy-MM-dd'),
        dayName: format(day, 'EEEEE'), // M, T, W...
        dayNameFull: format(day, 'EEEE'), // Monday, Tuesday...
        isToday: isToday(day),
        isSelected: isSameDay(day, date),
    }))
}

export function getYearMonths(date: Date, events: Event[]) {
    const start = startOfYear(date)
    const end = endOfYear(date)
    const months = eachMonthOfInterval({ start, end })

    return months.map((month) => ({
        name: format(month, 'MMMM'),
        date: month,
        days: getMonthDays(month, events, date),
    }))
}

export const navigation = {
    month: {
        previous: subMonths,
        next: addMonths,
    },
    week: {
        previous: subWeeks,
        next: addWeeks,
    },
    day: {
        previous: subDays,
        next: addDays,
    },
    year: {
        previous: subYears,
        next: addYears,
    },
    scheduled: {
        previous: subMonths,
        next: addMonths,
    },
}
