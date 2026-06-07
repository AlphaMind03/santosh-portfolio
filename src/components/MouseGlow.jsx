import { useEffect, useState } from "react";

// This component creates the soft glow that follows the mouse
export default function MouseGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup when component is removed
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-electric/20 blur-3xl transition-transform duration-100"
            style={{
                left: position.x - 160,
                top: position.y - 160,
            }}
        />
    );
}