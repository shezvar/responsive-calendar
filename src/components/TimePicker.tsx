
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface TimePickerProps {
    value: string
    onChange: (time: string) => void
}

// Generate time slots every 15 minutes
const times = Array.from({ length: 24 * 4 }).map((_, i) => {
    const hour = Math.floor(i / 4)
    const minute = (i % 4) * 15
    const date = new Date()
    date.setHours(hour, minute)
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
})

export default function TimePicker({ value, onChange }: TimePickerProps) {
    return (
        <div className="w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 max-h-60 overflow-auto">
            <ul className="py-1">
                {times.map((time) => (
                    <li
                        key={time}
                        className={clsx(
                            'relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100',
                            time === value ? 'text-blue-600 font-semibold' : 'text-gray-900'
                        )}
                        onClick={() => onChange(time)}
                    >
                        <span className="block truncate">{time}</span>
                        {time === value ? (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}
