interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}
export default function ConfirmDialog({ isOpen, title, message, confirmText, cancelText, onConfirm, onCancel, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
