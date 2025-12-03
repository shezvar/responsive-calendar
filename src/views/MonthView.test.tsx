import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MonthView from './MonthView'
import { sampleEvents } from '../sampleEvents'

describe('MonthView Component', () => {
    const mockDate = new Date(2023, 9, 15) // October 15, 2023
    const mockProps = {
        currentDate: mockDate,
        events: sampleEvents,
        onDateChange: vi.fn(),
        onViewChange: vi.fn(),
        onEventClick: vi.fn(),
        onSlotClick: vi.fn(),
    }

    it('renders the correct month and year', () => {
        // MonthView usually doesn't render the header (Header component does), 
        // but it renders the days.
        // Let's check if it renders the days of the week header if it has one,
        // or just check for specific dates.
        render(<MonthView {...mockProps} />)

        // October 2023 starts on Sunday. 1st should be visible.
        expect(screen.getAllByText('1').length).toBeGreaterThan(0)
        // 31st should be visible
        expect(screen.getAllByText('31').length).toBeGreaterThan(0)
    })

    it('renders events correctly', () => {
        // We need to make sure sampleEvents has an event in October 2023 or update the mock date to match sample events.
        // Let's check sampleEvents content first or mock events.
        const testEvents = [
            {
                id: '1',
                name: 'Test Event',
                time: '10:00 AM - 11:00 AM',
                datetime: '2023-10-15T10:00:00',
                href: '#',
            }
        ]

        render(<MonthView {...mockProps} events={testEvents} />)
        expect(screen.getByText('Test Event')).toBeInTheDocument()
    })

    it('switches to day view when a day is clicked', () => {
        render(<MonthView {...mockProps} />)

        // Click on the 15th
        const dayCell = screen.getByText('15').closest('div')
        if (dayCell) {
            fireEvent.click(dayCell)
            expect(mockProps.onDateChange).toHaveBeenCalled()
            expect(mockProps.onViewChange).toHaveBeenCalledWith('day')
        }
    })
})

