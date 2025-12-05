# React Calendar Plugin

A flexible, reusable, and customizable calendar component for React applications. Built with **Tailwind CSS** and **date-fns**, it offers multiple views, drag-and-drop support (coming soon), and seamless integration into modern React projects.

## Features

- **Multiple Views**: Switch between Day, Week, Month, and Year views.
- **Responsive**: Fully responsive design that works on desktop and mobile.
- **Dark Mode**: Native dark mode support.
- **Isolated Styles**: Styles are scoped to prevent conflicts with your application's CSS.
- **Customizable**: extensive props for styling, behavior, and component replacement.
- **React 18 & 19 Support**: Compatible with the latest React versions.

## Installation

```bash
npm install react-calendar-plugin date-fns @heroicons/react @headlessui/react clsx react react-dom
```

## Quick Start

### 1. Import Styles
Import the CSS file once in your application (e.g., in `main.tsx` or `App.tsx`).

```tsx
import 'react-calendar-plugin/dist/style.css'
```

### 2. Render Calendar
Import and use the `Calendar` component.

```tsx
import { Calendar } from 'react-calendar-plugin'

function App() {
  return (
    <div className="h-screen p-4">
      <Calendar />
    </div>
  )
}
```

## Use Cases

### Basic Event Display
Pass an array of events to display them on the calendar.

```tsx
const events = [
  {
    id: 1,
    name: 'Team Meeting',
    time: '10:00 AM',
    datetime: '2023-11-20T10:00:00',
    href: '#'
  }
]

<Calendar events={events} />
```

### Read-Only / Display Only
Use the `disableCreateEvent` prop to hide the "+" button and prevent users from creating new events by clicking on slots. This is perfect for dashboards where users can view but not edit schedules.

```tsx
<Calendar 
  events={events}
  disableCreateEvent={true}
  isDateDisabled={(date) => date.getDay() === 0} // Disable Sundays
/>
```

### Custom Event Handling
Hooks for all major interactions allow you to sync with your backend.

```tsx
<Calendar
  onEventCreate={async (newEvent) => {
    // API call to save event
    await saveEvent(newEvent)
  }}
  onEventUpdate={(event) => console.log('Update:', event)}
  onEventDelete={(id) => console.log('Delete:', id)}
  onSlotClick={(date) => console.log('Clicked empty slot at:', date)}
  onEventClick={(event) => {
    // Custom navigation example
    window.location.href = `/tasks/${event.id}`
  }}
/>
```

### Layout Customization
You can toggle the sidebar or replace the entire header with your own component.

```tsx
<Calendar
  enableSidebar={false} // Hide the sidebar
  renderHeader={({ currentDate, onViewChange }) => (
    <div className="flex justify-between p-4">
      <h2>{currentDate.toDateString()}</h2>
      <button onClick={() => onViewChange('week')}>Week View</button>
    </div>
  )}
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `events` | `Event[]` | `[]` | List of events to display. |
| `initialView` | `'day' \| 'week' \| 'month' \| 'year'` | `'month'` | The view to show initially. |
| `initialDate` | `Date` | `new Date()` | The date to show initially. |
| `disableCreateEvent` | `boolean` | `false` | **New!** Disables all event creation UI (drawer & buttons). |
| `enableSidebar` | `boolean` | `true` | Shows/hides the left sidebar. |
| `onEventCreate` | `(event) => void` | - | Fn called when saving a new event. |
| `onEventUpdate` | `(event) => void` | - | Fn called when updating an event. |
| `onEventDelete` | `(id) => void` | - | Fn called when deleting an event. |
| `onSlotClick` | `(date) => void` | - | Fn called when clicking an empty time slot. |
| `onEventClick` | `(event) => void` | - | Fn called when clicking an existing event. Overrides default drawer. |
| `isDateDisabled` | `(date) => boolean` | - | Fn to disable specific dates (visual & interactive). |
| `className` | `string` | - | Classes for the root container. |
| `classNames` | `object` | - | Classes for specific sub-components (`header`, `sidebar`, `content`). |

### Event Object Structure

```typescript
interface Event {
    id: string | number
    name: string
    time: string
    datetime: string // ISO 8601 string
    endDatetime?: string // ISO 8601 string
    description?: string
    href?: string
}
```

## Styling & Tailwind

This plugin uses **isolated styles**. The CSS included in `dist/style.css` is scoped (via Tailwind configuration) so it **does not** reset your application's global styles (Preflight is disabled).

If you want to override styles deeply using your own Tailwind config, you can include the plugin source in your `content` array, but standard CSS overrides usually suffice.

## Troubleshooting

### "Module not found: ... style.css"
Ensure you are importing the CSS from the correct path:
`import 'react-calendar-plugin/dist/style.css'`

### React 19 Support
This package declares `peerDependencies` for both React 18 and 19. You should not see dependency warnings during install.

## License

MIT
