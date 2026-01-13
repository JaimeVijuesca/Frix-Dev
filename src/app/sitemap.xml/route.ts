import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://frix-dev.vercel.app';

  const staticPages = [
    '',
    '/services',
    '/ai-generator',
    '/portfolio',
    '/contact',
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));
}
