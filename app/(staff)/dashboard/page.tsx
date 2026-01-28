import Link from 'next/link'

const stats = {
  totalProperties: 69,
  availableHomes: 24,
  pendingSales: 8,
  newInquiries: 5,
  monthlyViews: 2847,
  toursScheduled: 12,
}

const recentProperties = [
  { id: '1', address: '142 Griffin Park Trace', community: 'Griffin Park', price: '$324,900', status: 'AVAILABLE', bedrooms: 4, sqft: 2450 },
  { id: '2', address: '78 Magnolia Way', community: 'Magnolia Parkway', price: '$298,500', status: 'PENDING', bedrooms: 3, sqft: 2100 },
  { id: '3', address: '215 Riverside Dr', community: 'Riverside Heights', price: '$275,000', status: 'AVAILABLE', bedrooms: 3, sqft: 1950 },
  { id: '4', address: '89 Oakwood Lane', community: 'Oakwood Estates', price: '$315,000', status: 'SOLD', bedrooms: 4, sqft: 2300 },
]

const recentInquiries = [
  { id: '1', name: 'Sarah Mitchell', email: 'sarah.m@email.com', property: '142 Griffin Park Trace', type: 'Tour Request', time: '2 hours ago', priority: 'HIGH' },
  { id: '2', name: 'James Wilson', email: 'jwilson@email.com', property: 'General Inquiry', type: 'Information', time: '4 hours ago', priority: 'MEDIUM' },
  { id: '3', name: 'Emily & David Chen', email: 'chen.family@email.com', property: '78 Magnolia Way', type: 'Tour Request', time: '1 day ago', priority: 'HIGH' },
]

const upcomingTours = [
  { id: '1', buyer: 'The Martinez Family', property: '215 Riverside Dr', date: 'Today', time: '2:00 PM' },
  { id: '2', buyer: 'Robert Johnson', property: '142 Griffin Park Trace', date: 'Tomorrow', time: '10:00 AM' },
  { id: '3', buyer: 'Amanda & Chris Lee', property: '89 Oakwood Lane', date: 'Jan 29', time: '3:30 PM' },
]

export default function DashboardPage() {
  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-sage/10 text-sage-dark',
    PENDING: 'bg-warmth/10 text-warmth-dark',
    SOLD: 'bg-charcoal-light/10 text-charcoal-light',
    RESERVED: 'bg-newcastle/10 text-newcastle',
  }

  const priorityColors: Record<string, string> = {
    LOW: 'bg-charcoal-light/10 text-charcoal-light',
    MEDIUM: 'bg-newcastle/10 text-newcastle',
    HIGH: 'bg-warmth/10 text-warmth-dark',
  }

  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">Good Morning, John!</h1>
            <p className="text-charcoal-light mt-1">Here's what's happening with your properties today.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Report
            </button>
            <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Property
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-newcastle/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.totalProperties}</p>
          <p className="text-sm text-charcoal-light">Total Properties</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.availableHomes}</p>
          <p className="text-sm text-charcoal-light">Available Homes</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-warmth/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-warmth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.pendingSales}</p>
          <p className="text-sm text-charcoal-light">Pending Sales</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-warmth/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-warmth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs bg-warmth text-white px-2 py-0.5 rounded-full">New</span>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.newInquiries}</p>
          <p className="text-sm text-charcoal-light">New Inquiries</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-newcastle/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.monthlyViews.toLocaleString()}</p>
          <p className="text-sm text-charcoal-light">Monthly Views</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-charcoal">{stats.toursScheduled}</p>
          <p className="text-sm text-charcoal-light">Tours Scheduled</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Properties Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-soft">
          <div className="p-6 border-b border-warmgray flex justify-between items-center">
            <h2 className="text-lg font-heading font-semibold text-charcoal">Recent Properties</h2>
            <Link href="/dashboard/projects" className="text-newcastle hover:text-warmth text-sm font-medium flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="divide-y divide-warmgray">
            {recentProperties.map((property) => (
              <Link
                key={property.id}
                href={`/dashboard/projects/${property.id}`}
                className="block p-6 hover:bg-warmgray/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-medium text-charcoal">{property.address}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${statusColors[property.status]}`}>
                        {property.status}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal-light">{property.community}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-charcoal-light">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {property.bedrooms} bed
                      </span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-newcastle">{property.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Upcoming Tours */}
          <div className="bg-white rounded-xl shadow-soft">
            <div className="p-6 border-b border-warmgray">
              <h2 className="text-lg font-heading font-semibold text-charcoal flex items-center gap-2">
                <svg className="w-5 h-5 text-warmth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Tours
              </h2>
            </div>
            <div className="divide-y divide-warmgray">
              {upcomingTours.map((tour) => (
                <div key={tour.id} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-newcastle/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-newcastle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-charcoal truncate">{tour.buyer}</p>
                      <p className="text-sm text-charcoal-light truncate">{tour.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-warmth">{tour.date}</p>
                      <p className="text-xs text-charcoal-light">{tour.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-warmgray">
              <button className="w-full text-center text-sm text-newcastle hover:text-warmth font-medium">
                View All Tours →
              </button>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-white rounded-xl shadow-soft">
            <div className="p-6 border-b border-warmgray">
              <h2 className="text-lg font-heading font-semibold text-charcoal flex items-center gap-2">
                <svg className="w-5 h-5 text-warmth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Recent Inquiries
              </h2>
            </div>
            <div className="divide-y divide-warmgray">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-warmth/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-warmth font-semibold text-sm">
                        {inquiry.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-charcoal truncate">{inquiry.name}</p>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${priorityColors[inquiry.priority]}`}>
                          {inquiry.priority}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal-light truncate">{inquiry.property}</p>
                      <p className="text-xs text-charcoal-light mt-1">{inquiry.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-warmgray">
              <Link href="/dashboard/messages" className="block w-full text-center text-sm text-newcastle hover:text-warmth font-medium">
                View All Inquiries →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="mt-8 bg-white rounded-xl shadow-soft p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-heading font-semibold text-charcoal">Sales Performance</h2>
          <select className="px-3 py-2 bg-warmgray rounded-lg text-sm text-charcoal border-0 focus:ring-2 focus:ring-newcastle/20">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
        <div className="h-64 flex items-center justify-center bg-warmgray/50 rounded-lg">
          <div className="text-center">
            <svg className="w-12 h-12 text-charcoal-light mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <p className="text-charcoal-light">Sales chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
