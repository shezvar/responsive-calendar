import { Fragment, useState, useEffect } from 'react'
import { Event } from '../types'
import { Dialog, Transition, Switch, Listbox, Popover } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
    ClockIcon,
    GlobeAltIcon,
    UserGroupIcon,
    VideoCameraIcon,
    MapPinIcon,
    Bars3BottomLeftIcon,
    CalendarIcon,
    BellIcon,
    ChevronDownIcon,
    LockClosedIcon,
    BriefcaseIcon,
    CheckIcon,
    QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { format } from 'date-fns'
import MiniCalendar from './MiniCalendar'
import TimePicker from './TimePicker'
import ConfirmDialog from './ConfirmDialog'

interface ViewEventDrawerProps {
    isOpen: boolean
    onClose: () => void
    event?: Event
    onUpdate?: (event: Event) => Promise<void> | void
    onDelete?: (eventId: string | number) => Promise<void> | void
}

const repeatOptions = [
    { id: 'none', name: 'Do not repeat' },
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' },
]

const timezoneOptions = [
    { id: 'GMT', name: 'London (GMT+0)' },
    { id: 'CET', name: 'Paris (GMT+1)' },
    { id: 'EET', name: 'Athens (GMT+2)' },
    { id: 'EST', name: 'New York (GMT-5)' },
    { id: 'PST', name: 'Los Angeles (GMT-8)' },
    { id: 'JST', name: 'Tokyo (GMT+9)' },
]

const availabilityOptions = [
    { id: 'busy', name: 'Busy' },
    { id: 'free', name: 'Free' },
]

const visibilityOptions = [
    { id: 'default', name: 'Default visibility' },
    { id: 'public', name: 'Public' },
    { id: 'private', name: 'Private' },
]

const notificationOptions = [
    { id: 'start', name: 'When event starts' },
    { id: '5min', name: '5 minutes before' },
    { id: '10min', name: '10 minutes before' },
    { id: '15min', name: '15 minutes before' },
    { id: '30min', name: '30 minutes before' },
    { id: '1hour', name: '1 hour before' },
    { id: '1day', name: '1 day before' },
]

const colorOptions = [
    { id: 'blue', value: 'bg-blue-500', selectedClass: 'ring-blue-500' },
    { id: 'red', value: 'bg-red-500', selectedClass: 'ring-red-500' },
    { id: 'orange', value: 'bg-orange-500', selectedClass: 'ring-orange-500' },
    { id: 'yellow', value: 'bg-yellow-500', selectedClass: 'ring-yellow-500' },
    { id: 'green', value: 'bg-green-500', selectedClass: 'ring-green-500' },
    { id: 'teal', value: 'bg-teal-500', selectedClass: 'ring-teal-500' },
    { id: 'sky', value: 'bg-sky-500', selectedClass: 'ring-sky-500' },
    { id: 'indigo', value: 'bg-indigo-500', selectedClass: 'ring-indigo-500' },
    { id: 'purple', value: 'bg-purple-500', selectedClass: 'ring-purple-500' },
    { id: 'pink', value: 'bg-pink-500', selectedClass: 'ring-pink-500' },
    { id: 'gray', value: 'bg-stone-500', selectedClass: 'ring-stone-500' },
]

export default function ViewEventDrawer({ isOpen, onClose, event, onUpdate, onDelete }: ViewEventDrawerProps) {
    const [title, setTitle] = useState('')
    const [allDay, setAllDay] = useState(false)
    const [selectedRepeat, setSelectedRepeat] = useState(repeatOptions[0])
    const [selectedTimezone, setSelectedTimezone] = useState<typeof timezoneOptions[0] | null>(null)

    // Date/Time State
    const [isDateTimeExpanded, setIsDateTimeExpanded] = useState(false)
    const [startDate, setStartDate] = useState(new Date())

    const [startTime, setStartTime] = useState('10:00 AM')
    const [endTime, setEndTime] = useState('11:00 AM')

    // Options State
    const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
    const [selectedAvailability, setSelectedAvailability] = useState(availabilityOptions[0])
    const [selectedVisibility, setSelectedVisibility] = useState(visibilityOptions[0])
    const [selectedNotification, setSelectedNotification] = useState(notificationOptions[4]) // 30 min default
    const [selectedColor, setSelectedColor] = useState(colorOptions[0])

    // Dirty & Confirmation State
    const [isDirty, setIsDirty] = useState(false)
    const [isDiscardDialogOpen, setIsDiscardDialogOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            if (event) {
                setTitle(event.name)
                // In a real app, we'd parse other fields from event
            } else {
                setTitle('')
            }
            setAllDay(false)
            setSelectedRepeat(repeatOptions[0])
            setSelectedTimezone(null)
            setIsDateTimeExpanded(false)
            setStartDate(new Date())

            setStartTime('10:00 AM')
            setEndTime('11:00 AM')
            setIsOptionsExpanded(false)
            setSelectedAvailability(availabilityOptions[0])
            setSelectedVisibility(visibilityOptions[0])
            setSelectedNotification(notificationOptions[4])
            setSelectedColor(colorOptions[0])
            setIsDirty(false)
            setIsDiscardDialogOpen(false)
        }
    }, [event, isOpen])

    const handleClose = () => {
        if (isDirty) {
            setIsDiscardDialogOpen(true)
        } else {
            onClose()
        }
    }

    const handleDiscard = () => {
        setIsDiscardDialogOpen(false)
        onClose()
    }

    const handleChange = (setter: (value: any) => void, value: any) => {
        setter(value)
        setIsDirty(true)
    }

    const handleSave = async () => {
        if (!onUpdate || !event) {
            onClose()
            return
        }

        // Helper to parse time string "10:00 AM" and set on date
        const setTimeOnDate = (date: Date, timeStr: string) => {
            const [time, modifier] = timeStr.split(' ')
            let [hours, minutes] = time.split(':').map(Number)

            if (hours === 12) {
                hours = 0
            }
            if (modifier === 'PM') {
                hours += 12
            }

            const newDate = new Date(date)
            newDate.setHours(hours, minutes, 0, 0)
            return newDate
        }

        const startDateTime = setTimeOnDate(startDate, startTime)
        const endDateTime = setTimeOnDate(startDate, endTime)

        const updatedEvent = {
            ...event,
            name: title,
            time: `${startTime} - ${endTime}`,
            datetime: startDateTime.toISOString(),
            endDatetime: endDateTime.toISOString(),
            // Update other fields as needed
        }

        await onUpdate(updatedEvent)
    }

    const handleDelete = async () => {
        if (!onDelete || !event) return
        await onDelete(event.id)
    }

    return (
        <>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 right-3 bottom-3 top-3">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white">
                                            {/* Header */}
                                            <div className="bg-stone-50 px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-stone-900">
                                                        Edit event
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md bg-stone-50 text-stone-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                            onClick={handleClose}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="relative flex-1 px-4 py-6 sm:px-6 space-y-6">
                                                {/* Title */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-2 flex justify-center">
                                                        <span className="text-stone-400 text-lg">T</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <input
                                                            type="text"
                                                            className="block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Add title"
                                                            value={title}
                                                            onChange={(e) => handleChange(setTitle, e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Date & Time */}
                                                {/* Expandable Date & Time Section */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <ClockIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1">
                                                        {!isDateTimeExpanded ? (
                                                            // Collapsed View
                                                            <div
                                                                className="cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors"
                                                                onClick={() => setIsDateTimeExpanded(true)}
                                                            >
                                                                <div className="text-sm text-stone-900">
                                                                    {format(startDate, 'EEEE, d MMMM')} &nbsp; {startTime} – {endTime}
                                                                </div>
                                                                <div className="text-xs text-stone-500 mt-1">
                                                                    Time zone • {selectedRepeat.name}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            // Expanded Edit View
                                                            <div className="space-y-4">
                                                                {/* Row 1: Date, Start Time, End Time */}
                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                    {/* Date Picker */}
                                                                    <Popover className="relative">
                                                                        <Popover.Button className="bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none">
                                                                            {format(startDate, 'EEEE, d MMMM')}
                                                                        </Popover.Button>
                                                                        <Popover.Panel className="absolute z-10 mt-1">
                                                                            <MiniCalendar value={startDate} onChange={(date) => handleChange(setStartDate, date)} />
                                                                        </Popover.Panel>
                                                                    </Popover>

                                                                    {/* Start Time Picker */}
                                                                    <Popover className="relative">
                                                                        <Popover.Button className="bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none">
                                                                            {startTime}
                                                                        </Popover.Button>
                                                                        <Popover.Panel className="absolute z-10 mt-1">
                                                                            <TimePicker value={startTime} onChange={(time) => handleChange(setStartTime, time)} />
                                                                        </Popover.Panel>
                                                                    </Popover>

                                                                    <span className="text-stone-500">–</span>

                                                                    {/* End Time Picker */}
                                                                    <Popover className="relative">
                                                                        <Popover.Button className="bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded text-sm font-medium text-stone-900 focus:outline-none">
                                                                            {endTime}
                                                                        </Popover.Button>
                                                                        <Popover.Panel className="absolute z-10 mt-1">
                                                                            <TimePicker value={endTime} onChange={(time) => handleChange(setEndTime, time)} />
                                                                        </Popover.Panel>
                                                                    </Popover>
                                                                </div>

                                                                {/* Row 2: All day & Time zone */}
                                                                <div className="flex items-center gap-4">
                                                                    <div className="flex items-center gap-2">
                                                                        <Switch
                                                                            checked={allDay}
                                                                            onChange={(val) => handleChange(setAllDay, val)}
                                                                            className={clsx(
                                                                                allDay ? 'bg-blue-600' : 'bg-stone-200',
                                                                                'relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2'
                                                                            )}
                                                                        >
                                                                            <span
                                                                                aria-hidden="true"
                                                                                className={clsx(
                                                                                    allDay ? 'translate-x-4' : 'translate-x-0',
                                                                                    'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                                                )}
                                                                            />
                                                                        </Switch>
                                                                        <span className="text-sm text-stone-700">All day</span>
                                                                    </div>
                                                                    <Listbox value={selectedTimezone} onChange={(val) => handleChange(setSelectedTimezone, val)}>
                                                                        <div className="relative">
                                                                            <Listbox.Button className={clsx(
                                                                                "relative cursor-default rounded-md py-1 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6",
                                                                                selectedTimezone ? "text-blue-600" : "text-blue-600 hover:text-blue-500 font-medium"
                                                                            )}>
                                                                                <span className="block truncate">{selectedTimezone ? selectedTimezone.name : 'Time zone'}</span>
                                                                            </Listbox.Button>
                                                                            {selectedTimezone && (
                                                                                <button
                                                                                    type="button"
                                                                                    className="absolute -right-6 top-1.5 text-stone-400 hover:text-stone-600"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation()
                                                                                        handleChange(setSelectedTimezone, null)
                                                                                    }}
                                                                                >
                                                                                    <XMarkIcon className="h-5 w-5" />
                                                                                </button>
                                                                            )}
                                                                            <Transition
                                                                                as={Fragment}
                                                                                leave="transition ease-in duration-100"
                                                                                leaveFrom="opacity-100"
                                                                                leaveTo="opacity-0"
                                                                            >
                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {timezoneOptions.map((timezone) => (
                                                                                        <Listbox.Option
                                                                                            key={timezone.id}
                                                                                            className={({ active, selected }) =>
                                                                                                clsx(
                                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                                                    selected || active ? 'bg-stone-100 text-stone-900' : 'text-stone-700 hover:bg-stone-50'
                                                                                                )
                                                                                            }
                                                                                            value={timezone}
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                                    {timezone.name}
                                                                                                </span>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    ))}
                                                                                </Listbox.Options>
                                                                            </Transition>
                                                                        </div>
                                                                    </Listbox>
                                                                </div>

                                                                {/* Row 3: Repeat Dropdown */}
                                                                <Listbox value={selectedRepeat} onChange={(val) => handleChange(setSelectedRepeat, val)}>
                                                                    <div className="relative">
                                                                        <Listbox.Button className="relative cursor-default rounded-md border border-stone-300 bg-white py-1 pl-3 pr-10 text-left text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6">
                                                                            <span className="block truncate">{selectedRepeat.name}</span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronDownIcon className="h-5 w-5 text-stone-400" aria-hidden="true" />
                                                                            </span>
                                                                        </Listbox.Button>
                                                                        <Transition
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                        >
                                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                {repeatOptions.map((option) => (
                                                                                    <Listbox.Option
                                                                                        key={option.id}
                                                                                        className={({ active, selected }) =>
                                                                                            clsx(
                                                                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                                                selected || active ? 'bg-stone-100 text-stone-900' : 'text-stone-700 hover:bg-stone-50'
                                                                                            )
                                                                                        }
                                                                                        value={option}
                                                                                    >
                                                                                        {({ selected }) => (
                                                                                            <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                                {option.name}
                                                                                            </span>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                ))}
                                                                            </Listbox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </Listbox>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Timezone */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <GlobeAltIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <input type="text" defaultValue="London (GMT+0)" className="block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm" placeholder="Timezone" />
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Participants */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <UserGroupIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        <input type="text" className="block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm" placeholder="Add Participants" />

                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-between text-sm">
                                                                <span className="font-medium text-stone-900">3 participants</span>
                                                                <div className="flex items-center gap-2 text-stone-400">
                                                                    <button className="hover:text-stone-600">
                                                                        <span className="sr-only">Email</span>
                                                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                                                    </button>
                                                                    <button className="hover:text-stone-600">
                                                                        <span className="sr-only">Profile</span>
                                                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                                    </button>
                                                                    <button className="hover:text-stone-600">
                                                                        <XMarkIcon className="h-4 w-4" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-stone-500">1 yes, 2 awaiting</p>

                                                            {/* Mock Participants List */}
                                                            <div className="space-y-3">
                                                                <div className="flex items-start gap-3">
                                                                    <div className="relative">
                                                                        <img className="h-8 w-8 rounded-full bg-stone-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                                        <span className="absolute -bottom-0.5 -right-0.5 block h-3.5 w-3.5 rounded-full bg-white ring-2 ring-white">
                                                                            <span className="block h-full w-full rounded-full bg-green-500" />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm font-medium text-stone-900">James Collison</p>
                                                                        <p className="text-xs text-stone-500">organizer</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-start gap-3">
                                                                    <img className="h-8 w-8 rounded-full bg-stone-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                                    <div>
                                                                        <p className="text-sm font-medium text-stone-900">Daniel Hobbs</p>
                                                                        <p className="text-xs text-stone-500">dhobbs@site.com</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-start gap-3">
                                                                    <div className="h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600">L</div>
                                                                    <div>
                                                                        <p className="text-sm font-medium text-stone-900">Liza Harrison</p>
                                                                        <p className="text-xs text-stone-500">liza@site.com</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Permissions Accordion (Mock) */}
                                                            <div className="pt-2">
                                                                <button className="flex w-full items-center justify-between text-left text-sm text-stone-900">
                                                                    <div>
                                                                        <p className="font-medium">Participant permissions</p>
                                                                        <p className="text-xs text-stone-500">Invite others • See participant list</p>
                                                                    </div>
                                                                    <ChevronDownIcon className="h-4 w-4 text-stone-400" />
                                                                </button>
                                                            </div>

                                                            <div className="flex justify-end pt-2">
                                                                <div className="inline-flex rounded-md shadow-sm">
                                                                    <button type="button" className="relative inline-flex items-center rounded-l-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:z-10">
                                                                        Send invite
                                                                    </button>
                                                                    <button type="button" className="relative -ml-px inline-flex items-center rounded-r-md bg-blue-600 px-2 py-2 text-white hover:bg-blue-500 focus:z-10 border-l border-blue-700">
                                                                        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Video Call */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <VideoCameraIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        <div className="flex items-center gap-2">
                                                            {/* Google Meet Icon Placeholder */}
                                                            <div className="h-5 w-5 bg-green-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold">G</div>
                                                            <span className="text-sm text-stone-900">Google Meet</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                {/* Zoom Icon Placeholder */}
                                                                <div className="h-5 w-5 bg-blue-500 rounded-sm flex items-center justify-center text-[10px] text-white font-bold">Z</div>
                                                                <span className="text-sm text-stone-900">Zoom</span>
                                                            </div>
                                                            <button type="button" className="rounded bg-white px-2 py-1 text-xs font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50">
                                                                Connect
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Location */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <MapPinIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <input type="text" className="block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm" placeholder="Add Location" />
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Description */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-1 flex justify-center">
                                                        <Bars3BottomLeftIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <input type="text" className="block w-full border-0 p-0 text-stone-900 placeholder:text-stone-400 focus:ring-0 sm:text-sm" placeholder="Add description, URL, or Attachments" />
                                                    </div>
                                                </div>

                                                <div className="border-t border-stone-100" />

                                                {/* Options Section */}
                                                <div className="flex gap-4">
                                                    <div className="w-6 pt-2 flex justify-center">
                                                        <CalendarIcon className="h-5 w-5 text-stone-400" />
                                                    </div>
                                                    <div className="flex-1">
                                                        {!isOptionsExpanded ? (
                                                            // Collapsed View
                                                            <div
                                                                className="cursor-pointer hover:bg-stone-50 rounded-md p-2 -ml-2 transition-colors"
                                                                onClick={() => setIsOptionsExpanded(true)}
                                                            >
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className="text-sm font-medium text-stone-900">Segun Oroyo</span>
                                                                    <span className={clsx("h-2.5 w-2.5 rounded-full", selectedColor.value)} />
                                                                </div>
                                                                <div className="text-xs text-stone-500">
                                                                    {selectedAvailability.name} • {selectedVisibility.name} • Notify {selectedNotification.name.toLowerCase()}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            // Expanded View
                                                            <div className="space-y-4">
                                                                {/* Row 1: User & Color */}
                                                                <div className="flex items-center gap-2">
                                                                    {/* User Dropdown (Mock) */}
                                                                    <div className="relative flex-1">
                                                                        <button type="button" className="w-full flex items-center justify-between rounded-md bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900 hover:bg-stone-200">
                                                                            <span>Segun Oroyo</span>
                                                                            <ChevronDownIcon className="h-4 w-4 text-stone-500 hidden" />
                                                                        </button>
                                                                    </div>

                                                                    {/* Color Picker */}
                                                                    <Popover className="relative flex-1">
                                                                        <Popover.Button className={clsx("flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2", selectedColor.value, selectedColor.selectedClass)}>
                                                                            <span className="sr-only">Select color</span>
                                                                        </Popover.Button>
                                                                        <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                            <div className="grid grid-cols-5 gap-2">
                                                                                {colorOptions.map((color) => (
                                                                                    <button
                                                                                        key={color.id}
                                                                                        type="button"
                                                                                        className={clsx(
                                                                                            "h-6 w-6 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1",
                                                                                            color.value,
                                                                                            color.selectedClass
                                                                                        )}
                                                                                        onClick={() => handleChange(setSelectedColor, color)}
                                                                                    >
                                                                                        {selectedColor.id === color.id && (
                                                                                            <CheckIcon className="size-3 text-white" />
                                                                                        )}
                                                                                    </button>
                                                                                ))}
                                                                            </div>
                                                                        </Popover.Panel>
                                                                    </Popover>
                                                                </div>

                                                                {/* Row 2: Availability */}
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-6 flex justify-center">
                                                                        <BriefcaseIcon className="h-5 w-5 text-stone-400" />
                                                                    </div>
                                                                    <Listbox value={selectedAvailability} onChange={(val) => handleChange(setSelectedAvailability, val)}>
                                                                        <div className="relative flex-1">
                                                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6">
                                                                                <span className="block truncate">{selectedAvailability.name}</span>
                                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                    <ChevronDownIcon className="h-5 w-5 text-stone-400" aria-hidden="true" />
                                                                                </span>
                                                                            </Listbox.Button>
                                                                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {availabilityOptions.map((option) => (
                                                                                        <Listbox.Option
                                                                                            key={option.id}
                                                                                            className={({ active }) => clsx('relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-stone-100 text-stone-900' : 'text-stone-900')}
                                                                                            value={option}
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{option.name}</span>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    ))}
                                                                                </Listbox.Options>
                                                                            </Transition>
                                                                        </div>
                                                                    </Listbox>
                                                                </div>

                                                                {/* Row 3: Visibility */}
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-6 flex justify-center">
                                                                        <LockClosedIcon className="h-5 w-5 text-stone-400" />
                                                                    </div>
                                                                    <div className="flex-1 flex items-center gap-2">
                                                                        <Listbox value={selectedVisibility} onChange={(val) => handleChange(setSelectedVisibility, val)}>
                                                                            <div className="relative flex-1">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6">
                                                                                    <span className="block truncate">{selectedVisibility.name}</span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-stone-400" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>
                                                                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                        {visibilityOptions.map((option) => (
                                                                                            <Listbox.Option
                                                                                                key={option.id}
                                                                                                className={({ active }) => clsx('relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-stone-100 text-stone-900' : 'text-stone-900')}
                                                                                                value={option}
                                                                                            >
                                                                                                {({ selected }) => (
                                                                                                    <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{option.name}</span>
                                                                                                )}
                                                                                            </Listbox.Option>
                                                                                        ))}
                                                                                    </Listbox.Options>
                                                                                </Transition>
                                                                            </div>
                                                                        </Listbox>
                                                                        <QuestionMarkCircleIcon className="h-5 w-5 text-stone-400" />
                                                                    </div>
                                                                </div>

                                                                {/* Row 4: Notification */}
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-6 flex justify-center">
                                                                        <BellIcon className="h-5 w-5 text-stone-400" />
                                                                    </div>
                                                                    <Listbox value={selectedNotification} onChange={(val) => handleChange(setSelectedNotification, val)}>
                                                                        <div className="relative flex-1">
                                                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-stone-100 py-1.5 pl-3 pr-10 text-left text-stone-900 shadow-sm hover:bg-stone-200 focus:outline-none sm:text-sm sm:leading-6">
                                                                                <span className="block truncate">{selectedNotification.name}</span>
                                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                    <ChevronDownIcon className="h-5 w-5 text-stone-400" aria-hidden="true" />
                                                                                </span>
                                                                            </Listbox.Button>
                                                                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {notificationOptions.map((option) => (
                                                                                        <Listbox.Option
                                                                                            key={option.id}
                                                                                            className={({ active }) => clsx('relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-stone-100 text-stone-900' : 'text-stone-900')}
                                                                                            value={option}
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{option.name}</span>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    ))}
                                                                                </Listbox.Options>
                                                                            </Transition>
                                                                        </div>
                                                                    </Listbox>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className="flex flex-shrink-0 justify-between px-4 py-4 bg-stone-50">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-100"
                                                    onClick={handleDelete}
                                                >
                                                    Delete
                                                </button>
                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50"
                                                        onClick={handleClose}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                        onClick={handleSave}
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <ConfirmDialog
                isOpen={isDiscardDialogOpen}
                title="Discard unsaved changes?"
                message="You have unsaved changes. Are you sure you want to discard them? This action cannot be undone."
                confirmText="Discard changes"
                cancelText="Keep editing"
                onConfirm={handleDiscard}
                onCancel={() => setIsDiscardDialogOpen(false)}
            />
        </>
    )
}
