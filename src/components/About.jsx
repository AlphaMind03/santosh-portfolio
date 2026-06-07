import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Rocket } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative px-5 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                        About Me
                    </p>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        From real work experience to real digital products.
                    </h2>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div
                        className="glass-card rounded-3xl p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg leading-8 text-slate-300">
                            I started my journey with a strong interest in technology, problem
                            solving, and building useful digital products. Alongside my
                            Computer Science degree, I worked in hospitality and customer
                            service, where I learned how real businesses operate under
                            pressure.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-300">
                            That experience helps me think differently as a developer. I do
                            not only build apps that look good — I try to build software that
                            solves practical problems, saves time, improves workflow, and
                            creates a better experience for users.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-300">
                            My main focus is front-end development with React, modern UI
                            design, and mobile apps with React Native. I am also growing my
                            skills in back-end development, APIs, databases, data analysis,
                            and AI.
                        </p>
                    </motion.div>

                    <div className="grid gap-5">
                        <InfoCard
                            icon={BriefcaseBusiness}
                            title="Business Understanding"
                            text="Hospitality experience helped me understand real workflows, customers, pressure, and practical business problems."
                        />
                        <InfoCard
                            icon={Code2}
                            title="Practical Builder"
                            text="I build apps that are useful, structured, and focused on solving clear problems."
                        />
                        <InfoCard
                            icon={Rocket}
                            title="Growth Mindset"
                            text="My goal is to become a strong front-end developer and grow into full-stack, data, and AI development."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({ icon: Icon, title, text }) {
    return (
        <motion.div
            className="glass-card rounded-3xl p-6 transition hover:border-electric/50"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <Icon className="mb-4 text-electric" size={28} />
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="leading-7 text-slate-400">{text}</p>
        </motion.div>
    );
}