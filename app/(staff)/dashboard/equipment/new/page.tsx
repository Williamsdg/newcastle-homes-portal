'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const equipmentTypes = [
  'Heavy Equipment',
  'Vehicles',
  'Power Equipment',
  'Safety Equipment',
  'Power Tools',
  'Measuring Tools',
  'Hand Tools',
  'Scaffolding',
]

const locations = [
  'Warehouse',
  'Service Center',
  'Barimore - Active Site',
  'The Falls - Active Site',
  'Grand River - Active Site',
  'Havenridge - Active Site',
  'Heritage Pines - Active Site',
]

export default function NewEquipmentPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    serialNumber: '',
    manufacturer: '',
    model: '',
    yearPurchased: '',
    purchasePrice: '',
    currentValue: '',
    location: '',
    status: 'AVAILABLE',
    lastServiceDate: '',
    nextServiceDate: '',
    serviceInterval: '90',
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
    console.log('New equipment data:', formData)

    alert('Equipment added successfully!')
    router.push('/dashboard/equipment')
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/equipment" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Equipment
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-charcoal">Add New Equipment</h1>
        <p className="text-charcoal-light mt-1">Register new equipment to the inventory</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">1</span>
            Basic Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">Equipment Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Excavator CAT 320"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Equipment Type *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Type</option>
                {equipmentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                placeholder="e.g., CAT320-2024-001"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                placeholder="e.g., Caterpillar"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g., 320 GC"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
          </div>
        </div>

        {/* Purchase & Value */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">2</span>
            Purchase & Value
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Year Purchased</label>
              <input
                type="number"
                name="yearPurchased"
                value={formData.yearPurchased}
                onChange={handleChange}
                placeholder="e.g., 2023"
                min="1990"
                max="2030"
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Purchase Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light">$</span>
                <input
                  type="number"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Current Value</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light">$</span>
                <input
                  type="number"
                  name="currentValue"
                  value={formData.currentValue}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location & Status */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">3</span>
            Location & Status
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Current Location *</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="">Select Location</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Status *</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="AVAILABLE">Available</option>
                <option value="IN_USE">In Use</option>
                <option value="MAINTENANCE">In Maintenance</option>
                <option value="RETIRED">Retired</option>
              </select>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-newcastle text-white flex items-center justify-center text-sm font-bold">4</span>
            Maintenance Schedule
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Last Service Date</label>
              <input
                type="date"
                name="lastServiceDate"
                value={formData.lastServiceDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Next Service Date</label>
              <input
                type="date"
                name="nextServiceDate"
                value={formData.nextServiceDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Service Interval (Days)</label>
              <select
                name="serviceInterval"
                value={formData.serviceInterval}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle bg-white"
              >
                <option value="30">30 Days</option>
                <option value="60">60 Days</option>
                <option value="90">90 Days</option>
                <option value="180">180 Days</option>
                <option value="365">Annually</option>
              </select>
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
            placeholder="Any additional notes about this equipment..."
            rows={4}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-4">
          <Link href="/dashboard/equipment" className="text-charcoal-light hover:text-charcoal font-medium">
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
                Add Equipment
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
