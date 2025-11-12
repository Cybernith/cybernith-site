// app/llms.txt/route.ts
export const runtime = 'edge';
export const revalidate = 86400;

export async function GET() {
  const body = `# llms.txt for sorooshmorshedi.com
Owner: Soroosh Morshedi (Cybernith)
Contact: devolosersoroosh@gmail.com; https://linkedin.com/in/Cybernith; https://github.com/Cybernith
Primary: https://sorooshmorshedi.com/
Sitemap: https://sorooshmorshedi.com/sitemap.xml

Allow: /
Disallow: /api/, /admin/, /private/, /drafts/, /_next/

Languages: fa, en
Topics: Full-Stack Development, Software Architecture, Django, DRF, FastAPI, Flask, Go, Next.js, React, Vue/Nuxt, PostgreSQL, MongoDB, Redis, CI/CD, Docker, Microservices, Fintech, E-commerce, DevOps, System Design

Purpose: Public pages may be indexed for AI retrieval/answering and semantic search to improve discoverability (AI SEO).

Policy:
  Retrieval/Indexing: Allowed for public pages.
  Caching: Allowed up to 30 days; refresh on content change.
  Training: NOT permitted without prior written consent.
  Derivative Datasets: NOT permitted without license.
  Attribution: Link back to Primary when content is quoted.
  Robots Respect: Obey robots.txt, meta robots, and HTTP headers.

Crawl-Delay: 5s
Last-Updated: 2025-11-12
`;

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
