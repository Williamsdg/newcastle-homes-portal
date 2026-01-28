'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const properties = [
  { id: '1', address: '142 Barimore Lane', community: 'Barimore' },
  { id: '2', address: '78 Falls Creek Dr', community: 'The Falls' },
  { id: '3', address: '215 Grand River Way', community: 'Grand River' },
  { id: '4', address: '324 Havenridge Dr', community: 'Havenridge' },
  { id: '5', address: '156 Barimore Circle', community: 'Barimore' },
  { id: '6', address: '445 Falls View Terrace', community: 'The Falls' },
  { id: '7', address: '89 Heritage Pine Ct', community: 'Heritage Pines' },
  { id: '8', address: '67 Grand River Blvd', community: 'Grand River' },
]

const buyersAgents = [
  'Tom Bradley',
  'Lisa Chen',
  'Mark Thompson',
  'Jennifer Adams',
  'Amanda White',
]

export default function NewBuyerPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    buyerName: '',
    buyerEmail: '',
    buyerPhone: '',
    buyerAltPhone: '',
    buyerAddress: '',
    buyerCity: '',
    buyerState: 'AL',
    buyerZip: '',
    propertyId: '',
    buyersAgent: '',
    buyersAgentEmail: '',
    buyersAgentPhone: '',
    preApproved: 'no',
    lender: '',
    loanAmount: '',
    downPayment: '',
    closingDate: '',
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
    console.log('New buyer data:', formData)

    alert('Buyer added successfully!')
    router.push('/dashboard/clients')
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/clients" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Buyers
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal">Add New Buyer</h1>
        <p className="text-charcoal-light mt-1">Register a new home buyer</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Buyer Information */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">1</span>
            Buyer Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Buyer Name *</label>
              <input
                type="text"
                name="buyerName"
                value={formData.buyerName}
                onChange={handleChange}
                required
                placeholder="e.g., The Johnson Family or John & Jane Smith"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
              <input
                type="email"
                name="buyerEmail"
                value={formData.buyerEmail}
                onChange={handleChange}
                required
                placeholder="buyer@email.com"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
              <input
                type="tel"
                name="buyerPhone"
                value={formData.buyerPhone}
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
                name="buyerAltPhone"
                value={formData.buyerAltPhone}
                onChange={handleChange}
                placeholder="(205) 555-0000"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Current Address */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">2</span>
            Current Address
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Street Address</label>
              <input
                type="text"
                name="buyerAddress"
                value={formData.buyerAddress}
                onChange={handleChange}
                placeholder="123 Current Street"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">City</label>
              <input
                type="text"
                name="buyerCity"
                value={formData.buyerCity}
                onChange={handleChange}
                placeholder="Birmingham"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">State</label>
                <select
                  name="buyerState"
                  value={formData.buyerState}
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
                  name="buyerZip"
                  value={formData.buyerZip}
                  onChange={handleChange}
                  placeholder="35203"
                  className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Property & Agent */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">3</span>
            Property & Agent Assignment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Interested Property</label>
              <select
                name="propertyId"
                value={formData.propertyId}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Property (Optional)</option>
                {properties.map(prop => (
                  <option key={prop.id} value={prop.id}>{prop.address} - {prop.community}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Buyer&apos;s Agent</label>
              <select
                name="buyersAgent"
                value={formData.buyersAgent}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select or Add New</option>
                {buyersAgents.map(agent => (
                  <option key={agent} value={agent}>{agent}</option>
                ))}
                <option value="new">+ Add New Agent</option>
              </select>
            </div>
            {formData.buyersAgent === 'new' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Agent Email</label>
                  <input
                    type="email"
                    name="buyersAgentEmail"
                    value={formData.buyersAgentEmail}
                    onChange={handleChange}
                    placeholder="agent@email.com"
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Agent Phone</label>
                  <input
                    type="tel"
                    name="buyersAgentPhone"
                    value={formData.buyersAgentPhone}
                    onChange={handleChange}
                    placeholder="(205) 555-0000"
                    className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Financing */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">4</span>
            Financing Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Pre-Approved?</label>
              <select
                name="preApproved"
                value={formData.preApproved}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="pending">Pending</option>
                <option value="cash">Cash Buyer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Lender</label>
              <input
                type="text"
                name="lender"
                value={formData.lender}
                onChange={handleChange}
                placeholder="e.g., Wells Fargo Mortgage"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Pre-Approved Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light">$</span>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Down Payment</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light">$</span>
                <input
                  type="number"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Target Closing Date</label>
              <input
                type="date"
                name="closingDate"
                value={formData.closingDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
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
            placeholder="Any additional notes about this buyer, special requests, timeline preferences..."
            rows={4}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4">
          <Link href="/dashboard/clients" className="text-charcoal-light hover:text-charcoal font-medium">
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
                Add Buyer
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
