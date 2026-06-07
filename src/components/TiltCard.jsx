import { useState } from "react";

// Reusable 3D tilt card
export default function TiltCard({ children, className = "" }) {
    const [style, setStyle] = useState({});

    function handleMouseMove(event) {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        setStyle({
            transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
        });
    }

    function handleMouseLeave() {
        setStyle({
            transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
        });
    }

    return (
        <div
            className={`transition-transform duration-200 ${className}`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}