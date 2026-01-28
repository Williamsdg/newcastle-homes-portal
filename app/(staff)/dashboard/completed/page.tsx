import Link from 'next/link'

const completedHomes = [
  {
    id: '1',
    address: '89 Heritage Pine Ct',
    community: 'Heritage Pines',
    lot: 'Lot 7',
    floorPlan: 'The Madison',
    sqft: 2480,
    bedrooms: 4,
    bathrooms: 3,
    completedDate: 'Jan 15, 2024',
    price: 459900,
    salesStatus: 'SOLD',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Jennifer Adams',
    buyer: 'Robert & Lisa Thompson',
    closingDate: 'Jan 25, 2024',
    totalContractors: 18,
    totalEquipmentHours: 312,
  },
  {
    id: '2',
    address: '234 Barimore Way',
    community: 'Barimore',
    lot: 'Lot 9',
    floorPlan: 'The Oakmont',
    sqft: 2650,
    bedrooms: 4,
    bathrooms: 3,
    completedDate: 'Dec 20, 2023',
    price: 489900,
    salesStatus: 'AVAILABLE',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    closingDate: null,
    totalContractors: 17,
    totalEquipmentHours: 285,
  },
  {
    id: '3',
    address: '112 Falls Creek Lane',
    community: 'The Falls',
    lot: 'Lot 11',
    floorPlan: 'The Belmont',
    sqft: 2890,
    bedrooms: 4,
    bathrooms: 3.5,
    completedDate: 'Dec 15, 2023',
    price: 524900,
    salesStatus: 'PENDING',
    projectManager: 'James Wilson',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Lisa Chen',
    buyer: 'Emily & David Chen',
    closingDate: 'Feb 15, 2024',
    totalContractors: 19,
    totalEquipmentHours: 340,
  },
  {
    id: '4',
    address: '456 Havenridge Circle',
    community: 'Havenridge',
    lot: 'Lot 4',
    floorPlan: 'The Hampton',
    sqft: 1980,
    bedrooms: 3,
    bathrooms: 2,
    completedDate: 'Dec 01, 2023',
    price: 379900,
    salesStatus: 'SOLD',
    projectManager: 'Tom Bradley',
    buildersAgent: 'John Davis',
    buyersAgent: 'Mark Thompson',
    buyer: 'Robert Johnson',
    closingDate: 'Dec 20, 2023',
    totalContractors: 16,
    totalEquipmentHours: 248,
  },
  {
    id: '5',
    address: '789 Heritage Oak Dr',
    community: 'Heritage Pines',
    lot: 'Lot 15',
    floorPlan: 'The Charleston',
    sqft: 3200,
    bedrooms: 5,
    bathrooms: 4,
    completedDate: 'Nov 15, 2023',
    price: 549900,
    salesStatus: 'SOLD',
    projectManager: 'Carlos Hernandez',
    buildersAgent: 'Sarah Mitchell',
    buyersAgent: 'Tom Bradley',
    buyer: 'The Martinez Family',
    closingDate: 'Dec 10, 2023',
    totalContractors: 20,
    totalEquipmentHours: 395,
  },
  {
    id: '6',
    address: '321 Grand River Way',
    community: 'Grand River',
    lot: 'Lot 8',
    floorPlan: 'The Willow',
    sqft: 2150,
    bedrooms: 3,
    bathrooms: 2.5,
    completedDate: 'Nov 01, 2023',
    price: 399900,
    salesStatus: 'AVAILABLE',
    projectManager: 'Mike Rodriguez',
    buildersAgent: 'John Davis',
    buyersAgent: null,
    buyer: null,
    closingDate: null,
    totalContractors: 17,
    totalEquipmentHours: 275,
  },
]

export default function CompletedHomesPage() {
  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-700',
    PENDING: 'bg-amber-100 text-amber-700',
    SOLD: 'bg-slate-100 text-slate-600',
    RESERVED: 'bg-newcastle-100 text-newcastle-700',
    MODEL: 'bg-purple-100 text-purple-700',
  }

  const availableCount = completedHomes.filter(h => h.salesStatus === 'AVAILABLE').length
  const pendingCount = completedHomes.filter(h => h.salesStatus === 'PENDING').length
  const soldCount = completedHomes.filter(h => h.salesStatus === 'SOLD').length
  const totalValue = completedHomes.filter(h => h.salesStatus === 'SOLD').reduce((sum, h) => sum + h.price, 0)

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Completed Homes</h1>
          <p className="text-charcoal-light mt-1">Finished properties with all 9 construction phases complete</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{completedHomes.length}</p>
          <p className="text-sm text-charcoal-light">Completed</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{availableCount}</p>
          <p className="text-sm text-charcoal-light">Available</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          <p className="text-sm text-charcoal-light">Pending Sale</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">${(totalValue / 1000000).toFixed(2)}M</p>
          <p className="text-sm text-charcoal-light">Sold ({soldCount})</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Sales Status</option>
            <option value="AVAILABLE">Available</option>
            <option value="PENDING">Pending</option>
            <option value="SOLD">Sold</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Communities</option>
            <option value="Barimore">Barimore</option>
            <option value="The Falls">The Falls</option>
            <option value="Grand River">Grand River</option>
            <option value="Heritage Pines">Heritage Pines</option>
            <option value="Havenridge">Havenridge</option>
          </select>
          <input
            type="text"
            placeholder="Search properties..."
            className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
          />
        </div>
      </div>

      {/* Completed Homes Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {completedHomes.map((home) => (
          <Link
            key={home.id}
            href={`/dashboard/completed/${home.id}`}
            className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-shadow"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-charcoal text-lg">{home.address}</h3>
                  <p className="text-sm text-charcoal-light">{home.community} • {home.lot}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[home.salesStatus]}`}>
                  {home.salesStatus}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-charcoal-light">
                <span>{home.floorPlan}</span>
                <span>•</span>
                <span>{home.bedrooms} bd / {home.bathrooms} ba</span>
                <span>•</span>
                <span>{home.sqft.toLocaleString()} sqft</span>
              </div>
            </div>

            {/* Price & Completion */}
            <div className="px-5 py-4 bg-green-50 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-newcastle">${home.price.toLocaleString()}</p>
                <p className="text-xs text-charcoal-light">List Price</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-charcoal">All Phases Complete</span>
                </div>
                <p className="text-xs text-charcoal-light">{home.completedDate}</p>
              </div>
            </div>

            {/* Team & Buyer Info */}
            <div className="p-5 grid grid-cols-2 gap-4 border-b border-slate">
              <div>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Project Manager</p>
                <p className="text-sm font-medium text-charcoal">{home.projectManager}</p>
              </div>
              <div>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Builder&apos;s Agent</p>
                <p className="text-sm font-medium text-charcoal">{home.buildersAgent}</p>
              </div>
              <div>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Buyer&apos;s Agent</p>
                <p className="text-sm font-medium text-charcoal">{home.buyersAgent || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">Buyer</p>
                <p className="text-sm font-medium text-charcoal">{home.buyer || '—'}</p>
              </div>
            </div>

            {/* Construction Summary */}
            <div className="px-5 py-4 flex items-center justify-between bg-slate-light/50">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-lg font-bold text-charcoal">{home.totalContractors}</p>
                  <p className="text-xs text-charcoal-light">Contractors Used</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-charcoal">{home.totalEquipmentHours}h</p>
                  <p className="text-xs text-charcoal-light">Equipment Hours</p>
                </div>
              </div>
              <span className="text-sm text-newcastle font-medium">View Full Summary →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
