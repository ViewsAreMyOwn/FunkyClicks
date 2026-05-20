import type { Metadata } from 'next'
import '../globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Funky Clicks – Clicks That Convert, Strategies That Scale',
  description:
    'Funky Clicks is a digital marketing agency helping SMEs grow with social media, SEO, PPC, email marketing, and more.',
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-nunito">
        <Navbar />
        <div className="flex-1 pt-42.5">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
