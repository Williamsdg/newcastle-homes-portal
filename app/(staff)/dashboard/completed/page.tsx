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
    agent: 'Sarah Mitchell',
    buyer: 'Michael Thompson',
    closingDate: 'Jan 25, 2024',
    daysOnMarket: 10,
  },
  {
    id: '2',
    address: '67 Grand River Blvd',
    community: 'Grand River',
    lot: 'Lot 2',
    floorPlan: 'The Savannah',
    sqft: 2340,
    bedrooms: 4,
    bathrooms: 2.5,
    completedDate: 'Jan 10, 2024',
    price: 429900,
    salesStatus: 'MODEL',
    agent: null,
    buyer: null,
    closingDate: null,
    daysOnMarket: null,
  },
  {
    id: '3',
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
    agent: 'John Davis',
    buyer: null,
    closingDate: null,
    daysOnMarket: 38,
  },
  {
    id: '4',
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
    agent: 'Sarah Mitchell',
    buyer: 'Emily & David Chen',
    closingDate: 'Feb 15, 2024',
    daysOnMarket: 28,
  },
  {
    id: '5',
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
    agent: 'John Davis',
    buyer: 'Robert Johnson',
    closingDate: 'Dec 20, 2023',
    daysOnMarket: 15,
  },
  {
    id: '6',
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
    agent: 'Sarah Mitchell',
    buyer: 'The Martinez Family',
    closingDate: 'Dec 10, 2023',
    daysOnMarket: 22,
  },
  {
    id: '7',
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
    agent: 'John Davis',
    buyer: null,
    closingDate: null,
    daysOnMarket: 87,
  },
  {
    id: '8',
    address: '555 Barimore Lane',
    community: 'Barimore',
    lot: 'Lot 18',
    floorPlan: 'The Ashford',
    sqft: 3100,
    bedrooms: 4,
    bathrooms: 3.5,
    completedDate: 'Oct 20, 2023',
    price: 512900,
    salesStatus: 'RESERVED',
    agent: 'Sarah Mitchell',
    buyer: 'Amanda & Chris Lee',
    closingDate: 'Feb 28, 2024',
    daysOnMarket: 45,
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
  const pendingCount = completedHomes.filter(h => h.salesStatus === 'PENDING' || h.salesStatus === 'RESERVED').length
  const soldCount = completedHomes.filter(h => h.salesStatus === 'SOLD').length
  const totalValue = completedHomes.filter(h => h.salesStatus === 'SOLD').reduce((sum, h) => sum + h.price, 0)

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Completed Properties</h1>
          <p className="text-charcoal-light mt-1">Finished homes ready for sale or already sold</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{completedHomes.length}</p>
          <p className="text-sm text-charcoal-light">Total Completed</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{availableCount}</p>
          <p className="text-sm text-charcoal-light">Available</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          <p className="text-sm text-charcoal-light">Pending / Reserved</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">${(totalValue / 1000000).toFixed(2)}M</p>
          <p className="text-sm text-charcoal-light">Total Sold ({soldCount})</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Status</option>
            <option value="AVAILABLE">Available</option>
            <option value="PENDING">Pending</option>
            <option value="RESERVED">Reserved</option>
            <option value="SOLD">Sold</option>
            <option value="MODEL">Model</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Communities</option>
            <option value="Barimore">Barimore</option>
            <option value="The Falls">The Falls</option>
            <option value="Grand River">Grand River</option>
            <option value="Heritage Pines">Heritage Pines</option>
            <option value="Havenridge">Havenridge</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Agents</option>
            <option value="Sarah Mitchell">Sarah Mitchell</option>
            <option value="John Davis">John Davis</option>
          </select>
          <input
            type="text"
            placeholder="Search by address or buyer..."
            className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
          />
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-light">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Property</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Agent</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Buyer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Days on Market</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate">
            {completedHomes.map((home) => (
              <tr key={home.id} className="hover:bg-slate-light/50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <Link
                      href={`/dashboard/completed/${home.id}`}
                      className="font-medium text-charcoal hover:text-newcastle block"
                    >
                      {home.address}
                    </Link>
                    <span className="text-sm text-charcoal-light">{home.community} • {home.floorPlan}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[home.salesStatus]}`}>
                    {home.salesStatus}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-charcoal">${home.price.toLocaleString()}</span>
                </td>
                <td className="px-6 py-4">
                  {home.agent ? (
                    <span className="text-sm text-charcoal">{home.agent}</span>
                  ) : (
                    <span className="text-sm text-charcoal-light">—</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {home.buyer ? (
                    <div>
                      <span className="text-sm text-charcoal block">{home.buyer}</span>
                      {home.closingDate && (
                        <span className="text-xs text-charcoal-light">Closing: {home.closingDate}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-charcoal-light">—</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {home.daysOnMarket !== null ? (
                    <span className={`text-sm ${home.daysOnMarket > 60 ? 'text-red-600 font-medium' : 'text-charcoal'}`}>
                      {home.daysOnMarket} days
                    </span>
                  ) : (
                    <span className="text-sm text-charcoal-light">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/dashboard/completed/${home.id}`}
                    className="text-newcastle hover:text-accent text-sm font-medium"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
