# React Calendar Plugin

A reusable and customizable calendar component for React applications, built with Tailwind CSS and date-fns.

## Features

- **Multiple Views**: Month, Week, Day, and Year views.
- **Dynamic Navigation**: Navigate between dates and views seamlessly.
- **Event Rendering**: Display events on the calendar with support for time ranges.
- **Responsive Design**: Optimized for various screen sizes.
- **Dark Mode Support**: Built-in dark mode styles.

## Installation

This plugin is designed to be integrated into your React project. Ensure you have the necessary dependencies installed:

```bash
npm install date-fns @heroicons/react @headlessui/react clsx
```

## Usage

Import the `Calendar` component and use it in your application:

```tsx
import { Calendar } from './path/to/calendar'
import { Event } from './path/to/calendar/types'

const events: Event[] = [
  {
    id: '1',
    name: 'Meeting',
    time: '10:00 AM',
    datetime: '2023-10-25T10:00:00',
    endDatetime: '2023-10-25T11:00:00',
    href: '#',
  },
  // ... more events
]

function App() {
  return (
    <div className="h-screen">
      <Calendar events={events} initialView="month" />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `events` | `Event[]` | `[]` | Array of event objects to display. |
| `initialView` | `'day' \| 'week' \| 'month' \| 'year'` | `'month'` | The initial view to render. |
| `initialDate` | `Date` | `new Date()` | The initial date to display. |
| `locale` | `Locale` | `undefined` | Date-fns locale object for internationalization. |
| `className` | `string` | `undefined` | Class name for the root container. |
| `classNames` | `CalendarClassNames` | `undefined` | Object containing class names for specific parts of the calendar. |
| `onEventCreate` | `(event: Omit<Event, 'id'>) => void` | `undefined` | Callback fired when a new event is created. |
| `onEventUpdate` | `(event: Event) => void` | `undefined` | Callback fired when an event is updated. |
| `onEventDelete` | `(eventId: string \| number) => void` | `undefined` | Callback fired when an event is deleted. |
| `onDateChange` | `(date: Date) => void` | `undefined` | Callback fired when the selected date changes. |
| `onViewChange` | `(view: ViewType) => void` | `undefined` | Callback fired when the view changes. |
| `renderHeader` | `(props: any) => React.ReactNode` | `undefined` | Render prop to replace the default header. |
| `renderSidebar` | `(props: any) => React.ReactNode` | `undefined` | Render prop to replace the default sidebar. |
| `isDateDisabled` | `(date: Date) => boolean` | `undefined` | Function to determine if a date should be disabled. |
| `onSlotClick` | `(date: Date) => void` | `undefined` | Callback fired when an empty time slot is clicked. |

## Advanced Features

### Click to Create

By default, clicking on an empty time slot in the Day or Week view will open the "Create Event" drawer with the date and time pre-filled. You can override this behavior by providing an `onSlotClick` callback.

```tsx
<Calendar
  onSlotClick={(date) => {
    console.log('Clicked slot:', date);
    // Open your own modal or navigate to a create page
  }}
/>
```

### Disabling Dates

You can disable specific dates or date ranges using the `isDateDisabled` prop. Disabled dates will be visually indicated and non-interactive.

```tsx
<Calendar
  // Disable weekends
  isDateDisabled={(date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  }}
/>
```

## Customization

### Styling

You can customize the appearance of the calendar using the `className` and `classNames` props.

```tsx
<Calendar
  className="bg-gray-50 h-full"
  classNames={{
    sidebar: 'bg-white border-r border-gray-200',
    header: 'bg-white border-b border-gray-200',
    content: 'p-4',
  }}
/>
```

### Component Replacement

For complete control, you can replace the header and sidebar using render props.

```tsx
<Calendar
  renderHeader={({ currentDate, view, onViewChange }) => (
    <div className="my-custom-header">
      <h1>{format(currentDate, 'MMMM yyyy')}</h1>
      {/* ... custom controls */}
    </div>
  )}
/>
```

## Event Management

The calendar provides callbacks for managing events, allowing you to integrate with your backend or state management system.

```tsx
<Calendar
  onEventCreate={async (newEvent) => {
    const createdEvent = await api.createEvent(newEvent);
    setEvents([...events, createdEvent]);
  }}
  onEventUpdate={async (updatedEvent) => {
    await api.updateEvent(updatedEvent);
    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
  }}
  onEventDelete={async (eventId) => {
    await api.deleteEvent(eventId);
    setEvents(events.filter(e => e.id !== eventId));
  }}
/>
```

## Event Object

```typescript
interface Event {
  id: string | number
  name: string
  time: string
  datetime: string // ISO string
  endDatetime?: string // ISO string
  href: string
}
```

## Demo

To run the demo application included in this repository:

1.  Install dependencies: `npm install`
2.  Start the development server: `npm run dev`
3.  Open your browser to the local server URL (usually `http://localhost:5173`).
