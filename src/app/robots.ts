import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://wedid.lu'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*?*', // Disallow URLs with query parameters to prevent duplicate content
          '/*/success', // Disallow success pages
          '/search',
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'GPTBot', // OpenAI's web crawler
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user requests
        disallow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Anthropic's Claude
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web', // Anthropic's Claude Web
        disallow: '/',
      },
      // Allow major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*/success',
          '/search',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*/success',
          '/search',
        ],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*/success',
          '/search',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}