import Link from 'next/link'

const phases = [
  { slug: 'pre-construction', num: 1, name: 'Pre-Construction Phase', color: 'bg-slate-500', description: 'Planning, permits, and design approvals' },
  { slug: 'site-preparation', num: 2, name: 'Site Preparation', color: 'bg-amber-500', description: 'Excavation, grading, and utility work' },
  { slug: 'foundation', num: 3, name: 'Foundation & Structure', color: 'bg-orange-500', description: 'Concrete, waterproofing, and framing' },
  { slug: 'mechanical-rough', num: 4, name: 'Mechanical Rough-Ins', color: 'bg-yellow-500', description: 'Plumbing, electrical, and HVAC rough-in' },
  { slug: 'building-envelope', num: 5, name: 'Building Envelope', color: 'bg-lime-500', description: 'Roofing, windows, siding, and insulation' },
  { slug: 'interior-finishes', num: 6, name: 'Interior Finishes', color: 'bg-green-500', description: 'Drywall, paint, trim, and flooring' },
  { slug: 'final-mechanical', num: 7, name: 'Final Mechanical', color: 'bg-teal-500', description: 'Fixture installation and final connections' },
  { slug: 'exterior-landscape', num: 8, name: 'Exterior & Landscape', color: 'bg-cyan-500', description: 'Driveways, landscaping, and fencing' },
  { slug: 'final-inspections', num: 9, name: 'Final Inspections', color: 'bg-blue-500', description: 'Cleaning, punch list, and final walkthrough' },
]

const allProperties = [
  {
    id: '1',
    address: '142 Barimore Lane',
    community: 'Barimore',
    lot: 'Lot 14',
    floorPlan: 'The Oakmont',
    sqft: 2650,
    bedrooms: 4,
    bathrooms: 3,
    currentPhase: 6,
    progress: 65,
    status: 'ON_TRACK',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Tom Bradley',
    buyer: 'The Johnson Family',
    daysInPhase: 12,
    phaseProgress: 45,
  },
  {
    id: '2',
    address: '78 Falls Creek Dr',
    community: 'The Falls',
    lot: 'Lot 8',
    floorPlan: 'The Belmont',
    sqft: 2890,
    bedrooms: 4,
    bathrooms: 3.5,
    currentPhase: 3,
    progress: 28,
    status: 'DELAYED',
    projectManager: 'James Wilson',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    daysInPhase: 21,
    phaseProgress: 60,
  },
  {
    id: '3',
    address: '215 Grand River Way',
    community: 'Grand River',
    lot: 'Lot 3',
    floorPlan: 'The Willow',
    sqft: 2150,
    bedrooms: 3,
    bathrooms: 2.5,
    currentPhase: 8,
    progress: 88,
    status: 'ON_TRACK',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Lisa Chen',
    buyer: 'Emily & David Chen',
    daysInPhase: 8,
    phaseProgress: 70,
  },
  {
    id: '4',
    address: '324 Havenridge Dr',
    community: 'Havenridge',
    lot: 'Lot 12',
    floorPlan: 'The Hampton',
    sqft: 1980,
    bedrooms: 3,
    bathrooms: 2,
    currentPhase: 1,
    progress: 8,
    status: 'ON_TRACK',
    projectManager: 'Tom Bradley',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    daysInPhase: 5,
    phaseProgress: 25,
  },
  {
    id: '5',
    address: '156 Barimore Circle',
    community: 'Barimore',
    lot: 'Lot 22',
    floorPlan: 'The Charleston',
    sqft: 3200,
    bedrooms: 5,
    bathrooms: 4,
    currentPhase: 4,
    progress: 42,
    status: 'AHEAD',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Mark Thompson',
    buyer: 'The Martinez Family',
    daysInPhase: 10,
    phaseProgress: 55,
  },
  {
    id: '6',
    address: '445 Falls View Terrace',
    community: 'The Falls',
    lot: 'Lot 5',
    floorPlan: 'The Ashford',
    sqft: 3100,
    bedrooms: 4,
    bathrooms: 3.5,
    currentPhase: 5,
    progress: 52,
    status: 'ON_TRACK',
    projectManager: 'James Wilson',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    daysInPhase: 14,
    phaseProgress: 40,
  },
  {
    id: '7',
    address: '89 Heritage Pine Ct',
    community: 'Heritage Pines',
    lot: 'Lot 7',
    floorPlan: 'The Madison',
    sqft: 2480,
    bedrooms: 4,
    bathrooms: 3,
    currentPhase: 9,
    progress: 95,
    status: 'ON_TRACK',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Jennifer Adams',
    buyer: 'Robert & Lisa Thompson',
    daysInPhase: 3,
    phaseProgress: 80,
  },
  {
    id: '8',
    address: '67 Grand River Blvd',
    community: 'Grand River',
    lot: 'Lot 2',
    floorPlan: 'The Savannah',
    sqft: 2340,
    bedrooms: 4,
    bathrooms: 2.5,
    currentPhase: 2,
    progress: 15,
    status: 'ON_TRACK',
    projectManager: 'Tom Bradley',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    daysInPhase: 7,
    phaseProgress: 35,
  },
  // Additional placeholder properties for phases
  {
    id: '9',
    address: '512 Barimore Way',
    community: 'Barimore',
    lot: 'Lot 31',
    floorPlan: 'The Oakmont',
    sqft: 2650,
    bedrooms: 4,
    bathrooms: 3,
    currentPhase: 1,
    progress: 5,
    status: 'ON_TRACK',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: null,
    buyer: null,
    daysInPhase: 3,
    phaseProgress: 15,
  },
  {
    id: '10',
    address: '234 Heritage Oak Dr',
    community: 'Heritage Pines',
    lot: 'Lot 11',
    floorPlan: 'The Belmont',
    sqft: 2890,
    bedrooms: 4,
    bathrooms: 3.5,
    currentPhase: 7,
    progress: 78,
    status: 'ON_TRACK',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'John Davis',
    buyersAgent: 'Amanda White',
    buyer: 'The Garcia Family',
    daysInPhase: 6,
    phaseProgress: 50,
  },
]

export function generateStaticParams() {
  return phases.map((phase) => ({
    phase: phase.slug,
  }))
}

export default function PhasePage({ params }: { params: { phase: string } }) {
  const phase = phases.find(p => p.slug === params.phase)

  if (!phase) {
    return <div>Phase not found</div>
  }

  const propertiesInPhase = allProperties.filter(p => p.currentPhase === phase.num)

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

  const onTrackCount = propertiesInPhase.filter(p => p.status === 'ON_TRACK').length
  const delayedCount = propertiesInPhase.filter(p => p.status === 'DELAYED').length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <span className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center text-white text-xl font-bold`}>
            {phase.num}
          </span>
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">{phase.name}</h1>
            <p className="text-charcoal-light mt-1">{phase.description}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{propertiesInPhase.length}</p>
          <p className="text-sm text-charcoal-light">Properties in Phase</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{onTrackCount}</p>
          <p className="text-sm text-charcoal-light">On Track</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-red-600">{delayedCount}</p>
            {delayedCount > 0 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          </div>
          <p className="text-sm text-charcoal-light">Delayed</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">
            {propertiesInPhase.length > 0
              ? Math.round(propertiesInPhase.reduce((sum, p) => sum + p.phaseProgress, 0) / propertiesInPhase.length)
              : 0}%
          </p>
          <p className="text-sm text-charcoal-light">Avg Phase Progress</p>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-charcoal mr-2">Jump to Phase:</span>
          {phases.map((p) => (
            <Link
              key={p.slug}
              href={`/dashboard/phase/${p.slug}`}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                p.slug === params.phase
                  ? `${p.color} text-white`
                  : 'bg-slate text-charcoal-light hover:bg-slate-dark'
              }`}
            >
              {p.num}
            </Link>
          ))}
        </div>
      </div>

      {/* Properties Grid */}
      {propertiesInPhase.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {propertiesInPhase.map((property) => (
            <Link
              key={property.id}
              href={`/dashboard/properties/${property.id}`}
              className={`bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-shadow ${
                property.status === 'DELAYED' ? 'border-l-4 border-red-500' : ''
              }`}
            >
              {/* Header */}
              <div className="p-5 border-b border-slate">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg">{property.address}</h3>
                    <p className="text-sm text-charcoal-light">{property.community} • {property.lot}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[property.status]}`}>
                    {statusLabels[property.status]}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-charcoal-light">
                  <span>{property.floorPlan}</span>
                  <span>•</span>
                  <span>{property.bedrooms} bd / {property.bathrooms} ba</span>
                  <span>•</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              {/* Phase Progress */}
              <div className="px-5 py-4 bg-slate-light/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full ${phase.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {phase.num}
                    </span>
                    <span className="text-sm font-medium text-charcoal">Phase Progress</span>
                  </div>
                  <span className="text-sm font-medium text-charcoal">{property.phaseProgress}%</span>
                </div>
                <div className="w-full bg-slate rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${phase.color}`}
                    style={{ width: `${property.phaseProgress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-charcoal-light">
                  <span>{property.daysInPhase} days in phase</span>
                  <span>{property.progress}% overall</span>
                </div>
              </div>

              {/* Team Info */}
              <div className="p-5 grid grid-cols-2 gap-4 border-b border-slate">
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Project Manager</p>
                  <p className="text-sm font-medium text-charcoal">{property.projectManager}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Builder&apos;s Agent</p>
                  <p className="text-sm font-medium text-charcoal">{property.buildersAgent}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Buyer&apos;s Agent</p>
                  <p className="text-sm font-medium text-charcoal">{property.buyersAgent || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Buyer</p>
                  <p className="text-sm font-medium text-charcoal">{property.buyer || '—'}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 flex items-center justify-end">
                <span className="text-sm text-newcastle font-medium">View Property →</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-soft p-12 text-center">
          <div className={`w-16 h-16 rounded-full ${phase.color} mx-auto mb-4 flex items-center justify-center`}>
            <span className="text-2xl font-bold text-white">{phase.num}</span>
          </div>
          <h3 className="text-xl font-semibold text-charcoal mb-2">No Properties in This Phase</h3>
          <p className="text-charcoal-light mb-6">There are currently no properties in the {phase.name} phase.</p>
          <Link href="/dashboard/properties" className="btn-primary py-2 px-4 text-sm">
            View All Properties
          </Link>
        </div>
      )}
    </div>
  )
}
