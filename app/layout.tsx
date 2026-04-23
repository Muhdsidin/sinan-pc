import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Muhammad Sinan PC - Video Editor & Videographer',
  description: 'Professional video editing and videography portfolio. Cinematic content creation, visual storytelling, and premium video production.',
  keywords: 'video editor, videographer, content creator, video production, cinematic editing',
 
  openGraph: {
    title: 'Muhammad Sinan PC - Video Editor & Videographer',
    description: 'Professional video editing and videography portfolio',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/profile.png',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
