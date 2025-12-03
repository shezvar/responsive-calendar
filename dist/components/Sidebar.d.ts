import { Event } from '../types';

interface SidebarProps {
    currentDate: Date;
    onDateChange: (date: Date) => void;
    events: Event[];
}
export default function Sidebar({ currentDate, onDateChange, events }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
