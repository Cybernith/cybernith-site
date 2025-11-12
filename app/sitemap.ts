export default async function sitemap() {
  const base = 'http://localhost:3000';
  return [
    { url: `${base}/`, lastModified: new Date() }
  ];
}
