import Calendar from './Calendar'
import { sampleEvents } from './sampleEvents'
import './index.css' // Assuming Tailwind is imported here or in a global css

export default function App() {
    // Basic URL param parsing for E2E testing
    const params = new URLSearchParams(window.location.search)
    const disableCreateEvent = params.get('disableCreateEvent') === 'true'
    const customClick = params.get('customClick') === 'true'

    const handleEventClick = customClick ? (event: any) => {
        // Set attribute for Playwright to detect
        document.body.setAttribute('data-last-clicked-event', String(event.id))
        console.log('Custom click:', event)
    } : undefined

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-white shadow-sm p-4 z-10 hidden">
                <h1 className="text-xl font-bold text-gray-900">Calendar Plugin Demo</h1>
            </header>
            <main className="flex-1 overflow-hidden">
                <Calendar
                    events={sampleEvents}
                    disableCreateEvent={disableCreateEvent}
                    onEventClick={handleEventClick}
                />
            </main>
        </div>
    )
}
