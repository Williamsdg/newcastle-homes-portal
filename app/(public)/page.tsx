import Link from 'next/link'
import Image from 'next/image'

const communities = [
  {
    name: 'The Falls',
    location: 'Birmingham, AL',
    priceFrom: '$499,900',
    priceTo: '$589,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iNmQ2MDYxZDQzZDFmZGEyMTZkODMxY2YxNWE1MGQ3Ni5qcGVn/exact/webp/600/380',
    homes: 8,
    featured: true,
    tagline: "Birmingham's #1 Selling Community",
  },
  {
    name: 'Barimore',
    location: 'Helena, AL',
    priceFrom: '$422,900',
    priceTo: '$524,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83ZjZhMzU3NzYwYTFmMmEwNTUzOWQ3ODNhMGNlYjlmMS5wbmc=/exact/webp/600/380',
    homes: 12,
    featured: true,
    tagline: 'Selling Fast — Act Now',
  },
  {
    name: 'Grand River',
    location: 'Leeds, AL',
    priceFrom: '$349,900',
    priceTo: '$534,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC82Nzc3NTM2ZGQ3YjJkZWVhMzA4MTA3NWE1ODQ1NDE1ZS5qcGVn/exact/webp/600/380',
    homes: 15,
    featured: false,
    tagline: 'Phase 3 Now Open',
  },
  {
    name: 'Heritage Pines',
    location: 'Columbiana, AL',
    priceFrom: '$689,900',
    priceTo: '$829,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lOGY2ZDM4NjJjN2QwMDk3NWRlMWFmN2Q5YzNkYzk3Yy5qcGVn/exact/webp/600/380',
    homes: 6,
    featured: false,
    tagline: 'Exclusive Estate Living',
  },
]

const features = [
  {
    title: 'Built to Last',
    description: 'Premium materials. Expert craftsmanship. Homes that stand the test of time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Energy Smart',
    description: 'Lower bills. Smaller footprint. Homes designed for modern efficiency.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Move-In Ready',
    description: 'Skip the wait. Select homes available for immediate move-in.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: '25+ Years Strong',
    description: "1,500+ families. 9 communities. Alabama's trusted builder.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const stats = [
  { value: '1,500+', label: 'Homes Built' },
  { value: '25', label: 'Years Strong' },
  { value: '9', label: 'Communities' },
  { value: 'A+', label: 'BBB Rated' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iNmQ2MDYxZDQzZDFmZGEyMTZkODMxY2YxNWE1MGQ3Ni5qcGVn/exact/webp/600/380"
            alt="Newcastle Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="badge-light mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Limited Inventory — Homes Selling Fast
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight tracking-tight">
              Stop Renting.
              <span className="block text-gradient">Start Living.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              New homes from <span className="font-bold">$349,900</span> in Alabama's most
              desirable communities. 25 years of building homes people love.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/communities" className="btn-primary">
                View Available Homes
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Schedule a Tour
              </Link>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-heading font-black text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-bar mb-6" />
              <h2 className="section-heading mb-6">
                Alabama's Most Trusted<br />Home Builder
              </h2>
              <p className="text-lg text-charcoal-light mb-6 leading-relaxed">
                Since 1997, Newcastle Homes has built over <strong>1,500 homes</strong> for
                families across North and Central Alabama. We're not just building houses —
                we're building communities where people thrive.
              </p>
              <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
                Every Newcastle home comes with our commitment to quality, transparency,
                and exceptional service. That's why we maintain an <strong>A+ BBB rating</strong> and
                why families keep choosing us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  Why Newcastle
                </Link>
                <a href="tel:2056712931" className="btn-outline flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (205) 671-2931
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="card p-6">
                  <div className="w-12 h-12 bg-newcastle-100 rounded-lg flex items-center justify-center mb-4 text-newcastle">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-20 bg-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-6" />
            <h2 className="section-heading mb-4">Find Your Community</h2>
            <p className="section-subheading mx-auto">
              9 prime locations across Alabama. New homes starting at $349,900.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communities.map((community) => (
              <div key={community.name} className="community-card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover community-image transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-newcastle-950 via-newcastle-900/60 to-transparent" />

                  {community.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="badge-dark">
                        {community.tagline}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    <div className="flex items-center gap-2 text-white font-medium text-sm mb-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {community.location}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{community.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white/70 text-sm">From</span>
                        <span className="block text-xl font-bold">{community.priceFrom}</span>
                      </div>
                      <span className="badge-light">
                        {community.homes} available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between bg-white border-t border-slate">
                  <Link
                    href={`/communities#${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-newcastle font-bold hover:text-accent transition-colors flex items-center gap-2 uppercase text-sm tracking-wide"
                  >
                    View Homes
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-charcoal-light hover:text-newcastle transition-colors text-sm font-medium"
                  >
                    Schedule Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/communities" className="btn-secondary">
              View All 9 Communities
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-newcastle-900 via-newcastle-800 to-newcastle-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading-light mb-4">Trusted by 1,500+ Alabama Families</h2>
            <p className="text-newcastle-200 text-lg max-w-2xl mx-auto">
              Don't take our word for it. Here's what homeowners say about their Newcastle experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "Great quality and customer service. From the builders to the staff,
                great response and extremely informative regarding the build process."
              </p>
              <div>
                <p className="font-bold">The Chen Family</p>
                <p className="text-newcastle-300 text-sm">The Falls, Birmingham</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "The homes are large and well-built for the price. The agent on
                duty was super helpful. Our dream home is now a reality."
              </p>
              <div>
                <p className="font-bold">The Johnson Family</p>
                <p className="text-newcastle-300 text-sm">Grand River, Leeds</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "Newcastle made our first home buying experience easy and
                enjoyable. We love our new home in Barimore!"
              </p>
              <div>
                <p className="font-bold">The Martinez Family</p>
                <p className="text-newcastle-300 text-sm">Barimore, Helena</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-primary mb-6">
            Limited Time — Buyer Incentives Available
          </div>

          <h2 className="section-heading mb-6">
            Ready to Own Your Home?
          </h2>

          <p className="text-xl text-charcoal-light mb-8 max-w-2xl mx-auto">
            Take the first step today. Tour any of our 9 communities and
            discover why 1,500+ families chose Newcastle.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="/contact" className="btn-primary">
              Schedule Your Tour
            </Link>
            <a href="tel:2056712931" className="btn-outline flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (205) 671-2931
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-charcoal-light text-sm pt-8 border-t border-slate">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-newcastle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              A+ BBB Rating
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-newcastle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              2-10 Home Warranty
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-newcastle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Energy Star Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-newcastle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Financing Available
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
