import { motion } from "framer-motion";
import { Code2, ExternalLink, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative px-5 py-24">
            <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purpleGlow/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-electric">
                        Contact
                    </p>

                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        Let’s build something useful.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        I’m open to front-end developer roles, junior software developer
                        opportunities, freelance websites, startup projects, and
                        collaborations.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Left contact links */}
                    <motion.div
                        className="glass-card rounded-3xl p-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-6 text-2xl font-bold">Find me online</h3>

                        <div className="space-y-4">
                            <ContactLink
                                icon={Mail}
                                label="Email"
                                value="adhikari2023santosh@gmail.com"
                                href="mailto:adhikari2023santosh@gmail.com"
                            />

                            <ContactLink
                                icon={ExternalLink}
                                label="LinkedIn"
                                value="linkedin.com/in/santos-adhikari"
                                href="https://www.linkedin.com/in/santos-adhikari"
                            />

                            <ContactLink
                                icon={Code2}
                                label="GitHub"
                                value="github.com/AlphaMind03"
                                href="https://github.com/AlphaMind03"
                            />
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.form
                        action="https://formspree.io/f/meewgjgw"
                        method="POST"
                        className="glass-card rounded-3xl p-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Input
                                label="Your Name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />

                            <Input
                                label="Your Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mt-5">
                            <Input
                                label="Subject"
                                name="subject"
                                type="text"
                                placeholder="Project, job, or collaboration"
                            />
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Message
                            </label>

                            <textarea
                                name="message"
                                rows="6"
                                required
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 font-semibold text-dark transition hover:shadow-glow"
                        >
                            Send Message
                            <Send size={18} />
                        </button>

                        <p className="mt-4 text-sm text-slate-500">
                            This form sends messages directly to my email.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function ContactLink({ icon: Icon, label, value, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-electric/50 hover:bg-electric/10"
        >
            <div className="rounded-xl bg-electric/10 p-3 text-electric">
                <Icon size={22} />
            </div>

            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="text-slate-200">{value}</p>
            </div>
        </a>
    );
}

function Input({ label, placeholder, name, type }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
                {label}
            </label>

            <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
            />
        </div>
    );
}