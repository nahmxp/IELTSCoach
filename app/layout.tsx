import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.',
  keywords: 'IELTS, English, Course, Munzereen Shahid, 10 Minute School, Academic IELTS, General Training IELTS',
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course!',
    images: ['https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Get complete preparation of Academic IELTS and General Training IELTS in one course!',
    images: ['https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
