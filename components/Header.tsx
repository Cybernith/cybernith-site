'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const NAV = [
    { id: 'hero',    href: '#hero',    label: 'Home' },
    { id: 'services',href: '#services',label: 'Services' },
    { id: 'about',   href: '#about',   label: 'About' },
    { id: 'stack',   href: '#stack',   label: 'Tech Stack' },
    { id: 'work',    href: '#work',    label: 'Projects' },
    { id: 'contact', href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [active, setActive] = useState<string>('hero');
    const [open, setOpen]   = useState(false);
    const ids = useMemo(() => NAV.map(n => n.id), []);

    useEffect(() => {
        const sections = ids
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        if (!sections.length) return;

        const io = new IntersectionObserver(
            entries => {
                const topMost = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (topMost?.target?.id) setActive(topMost.target.id);
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: [0.15, 0.35, 0.65] }
        );
        sections.forEach(s => io.observe(s));
        return () => io.disconnect();
    }, [ids]);

    const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith('#')) return;
        e.preventDefault();
        const el = document.querySelector(href) as HTMLElement | null;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-[0_0_24px_rgba(0,0,0,0.25)]">
            <div className="container h-16 flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <Link href="/" aria-label="Go to home page" className="flex items-center gap-2 font-semibold tracking-tight hover:text-cyan-300 transition">
                        <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-pulse" />
                        <span>Cybernith</span>
                    </Link>
                    <span className="text-white/50 hidden sm:inline">— Full-Stack Developer</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm text-white/80" aria-label="Main navigation">
                    {NAV.map(item => {
                        const isActive = active === item.id;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => go(e, item.href)}
                                className={`relative py-1 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                <span className={`relative z-10 ${isActive ? 'bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300' : ''}`}>
                  {item.label}
                </span>
                                <span
                                    aria-hidden
                                    className={`absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                  ${isActive
                                        ? 'opacity-100 scale-100 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400'
                                        : 'opacity-0 scale-50'}`}
                                />
                                {/* soft glow */}
                                {isActive && (
                                    <span
                                        aria-hidden
                                        className="absolute inset-x-0 -bottom-1 h-[6px] blur-[6px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-30"
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href="/sorooshmorshedi.pdf"
                        download
                        className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-medium text-sm hover:shadow-[0_0_22px_rgba(168,85,247,.45)] transition"
                        aria-label="Download resume PDF"
                    >
                        Resume
                    </a>

                    <button
                        type="button"
                        onClick={() => setOpen(v => !v)}
                        className="md:hidden ml-2 p-2 text-white/80 hover:text-white focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <nav className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl px-6 pb-4 text-white/80 text-sm" aria-label="Mobile navigation">
                    <ul className="flex flex-col gap-3 pt-4">
                        {NAV.map(item => {
                            const isActive = active === item.id;
                            return (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => go(e, item.href)}
                                        className={`block py-1 hover:text-white ${isActive ? 'text-white' : ''}`}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </header>
    );
}
