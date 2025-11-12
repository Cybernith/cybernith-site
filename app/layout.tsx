import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Cybernith — Full-Stack Developer (Django/DRF, Go, Vue/React)',
    template: '%s · Cybernith',
  },
  description: 'توسعه‌دهنده فول‌استک در سطح Enterprise؛ مقیاس‌پذیر، امن، سریع.',
  keywords: [
    'Cybernith','Full-Stack','Django','DRF','Go','Vue','React','Next.js','PostgreSQL','MongoDB','CI/CD','DevOps','Enterprise'
  ],
  alternates: { canonical: 'http://localhost:3000' },
  openGraph: {
    type: 'website',
    url: 'http://localhost:3000',
    title: 'Cybernith — Full-Stack Developer',
    description: 'Enterprise e-commerce/financial systems: scalable, secure, fast.',
    images: ['/og.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="fa" dir="rtl">
      <body className="gradient-bg min-h-screen text-white antialiased">
      {/* پس‌زمینه‌های محو نئونی */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500 blur-[100px] opacity-25" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-cyan-400 blur-[100px] opacity-25" />
      </div>
      {children}
      </body>
      </html>
  );
}
