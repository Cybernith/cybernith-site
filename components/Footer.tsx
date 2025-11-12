import Link from "next/link";

export default function Footer() {
    const currentYear = 2025

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Soroosh Morshedi",
        url: "https://sorooshmorshedi.ir",
        email: "mailto:devolopersoroosh@gmail.com",
        sameAs: [
            "https://github.com/Cybernith",
            "https://instagram.com/soroosh.morshedi",
        ]
    };

    return (
        <footer
            id="contact"
            className="mt-5 border-t border-white/10 bg-black/30 backdrop-blur-md"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container py-3 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white/70 text-sm">{currentYear}©  soroosh morshedi</div>

                <div className="text-white/80 text-sm font-medium text-center">
                    Crafted with passion & code 💡
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <Link
                        href="mailto:devolopersoroosh@gmail.com"
                        className="hover:text-white transition-colors duration-200"
                    >
                        Email
                    </Link>
                    <Link
                        href="https://github.com/Cybernith"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
}
