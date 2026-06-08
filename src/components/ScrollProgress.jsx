import { motion, useScroll, useSpring } from "framer-motion";

// This creates a thin progress bar at the top of the page.
// It fills as the user scrolls down.
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed left-0 top-0 z-[999] h-1 origin-left bg-gradient-to-r from-electric via-purpleGlow to-emeraldGlow"
            style={{ scaleX }}
        />
    );
}