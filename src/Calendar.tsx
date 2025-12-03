import { useState, useEffect } from 'react'
import { ViewType, CalendarProps, Event } from './types'
import DayView from './views/DayView'
import WeekView from './views/WeekView'
import MonthView from './views/MonthView'
import YearView from './views/YearView'
import ScheduledView from './views/ScheduledView'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CreateEventDrawer from './components/CreateEventDrawer'
import ViewEventDrawer from './components/ViewEventDrawer'
import clsx from 'clsx'

export default function Calendar({
    events = [],
    initialView = 'month',
    initialDate,
    className,
    classNames,
    onEventCreate,
    onEventUpdate,
    onEventDelete,
    onDateChange,
    onViewChange,
    isDateDisabled,
    onSlotClick,
    renderHeader,
    renderSidebar,
    enableSidebar = true
}: CalendarProps) {
    const [currentView, setCurrentView] = useState<ViewType>(initialView)
    const [currentDate, setCurrentDate] = useState<Date>(initialDate || new Date())
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false)
    const [isViewDrawerOpen, setIsViewDrawerOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined)

    // State for pre-filling create event drawer
    const [createEventInitialDate, setCreateEventInitialDate] = useState<Date | undefined>(undefined)
    const [createEventInitialTime, setCreateEventInitialTime] = useState<string | undefined>(undefined)

    // Sync internal state with props if provided
    useEffect(() => {
        if (initialView) setCurrentView(initialView)
    }, [initialView])

    useEffect(() => {
        if (initialDate) setCurrentDate(initialDate)
    }, [initialDate])

    const handleDateChange = (date: Date) => {
        setCurrentDate(date)
        onDateChange?.(date)
    }

    const handleViewChange = (view: ViewType) => {
        setCurrentView(view)
        onViewChange?.(view)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleCreateEvent = () => {
        setCreateEventInitialDate(new Date())
        setCreateEventInitialTime(undefined)
        setIsCreateDrawerOpen(true)
    }

    const handleSlotClick = (date: Date) => {
        if (onSlotClick) {
            onSlotClick(date)
        } else {
            // Default behavior: open create drawer
            setCreateEventInitialDate(date)
            // Format time as "HH:mm AM/PM"
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const ampm = hours >= 12 ? 'PM' : 'AM'
            const formattedHours = hours % 12 || 12
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
            setCreateEventInitialTime(`${formattedHours}:${formattedMinutes} ${ampm}`)

            setIsCreateDrawerOpen(true)
        }
    }

    const handleEventClick = (event: Event) => {
        setSelectedEvent(event)
        setIsViewDrawerOpen(true)
    }

    const handleCloseCreateDrawer = () => {
        setIsCreateDrawerOpen(false)
        setCreateEventInitialDate(undefined)
        setCreateEventInitialTime(undefined)
    }

    const handleCloseViewDrawer = () => {
        setIsViewDrawerOpen(false)
        setSelectedEvent(undefined)
    }

    const handleSaveEvent = async (eventData: Omit<Event, 'id'>) => {
        await onEventCreate?.(eventData)
        handleCloseCreateDrawer()
    }

    const handleUpdateEvent = async (event: Event) => {
        await onEventUpdate?.(event)
        handleCloseViewDrawer()
    }

    const handleDeleteEvent = async (eventId: string | number) => {
        await onEventDelete?.(eventId)
        handleCloseViewDrawer()
    }

    const renderView = () => {
        const props = {
            currentDate,
            events,
            onDateChange: handleDateChange,
            onViewChange: handleViewChange,
            onEventClick: handleEventClick,
            classNames,
            isDateDisabled,
            onSlotClick: handleSlotClick
        }

        switch (currentView) {
            case 'day':
                return <DayView {...props} />
            case 'week':
                return <WeekView {...props} />
            case 'month':
                return <MonthView {...props} />
            case 'year':
                return <YearView {...props} />
            case 'scheduled':
                return <ScheduledView {...props} />
            default:
                return <MonthView {...props} />
        }
    }

    return (
        <div className={clsx("flex h-full bg-white dark:bg-gray-900", className, classNames?.root)}>
            {enableSidebar && (
                <div
                    className={clsx(
                        "h-full transition-all duration-300 ease-in-out",
                        isSidebarOpen ? 'lg:w-64' : 'w-0',
                        classNames?.sidebar
                    )}
                    style={{ overflow: 'hidden' }}
                >
                    {renderSidebar ? renderSidebar({ currentDate, onDateChange: handleDateChange, events }) : (
                        <Sidebar currentDate={currentDate} onDateChange={handleDateChange} events={events} />
                    )}
                </div>
            )}
            <div className={clsx("flex flex-1 flex-col overflow-hidden", classNames?.content)}>
                {renderHeader ? renderHeader({
                    currentDate,
                    view: currentView,
                    onViewChange: handleViewChange,
                    onDateChange: handleDateChange,
                    onToggleSidebar: toggleSidebar,
                    isSidebarOpen,
                    onCreateEvent: handleCreateEvent,
                    enableSidebar
                }) : (
                    <Header
                        currentDate={currentDate}
                        view={currentView}
                        onViewChange={handleViewChange}
                        onDateChange={handleDateChange}
                        onToggleSidebar={toggleSidebar}
                        isSidebarOpen={isSidebarOpen}
                        onCreateEvent={handleCreateEvent}
                        enableSidebar={enableSidebar}
                    />
                )}
                <div className="flex-1 overflow-auto">
                    {renderView()}
                </div>
                <CreateEventDrawer
                    isOpen={isCreateDrawerOpen}
                    onClose={handleCloseCreateDrawer}
                    onSave={handleSaveEvent}
                    initialDate={createEventInitialDate}
                    initialTime={createEventInitialTime}
                />
                <ViewEventDrawer
                    isOpen={isViewDrawerOpen}
                    onClose={handleCloseViewDrawer}
                    event={selectedEvent}
                    onUpdate={handleUpdateEvent}
                    onDelete={handleDeleteEvent}
                />
            </div>
        </div>
    )
}
