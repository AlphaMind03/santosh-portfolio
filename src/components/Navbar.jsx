import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-dark/70 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
                <a href="#home" className="text-lg font-bold tracking-tight">
                    Santosh<span className="text-electric">.</span>
                </a>

                {/* Desktop menu */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-slate-300 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href="/Santosh-Adhikari-CV.pdf"
                    download
                    className="hidden items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-2 text-sm font-medium text-electric transition hover:bg-electric hover:text-dark lg:flex"
                >
                    <Download size={16} />
                    Download CV
                </a>

                {/* Mobile button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-white/10 bg-dark/95 px-5 py-5 lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="/Santosh-Adhikari-CV.pdf"
                            download
                            className="mt-2 rounded-full bg-electric px-4 py-3 text-center text-sm font-semibold text-dark"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}