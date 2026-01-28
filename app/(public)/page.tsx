import Link from 'next/link'
import Image from 'next/image'

const communities = [
  {
    name: 'The Falls',
    location: 'Birmingham, AL 35242',
    priceFrom: '$499,900',
    priceTo: '$589,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iNmQ2MDYxZDQzZDFmZGEyMTZkODMxY2YxNWE1MGQ3Ni5qcGVn/exact/webp/600/380',
    homes: 8,
    featured: true,
    tagline: "Birmingham's Most Coveted New Address",
  },
  {
    name: 'Barimore',
    location: 'Helena, AL 35080',
    priceFrom: '$422,900',
    priceTo: '$524,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83ZjZhMzU3NzYwYTFmMmEwNTUzOWQ3ODNhMGNlYjlmMS5wbmc=/exact/webp/600/380',
    homes: 12,
    featured: true,
    tagline: 'Current Phase Selling Fast',
  },
  {
    name: 'Grand River',
    location: 'Leeds, AL 35094',
    priceFrom: '$349,900',
    priceTo: '$534,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC82Nzc3NTM2ZGQ3YjJkZWVhMzA4MTA3NWE1ODQ1NDE1ZS5qcGVn/exact/webp/600/380',
    homes: 15,
    featured: false,
    tagline: 'Now Selling Phase Three!',
  },
  {
    name: 'Heritage Pines',
    location: 'Columbiana, AL 35051',
    priceFrom: '$689,900',
    priceTo: '$829,900',
    image: 'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lOGY2ZDM4NjJjN2QwMDk3NWRlMWFmN2Q5YzNkYzk3Yy5qcGVn/exact/webp/600/380',
    homes: 6,
    featured: false,
    tagline: 'Estate Living with 20+ Acres',
  },
]

const features = [
  {
    title: 'Quality Construction',
    description: 'Every home is built with premium materials and meticulous attention to detail.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Energy Efficient',
    description: 'Modern designs that save you money and help the environment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Smart Home Ready',
    description: 'Pre-wired for the latest smart home technology and automation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Move-In Ready',
    description: 'Many homes available for quick move-in with included upgrades.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Newcastle Homes made our first home buying experience so easy and enjoyable. We love our new home in Barimore!",
    author: "The Martinez Family",
    location: "Barimore, Helena",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    quote: "Great quality and customer service. From the builders, realtors and the staff inside the office, great response and extremely informative regarding your build.",
    author: "David & Sarah Chen",
    location: "The Falls, Birmingham",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    quote: "The homes are nice and very large for the price. The agent on duty was super helpful and really sweet. Our dream home is now a reality.",
    author: "The Johnson Family",
    location: "Grand River, Leeds",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
]

const stats = [
  { value: '1,500+', label: 'Happy Families' },
  { value: '25+', label: 'Years Building' },
  { value: '9', label: 'Communities' },
  { value: 'A+', label: 'BBB Rating' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Beautiful Newcastle home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 via-transparent to-transparent" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-warmth/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-newcastle/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-warmth rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now Selling in 9 Alabama Communities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-gradient bg-gradient-to-r from-warmth-light to-warmth">Place to Call Home</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl font-light leading-relaxed">
              Discover beautifully designed new homes across North and Central Alabama.
              Quality construction, modern features, and the warm welcome you deserve.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/communities" className="btn-primary flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Communities
              </Link>
              <Link href="/portfolio" className="btn-outline-white flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Gallery
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-warmgray to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-bar mb-6" />
              <h2 className="section-heading">
                Welcome to Newcastle Homes
              </h2>
              <p className="text-lg text-charcoal-light mb-6 leading-relaxed">
                Since 1997, we've spent over 25 years building more than just houses — we've been
                crafting communities across North and Central Alabama with forward-thinking design,
                timeless quality, and personalized service.
              </p>
              <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
                Named for our founder's father's hometown of Newcastle, England, we've built dream
                homes for over 1,500 families. From your first visit to the day you get your keys,
                our team is here to guide you every step of the way. Welcome home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  Our Story
                </Link>
                <Link href="/contact" className="btn-outline flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Talk to Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
                  alt="Newcastle Homes interior"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-newcastle/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-warmth/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-20 bg-warmgray-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6" />
            <h2 className="section-heading">Our Communities</h2>
            <p className="section-subheading mx-auto">
              Explore our beautiful neighborhoods across North and Central Alabama.
              Each community offers unique amenities and that special Newcastle quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communities.map((community) => (
              <div key={community.name} className="community-card group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover community-image transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/20 to-transparent" />

                  {community.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="badge-warm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 text-warmth-light text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {community.location}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{community.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white/60 text-sm">Starting from</span>
                        <span className="block text-xl font-bold text-warmth">{community.priceFrom}</span>
                      </div>
                      <span className="badge bg-white/20 text-white">
                        {community.homes} homes available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between bg-white">
                  <Link
                    href={`/communities#${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-newcastle font-semibold hover:text-warmth transition-colors flex items-center gap-2 group-hover:gap-3"
                  >
                    Explore Community
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-charcoal-light hover:text-newcastle transition-colors text-sm"
                  >
                    Schedule Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/communities" className="btn-secondary">
              View All Communities
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-newcastle via-newcastle-dark to-newcastle-darker text-white relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-warmth rounded-full mx-auto mb-6" />
            <h2 className="section-heading-light">Why Choose Newcastle?</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We're committed to building homes that exceed expectations and
              stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-warmth/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmth/30 transition-colors text-warmth">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6" />
            <h2 className="section-heading">What Our Homeowners Say</h2>
            <p className="section-subheading mx-auto">
              Don't just take our word for it — hear from families who've made
              Newcastle their home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card-bordered p-8 relative">
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-warmth/20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-charcoal-light leading-relaxed mb-6 italic font-accent">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.author}</p>
                    <p className="text-sm text-newcastle">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warmgray-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-newcastle/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warmth/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-warmth/10 rounded-full px-4 py-2 mb-6">
            <svg className="w-5 h-5 text-warmth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-warmth-dark font-medium">Limited Availability</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Ready to Find Your Dream Home?
          </h2>

          <p className="text-xl text-charcoal-light mb-8 max-w-2xl mx-auto">
            Our team is here to help you every step of the way. Schedule a tour
            today and discover why thousands of families have chosen Newcastle.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Tour
            </Link>
            <a href="tel:2056712931" className="btn-outline flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (205) 671-2931
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap justify-center items-center gap-8 text-charcoal-light text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Energy Star Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              10-Year Warranty
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              A+ BBB Rating
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
