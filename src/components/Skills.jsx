import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import TiltCard from "./TiltCard";

export default function Skills() {
    return (
        <section id="skills" className="relative px-5 py-24">
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purpleGlow/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                        Skills
                    </p>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        A modern skillset for building complete digital products.
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <TiltCard>
                                    <div className="glass-card h-full rounded-3xl p-6 transition hover:border-electric/50">
                                        <div className="mb-5 flex items-center gap-4">
                                            <div className="rounded-2xl bg-electric/10 p-3 text-electric">
                                                <Icon size={26} />
                                            </div>
                                            <h3 className="text-xl font-bold">{group.title}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-electric/40 hover:text-electric"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}