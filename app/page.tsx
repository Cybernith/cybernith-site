// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const revalidate = 86400; // ISR روزانه

export default function Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Cybernith',
        jobTitle: 'Full-Stack Developer',
        url: 'http://localhost:3000',
        sameAs: ['https://github.com/your-handle','https://www.linkedin.com/in/your-handle']
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main>
                <Hero />
                <Services />
                <Projects />
                <About />
            </main>
            <Footer />
        </>
    );
}
