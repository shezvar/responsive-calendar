import { useState, useEffect } from 'react'

export default function CurrentTimeIndicator() {
    const [top, setTop] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()
            // 28px offset for the top spacer (h-7)
            // 56px per hour (h-14)
            const position = 28 + (hours * 56) + ((minutes / 60) * 56)
            setTop(position)
        }

        updatePosition()
        const interval = setInterval(updatePosition, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="absolute left-0 right-0 border-t-2 border-red-500 z-20 pointer-events-none"
            style={{ top: `${top}px` }}
        >
            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-red-500" />
        </div>
    )
}
