import Link from 'next/link'
import Image from 'next/image'

const property = {
  id: '1',
  address: '142 Barimore Lane',
  community: 'Barimore',
  city: 'Helena, AL 35080',
  status: 'AVAILABLE',
  price: 489900,
  bedrooms: 4,
  bathrooms: 3,
  sqft: 2650,
  lotSize: '0.32 acres',
  yearBuilt: 2024,
  floorPlan: 'The Oakmont',
  description: 'This stunning 4-bedroom home features an open-concept floor plan perfect for modern living. The gourmet kitchen includes granite countertops, stainless steel appliances, and a large island. The master suite offers a spa-like bathroom with dual vanities and a walk-in closet. Enjoy outdoor living on the covered patio overlooking a private backyard.',
  features: [
    'Open-concept living area',
    'Gourmet kitchen with granite countertops',
    'Stainless steel appliances',
    'Large kitchen island',
    'Master suite with spa bathroom',
    'Walk-in closets in all bedrooms',
    'Covered patio',
    'Two-car garage',
    'Energy-efficient windows',
    'Smart home pre-wiring',
  ],
  images: [
    'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iNmQ2MDYxZDQzZDFmZGEyMTZkODMxY2YxNWE1MGQ3Ni5qcGVn/exact/webp/600/380',
    'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8yMTQ5ZTFmZTc5OTg4NzQzYzhmMzg0YThmYjNkNjEwZi5qcGVn/exact/webp/600/380',
    'https://dlqxt4mfnxo6k.cloudfront.net/newcastle-homes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC80ZDBlYWE5MTU5ZGMzMGVjNzAzNzcwOTI4NmQ2YzZlOS5qcGVn/exact/webp/600/380',
  ],
  interestedBuyers: [
    { id: '1', name: 'Sarah Mitchell', email: 'sarah.m@email.com', phone: '(205) 555-1234', interest: 'HIGH', lastContact: 'Jan 25, 2024' },
    { id: '2', name: 'Robert Johnson', email: 'robert.j@email.com', phone: '(205) 555-5678', interest: 'MEDIUM', lastContact: 'Jan 22, 2024' },
  ],
  scheduledTours: [
    { id: '1', buyer: 'The Martinez Family', date: 'Jan 28, 2024', time: '2:00 PM', status: 'CONFIRMED' },
    { id: '2', buyer: 'Robert Johnson', date: 'Jan 29, 2024', time: '10:00 AM', status: 'PENDING' },
  ],
  activityLog: [
    { id: '1', action: 'Tour scheduled', details: 'The Martinez Family - Jan 28 at 2:00 PM', date: 'Jan 25, 2024', user: 'John Doe' },
    { id: '2', action: 'Price updated', details: '$499,900 → $489,900', date: 'Jan 20, 2024', user: 'John Doe' },
    { id: '3', action: 'Photos uploaded', details: '3 new photos added', date: 'Jan 18, 2024', user: 'Marketing Team' },
    { id: '4', action: 'Listing created', details: 'Property added to inventory', date: 'Jan 15, 2024', user: 'John Doe' },
  ],
}

export default function PropertyDetailPage() {
  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-800',
    PENDING: 'bg-amber-100 text-amber-800',
    SOLD: 'bg-slate-100 text-slate-600',
    RESERVED: 'bg-newcastle-100 text-newcastle-700',
  }

  const interestColors: Record<string, string> = {
    HIGH: 'bg-green-100 text-green-700',
    MEDIUM: 'bg-amber-100 text-amber-700',
    LOW: 'bg-slate-100 text-slate-600',
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard/projects" className="text-newcastle hover:text-accent text-sm mb-2 inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Properties
        </Link>
        <div className="flex justify-between items-start mt-2">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-heading font-bold text-charcoal">{property.address}</h1>
              <span className={`px-3 py-1 text-sm rounded-full ${statusColors[property.status]}`}>
                {property.status}
              </span>
            </div>
            <p className="text-charcoal-light mt-1">
              {property.community} • {property.city}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline py-2 px-4 text-sm">Edit Property</button>
            <button className="btn-primary py-2 px-4 text-sm">Schedule Tour</button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Price</p>
          <p className="text-2xl font-bold text-newcastle">${property.price.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Bedrooms</p>
          <p className="text-2xl font-bold text-charcoal">{property.bedrooms}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Bathrooms</p>
          <p className="text-2xl font-bold text-charcoal">{property.bathrooms}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Square Feet</p>
          <p className="text-2xl font-bold text-charcoal">{property.sqft.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Lot Size</p>
          <p className="text-2xl font-bold text-charcoal">{property.lotSize}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-charcoal-light text-sm">Floor Plan</p>
          <p className="text-2xl font-bold text-charcoal">{property.floorPlan}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Photos */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Photos</h2>
              <button className="text-newcastle hover:text-accent text-sm font-medium">
                + Upload Photos
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {property.images.map((img, idx) => (
                <div key={idx} className="aspect-video bg-slate rounded-lg overflow-hidden relative">
                  <Image src={img} alt={`Property photo ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Description</h2>
            <p className="text-charcoal-light leading-relaxed">{property.description}</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interested Buyers */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Interested Buyers</h2>
              <button className="text-newcastle hover:text-accent text-sm font-medium">
                + Add Buyer
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-light">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-charcoal">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-charcoal">Contact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-charcoal">Interest</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-charcoal">Last Contact</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-charcoal">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate">
                  {property.interestedBuyers.map((buyer) => (
                    <tr key={buyer.id} className="hover:bg-slate-light/50 transition-colors">
                      <td className="px-4 py-3">
                        <span className="font-medium text-charcoal">{buyer.name}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm">
                          <a href={`mailto:${buyer.email}`} className="text-newcastle hover:text-accent block">{buyer.email}</a>
                          <span className="text-charcoal-light">{buyer.phone}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${interestColors[buyer.interest]}`}>
                          {buyer.interest}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-charcoal-light text-sm">{buyer.lastContact}</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-newcastle hover:text-accent text-sm font-medium">
                          Contact
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Scheduled Tours */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Scheduled Tours</h2>
            </div>
            <div className="space-y-4">
              {property.scheduledTours.map((tour) => (
                <div key={tour.id} className="p-4 bg-slate-light rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-charcoal">{tour.buyer}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      tour.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {tour.status}
                    </span>
                  </div>
                  <div className="text-sm text-charcoal-light">
                    {tour.date} at {tour.time}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-sm text-newcastle hover:text-accent font-medium border border-newcastle rounded-lg hover:bg-newcastle-50 transition-colors">
              + Schedule New Tour
            </button>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Activity Log</h2>
            <div className="space-y-4">
              {property.activityLog.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="w-2 h-2 bg-newcastle rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal text-sm">{activity.action}</p>
                    <p className="text-xs text-charcoal-light">{activity.details}</p>
                    <p className="text-xs text-charcoal-light mt-1">{activity.date} • {activity.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Listing
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Update Price
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Photos
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Listing
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Archive Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ]
}
