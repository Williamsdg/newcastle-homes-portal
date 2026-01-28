import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Newcastle Homes | New Homes in Atlanta\'s Best Communities',
  description: 'Discover your dream home with Newcastle Homes. Building quality new construction homes in Atlanta\'s most desirable communities including Griffin Park Trace and Magnolia Parkway.',
  keywords: 'new homes Atlanta, new construction, Newcastle Homes, home builder Georgia, Griffin Park Trace, Magnolia Parkway, affordable homes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-warmgray-light text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
