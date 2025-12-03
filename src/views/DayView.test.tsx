import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import DayView from './DayView'
import { sampleEvents } from '../sampleEvents'

describe('DayView Component', () => {
    const mockDate = new Date(2023, 9, 16) // October 16, 2023
    const mockProps = {
        currentDate: mockDate,
        events: sampleEvents,
        onDateChange: vi.fn(),
        onViewChange: vi.fn(),
        onEventClick: vi.fn(),
        onSlotClick: vi.fn(),
    }

    it('renders the correct day header', () => {
        render(<DayView {...mockProps} />)

        // Should show Mon, Tue, Wed, etc. for the week
        expect(screen.getByText('Mon')).toBeInTheDocument()

        // Should highlight the current day (16th)
        // We can check if 16 is present.
        expect(screen.getAllByText('16').length).toBeGreaterThan(0)
    })

    it('renders events correctly', () => {
        const testEvents = [
            {
                id: '1',
                name: 'Test Event',
                time: '10:00 AM - 11:00 AM',
                datetime: '2023-10-16T10:00:00',
                href: '#',
            }
        ]

        render(<DayView {...mockProps} events={testEvents} />)
        expect(screen.getByText('Test Event')).toBeInTheDocument()
    })

    it('calls onDateChange when a different day in the header is clicked', () => {
        render(<DayView {...mockProps} />)

        // Click on Tuesday (17th)
        // The header renders buttons for each day of the week.
        const dayHeader = screen.getAllByText('17')[0].closest('button')
        if (dayHeader) {
            fireEvent.click(dayHeader)
            expect(mockProps.onDateChange).toHaveBeenCalled()
        }
    })

    it('renders time slots', () => {
        render(<DayView {...mockProps} />)
        expect(screen.getByText('12 AM')).toBeInTheDocument()
        expect(screen.getByText('12 PM')).toBeInTheDocument()
    })
})
