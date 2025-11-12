import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-title"
            className="
        container
        pt-20 md:pt-10
        lg:pt-20 xl:pt-28
        lg:pb-8 xl:pb-10
      "
        >
            <div
                className="
          hero-panel relative px-5 md:px-10
          lg:min-h-[70vh] xl:min-h-[78vh]
          flex
        "
            >
                <div className="hero-noise" aria-hidden />

                <div
                    className="
            grid lg:grid-cols-2 gap-8 md:gap-10
            items-center
            w-full
            my-auto
          "
                >
                    <div className="relative order-1 lg:order-2 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px]">
                        <Image
                            src="/final_hero.png"
                            alt="Soroosh Morshedi — Full-Stack Developer & Software Architect"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div
                        className="
              order-2 lg:order-1
              space-y-5 md:space-y-6
              mt-2 mb-10 lg:mt-0 lg:mb-0
            "
                    >
                        <h1
                            id="hero-title"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                        >
                            Soroosh Morshedi
                        </h1>

                        <p className="text-base sm:text-lg md:text-2xl text-white/90 leading-relaxed">
                            <strong className="font-semibold">Software Architect</strong>
                            <span className="mx-1.5 text-white/50">•</span>
                            <strong className="font-semibold">Full-Stack Developer</strong>
                            <span className="text-white/60 text-xs sm:text-sm block md:inline ml-1">
                (Infrastructure → Interface)
              </span>
                        </p>

                        <p className="text-white/80 max-w-xl text-sm sm:text-xs">
                            I build enterprise, commerce, and financial systems that scale
                            <span className="text-white font-semibold"> securely</span> and
                            <span className="text-white font-semibold"> efficiently</span>.
                        </p>

                        <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Key skills">
                            {[
                                "Software & Website Architecture",
                                "Django/DRF",
                                "Go",
                                "FastAPI",
                                "Vue/React/Next",
                                "PostgreSQL",
                                "Redis",
                                "CI/CD",
                                "Microservices",
                                "DevOps",
                            ].map((t) => (
                                <li key={t}>
                                    <span className="chip px-2.5 py-1 text-xs sm:text-sm">{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-1.5">
                            <a
                                href="/sorooshmorshedi.pdf"
                                className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm sm:text-base font-semibold
                           bg-gradient-to-r from-fuchsia-500/50 via-purple-500/50 to-cyan-400/50
                           shadow-[0_0_22px_rgba(168,85,247,.35)]
                           hover:shadow-[0_0_42px_rgba(5,236,244,.45)]
                           transition duration-300 ease-out text-white"
                                download
                                aria-label="Download Resume PDF"
                            >
                                <span className="relative z-10">Download Resume</span>
                            </a>

                            <a
                                href="tel:+989171035930"
                                className="relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm sm:text-base font-semibold
                           border border-white/20
                           [box-shadow:0_0_0_1px_rgba(255,255,255,.06)_inset,0_0_24px_rgba(56,189,248,.25)]
                           hover:[box-shadow:0_0_0_1px_rgba(255,255,255,.12)_inset,0_0_44px_rgba(139,92,246,.45)]
                           transition duration-300 ease-out text-white"
                                aria-label="Call Soroosh at +98 917 103 5930"
                            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300">
                  Schedule a Call
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
