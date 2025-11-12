import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Stack from '@/components/Stack';
import Footer from '@/components/Footer';

export const revalidate = 86400;

export default function Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Cybernith',
        jobTitle: 'Full-Stack Developer',
        url: 'https://sorooshmorshedi.ir',
        sameAs: [
            "https://wa.me/989171035930",
            "https://t.me/sorooshMorshedi",
            "https://instagram.com/soroosh.morshedi",
            "https://github.com/Cybernith",
            "mailto:devolopersoroosh@gmail.com"
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Stack />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
