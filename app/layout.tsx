import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crestview Homes | New Homes in Alabama\'s Best Communities',
  description: 'Discover your dream home with Crestview Homes. Since 1997, building quality new construction homes across North and Central Alabama including Birmingham, Helena, Leeds, and Tuscaloosa.',
  keywords: 'new homes Alabama, new construction Birmingham, Crestview Homes, home builder Alabama, The Falls, Barimore, Grand River, Helena AL, Leeds AL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-light text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
