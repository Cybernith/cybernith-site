export default function Contact() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Soroosh Morshedi",
        url: "https://sorooshmorshedi.ir",
        jobTitle: "Full-Stack Developer & System Architect",
        sameAs: [
            "https://wa.me/989171035930",
            "https://t.me/sorooshMorshedi",
            "https://instagram.com/soroosh.morshedi",
            "https://github.com/Cybernith",
            "mailto:devolopersoroosh@gmail.com"
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+98-917-103-5930",
                contactType: "Personal",
                areaServed: "Global",
                availableLanguage: ["English", "Persian"]
            }
        ]
    };

    return (
        <section
            id="contact"
            className="container py-16 md:py-24 text-center"
            aria-labelledby="contact-title"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <h2
                id="contact-title"
                className="text-3xl md:text-4xl font-extrabold tracking-tight inline-block relative mb-6"
            >
                <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Contact Me
                </span>
                <span
                    aria-hidden
                    className="absolute -inset-x-10 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full blur-[1px] opacity-70"
                />
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-6">
                Prefer async chat or a quick call? Choose your favorite platform — messages reach me directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <a
                    href="https://wa.me/989171035930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-black hover:shadow-[0_0_28px_rgba(16,185,129,.45)] transition"
                    aria-label="Chat on WhatsApp"
                >
                    WhatsApp
                </a>

                <a
                    href="https://t.me/sorooshMorshedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 text-black hover:shadow-[0_0_28px_rgba(56,189,248,.45)] transition"
                    aria-label="Message on Telegram"
                >
                    Telegram
                </a>

                <a
                    href="https://instagram.com/soroosh.morshedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:shadow-[0_0_28px_rgba(236,72,153,.45)] transition"
                    aria-label="View Instagram profile"
                >
                    Instagram
                </a>

                <a
                    href="https://github.com/Cybernith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-black hover:shadow-[0_0_28px_rgba(156,163,175,.45)] transition"
                    aria-label="Visit GitHub profile"
                >
                    GitHub
                </a>

                <a
                    href="tel:+989171035930"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold border border-white/20 bg-transparent text-white hover:[box-shadow:0_0_36px_rgba(139,92,246,.35)] transition"
                    aria-label="Call Soroosh at +98 917 103 5930"
                >
                    Call
                </a>

                <a
                    href="mailto:devolopersoroosh@gmail.com?subject=Project%20Inquiry&body=Hi%20Soroosh%2C%20"
                    className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold border border-white/20 bg-transparent text-white hover:[box-shadow:0_0_36px_rgba(5,236,244,.35)] transition"
                    aria-label="Email Soroosh"
                >
                    Email
                </a>
            </div>

            <p className="text-white/50 text-xs mt-4">
                Response time: usually within 24 hours • Remote / Global
            </p>
        </section>
    );
}
