import { ViewType } from '../types';

interface HeaderProps {
    currentDate: Date;
    view: ViewType;
    onViewChange: (view: ViewType) => void;
    onDateChange: (date: Date) => void;
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
    onCreateEvent: () => void;
}
export default function Header({ currentDate, view, onViewChange, onDateChange, onToggleSidebar, isSidebarOpen, onCreateEvent }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
