import Link from 'next/link'

const properties = [
  { id: '1', address: '142 Barimore Lane', community: 'Barimore', city: 'Helena, AL', status: 'AVAILABLE', price: 489900, bedrooms: 4, bathrooms: 3, sqft: 2650, floorPlan: 'The Oakmont' },
  { id: '2', address: '78 Falls Creek Dr', community: 'The Falls', city: 'Birmingham, AL', status: 'PENDING', price: 524900, bedrooms: 4, bathrooms: 3.5, sqft: 2890, floorPlan: 'The Belmont' },
  { id: '3', address: '215 Grand River Way', community: 'Grand River', city: 'Leeds, AL', status: 'AVAILABLE', price: 399900, bedrooms: 3, bathrooms: 2.5, sqft: 2150, floorPlan: 'The Willow' },
  { id: '4', address: '89 Heritage Pine Ct', community: 'Heritage Pines', city: 'Columbiana, AL', status: 'SOLD', price: 459900, bedrooms: 4, bathrooms: 3, sqft: 2480, floorPlan: 'The Madison' },
  { id: '5', address: '324 Havenridge Dr', community: 'Havenridge', city: 'Tuscaloosa, AL', status: 'AVAILABLE', price: 379900, bedrooms: 3, bathrooms: 2, sqft: 1980, floorPlan: 'The Hampton' },
  { id: '6', address: '156 Barimore Circle', community: 'Barimore', city: 'Helena, AL', status: 'RESERVED', price: 512900, bedrooms: 5, bathrooms: 4, sqft: 3200, floorPlan: 'The Charleston' },
  { id: '7', address: '445 Falls View Terrace', community: 'The Falls', city: 'Birmingham, AL', status: 'AVAILABLE', price: 549900, bedrooms: 4, bathrooms: 3.5, sqft: 3100, floorPlan: 'The Ashford' },
  { id: '8', address: '67 Grand River Blvd', community: 'Grand River', city: 'Leeds, AL', status: 'MODEL', price: 429900, bedrooms: 4, bathrooms: 2.5, sqft: 2340, floorPlan: 'The Savannah' },
]

export default function PropertiesPage() {
  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-800',
    PENDING: 'bg-amber-100 text-amber-800',
    SOLD: 'bg-slate-100 text-slate-600',
    RESERVED: 'bg-newcastle-100 text-newcastle-700',
    MODEL: 'bg-purple-100 text-purple-700',
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Properties</h1>
          <p className="text-charcoal-light mt-1">Manage all Newcastle Homes inventory</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Property
        </button>
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
            <option value="MODEL">Model Home</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Communities</option>
            <option value="barimore">Barimore</option>
            <option value="the-falls">The Falls</option>
            <option value="grand-river">Grand River</option>
            <option value="heritage-pines">Heritage Pines</option>
            <option value="havenridge">Havenridge</option>
          </select>
          <input
            type="text"
            placeholder="Search by address or floor plan..."
            className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
          />
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/dashboard/projects/${property.id}`}
            className="bg-white rounded-xl shadow-soft hover:shadow-strong transition-shadow overflow-hidden group"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-newcastle-100 to-newcastle-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-newcastle/30" fill="currentColor" viewBox="0 0 40 40">
                  <path d="M20 5L4 18h4v14h10v-10h4v10h10V18h4L20 5z"/>
                </svg>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[property.status]}`}>
                  {property.status}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-charcoal">
                  {property.floorPlan}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3">
                <h3 className="font-semibold text-charcoal text-lg group-hover:text-newcastle transition-colors">
                  {property.address}
                </h3>
                <p className="text-sm text-charcoal-light">{property.community} • {property.city}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-charcoal-light mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {property.bedrooms} bd
                </span>
                <span>{property.bathrooms} ba</span>
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>

              <div className="pt-4 border-t border-slate flex items-center justify-between">
                <span className="text-xl font-bold text-newcastle">
                  ${property.price.toLocaleString()}
                </span>
                <span className="text-sm text-newcastle group-hover:text-accent transition-colors font-medium">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
