// app/components/Stack.tsx
export default function Stack() {
    const tech = [
        {
            id: "backend",
            title: "Backend & APIs",
            items: [
                "Django / DRF",
                "FastAPI",
                "Go",
                "PostgreSQL",
                "Redis",
                "MongoDB",
                "Celery / RabbitMQ",
            ],
        },
        {
            id: "frontend",
            title: "Frontend Frameworks",
            items: ["Vue.js", "Nuxt.js", "React", "Next.js", "Tailwind CSS"],
        },
        {
            id: "architecture",
            title: "Architecture & Design",
            items: [
                "Microservices",
                "Event-Driven Systems",
                "Domain-Driven Design (DDD)",
                "SOLID Principles",
                "Clean Architecture",
            ],
        },
        {
            id: "devops",
            title: "DevOps & Cloud",
            items: [
                "Docker / Compose",
                "GitHub Actions (CI/CD)",
                "Nginx / Gunicorn / Uvicorn",
                "AWS / DigitalOcean / Hetzner",
                "Monitoring / Logging",
            ],
        },
    ];

    // 🔎 SEO / AI: structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Technical Stack",
        description:
            "Core technologies and frameworks used by Soroosh Morshedi across backend, frontend, DevOps, and architecture domains.",
        itemListElement: tech.map((group, index) => ({
            "@type": "ItemList",
            position: index + 1,
            name: group.title,
            itemListElement: group.items.map((item, i) => ({
                "@type": "Thing",
                position: i + 1,
                name: item,
            })),
        })),
    };

    // 🔧 tiny icon registry (inline SVGs, no deps)
    const Icon = ({ name }: { name: string }) => {
        const n = name.toLowerCase();

        if (n.includes("django")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Django">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#092E20" />
                    <text x="12" y="15" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="700">dj</text>
                </svg>
            );
        }
        if (n.includes("drf")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Django REST Framework">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#A30000" />
                    <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" />
                </svg>
            );
        }
        if (n.includes("fastapi")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="FastAPI">
                    <circle cx="12" cy="12" r="10" fill="#05998B" />
                    <path d="M12 5l4 7h-3l2 7-7-9h3z" fill="#ffffff" />
                </svg>
            );
        }
        if (n === "go") {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Go">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#00ADD8" />
                    <text x="12" y="15" textAnchor="middle" fontSize="9" fill="#002B36" fontWeight="700">go</text>
                </svg>
            );
        }
        if (n.includes("postgresql")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="PostgreSQL">
                    <circle cx="12" cy="12" r="10" fill="#336791" />
                    <path d="M8 10c2-2 6-2 8 0-1 4-7 6-8 8 0-3 1-5 0-8z" fill="#fff" />
                </svg>
            );
        }
        if (n.includes("redis")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Redis">
                    <rect x="3" y="5" width="18" height="14" rx="2" fill="#DC382D" />
                    <rect x="5" y="7" width="14" height="2" fill="#fff" opacity=".9" />
                    <rect x="5" y="11" width="10" height="2" fill="#fff" opacity=".9" />
                </svg>
            );
        }
        if (n.includes("mongo")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="MongoDB">
                    <path d="M12 2c3 4 4 8 0 20-4-12-3-16 0-20z" fill="#4FAA41" />
                    <path d="M12 6c1 2 1 5 0 8" stroke="#2A3E1C" strokeWidth="1.5" fill="none" />
                </svg>
            );
        }
        if (n.includes("celery")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Celery">
                    <rect x="4" y="4" width="16" height="16" rx="3" fill="#37814A" />
                    <path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
            );
        }
        if (n.includes("rabbitmq")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="RabbitMQ">
                    <rect x="2" y="6" width="20" height="12" rx="2" fill="#FF6600" />
                    <rect x="6" y="8" width="3" height="5" fill="#fff" />
                    <rect x="11" y="8" width="3" height="5" fill="#fff" />
                    <circle cx="18" cy="12" r="2" fill="#fff" />
                </svg>
            );
        }
        if (n.includes("vue")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Vue.js">
                    <path d="M3 4h6l3 5 3-5h6L12 20 3 4z" fill="#41B883" />
                    <path d="M6 4h3l3 5 3-5h3L12 15 6 4z" fill="#34495E" />
                </svg>
            );
        }
        if (n.includes("nuxt")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Nuxt.js">
                    <path d="M3 18l6-12 6 12H3z" fill="#00DC82" />
                    <path d="M9 18l4-8 4 8H9z" fill="#2E2E2E" />
                </svg>
            );
        }
        if (n.includes("react")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="React">
                    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                </svg>
            );
        }
        if (n.includes("next.js") || n.includes("next")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Next.js">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
                    <path d="M8 8h8v8M8 8l8 8" stroke="#fff" strokeWidth="1.5" />
                </svg>
            );
        }
        if (n.includes("tailwind")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Tailwind CSS">
                    <path d="M4 12c2-6 8-6 10 0 2 6 8 6 10 0" fill="none" stroke="#38BDF8" strokeWidth="2" />
                </svg>
            );
        }
        if (n.includes("docker")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Docker">
                    <rect x="3" y="11" width="18" height="6" rx="2" fill="#0DB7ED" />
                    <rect x="6" y="8" width="3" height="3" fill="#0DB7ED" />
                    <rect x="10" y="8" width="3" height="3" fill="#0DB7ED" />
                    <rect x="14" y="8" width="3" height="3" fill="#0DB7ED" />
                </svg>
            );
        }
        if (n.includes("github actions")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="GitHub Actions">
                    <circle cx="7" cy="7" r="3" stroke="#A855F7" strokeWidth="2" fill="none" />
                    <path d="M10 7h7M17 7v7M17 14h-7" stroke="#A855F7" strokeWidth="2" />
                </svg>
            );
        }
        if (n.includes("nginx")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="Nginx">
                    <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="#009639" />
                    <text x="12" y="14" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">N</text>
                </svg>
            );
        }
        if (n.includes("gunicorn")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Gunicorn" role="img">
                    <rect x="3" y="3" width="18" height="18" rx="4" fill="#2A9D8F" />
                    <path d="M8 14h8M8 10h5" stroke="#fff" strokeWidth="2" />
                </svg>
            );
        }
        if (n.includes("uvicorn")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Uvicorn" role="img">
                    <rect x="3" y="3" width="18" height="18" rx="4" fill="#0EA5E9" />
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" />
                </svg>
            );
        }
        if (n.includes("aws")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="AWS">
                    <rect x="2" y="4" width="20" height="14" rx="3" fill="#232F3E" />
                    <path d="M4 18c5 3 11 3 16 0" stroke="#FF9900" strokeWidth="2" fill="none" />
                </svg>
            );
        }
        if (n.includes("digitalocean")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" role="img" aria-label="DigitalOcean">
                    <circle cx="12" cy="10" r="6" fill="#0080FF" />
                    <rect x="10" y="16" width="4" height="4" fill="#0080FF" />
                </svg>
            );
        }
        if (n.includes("hetzner")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Hetzner" role="img">
                    <rect x="3" y="6" width="18" height="12" rx="3" fill="#D9002F" />
                    <rect x="6" y="10" width="12" height="2" fill="#fff" />
                </svg>
            );
        }
        if (n.includes("monitoring") || n.includes("logging")) {
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Monitoring / Logging" role="img">
                    <path d="M4 16l4-6 3 4 3-5 6 9" stroke="#22D3EE" strokeWidth="2" fill="none" />
                    <rect x="3" y="4" width="18" height="16" rx="3" stroke="#94A3B8" fill="none" />
                </svg>
            );
        }

        // default dot
        return (
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" aria-hidden />
        );
    };

    return (
        <section id="stack" className="container py-16 md:py-24" aria-labelledby="stack-title">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-10 text-center">
                <h2 id="stack-title" className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative">
          <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
                    <span
                        aria-hidden
                        className="absolute -inset-x-10 bottom-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70"
                    />
                </h2>
                <p className="text-white/70 text-sm md:text-base mt-3">
                    My essential tools and frameworks across backend, frontend, and cloud.
                </p>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" aria-label="Technology stack list">
                {tech.map((group) => (
                    <li key={group.id}>
                        <article className="glass relative p-6 md:p-7 rounded-2xl overflow-hidden h-full transition hover:bg-white/10 hover:shadow-[0_0_36px_rgba(139,92,246,0.25)] border border-white/10">
                            <div aria-hidden className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-t-2xl" />
                            <header className="mb-3">
                                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">{group.title}</h3>
                            </header>

                            <ul className="space-y-1.5 text-white/80 text-sm leading-relaxed">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Icon name={item} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}
