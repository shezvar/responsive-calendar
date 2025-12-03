import { Event } from '../types';

interface CreateEventDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (event: Omit<Event, 'id'>) => Promise<void> | void;
    initialDate?: Date;
    initialTime?: string;
}
export default function CreateEventDrawer({ isOpen, onClose, onSave, initialDate, initialTime }: CreateEventDrawerProps): import("react/jsx-runtime").JSX.Element;
export {};
