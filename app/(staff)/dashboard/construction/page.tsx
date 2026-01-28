import Link from 'next/link'

const activeBuilds = [
  {
    id: '1',
    address: '142 Barimore Lane',
    community: 'Barimore',
    lot: 'Lot 14',
    floorPlan: 'The Oakmont',
    sqft: 2650,
    bedrooms: 4,
    bathrooms: 3,
    startDate: 'Oct 15, 2023',
    estimatedCompletion: 'Mar 15, 2024',
    currentPhase: 'Drywall',
    progress: 65,
    status: 'ON_TRACK',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 47,
    materialsNeeded: 3,
    openChecklists: 2,
    photosCount: 45,
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
    startDate: 'Nov 01, 2023',
    estimatedCompletion: 'Apr 01, 2024',
    currentPhase: 'Framing',
    progress: 35,
    status: 'DELAYED',
    superintendent: 'James Wilson',
    daysRemaining: 64,
    materialsNeeded: 5,
    openChecklists: 1,
    photosCount: 28,
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
    startDate: 'Sep 20, 2023',
    estimatedCompletion: 'Feb 20, 2024',
    currentPhase: 'Interior Finishes',
    progress: 82,
    status: 'ON_TRACK',
    superintendent: 'Carlos Hernandez',
    daysRemaining: 23,
    materialsNeeded: 1,
    openChecklists: 3,
    photosCount: 67,
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
    startDate: 'Dec 01, 2023',
    estimatedCompletion: 'May 01, 2024',
    currentPhase: 'Foundation',
    progress: 15,
    status: 'ON_TRACK',
    superintendent: 'Tom Bradley',
    daysRemaining: 94,
    materialsNeeded: 8,
    openChecklists: 1,
    photosCount: 12,
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
    startDate: 'Nov 15, 2023',
    estimatedCompletion: 'Apr 15, 2024',
    currentPhase: 'MEP Rough-In',
    progress: 45,
    status: 'AHEAD',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 78,
    materialsNeeded: 2,
    openChecklists: 4,
    photosCount: 38,
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
    startDate: 'Oct 01, 2023',
    estimatedCompletion: 'Mar 01, 2024',
    currentPhase: 'Insulation',
    progress: 55,
    status: 'ON_TRACK',
    superintendent: 'James Wilson',
    daysRemaining: 33,
    materialsNeeded: 0,
    openChecklists: 2,
    photosCount: 52,
  },
]

export default function ConstructionPage() {
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

  const phaseColors: Record<string, string> = {
    'Foundation': 'bg-slate-100 text-slate-700',
    'Framing': 'bg-amber-100 text-amber-700',
    'Roofing': 'bg-red-100 text-red-700',
    'MEP Rough-In': 'bg-blue-100 text-blue-700',
    'Insulation': 'bg-cyan-100 text-cyan-700',
    'Drywall': 'bg-purple-100 text-purple-700',
    'Interior Finishes': 'bg-green-100 text-green-700',
    'Final': 'bg-newcastle-100 text-newcastle-700',
  }

  const onTrackCount = activeBuilds.filter(p => p.status === 'ON_TRACK').length
  const delayedCount = activeBuilds.filter(p => p.status === 'DELAYED').length
  const aheadCount = activeBuilds.filter(p => p.status === 'AHEAD').length
  const totalMaterialsNeeded = activeBuilds.reduce((sum, p) => sum + p.materialsNeeded, 0)

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Properties Under Construction</h1>
          <p className="text-charcoal-light mt-1">Manage active builds, materials, and construction progress</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Start New Build
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{activeBuilds.length}</p>
          <p className="text-sm text-charcoal-light">Active Builds</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{onTrackCount}</p>
          <p className="text-sm text-charcoal-light">On Track</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">{aheadCount}</p>
          <p className="text-sm text-charcoal-light">Ahead</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-red-600">{delayedCount}</p>
            {delayedCount > 0 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          </div>
          <p className="text-sm text-charcoal-light">Delayed</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-amber-600">{totalMaterialsNeeded}</p>
            {totalMaterialsNeeded > 0 && <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />}
          </div>
          <p className="text-sm text-charcoal-light">Materials Needed</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Status</option>
            <option value="ON_TRACK">On Track</option>
            <option value="DELAYED">Delayed</option>
            <option value="AHEAD">Ahead</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Phases</option>
            <option value="Foundation">Foundation</option>
            <option value="Framing">Framing</option>
            <option value="Roofing">Roofing</option>
            <option value="MEP Rough-In">MEP Rough-In</option>
            <option value="Insulation">Insulation</option>
            <option value="Drywall">Drywall</option>
            <option value="Interior Finishes">Interior Finishes</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Communities</option>
            <option value="Barimore">Barimore</option>
            <option value="The Falls">The Falls</option>
            <option value="Grand River">Grand River</option>
            <option value="Havenridge">Havenridge</option>
          </select>
          <input
            type="text"
            placeholder="Search by address or lot..."
            className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
          />
        </div>
      </div>

      {/* Active Builds Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {activeBuilds.map((build) => (
          <Link
            key={build.id}
            href={`/dashboard/construction/${build.id}`}
            className={`bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-shadow ${
              build.status === 'DELAYED' ? 'border-l-4 border-red-500' : ''
            }`}
          >
            {/* Header */}
            <div className="p-5 border-b border-slate">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-charcoal text-lg">{build.address}</h3>
                  <p className="text-sm text-charcoal-light">{build.community} • {build.lot}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[build.status]}`}>
                  {statusLabels[build.status]}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-charcoal-light">
                <span>{build.floorPlan}</span>
                <span>•</span>
                <span>{build.bedrooms} bd / {build.bathrooms} ba</span>
                <span>•</span>
                <span>{build.sqft.toLocaleString()} sqft</span>
              </div>
            </div>

            {/* Progress */}
            <div className="px-5 py-4 bg-slate-light/50">
              <div className="flex justify-between items-center mb-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  phaseColors[build.currentPhase] || 'bg-slate-100 text-slate-700'
                }`}>
                  {build.currentPhase}
                </span>
                <span className="text-sm font-medium text-charcoal">{build.progress}%</span>
              </div>
              <div className="w-full bg-slate rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    build.status === 'DELAYED' ? 'bg-red-500' :
                    build.status === 'AHEAD' ? 'bg-newcastle' : 'bg-green-500'
                  }`}
                  style={{ width: `${build.progress}%` }}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-5 grid grid-cols-4 gap-4 border-b border-slate">
              <div className="text-center">
                <p className="text-lg font-bold text-charcoal">{build.daysRemaining}</p>
                <p className="text-xs text-charcoal-light">Days Left</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <p className={`text-lg font-bold ${build.materialsNeeded > 0 ? 'text-amber-600' : 'text-charcoal'}`}>
                    {build.materialsNeeded}
                  </p>
                  {build.materialsNeeded > 0 && (
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  )}
                </div>
                <p className="text-xs text-charcoal-light">Materials</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-charcoal">{build.openChecklists}</p>
                <p className="text-xs text-charcoal-light">Checklists</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-charcoal">{build.photosCount}</p>
                <p className="text-xs text-charcoal-light">Photos</p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-charcoal-light">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{build.superintendent}</span>
              </div>
              <span className="text-sm text-newcastle font-medium">View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
