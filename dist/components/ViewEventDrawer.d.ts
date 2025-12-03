import { Event } from '../types';

interface ViewEventDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    event?: Event;
    onUpdate?: (event: Event) => Promise<void> | void;
    onDelete?: (eventId: string | number) => Promise<void> | void;
}
export default function ViewEventDrawer({ isOpen, onClose, event, onUpdate, onDelete }: ViewEventDrawerProps): import("react/jsx-runtime").JSX.Element;
export {};
