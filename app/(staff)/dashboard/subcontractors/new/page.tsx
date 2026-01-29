'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const specialties = [
  'Architect / Designer',
  'Structural Engineer',
  'Land Surveyor',
  'Geotechnical Engineer',
  'Excavation / Grading',
  'Tree Removal',
  'Utility Locator',
  'Concrete Contractor',
  'Waterproofing',
  'Framing',
  'Truss Manufacturer',
  'Plumbing',
  'Electrical',
  'HVAC',
  'Low Voltage / Structured Wiring',
  'Roofing',
  'Windows & Doors',
  'Siding / Exterior',
  'Insulation',
  'Drywall',
  'Painting',
  'Trim Carpentry',
  'Flooring',
  'Cabinets',
  'Countertops',
  'Appliance Installation',
  'Landscaping',
  'Fencing',
  'Cleaning Services',
  'General Contractor',
]

export default function NewSubcontractorPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    specialty: '',
    licenseNumber: '',
    insuranceExpiry: '',
    address: '',
    city: '',
    state: 'AL',
    zip: '',
    rating: '0',
    hourlyRate: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('New subcontractor data:', formData)

    alert('Subcontractor added successfully!')
    router.push('/dashboard/subcontractors')
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/subcontractors" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Contractors
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal">Add New Contractor</h1>
        <p className="text-charcoal-light mt-1">Register a new subcontractor or vendor</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">1</span>
            Company Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="e.g., Demo Plumbing Services"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Specialty *</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Specialty</option>
                {specialties.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="e.g., AL-PLM-12345"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Primary Contact */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">2</span>
            Primary Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Contact Name *</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="contact@company.com"
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
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Alternate Phone</label>
              <input
                type="tel"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleChange}
                placeholder="(205) 555-0000"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">3</span>
            Business Address
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Birmingham"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
                >
                  <option value="AL">Alabama</option>
                  <option value="GA">Georgia</option>
                  <option value="TN">Tennessee</option>
                  <option value="MS">Mississippi</option>
                  <option value="FL">Florida</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="35203"
                  className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Insurance & Rates */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">4</span>
            Insurance & Rates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Insurance Expiry Date</label>
              <input
                type="date"
                name="insuranceExpiry"
                value={formData.insuranceExpiry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Hourly Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light">$</span>
                <input
                  type="number"
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-light">/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-slate text-charcoal-light flex items-center justify-center text-sm font-bold">5</span>
            Notes
            <span className="text-xs font-normal text-charcoal-light ml-2">(Optional)</span>
          </h2>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional notes about this contractor..."
            rows={4}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4">
          <Link href="/dashboard/subcontractors" className="text-charcoal-light hover:text-charcoal font-medium">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary py-3 px-6 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Contractor
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
