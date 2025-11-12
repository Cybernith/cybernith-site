import './globals.css'
import type { ReactNode } from 'react'

const siteUrl = 'https://sorooshmorshedi.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Soroosh Morshedi | سروش مرشدی — Full-Stack & Software Architect',
    template: '%s | Soroosh Morshedi',
  },
  description:
      'Soroosh Morshedi (سروش مرشدی) — Senior Full-Stack Developer & Software Architect. متخصص در طراحی سیستم‌های Enterprise، مقیاس‌پذیر، امن و پرسرعت. تجربه در Django, Go, Next.js, PostgreSQL, Microservices, DevOps و معماری سیستم‌های مالی و فروشگاهی.',
  keywords: [
    'Soroosh Morshedi', 'سروش مرشدی', 'SorooshMorshedi', 'CyberNith',
    'Full-Stack Developer', 'Software Architect', 'Enterprise Systems', 'Backend Developer', 'Frontend Developer',
    'Django', 'Django REST Framework', 'Next.js', 'React', 'Vue', 'Nuxt.js', 'Go', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'MySQL',
    'DevOps', 'CI/CD', 'Docker', 'Microservices', 'Scalable Systems', 'E-commerce Architecture', 'Fintech Development', 'Backend Development',
    'Web Application Architecture', 'Software Architecture', 'System Design', 'Enterprise Application Design', 'Financial Systems', 'API Development',
    'RESTful API Design', 'GraphQL', 'Ariadne', 'Strawberry', 'Graphene', 'Python Developer', 'JavaScript Developer', 'TypeScript Developer',
    'Celery', 'Redis', 'RabbitMQ', 'Gunicorn', 'NGINX', 'Docker Compose', 'Database Schema Design', 'Query Optimization', 'Indexing', 'Performance Tuning',
    'Authentication', 'Authorization', 'JWT', 'OAuth2', 'Session-based Authentication', 'Event-driven Systems', 'Audit Logging', 'Wallet Management',
    'Financial System Development', 'Caching', 'Performance Optimization', 'Lazy Loading', 'Testing', 'Quality Assurance', 'Pytest', 'Unit Testing',
    'Integration Testing', 'GitHub Actions', 'GitLab CI', 'Linux Server Administration', 'Git', 'Bash Scripting', 'WebSockets', 'Reverse Proxy',
    'Nginx Reverse Proxy', 'Containerization', 'Orchestration', 'Dokku', 'AWS', 'DigitalOcean', 'Hetzner', 'VPS', 'Monitoring', 'Logging', 'Backup & Recovery',
    'Server Hardening', 'SSL/TLS', 'Firewall', 'System Administration', 'Shell Scripting', 'Cron Jobs', 'Load Balancing', 'Horizontal Scaling',
    'Fault-tolerant Systems', 'Distributed Systems', 'SOLID Principles', 'Dependency Injection', 'TDD', 'Continuous Integration', 'Continuous Deployment',


    'توسعه‌دهنده فول‌استک','طراحی سایت', 'معمار نرم‌افزار', 'توسعه‌دهنده بک‌اند', 'توسعه‌دهنده فرانت‌اند', 'سیستم‌های سازمانی', 'برنامه‌نویسی بک‌اند', 'برنامه‌نویسی فرانت‌اند',
    'سیستم مقیاس‌پذیر', 'توسعه‌دهنده جنگو', 'چارچوب Django REST', 'فریم‌ورک نکست جی اس', 'فریم‌ورک ریاکت', 'فریم‌ورک ویو', 'فریم‌ورک ناکست', 'زبان گو',
    'فست ای پی آی', 'فلسک', 'پستگرس', 'مانگو دی بی', 'مای اس کیو ال', 'دوکر', 'دواپس', 'میکروسرویس', 'معماری فروشگاهی', 'فین‌تک', 'سیستم مالی',
    'طراحی سیستم‌های مالی', 'توسعه نرم‌افزار تحت وب', 'طراحی اپلیکیشن وب', 'معماری سیستم', 'طراحی سیستم مقیاس‌پذیر', 'طراحی وب اپلیکیشن',
    'معماری نرم‌افزار مقیاس‌پذیر', 'بهینه‌سازی پرس‌وجو', 'طراحی دیتابیس', 'شاخص‌گذاری', 'احراز هویت', 'امنیت نرم‌افزار', 'توسعه سیستم‌های مالی',
    'لاگ و ممیزی', 'مدیریت کیف پول', 'سیستم رویدادمحور', 'معماری میکروسرویس', 'طراحی معماری نرم‌افزار', 'تست نرم‌افزار', 'کیفیت نرم‌افزار', 'پایپ‌لاین CI/CD',
    'مدیریت سرور لینوکس', 'نصب و پیکربندی Nginx', 'Docker Compose', 'کدنویسی پایتون', 'جاوااسکریپت', 'تایپ‌اسکریپت', 'توسعه فرانت با Vue', 'Nuxt.js',
    'امنیت سرور', 'SSL/TLS', 'فایروال', 'نظارت بر سرور', 'سیستم مانیتورینگ', 'پشتیبان‌گیری', 'بهینه‌سازی عملکرد', 'توزیع بار', 'مقیاس‌پذیری افقی',
    'الگوهای معماری نرم‌افزار', 'طراحی سیستم های توزیع شده', 'اصول SOLID', 'تزریق وابستگی', 'توسعه مبتنی بر تست', 'ادغام مداوم', 'استقرار مداوم',
    'طراحی سیستم مالی فروشگاهی', 'بهینه سازی سیستم', 'توسعه سمت سرور', 'زیرساخت ابری', 'مدیریت پروژه نرم‌افزار'
  ],
  authors: [{ name: 'Soroosh Morshedi', url: siteUrl }],
  creator: 'Soroosh Morshedi',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: siteUrl,
    title: 'Soroosh Morshedi | سروش مرشدی — Full-Stack & Software Architect',
    description:
        'معمار و توسعه‌دهنده سیستم‌های Enterprise با تمرکز بر مقیاس‌پذیری، امنیت و کارایی. متخصص Django, Go, Nuxt.js, DevOps و سیستم‌های مالی و فروشگاهی.',
    siteName: 'Soroosh Morshedi Portfolio',
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Soroosh Morshedi — software developer portfolio banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soroosh Morshedi | سروش مرشدی',
    description:
        'Senior Full-Stack & Software Architect — متخصص سیستم‌های مقیاس‌پذیر و امن.',
    images: [`${siteUrl}/og.png`],
    creator: '@SorooshMorshedi',
    site: '@SorooshMorshedi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  icons: {
    icon: '/fav.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_CODE'
  },
  other: {
    'theme-color': '#0b0f17',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: 'Soroosh Morshedi',
        alternateName: 'سروش مرشدی',
        url: siteUrl,
        image: `${siteUrl}/og.png`,
        jobTitle: 'Senior Full-Stack Developer & Software Architect',
        worksFor: { '@type': 'Organization', name: 'Freelance / Remote' },
        description:
            'معمار و توسعه‌دهنده Full-Stack با تجربه در ساخت سیستم‌های مقیاس‌پذیر، مالی و فروشگاهی، میکروسرویس، DevOps و مهندسی داده.',
        sameAs: [
          'https://github.com/Cybernith',
          'https://linkedin.com/in/Cybernith',
          'https://instagram.com/soroosh.morshedi',
        ],
        knowsAbout: [
          'Django', 'Django REST Framework (DRF)', 'Next.js', 'React', 'Vue.js', 'Nuxt.js', 'Go', 'Python', 'FastAPI', 'Flask',
          'Backend Development', 'Software Architecture', 'Enterprise Systems', 'System Design', 'Clean Architecture', 'Microservices', 'Event-Driven Architecture (EDA)', 'Domain-Driven Design (DDD)', 'Scalable System Design',
          'RESTful API Design', 'GraphQL', 'Ariadne', 'Strawberry', 'Graphene', 'WebSockets', 'API Documentation', 'Swagger', 'drf-spectacular',
          'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Database Schema Design', 'Query Optimization', 'Indexing', 'Performance Tuning',
          'CI/CD', 'GitHub Actions', 'GitLab CI', 'Docker', 'Docker Compose', 'Dokku', 'Nginx', 'Gunicorn', 'Uvicorn', 'Linux Server Administration', 'Shell Scripting', 'Bash', 'Reverse Proxy', 'Containerization', 'Orchestration',
          'Caching', 'Load Balancing', 'Fault-Tolerant Systems', 'Distributed Systems', 'Monitoring', 'Logging', 'Backup & Recovery', 'Audit Logging', 'Wallet Management', 'Financial System Development',
          'DevOps', 'Security', 'SSL/TLS Configuration', 'Firewall Setup', 'Testing', 'Pytest', 'Unit Testing', 'Integration Testing', 'Quality Assurance', 'Continuous Integration', 'Continuous Deployment',
          'SOLID Principles', 'Dependency Injection', 'TDD', 'Clean Code', 'MVC', 'Design Patterns', 'Event-driven Systems', 'High Availability', 'Scalability', 'Performance Optimization',
          'Fintech', 'E-commerce', 'Enterprise Applications', 'Financial Systems', 'Web Application Development', 'Full-Stack Development', 'DevOps Automation'
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Soroosh Morshedi Portfolio',
        inLanguage: 'fa-IR',
        publisher: { '@id': `${siteUrl}#person` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}#webpage`,
        url: siteUrl,
        name: 'Soroosh Morshedi | سروش مرشدی — Full-Stack & Software Architect',
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': `${siteUrl}#person` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}/og.png`, width: 1200, height: 630 },
      },
      {
        '@type': 'ProfilePage',
        mainEntity: { '@id': `${siteUrl}#person` },
      },
      {
        '@type': 'ItemList',
        name: 'Technical Skills',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Django / DRF (Django REST Framework)' },
          { '@type': 'ListItem', position: 2, name: 'FastAPI / Flask' },
          { '@type': 'ListItem', position: 3, name: 'Next.js / React / TypeScript' },
          { '@type': 'ListItem', position: 4, name: 'Nuxt.js / Vue.js / Tailwind CSS' },
          { '@type': 'ListItem', position: 5, name: 'PostgreSQL / MongoDB / MySQL / Redis' },
          { '@type': 'ListItem', position: 6, name: 'Docker / Docker Compose / CI/CD (GitHub Actions, GitLab CI)' },
          { '@type': 'ListItem', position: 7, name: 'Microservices Architecture / Event-Driven Design (EDA)' },
          { '@type': 'ListItem', position: 8, name: 'Software Architecture / System Design / Scalable Systems' },
          { '@type': 'ListItem', position: 9, name: 'DevOps / Linux Server Administration / Nginx / Gunicorn / Uvicorn' },
          { '@type': 'ListItem', position: 10, name: 'Testing & QA / Pytest / Unit & Integration Testing' },
          { '@type': 'ListItem', position: 11, name: 'GraphQL (Ariadne, Strawberry, Graphene) / RESTful API Design' },
          { '@type': 'ListItem', position: 12, name: 'Caching / Redis / Query Optimization / Performance Tuning' },
          { '@type': 'ListItem', position: 13, name: 'Security / SSL / OAuth2 / JWT / Firewall / Monitoring' },
          { '@type': 'ListItem', position: 14, name: 'Financial Systems / Wallet Management / Audit Logging' },
          { '@type': 'ListItem', position: 15, name: 'Frontend Tooling / Webpack / Vite / NPM / Yarn' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'سروش مرشدی در چه حوزه‌هایی تخصص دارد؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                  'سروش مرشدی توسعه‌دهنده فول‌استک و معمار نرم‌افزار است که روی سیستم‌های Enterprise، فین‌تک، e-commerce، میکروسرویس، Django، Nuxt.js، Next.js و DevOps تمرکز دارد.'
            }
          },
          {
            '@type': 'Question',
            name: 'آیا سروش مرشدی پروژه فریلنس انجام می‌دهد؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بله، برای پروژه‌های معماری سیستم، فین‌تک، فروشگاهی و سامانه‌های مقیاس‌پذیر قابل همکاری است.'
            }
          },
          // ➕ Added SEO-friendly questions
          {
            '@type': 'Question',
            name: 'چه تکنولوژی‌هایی در سمت بک‌اند استفاده می‌کند؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'عمدتاً Django/DRF، FastAPI، Go و معماری میکروسرویس با PostgreSQL و Redis به‌همراه Docker و CI/CD.'
            }
          },
          {
            '@type': 'Question',
            name: 'در حوزه DevOps چه تجربیاتی دارد؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'طراحی پایپ‌لاین‌های CI/CD، مانیتورینگ، container orchestration، امنیت، و استقرار روی VPS/Cloud (Dokku, Docker, GitHub Actions).'
            }
          },
          {
            '@type': 'Question',
            name: 'آیا تجربه معماری سیستم‌های مالی و فروشگاهی دارد؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بله، طراحی و پیاده‌سازی ماژول‌های حسابداری، تسویه، سبد خرید، قیمت‌گذاری، و زیرساخت‌های مقیاس‌پذیر برای e-commerce و fintech.'
            }
          },
          {
            '@type': 'Question',
            name: 'آیا پروژه‌های ریموت بین‌المللی قبول می‌کند؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بله، همکاری به‌صورت Remote/Contract با تیم‌های بین‌المللی امکان‌پذیر است.'
            }
          },
          {
            '@type': 'Question',
            name: 'چه زمانی برای شروع همکاری مناسب است؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'پس از ارزیابی نیازمندی‌ها و هم‌راستاسازی اهداف فنی/بیزنسی؛ زمان‌بندی با توجه به ظرفیت جاری هماهنگ می‌شود.'
            }
          },
          {
            '@type': 'Question',
            name: 'چگونه می‌توان برای همکاری تماس گرفت؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `از طریق لینکدین/گیت‌هاب یا فرم تماس در ${siteUrl} قابل پیگیری است.`
            }
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        name: 'Portfolio Projects',
        about: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'SoftwareApplication',
              name: 'Exuni Platform',
              applicationCategory: 'E-Commerce / Reverse Affiliate Platform',
              operatingSystem: 'Web',
              description: 'پلتفرم فروشگاهی و افیلیت‌محور مقیاس‌پذیر با Django & Next.js',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }
          ]
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        ]
      }
    ]
  }

  return (
      <html lang="fa">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="gradient-bg min-h-screen text-white antialiased">
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-[#fb21a9] blur-[100px] opacity-25" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-[#05ecf4] blur-[100px] opacity-25" />
      </div>
      {children}
      </body>
      </html>
  )
}
