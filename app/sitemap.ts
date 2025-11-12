export default async function sitemap() {
  const base = 'https://sorooshmorshedi.ir';
  return [
    { url: `${base}/`, lastModified: new Date() }
  ];
}
