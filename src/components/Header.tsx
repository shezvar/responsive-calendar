import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, ChevronDownIcon, ArrowLeftStartOnRectangleIcon, PlusIcon } from '@heroicons/react/20/solid'
import { format } from 'date-fns'
import { ViewType } from '../types'
import { navigation } from '../utils'
import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'

interface HeaderProps {
    currentDate: Date
    view: ViewType
    onViewChange: (view: ViewType) => void
    onDateChange: (date: Date) => void
    onToggleSidebar: () => void
    isSidebarOpen: boolean
    onCreateEvent: () => void
    enableSidebar?: boolean
}

export default function Header({ currentDate, view, onViewChange, onDateChange, onToggleSidebar, isSidebarOpen, onCreateEvent, enableSidebar = true }: HeaderProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const getTitle = () => {
        if (view === 'year') return format(currentDate, 'yyyy')
        if (view === 'month' || view === 'week') return format(currentDate, 'MMMM yyyy')
        return format(currentDate, 'MMMM d, yyyy')
    }

    const navigate = (direction: 'previous' | 'next') => {
        const navFunc = navigation[view][direction]
        onDateChange(navFunc(currentDate, 1))
    }

    const handleViewSelect = (selectedView: ViewType) => {
        onViewChange(selectedView)
        setIsDropdownOpen(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header className="flex bg-white items-center justify-between border-b border-stone-200 px-3 py-2 dark:bg-stone-900 dark:border-white/10">
            <div className='flex items-center gap-4'>
                {/* Navigation */}
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center gap-2">
                        {enableSidebar && (
                            <button
                                onClick={onToggleSidebar}
                                className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-white transition-colors hidden lg:block"
                                title={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
                            >
                                <ArrowLeftStartOnRectangleIcon className={clsx(
                                    "size-5 transition-transform duration-300",
                                    !isSidebarOpen && "rotate-180"
                                )} />
                            </button>
                        )}
                        <button
                            onClick={() => onDateChange(new Date())}
                            className="px-3 py-1 text-sm font-medium rounded-md hover:bg-stone-100 text-stone-700 hover:text-stone-900 dark:hover:bg-stone-800 dark:text-stone-300 dark:hover:text-white"
                        >
                            Today
                        </button>
                        <div className="flex items-center">
                            <button
                                onClick={() => navigate('previous')}
                                className="p-1 text-stone-400 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-600 dark:hover:text-white"
                                aria-label="Previous period"
                            >
                                <ChevronLeftIcon className="size-5" />
                            </button>
                            <button
                                onClick={() => navigate('next')}
                                className="p-1 text-stone-400 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-600 dark:hover:text-white"
                                aria-label="Next period"
                            >
                                <ChevronRightIcon className="size-5" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:block">
                        <h1 className="px-3 py-1 text-sm font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white">
                            {getTitle()}
                            {(view === 'day' || view === 'week') && (
                                <span className="ml-2 text-sm font-normal text-stone-500">(Week {format(currentDate, 'w')})</span>
                            )}
                        </h1>
                        {/* {view === 'day' && <p className="text-sm text-stone-500 dark:text-stone-400">GMT+1</p>} */}
                    </div>
                </div>

            </div>

            <div className="flex items-center gap-4">
                {/* View Selector Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-3 py-1 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
                    >
                        <span className="capitalize">{view} view</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-stone-800 dark:ring-stone-700 z-10">
                            <div className="py-1">
                                {(['day', 'week', 'month', 'year', 'scheduled'] as ViewType[]).map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => handleViewSelect(v)}
                                        className={clsx(
                                            'block w-full px-4 py-2 text-left text-sm capitalize',
                                            view === v
                                                ? 'bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-white'
                                                : 'text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-700'
                                        )}
                                    >
                                        {v} view
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Search & Add */}
                <div className="flex items-center gap-2">
                    <button className="p-2 text-stone-400 hover:text-stone-600 hidden">
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={onCreateEvent}
                        className="rounded-full bg-blue-600 p-1 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
                        aria-label="Create event"
                    >
                        <PlusIcon aria-hidden="true" className="size-5" />
                    </button>
                </div>
            </div>
        </header>
    )
}
