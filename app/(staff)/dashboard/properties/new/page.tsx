'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const communities = ['Barimore', 'The Falls', 'Grand River', 'Havenridge', 'Heritage Pines']
const floorPlans = ['The Oakmont', 'The Belmont', 'The Willow', 'The Hampton', 'The Charleston', 'The Ashford', 'The Madison', 'The Savannah']
const projectManagers = ['Mike Rodriguez', 'James Wilson', 'Carlos Hernandez', 'Tom Bradley']
const buildersAgents = ['Sarah Mitchell', 'John Davis']

export default function NewPropertyPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    address: '',
    community: '',
    lot: '',
    floorPlan: '',
    sqft: '',
    bedrooms: '3',
    bathrooms: '2',
    projectManager: '',
    buildersAgent: '',
    buyersAgentName: '',
    buyersAgentPhone: '',
    buyersAgentEmail: '',
    buyerName: '',
    buyerPhone: '',
    buyerEmail: '',
    startDate: '',
    estimatedCompletion: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real app, this would save to the database
    console.log('New property data:', formData)

    // Show success and redirect
    alert('Property created successfully!')
    router.push('/dashboard/properties')
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/properties" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Properties
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal">Add New Property</h1>
        <p className="text-charcoal-light mt-1">Create a new construction project</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Property Details */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">1</span>
            Property Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Street Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="e.g., 142 Barimore Lane"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Community *</label>
              <select
                name="community"
                value={formData.community}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Community</option>
                {communities.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Lot Number *</label>
              <input
                type="text"
                name="lot"
                value={formData.lot}
                onChange={handleChange}
                required
                placeholder="e.g., Lot 14"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Floor Plan *</label>
              <select
                name="floorPlan"
                value={formData.floorPlan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Floor Plan</option>
                {floorPlans.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Square Footage *</label>
              <input
                type="number"
                name="sqft"
                value={formData.sqft}
                onChange={handleChange}
                required
                placeholder="e.g., 2650"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Bedrooms *</label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5 Bedrooms</option>
                <option value="6">6 Bedrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Bathrooms *</label>
              <select
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="1">1 Bathroom</option>
                <option value="1.5">1.5 Bathrooms</option>
                <option value="2">2 Bathrooms</option>
                <option value="2.5">2.5 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="3.5">3.5 Bathrooms</option>
                <option value="4">4 Bathrooms</option>
                <option value="4.5">4.5 Bathrooms</option>
              </select>
            </div>
          </div>
        </div>

        {/* Project Team */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">2</span>
            Project Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Project Manager *</label>
              <select
                name="projectManager"
                value={formData.projectManager}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Project Manager</option>
                {projectManagers.map(pm => (
                  <option key={pm} value={pm}>{pm}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Builder&apos;s Agent *</label>
              <select
                name="buildersAgent"
                value={formData.buildersAgent}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Builder&apos;s Agent</option>
                {buildersAgents.map(ba => (
                  <option key={ba} value={ba}>{ba}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Buyer's Agent (Optional) */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-slate text-charcoal-light flex items-center justify-center text-sm font-bold">3</span>
            Buyer&apos;s Agent
            <span className="text-xs font-normal text-charcoal-light ml-2">(Optional)</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Agent Name</label>
              <input
                type="text"
                name="buyersAgentName"
                value={formData.buyersAgentName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
              <input
                type="tel"
                name="buyersAgentPhone"
                value={formData.buyersAgentPhone}
                onChange={handleChange}
                placeholder="(205) 555-0000"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
              <input
                type="email"
                name="buyersAgentEmail"
                value={formData.buyersAgentEmail}
                onChange={handleChange}
                placeholder="agent@email.com"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Buyer Information (Optional) */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-slate text-charcoal-light flex items-center justify-center text-sm font-bold">4</span>
            Buyer Information
            <span className="text-xs font-normal text-charcoal-light ml-2">(Optional)</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Buyer Name</label>
              <input
                type="text"
                name="buyerName"
                value={formData.buyerName}
                onChange={handleChange}
                placeholder="e.g., The Johnson Family"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
              <input
                type="tel"
                name="buyerPhone"
                value={formData.buyerPhone}
                onChange={handleChange}
                placeholder="(205) 555-0000"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
              <input
                type="email"
                name="buyerEmail"
                value={formData.buyerEmail}
                onChange={handleChange}
                placeholder="buyer@email.com"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">5</span>
            Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Construction Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Estimated Completion</label>
              <input
                type="date"
                name="estimatedCompletion"
                value={formData.estimatedCompletion}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-slate text-charcoal-light flex items-center justify-center text-sm font-bold">6</span>
            Additional Notes
            <span className="text-xs font-normal text-charcoal-light ml-2">(Optional)</span>
          </h2>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requirements, custom features, or notes about this property..."
            rows={4}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4">
          <Link
            href="/dashboard/properties"
            className="text-charcoal-light hover:text-charcoal font-medium"
          >
            Cancel
          </Link>
          <div className="flex gap-3">
            <button
              type="button"
              className="btn-outline py-3 px-6"
              onClick={() => {
                // Save as draft logic
                alert('Draft saved!')
              }}
            >
              Save as Draft
            </button>
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
                  Creating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Property
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
