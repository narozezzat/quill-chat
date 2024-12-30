import { cn, constructMetadata } from '@/lib/utils'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={cn(
        "min-h-screen font-sans antialiased grainy",
        inter.className
      )}>{children}</body>
    </html>
  )
}
