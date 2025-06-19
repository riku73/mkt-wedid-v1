import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wedid - Agence Marketing Digital Luxembourg',
  description: 'L\'agence marketing digital de référence au Luxembourg. Expertise locale, résultats internationaux.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}