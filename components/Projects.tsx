import projects from "@/content/projects.json";

function isUrl(v?: string) {
    return typeof v === "string" && /^https?:\/\//i.test(v);
}
function hostLabel(v: string) {
    try {
        const u = new URL(v);
        return u.host.replace(/^www\./, "");
    } catch {
        return v;
    }
}

export default function Projects() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Selected Works by Soroosh Morshedi",
        description:
            "A curated collection of high-impact software engineering projects by Soroosh Morshedi, featuring e-commerce, financial, SaaS, and IoT solutions.",
        itemListElement: projects.map((p: any, i: number) => {
            const companyIsUrl = isUrl(p.company);
            const companyName = companyIsUrl ? hostLabel(p.company) : (p.company || "");
            const publisher =
                p.company
                    ? {
                        "@type": "Organization",
                        name: companyName,
                        ...(companyIsUrl ? { url: p.company, sameAs: [p.company] } : {})
                    }
                    : undefined;

            return {
                "@type": "CreativeWork",
                position: i + 1,
                name: p.title ?? "",
                description: [
                    p.challenge ? `Challenge: ${p.challenge}` : null,
                    p.solution ? `Solution: ${p.solution}` : null,
                    p.impact ? `Impact: ${p.impact}` : null
                ].filter(Boolean).join(" | "),
                ...(p.url ? { url: p.url } : {}),
                ...(publisher ? { publisher } : {}),
                inLanguage: "en",
                keywords: [
                    "Django","FastAPI","Go","PostgreSQL","Docker","Microservices",
                    "CI/CD","Cloud","SaaS","E-commerce","Affiliate Marketing","IoT",
                    "System Architecture","Backend Development"
                ]
            };
        })
    };

    return (
        <section id="work" className="container py-16 md:py-24" aria-labelledby="projects-title">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-10 text-center">
                <h2
                    id="projects-title"
                    className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative"
                >
          <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Selected Works
          </span>
                    <span aria-hidden className="absolute -inset-x-10 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70" />
                </h2>
                <p className="text-white/70 text-sm md:text-base mt-3">
                    A snapshot of impactful projects across architecture, backend, cloud, and IoT development.
                </p>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" aria-label="Portfolio projects list">
                {projects.map((p: any) => {
                    const companyIsUrl = isUrl(p.company);
                    const companyLabel = companyIsUrl ? hostLabel(p.company) : p.company;

                    return (
                        <li key={p.title}>
                            <article
                                className="glass relative p-6 md:p-7 rounded-2xl overflow-hidden h-full
                  transition hover:bg-white/10 hover:shadow-[0_0_36px_rgba(139,92,246,0.25)]
                  border border-white/10"
                            >
                                <div
                                    aria-hidden
                                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-t-2xl"
                                />

                                <header className="mb-3">
                                    <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                                        {p.url ? (
                                            <a
                                                href={p.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline hover:text-cyan-300 transition"
                                                aria-label={`Open project: ${p.title}`}
                                            >
                                                {p.title}
                                            </a>
                                        ) : (
                                            p.title
                                        )}
                                    </h3>

                                    {p.company && (
                                        <p className="text-xs text-white/60 mt-1">
                                            Company:{" "}
                                            {companyIsUrl ? (
                                                <a
                                                    href={p.company}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline decoration-white/30 hover:decoration-white"
                                                    aria-label={`Open company website: ${companyLabel}`}
                                                >
                                                    {companyLabel}
                                                </a>
                                            ) : (
                                                <span>{companyLabel}</span>
                                            )}
                                        </p>
                                    )}
                                </header>

                                <div className="space-y-2 text-sm text-white/80 leading-relaxed">
                                    {p.challenge && (
                                        <p>
                                            <span className="text-white font-semibold">Challenge: </span>
                                            {p.challenge}
                                        </p>
                                    )}
                                    {p.solution && (
                                        <p>
                                            <span className="text-white font-semibold">Solution: </span>
                                            {p.solution}
                                        </p>
                                    )}
                                    {p.impact && (
                                        <p className="text-white/90">
                                            <span className="text-white font-semibold">Impact: </span>
                                            {p.impact}
                                        </p>
                                    )}
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
