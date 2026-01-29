'use client'

import Link from 'next/link'
import { useState } from 'react'

const communities = [
  'Barimore',
  'The Falls',
  'Grand River',
  'Havenridge',
  'Heritage Pines',
  'Not sure yet - need guidance',
]

const inquiryTypes = [
  { value: 'tour', label: 'Schedule a Tour' },
  { value: 'info', label: 'General Information' },
  { value: 'pricing', label: 'Pricing & Availability' },
  { value: 'financing', label: 'Financing Options' },
  { value: 'custom', label: 'Custom Home Build' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'tour',
    community: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    howHeard: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Contact form data:', formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-light">
        {/* Header */}
        <header className="bg-white shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-newcastle rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">N</span>
                </div>
                <span className="font-heading font-bold text-xl text-charcoal">Crestview Homes</span>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/#communities" className="text-charcoal-light hover:text-newcastle transition-colors">Communities</Link>
                <Link href="/#about" className="text-charcoal-light hover:text-newcastle transition-colors">About</Link>
                <Link href="/contact" className="text-newcastle font-medium">Contact</Link>
                <Link href="/dashboard" className="btn-primary py-2 px-4 text-sm">Staff Portal</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-soft p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-heading font-bold text-charcoal mb-4">Thank You!</h1>
            <p className="text-charcoal-light text-lg mb-8">
              {formData.inquiryType === 'tour'
                ? "We've received your tour request. A member of our team will contact you within 24 hours to confirm your appointment."
                : "We've received your message. A member of our team will be in touch with you shortly."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary py-3 px-6">
                Return Home
              </Link>
              <Link href="/#communities" className="btn-outline py-3 px-6">
                Explore Communities
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-light">
      {/* Header */}
      <header className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-newcastle rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-xl text-charcoal">Crestview Homes</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#communities" className="text-charcoal-light hover:text-newcastle transition-colors">Communities</Link>
              <Link href="/#about" className="text-charcoal-light hover:text-newcastle transition-colors">About</Link>
              <Link href="/contact" className="text-newcastle font-medium">Contact</Link>
              <Link href="/dashboard" className="btn-primary py-2 px-4 text-sm">Staff Portal</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-newcastle text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to find your dream home? Schedule a tour or reach out with any questions. We're here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(205) 555-0000"
                      className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">What can we help you with? *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Community Interest */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Which community interests you?</label>
                  <select
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
                  >
                    <option value="">Select a community</option>
                    {communities.map(community => (
                      <option key={community} value={community}>{community}</option>
                    ))}
                  </select>
                </div>

                {/* Tour Scheduling - Only show if inquiry type is tour */}
                {formData.inquiryType === 'tour' && (
                  <div className="bg-newcastle/5 rounded-xl p-6 space-y-6">
                    <h3 className="font-heading font-semibold text-charcoal flex items-center gap-2">
                      <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Preferred Tour Date & Time
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Preferred Date</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Preferred Time</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
                        >
                          <option value="">Select a time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal-light">
                      Tours are available Monday - Saturday. We'll confirm your appointment within 24 hours.
                    </p>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {formData.inquiryType === 'tour' ? 'Any special requests or questions?' : 'Message *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required={formData.inquiryType !== 'tour'}
                    rows={4}
                    placeholder={formData.inquiryType === 'tour'
                      ? "Let us know if you have any specific questions or areas you'd like to focus on during your tour..."
                      : "How can we help you?"
                    }
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">How did you hear about us?</label>
                  <select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="realtor">Real Estate Agent</option>
                    <option value="drive-by">Drove By a Community</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      {formData.inquiryType === 'tour' ? 'Request Tour' : 'Send Message'}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Office Info */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-newcastle/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Main Office</p>
                    <p className="text-charcoal-light text-sm">2100 Riverchase Center<br />Birmingham, AL 35244</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-newcastle/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <p className="text-charcoal-light text-sm">(205) 555-0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-newcastle/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-charcoal-light text-sm">info@demobuilders.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-charcoal-light">Monday - Friday</span>
                  <span className="font-medium text-charcoal">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-light">Saturday</span>
                  <span className="font-medium text-charcoal">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-light">Sunday</span>
                  <span className="font-medium text-charcoal">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-newcastle rounded-2xl p-8 text-white">
              <h3 className="text-xl font-heading font-bold mb-4">Explore Our Communities</h3>
              <p className="text-white/80 mb-6 text-sm">
                Discover the perfect neighborhood for your family with our range of stunning communities.
              </p>
              <Link href="/#communities" className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                View All Communities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-newcastle rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-xl">Crestview Homes</span>
            </div>
            <p className="text-white/60 text-sm">
              &copy; 2024 Crestview Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
