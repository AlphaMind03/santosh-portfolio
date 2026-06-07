import { motion } from "framer-motion";
import {
    Users,
    MessageCircle,
    Clock,
    ShieldCheck,
    Lightbulb,
    Gauge,
} from "lucide-react";

const skills = [
    {
        icon: Users,
        title: "Teamwork",
        text: "Worked in fast-paced teams where clear communication and reliability were important every day.",
    },
    {
        icon: MessageCircle,
        title: "Communication",
        text: "Built confidence communicating with customers, team members, and managers.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        text: "Solved practical problems quickly during busy service and changing situations.",
    },
    {
        icon: Clock,
        title: "Time Management",
        text: "Managed tasks under pressure while keeping quality and speed consistent.",
    },
    {
        icon: Gauge,
        title: "Working Under Pressure",
        text: "Learned how to stay calm, focused, and organised in demanding environments.",
    },
    {
        icon: ShieldCheck,
        title: "Responsibility",
        text: "Handled important tasks carefully, followed standards, and supported the team.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative px-5 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                        Experience
                    </p>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        Real-world experience that makes me a better developer.
                    </h2>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.div
                        className="glass-card rounded-3xl p-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-5 text-2xl font-bold">
                            Hospitality & Customer Service Background
                        </h3>

                        <p className="leading-8 text-slate-300">
                            Before fully focusing on technology, I gained real-world
                            experience in hospitality and customer service. This helped me
                            develop strong communication, teamwork, responsibility, and
                            problem-solving skills.
                        </p>

                        <p className="mt-5 leading-8 text-slate-300">
                            Working in busy restaurants and customer-facing environments
                            taught me how to stay calm under pressure, understand user needs,
                            manage time, and work as part of a team.
                        </p>

                        <p className="mt-5 leading-8 text-slate-300">
                            These skills now help me as a developer because good software is
                            not only about code. It is about understanding people, workflows,
                            business problems, and creating simple solutions that users can
                            actually use.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {skills.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    className="glass-card rounded-3xl p-6 transition hover:border-electric/50"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Icon className="mb-4 text-electric" size={26} />
                                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}