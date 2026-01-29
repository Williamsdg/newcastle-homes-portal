'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mainNavItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: 'All Properties',
    href: '/dashboard/properties',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const constructionPhases = [
  { name: '1. Pre-Construction', href: '/dashboard/phase/pre-construction', phase: 1 },
  { name: '2. Site Preparation', href: '/dashboard/phase/site-preparation', phase: 2 },
  { name: '3. Foundation', href: '/dashboard/phase/foundation', phase: 3 },
  { name: '4. Mechanical Rough-Ins', href: '/dashboard/phase/mechanical-rough', phase: 4 },
  { name: '5. Building Envelope', href: '/dashboard/phase/building-envelope', phase: 5 },
  { name: '6. Interior Finishes', href: '/dashboard/phase/interior-finishes', phase: 6 },
  { name: '7. Final Mechanical', href: '/dashboard/phase/final-mechanical', phase: 7 },
  { name: '8. Exterior/Landscape', href: '/dashboard/phase/exterior-landscape', phase: 8 },
  { name: '9. Final Inspections', href: '/dashboard/phase/final-inspections', phase: 9 },
]

const completedNavItems = [
  {
    name: 'Completed Homes',
    href: '/dashboard/completed',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const resourceNavItems = [
  {
    name: 'Equipment',
    href: '/dashboard/equipment',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Contractors',
    href: '/dashboard/subcontractors',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Buyers',
    href: '/dashboard/clients',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Inquiries',
    href: '/dashboard/messages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    badge: 5,
  },
]

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-slate">
      {/* Top Navigation */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="mr-3">
              <svg className="w-8 h-8 text-newcastle" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 5L4 18h4v14h10v-10h4v10h10V18h4L20 5z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-heading font-bold text-newcastle tracking-tight">
                Crestview
              </span>
              <span className="text-[10px] text-accent font-semibold uppercase tracking-widest -mt-1">
                Staff Portal
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search properties, contractors..."
                className="w-full pl-10 pr-4 py-2 bg-slate rounded-lg border border-slate-dark focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle transition-all"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 text-charcoal-light hover:text-newcastle hover:bg-slate rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-dark">
              <div className="w-9 h-9 bg-gradient-to-br from-newcastle to-newcastle-light rounded-full flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-charcoal">John Doe</p>
                <p className="text-xs text-charcoal-light">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-soft min-h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <nav className="p-4">
            {/* Main Navigation */}
            <ul className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-newcastle text-white shadow-md'
                          : 'text-charcoal-light hover:bg-slate hover:text-newcastle'
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Construction Phases */}
            <div className="mt-6 pt-6 border-t border-slate">
              <h4 className="px-4 text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Construction Phases
              </h4>
              <ul className="space-y-0.5">
                {constructionPhases.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-newcastle text-white shadow-md'
                            : 'text-charcoal-light hover:bg-slate hover:text-newcastle'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                          isActive ? 'border-white text-white' : 'border-charcoal-light text-charcoal-light'
                        }`}>
                          {item.phase}
                        </span>
                        <span className="truncate">{item.name.substring(3)}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Completed */}
            <div className="mt-6 pt-6 border-t border-slate">
              <h4 className="px-4 text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Finished
              </h4>
              <ul className="space-y-1">
                {completedNavItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-newcastle text-white shadow-md'
                            : 'text-charcoal-light hover:bg-slate hover:text-newcastle'
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-6 pt-6 border-t border-slate">
              <h4 className="px-4 text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-3">
                Resources
              </h4>
              <ul className="space-y-1">
                {resourceNavItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-newcastle text-white shadow-md'
                            : 'text-charcoal-light hover:bg-slate hover:text-newcastle'
                        }`}
                      >
                        {item.icon}
                        {item.name}
                        {item.badge && (
                          <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Back to Website */}
            <div className="mt-8 pt-8 border-t border-slate">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-sm text-charcoal-light hover:text-newcastle transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Website
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
