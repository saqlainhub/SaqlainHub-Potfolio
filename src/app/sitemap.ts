import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://saqlainhub.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://saqlainhub.vercel.app/sdlc',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // If you add case studies or blog routes later, add them here:
    // {
    //   url: 'https://vercel.app/projects/customer-support-ai',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
