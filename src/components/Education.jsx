import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="relative px-5 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="glass-card overflow-hidden rounded-3xl p-8 lg:p-10"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                                Education
                            </p>
                            <h2 className="text-4xl font-black tracking-tight">
                                Academic foundation in Computer Science.
                            </h2>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="mb-5 flex items-center gap-4">
                                <div className="rounded-2xl bg-electric/10 p-4 text-electric">
                                    <GraduationCap size={32} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        BSc (Hons) Computer Science
                                    </h3>
                                    <p className="text-slate-400">University of East London</p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark/60 p-4">
                                    <MapPin className="text-electric" size={20} />
                                    <span className="text-slate-300">London, UK</span>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-dark/60 p-4">
                                    <Calendar className="text-electric" size={20} />
                                    <span className="text-slate-300">
                                        Completed / Graduation: 2026
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}