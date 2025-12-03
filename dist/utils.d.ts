import { addMonths, subMonths, addWeeks, subWeeks, addDays, subDays, addYears, subYears } from 'date-fns';
import { Event } from './types';

export declare function getMonthDays(date: Date, events: Event[]): {
    date: string;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    events: Event[];
    originalDate: Date;
}[];
export declare function getWeekDays(date: Date): {
    date: Date;
    dateString: string;
    dayName: string;
    dayNameFull: string;
    isToday: boolean;
    isSelected: boolean;
}[];
export declare function getYearMonths(date: Date, events: Event[]): {
    name: string;
    date: Date;
    days: {
        date: string;
        isCurrentMonth: boolean;
        isToday: boolean;
        isSelected: boolean;
        events: Event[];
        originalDate: Date;
    }[];
}[];
export declare const navigation: {
    month: {
        previous: typeof subMonths;
        next: typeof addMonths;
    };
    week: {
        previous: typeof subWeeks;
        next: typeof addWeeks;
    };
    day: {
        previous: typeof subDays;
        next: typeof addDays;
    };
    year: {
        previous: typeof subYears;
        next: typeof addYears;
    };
    scheduled: {
        previous: typeof subMonths;
        next: typeof addMonths;
    };
};
