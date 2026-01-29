import Link from 'next/link'

const properties = [
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
    phaseName: 'Interior Finishes',
    progress: 65,
    status: 'ON_TRACK',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Tom Bradley',
    buyer: 'The Johnson Family',
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
    phaseName: 'Foundation & Structure',
    progress: 28,
    status: 'DELAYED',
    projectManager: 'James Wilson',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
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
    phaseName: 'Exterior & Landscape',
    progress: 88,
    status: 'ON_TRACK',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Lisa Chen',
    buyer: 'Emily & David Chen',
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
    phaseName: 'Pre-Construction',
    progress: 8,
    status: 'ON_TRACK',
    projectManager: 'Tom Bradley',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
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
    phaseName: 'Mechanical Rough-Ins',
    progress: 42,
    status: 'AHEAD',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Mark Thompson',
    buyer: 'The Martinez Family',
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
    phaseName: 'Building Envelope',
    progress: 52,
    status: 'ON_TRACK',
    projectManager: 'James Wilson',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
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
    phaseName: 'Final Inspections',
    progress: 95,
    status: 'ON_TRACK',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Jennifer Adams',
    buyer: 'Robert & Lisa Thompson',
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
    phaseName: 'Site Preparation',
    progress: 15,
    status: 'ON_TRACK',
    projectManager: 'Tom Bradley',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
  },
]

const phases = [
  { num: 1, name: 'Pre-Construction', color: 'bg-slate-500' },
  { num: 2, name: 'Site Preparation', color: 'bg-amber-500' },
  { num: 3, name: 'Foundation & Structure', color: 'bg-orange-500' },
  { num: 4, name: 'Mechanical Rough-Ins', color: 'bg-yellow-500' },
  { num: 5, name: 'Building Envelope', color: 'bg-lime-500' },
  { num: 6, name: 'Interior Finishes', color: 'bg-green-500' },
  { num: 7, name: 'Final Mechanical', color: 'bg-teal-500' },
  { num: 8, name: 'Exterior & Landscape', color: 'bg-cyan-500' },
  { num: 9, name: 'Final Inspections', color: 'bg-blue-500' },
]

export default function PropertiesPage() {
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

  const onTrackCount = properties.filter(p => p.status === 'ON_TRACK').length
  const delayedCount = properties.filter(p => p.status === 'DELAYED').length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">All Properties</h1>
          <p className="text-charcoal-light mt-1">Crestview Homes construction projects</p>
        </div>
        <Link href="/dashboard/properties/new" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Property
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{properties.length}</p>
          <p className="text-sm text-charcoal-light">Total Properties</p>
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
          <p className="text-2xl font-bold text-newcastle">{properties.filter(p => p.buyer).length}</p>
          <p className="text-sm text-charcoal-light">With Buyers</p>
        </div>
      </div>

      {/* Phase Legend */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-charcoal">Phases:</span>
          {phases.map((phase) => (
            <div key={phase.num} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${phase.color}`} />
              <span className="text-xs text-charcoal-light">{phase.num}. {phase.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {properties.map((property) => {
          const phaseColor = phases.find(p => p.num === property.currentPhase)?.color || 'bg-slate-500'
          return (
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
                    <span className={`w-6 h-6 rounded-full ${phaseColor} flex items-center justify-center text-white text-xs font-bold`}>
                      {property.currentPhase}
                    </span>
                    <span className="text-sm font-medium text-charcoal">{property.phaseName}</span>
                  </div>
                  <span className="text-sm font-medium text-charcoal">{property.progress}%</span>
                </div>
                <div className="w-full bg-slate rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${phaseColor}`}
                    style={{ width: `${property.progress}%` }}
                  />
                </div>
                {/* Phase dots */}
                <div className="flex justify-between mt-2">
                  {phases.map((phase) => (
                    <div
                      key={phase.num}
                      className={`w-2 h-2 rounded-full ${
                        property.currentPhase >= phase.num ? phase.color : 'bg-slate'
                      }`}
                    />
                  ))}
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
          )
        })}
      </div>
    </div>
  )
}
