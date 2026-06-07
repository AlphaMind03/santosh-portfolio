import { motion } from "framer-motion";
import { ArrowUpRight, Code2, FileText } from "lucide-react";
import { projects } from "../data/projects";
import TiltCard from "./TiltCard";

export default function Projects() {
    return (
        <section id="projects" className="relative px-5 py-24">
            <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                        Projects
                    </p>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        Practical projects built with modern tools.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        These projects show my ability to design user interfaces, build app
                        logic, connect backends, work with data, and solve real problems.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <TiltCard>
            <article
                className={`glass-card overflow-hidden rounded-3xl transition hover:border-electric/50 ${project.featured ? "lg:grid lg:grid-cols-[0.9fr_1.1fr]" : ""
                    }`}
            >
                {/* Project image/mockup */}
                <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-electric/20 via-purpleGlow/20 to-emeraldGlow/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full min-h-72 w-full object-cover opacity-80 transition duration-500 hover:scale-105"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

                    <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-dark/70 px-4 py-2 text-sm backdrop-blur-xl">
                        {project.featured ? "Featured Project" : "Project"}
                    </div>
                </div>

                {/* Project content */}
                <div className="p-7 lg:p-8">
                    <h3 className="text-2xl font-black sm:text-3xl">{project.title}</h3>

                    <p className="mt-4 leading-8 text-slate-300">
                        {project.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-2 text-sm font-semibold text-electric">
                            Problem it solves
                        </p>
                        <p className="leading-7 text-slate-400">{project.problem}</p>
                    </div>

                    <div className="mt-6">
                        <p className="mb-3 text-sm font-semibold text-slate-200">
                            Key features
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                                >
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-sm text-electric"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="mb-2 text-sm font-semibold text-emeraldGlow">
                            What I learned
                        </p>
                        <p className="leading-7 text-slate-400">{project.learned}</p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href={project.live}
                            className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-dark transition hover:shadow-glow"
                        >
                            Live Demo <ArrowUpRight size={16} />
                        </a>

                        <a
                            href={project.github}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-electric hover:text-electric"
                        >
                            GitHub <Code2 size={16} />
                        </a>

                        <a
                            href={project.caseStudy}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-emeraldGlow hover:text-emeraldGlow"
                        >
                            Case Study <FileText size={16} />
                        </a>
                    </div>
                </div>
            </article>
        </TiltCard>
    );
}