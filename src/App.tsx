import Calendar from './Calendar'
import { sampleEvents } from './sampleEvents'
import './index.css' // Assuming Tailwind is imported here or in a global css

export default function App() {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-white shadow-sm p-4 z-10 hidden">
                <h1 className="text-xl font-bold text-gray-900">Calendar Plugin Demo</h1>
            </header>
            <main className="flex-1 overflow-hidden">
                <Calendar events={sampleEvents} />
            </main>
        </div>
    )
}
