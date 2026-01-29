'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Contractor {
  role: string
  company: string
  contact: string
  phone: string
  status: string
  required: boolean
  rating: number
  review: string
}

interface Phase {
  num: number
  name: string
  color: string
  contractors: Contractor[]
  permits?: { name: string; status: string; number: string | null; date: string | null }[]
  equipment: { name: string; id: string; hours: number }[]
  photos: number
}

interface Property {
  id: string
  address: string
  community: string
  lot: string
  floorPlan: string
  sqft: number
  bedrooms: number
  bathrooms: number
  currentPhase: number
  progress: number
  status: string
  projectManager: { name: string; phone: string; email: string }
  buildersAgent: { name: string; phone: string; email: string }
  buyersAgent: { name: string; phone: string; email: string } | null
  buyer: { name: string; phone: string; email: string } | null
}

function StarRating({ rating, onRate, readonly = false }: { rating: number; onRate?: (rating: number) => void; readonly?: boolean }) {
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
        >
          <svg
            className={`w-5 h-5 ${
              (hoverRating || rating) >= star
                ? 'text-amber-400 fill-amber-400'
                : 'text-slate-300 fill-slate-300'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm font-medium text-charcoal-light">{rating}/5</span>
      )}
    </div>
  )
}

function ContractorReviewModal({
  contractor,
  onClose,
  onSave,
}: {
  contractor: { role: string; company: string; rating: number; review: string }
  onClose: () => void
  onSave: (rating: number, review: string) => void
}) {
  const [rating, setRating] = useState(contractor.rating)
  const [review, setReview] = useState(contractor.review)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-strong max-w-lg w-full">
        <div className="p-6 border-b border-slate">
          <h3 className="text-lg font-heading font-semibold text-charcoal">Rate & Review Contractor</h3>
          <p className="text-sm text-charcoal-light mt-1">{contractor.role} - {contractor.company}</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Rating</label>
            <StarRating rating={rating} onRate={setRating} />
            <p className="text-xs text-charcoal-light mt-1">Click stars to rate (1-5)</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Review / Notes</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Add notes about contractor performance, quality of work, punctuality, communication..."
              className="w-full px-4 py-3 border border-slate rounded-lg focus:outline-none focus:ring-2 focus:ring-newcastle/20 focus:border-newcastle resize-none"
              rows={4}
            />
            <p className="text-xs text-charcoal-light mt-1">This review helps determine whether to use this contractor on future projects.</p>
          </div>
        </div>
        <div className="p-6 border-t border-slate flex gap-3 justify-end">
          <button onClick={onClose} className="btn-outline py-2 px-4 text-sm">
            Cancel
          </button>
          <button onClick={() => onSave(rating, review)} className="btn-primary py-2 px-4 text-sm">
            Save Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PropertyDetailClient({ property, constructionPhases }: { property: Property; constructionPhases: Phase[] }) {
  const [reviewModal, setReviewModal] = useState<{
    phaseNum: number
    contractorIdx: number
    contractor: { role: string; company: string; rating: number; review: string }
  } | null>(null)
  const [expandedPhases, setExpandedPhases] = useState<number[]>([property.currentPhase])

  const togglePhase = (phaseNum: number) => {
    setExpandedPhases(prev =>
      prev.includes(phaseNum)
        ? prev.filter(p => p !== phaseNum)
        : [...prev, phaseNum]
    )
  }

  const statusColors: Record<string, string> = {
    ON_TRACK: 'bg-green-100 text-green-700',
    DELAYED: 'bg-red-100 text-red-700',
    AHEAD: 'bg-newcastle-100 text-newcastle-700',
    PAUSED: 'bg-amber-100 text-amber-700',
  }

  const statusLabels: Record<string, string> = {
    ON_TRACK: 'On Track',
    DELAYED: 'Delayed',
    AHEAD: 'Ahead',
    PAUSED: 'Paused',
  }

  const contractorStatusColors: Record<string, string> = {
    COMPLETED: 'bg-green-100 text-green-700',
    IN_PROGRESS: 'bg-newcastle-100 text-newcastle-700',
    PENDING: 'bg-slate-100 text-slate-600',
    NOT_NEEDED: 'bg-slate-100 text-slate-400',
    DELIVERED: 'bg-purple-100 text-purple-700',
  }

  const permitStatusColors: Record<string, string> = {
    APPROVED: 'bg-green-100 text-green-700',
    PENDING: 'bg-amber-100 text-amber-700',
    DENIED: 'bg-red-100 text-red-700',
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600 bg-green-50'
    if (rating >= 3) return 'text-amber-600 bg-amber-50'
    if (rating >= 1) return 'text-red-600 bg-red-50'
    return 'text-slate-400 bg-slate-50'
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

      {/* Property Header */}
      <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-heading font-bold text-charcoal">{property.address}</h1>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[property.status]}`}>
                {statusLabels[property.status]}
              </span>
            </div>
            <p className="text-charcoal-light">{property.community} • {property.lot} • {property.floorPlan}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-charcoal-light">
              <span>{property.bedrooms} Bedrooms</span>
              <span>•</span>
              <span>{property.bathrooms} Bathrooms</span>
              <span>•</span>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline py-2 px-4 text-sm">Edit Property</button>
            <button className="btn-primary py-2 px-4 text-sm">Update Progress</button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-charcoal">Overall Progress</span>
            <span className="text-sm font-medium text-charcoal">{property.progress}%</span>
          </div>
          <div className="w-full bg-slate-light rounded-full h-3">
            <div
              className="h-3 rounded-full bg-newcastle transition-all"
              style={{ width: `${property.progress}%` }}
            />
          </div>
        </div>

        {/* Key Personnel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate">
          <div className="p-4 bg-slate-light rounded-lg">
            <p className="text-xs text-charcoal-light uppercase tracking-wider mb-2">Project Manager</p>
            <p className="font-semibold text-charcoal">{property.projectManager.name}</p>
            <a href={`tel:${property.projectManager.phone}`} className="text-sm text-newcastle hover:text-accent">{property.projectManager.phone}</a>
          </div>
          <div className="p-4 bg-slate-light rounded-lg">
            <p className="text-xs text-charcoal-light uppercase tracking-wider mb-2">Builder&apos;s Agent</p>
            <p className="font-semibold text-charcoal">{property.buildersAgent.name}</p>
            <a href={`tel:${property.buildersAgent.phone}`} className="text-sm text-newcastle hover:text-accent">{property.buildersAgent.phone}</a>
          </div>
          <div className="p-4 bg-slate-light rounded-lg">
            <p className="text-xs text-charcoal-light uppercase tracking-wider mb-2">Buyer&apos;s Agent</p>
            {property.buyersAgent ? (
              <>
                <p className="font-semibold text-charcoal">{property.buyersAgent.name}</p>
                <a href={`tel:${property.buyersAgent.phone}`} className="text-sm text-newcastle hover:text-accent">{property.buyersAgent.phone}</a>
              </>
            ) : (
              <p className="text-charcoal-light italic">Not assigned</p>
            )}
          </div>
          <div className="p-4 bg-slate-light rounded-lg">
            <p className="text-xs text-charcoal-light uppercase tracking-wider mb-2">Buyer</p>
            {property.buyer ? (
              <>
                <p className="font-semibold text-charcoal">{property.buyer.name}</p>
                <a href={`tel:${property.buyer.phone}`} className="text-sm text-newcastle hover:text-accent">{property.buyer.phone}</a>
              </>
            ) : (
              <p className="text-charcoal-light italic">No buyer yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Construction Phases */}
      <div className="space-y-4">
        {constructionPhases.map((phase) => {
          const isCurrentPhase = phase.num === property.currentPhase
          const isCompleted = phase.num < property.currentPhase
          const isExpanded = expandedPhases.includes(phase.num)

          // Calculate average rating for this phase
          const ratedContractors = phase.contractors.filter(c => c.rating > 0)
          const avgRating = ratedContractors.length > 0
            ? (ratedContractors.reduce((sum, c) => sum + c.rating, 0) / ratedContractors.length).toFixed(1)
            : null

          return (
            <div
              key={phase.num}
              className={`bg-white rounded-xl shadow-soft overflow-hidden ${
                isCurrentPhase ? 'ring-2 ring-newcastle' : ''
              }`}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.num)}
                className={`w-full p-5 ${isCurrentPhase ? 'bg-newcastle text-white' : isCompleted ? 'bg-green-50' : 'bg-slate-light'} text-left`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCurrentPhase ? 'bg-white text-newcastle' :
                      isCompleted ? 'bg-green-500 text-white' :
                      'bg-slate text-charcoal-light'
                    }`}>
                      {isCompleted ? '✓' : phase.num}
                    </span>
                    <div>
                      <h2 className={`font-heading font-semibold ${isCurrentPhase ? 'text-white' : 'text-charcoal'}`}>
                        Phase {phase.num}: {phase.name}
                      </h2>
                      <p className={`text-sm ${isCurrentPhase ? 'text-white/80' : 'text-charcoal-light'}`}>
                        {isCompleted ? 'Completed' : isCurrentPhase ? 'In Progress' : 'Upcoming'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {avgRating && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isCurrentPhase ? 'bg-white/20 text-white' : getRatingColor(parseFloat(avgRating))
                      }`}>
                        Avg: {avgRating}/5
                      </span>
                    )}
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isCurrentPhase ? 'bg-white/20 text-white' :
                      isCompleted ? 'bg-green-100 text-green-700' :
                      'bg-slate text-charcoal-light'
                    }`}>
                      {phase.photos} Photos
                    </span>
                    <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''} ${isCurrentPhase ? 'text-white' : 'text-charcoal-light'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Phase Content */}
              {isExpanded && (
                <div className="p-5">
                  {/* Permits (Phase 1 only) */}
                  {phase.permits && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Permits & Approvals</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.permits.map((permit, idx) => (
                          <div key={idx} className="p-3 bg-slate-light rounded-lg flex items-center justify-between">
                            <div>
                              <p className="font-medium text-charcoal text-sm">{permit.name}</p>
                              {permit.number && <p className="text-xs text-charcoal-light">{permit.number}</p>}
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${permitStatusColors[permit.status]}`}>
                              {permit.status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-3 text-sm text-newcastle hover:text-accent font-medium">+ Add Permit</button>
                    </div>
                  )}

                  {/* Contractors with Grading */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Contractors & Ratings</h3>
                    <div className="space-y-3">
                      {phase.contractors.map((contractor, idx) => (
                        <div key={idx} className="p-4 bg-slate-light rounded-lg">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-charcoal">{contractor.role}</span>
                                {!contractor.required && <span className="text-xs text-charcoal-light">(if needed)</span>}
                                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${contractorStatusColors[contractor.status]}`}>
                                  {contractor.status.replace('_', ' ')}
                                </span>
                              </div>
                              <p className="text-sm text-charcoal">{contractor.company}</p>
                              <p className="text-sm text-charcoal-light">
                                {contractor.contact} • <a href={`tel:${contractor.phone}`} className="text-newcastle hover:text-accent">{contractor.phone}</a>
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <div className="flex items-center gap-2">
                                <StarRating rating={contractor.rating} readonly />
                                {(contractor.status === 'COMPLETED' || contractor.status === 'DELIVERED') && (
                                  <button
                                    onClick={() => setReviewModal({ phaseNum: phase.num, contractorIdx: idx, contractor })}
                                    className="text-xs text-newcastle hover:text-accent font-medium"
                                  >
                                    {contractor.rating > 0 ? 'Edit' : 'Rate'}
                                  </button>
                                )}
                              </div>
                              {contractor.review && (
                                <p className="text-xs text-charcoal-light italic max-w-sm text-right">&quot;{contractor.review}&quot;</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-3 text-sm text-newcastle hover:text-accent font-medium">+ Add Contractor</button>
                  </div>

                  {/* Equipment Used */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Crestview Equipment Used</h3>
                    {phase.equipment.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {phase.equipment.map((item, idx) => (
                          <div key={idx} className="p-3 bg-slate-light rounded-lg flex items-center justify-between">
                            <div>
                              <p className="font-medium text-charcoal text-sm">{item.name}</p>
                              <p className="text-xs text-charcoal-light">ID: {item.id}</p>
                            </div>
                            <span className="text-sm font-medium text-newcastle">{item.hours}h</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-charcoal-light italic">No Crestview equipment logged for this phase</p>
                    )}
                    <button className="mt-3 text-sm text-newcastle hover:text-accent font-medium">+ Log Equipment</button>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Photos</h3>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-slate rounded-lg hover:border-newcastle hover:bg-newcastle-50 transition-colors">
                        <svg className="w-5 h-5 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-charcoal-light">Upload Photos</span>
                      </button>
                      {phase.photos > 0 && (
                        <button className="text-sm text-newcastle hover:text-accent font-medium">
                          View {phase.photos} Photos
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Review Modal */}
      {reviewModal && (
        <ContractorReviewModal
          contractor={reviewModal.contractor}
          onClose={() => setReviewModal(null)}
          onSave={(rating, review) => {
            // In a real app, this would save to the database
            console.log('Saving review:', { phaseNum: reviewModal.phaseNum, contractorIdx: reviewModal.contractorIdx, rating, review })
            setReviewModal(null)
          }}
        />
      )}
    </div>
  )
}
