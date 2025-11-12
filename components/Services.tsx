"use client";
import { useEffect, useRef } from "react";

export default function Services() {
    const services = [
        { id: "corporate-ecommerce-websites", title: "Corporate & E-commerce Website Design", desc: "High-end corporate and online store websites with clean UX, SEO-ready structure, and fast performance." },
        { id: "software-design-development", title: "Software Design & Development", desc: "End-to-end architecture and engineering — from clean design to production-grade implementation." },
        { id: "debugging-testing-quality", title: "Debugging, Testing & Quality", desc: "Systematic debugging, unit/integration testing (Pytest/Jest), CI pipelines, and release hardening." },
        { id: "ecommerce-architecture", title: "E-commerce Architecture", desc: "Modular, scalable, and observable architectures designed for high traffic and reliability." },
        { id: "backend-apis", title: "Backend APIs (Django/DRF, FastAPI, Go)", desc: "Secure REST & GraphQL APIs, versioning, authentication (JWT/OAuth2), performance tuned." },
        { id: "frontend-experience", title: "Frontend Experience (Vue, Nuxt, React, Next)", desc: "Modern SPAs/SSRs with accessible UI, mobile-first performance, and strong SEO." },
        { id: "databases", title: "Databases & Data Layer", desc: "PostgreSQL, MongoDB, Redis — schema design, indexing, query optimization, and caching." },
        { id: "devops-cicd", title: "DevOps & CI/CD", desc: "Docker, Compose, Dokku, GitHub Actions, Nginx; automated deploys and observability." },
        { id: "cloud-infra", title: "Cloud & Infrastructure", desc: "AWS, DigitalOcean, Hetzner — hardening (SSL/TLS/Firewall), backups, monitoring." },
        { id: "microservices", title: "Microservices & Event-Driven Systems", desc: "Celery/Redis/RabbitMQ, distributed systems, HA/scale, audit logging, wallet flows." },
        { id: "web3-integrations", title: "Web3 & Secure Integrations", desc: "Crypto/Web3 backends, secure financial operations and integrations." },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Professional Services",
        itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.desc,
            areaServed: "Global / Remote",
            serviceType: s.title,
        })),
    };

    const trackRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let idx = 0;
        const tick = () => {
            const cards = Array.from(el.querySelectorAll<HTMLElement>("li"));
            if (!cards.length) return;
            idx = (idx + 1) % cards.length;
            const target = cards[idx];
            const left = target.offsetLeft - (el.offsetLeft || 0);
            el.scrollTo({ left, behavior: "smooth" });
        };

        const t = setInterval(tick, 2000);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            id="services"
            className="container py-16 md:py-24"
            aria-labelledby="services-title"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-10 text-center">
                <h2
                    id="services-title"
                    className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative"
                >
                    <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Core Services
                    </span>
                    <span aria-hidden className="absolute -inset-x-10 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70" />

                </h2>
                <p className="text-white/70 text-sm md:text-base mt-3 max-w-xl mx-auto">
                    Strategic engineering expertise for scalable, secure, and elegant software - crafted by Soroosh Morshedi.
                </p>
            </div>

            <ul
                ref={trackRef}
                data-slider
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scroll-px-4 md:scroll-px-6 pb-2"
                style={{ scrollbarWidth: "none" }}
                aria-label="Professional services list"
            >
                {services.map((s) => (
                    <li
                        key={s.id}
                        className="snap-start shrink-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[24%]"
                    >
                        <article className="glass relative p-6 md:p-7 rounded-2xl overflow-hidden h-full transition hover:bg-white/10 hover:shadow-[0_0_36px_rgba(139,92,246,0.25)] border border-white/10">
                            <div
                                aria-hidden
                                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-t-2xl"
                            />
                            <header className="mb-3">
                                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                                    {s.title}
                                </h3>
                            </header>
                            <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
                        </article>
                    </li>
                ))}
            </ul>

            <style>{`
                [data-slider]::-webkit-scrollbar { display: none; width: 0; height: 0; }
            `}</style>
        </section>
    );
}
