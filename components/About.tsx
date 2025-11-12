export default function About() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Soroosh Morshedi",
        alternateName: "Cybernith",
        jobTitle: "Full-Stack Developer & Technical Architect",
        worksFor: [{ "@type": "Organization", name: "EXUNI.ir" }],
        url: "https://sorooshmorshedi.ir",
        sameAs: [
            "https://github.com/Cybernith",
            "https://www.linkedin.com/in/Cybernith",
            "https://instagram.com/soroosh.morshedi"
        ],
        knowsAbout: [
            "Django","Django REST Framework","FastAPI","Go","PostgreSQL","MongoDB",
            "Microservices","CI/CD","Docker","Nuxt.js","Vue.js","Next.js","React",
            "Cloud Deployment","Financial Systems","E-commerce Architecture","DevOps"
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "Work",
                email: "devolopersoroosh@gmail.com",
                telephone: "+98-917-103-5930",
                areaServed: "Global",
                availableLanguage: ["English", "Persian"]
            }
        ]
    };

    return (
        <section id="about" className="container py-16 md:py-24 text-center" aria-labelledby="about-title">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h2 id="about-title" className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative mb-6">
                <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
                <span aria-hidden className="absolute -inset-x-10 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70" />
            </h2>

            <p className="text-white/80 leading-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                I’m <strong className="text-white">Soroosh Morshedi</strong>, a <strong className="text-white">Full-Stack Developer</strong> and
                <strong className="text-white"> Technical Architect</strong> who designs and ships production systems end-to-end.
                I specialize in <strong className="text-white">Django/DRF, FastAPI, Go, PostgreSQL, MongoDB</strong> and modern front-ends
                with <strong className="text-white">Nuxt.js/Vue & Next.js/React</strong>. My focus is clean architecture, secure design,
                high performance, and reliable CI/CD. From schema and domain modeling to microservices, observability, and cloud deployment,
                I build platforms that scale and stay maintainable.
            </p>
        </section>
    );
}
