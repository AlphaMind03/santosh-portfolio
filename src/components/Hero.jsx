import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Mail,
    Code2,
    Smartphone,
    Server,
    Brain,
} from "lucide-react";
import TiltCard from "./TiltCard";

const techItems = [
    { label: "React", icon: Code2 },
    { label: "React Native", icon: Smartphone },
    { label: "Node.js", icon: Server },
    { label: "AI / Data", icon: Brain },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
        >
            {/* Background glow orbs */}
            <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purpleGlow/20 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                {/* Left content */}
                <div>
                    <motion.p
                        className="mb-4 inline-flex rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm text-electric"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        London-based Front-End Developer
                    </motion.p>

                    <motion.h1
                        className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Building practical software with{" "}
                        <span className="gradient-text">modern UI</span> and real business
                        thinking.
                    </motion.h1>

                    <motion.p
                        className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        I’m Santosh Adhikari, a BSc Computer Science graduate from the
                        University of East London. I focus on React, React Native,
                        full-stack development, data, and AI-powered software.
                    </motion.p>

                    <motion.div
                        className="mt-9 flex flex-col gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 font-semibold text-dark transition hover:shadow-glow"
                        >
                            View Projects
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="/Santosh-Adhikari-CV.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-electric hover:text-electric"
                        >
                            <Download size={18} />
                            Download CV
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emeraldGlow hover:text-emeraldGlow"
                        >
                            <Mail size={18} />
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right 3D developer card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.35 }}
                >
                    <TiltCard>
                        <div className="glass-card relative overflow-hidden rounded-3xl p-6">
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/20 blur-3xl" />

                            <div className="rounded-2xl border border-white/10 bg-dark/70 p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-400">Developer Profile</p>
                                        <h2 className="text-2xl font-bold">Santosh Adhikari</h2>
                                    </div>

                                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-electric to-purpleGlow" />
                                </div>

                                <div className="rounded-2xl bg-black/40 p-4 font-mono text-sm text-slate-300">
                                    <p>
                                        <span className="text-emeraldGlow">const</span> developer ={" "}
                                        {"{"}
                                    </p>
                                    <p className="pl-4">role: "Front-End Developer",</p>
                                    <p className="pl-4">location: "London, UK",</p>
                                    <p className="pl-4">focus: "React + UX + Real Products"</p>
                                    <p>{"}"}</p>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {techItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.label}
                                                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-electric/50 hover:bg-electric/10"
                                            >
                                                <Icon className="mb-3 text-electric" size={24} />
                                                <p className="text-sm font-semibold">{item.label}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            </div>
        </section>
    );
}