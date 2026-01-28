import Link from 'next/link'

// Generate static params for all completed properties
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

const completedProperties: Record<string, {
  id: string
  address: string
  community: string
  lot: string
  floorPlan: string
  sqft: number
  bedrooms: number
  bathrooms: number
  completedDate: string
  price: number
  salesStatus: string
  description: string
  features: string[]
}> = {
  '1': {
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
    description: 'Beautiful two-story home featuring an open floor plan, gourmet kitchen with granite countertops, and a spacious primary suite on the main level.',
    features: ['Granite Countertops', 'Stainless Appliances', 'Hardwood Floors', 'Covered Patio', '3-Car Garage'],
  },
  '2': {
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
    description: 'Our showcase model home featuring upgraded finishes throughout, designer selections, and professionally landscaped yard.',
    features: ['Designer Finishes', 'Smart Home Package', 'Premium Landscaping', 'Upgraded Lighting', 'Custom Paint'],
  },
  '3': {
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
    description: 'Stunning craftsman style home with attention to detail throughout. Features include coffered ceilings, built-in bookshelves, and a chef kitchen.',
    features: ['Coffered Ceilings', 'Built-in Bookshelves', 'Quartz Countertops', 'Outdoor Fireplace', 'Mudroom'],
  },
  '4': {
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
    description: 'Spacious modern farmhouse design with bonus room, butler pantry, and premium finishes. Located on a wooded cul-de-sac lot.',
    features: ['Butler Pantry', 'Bonus Room', 'Wooded Lot', 'Premium Tile', 'Wine Storage'],
  },
  '5': {
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
    description: 'Charming single-story home perfect for first-time buyers or downsizers. Open concept living with a covered back porch.',
    features: ['Single Story', 'Open Concept', 'Covered Porch', 'Walk-in Closets', 'Energy Efficient'],
  },
  '6': {
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
    description: 'Luxury estate home with all the bells and whistles. Guest suite on main, home theater, and expansive outdoor living with kitchen.',
    features: ['Guest Suite', 'Home Theater', 'Outdoor Kitchen', 'Pool Ready', 'Wine Cellar'],
  },
  '7': {
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
    description: 'Elegant single-story ranch with split bedroom layout. Large kitchen island and spa-like primary bathroom.',
    features: ['Split Bedrooms', 'Large Island', 'Spa Bathroom', 'Vaulted Ceilings', 'Study'],
  },
  '8': {
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
    description: 'Contemporary design with floor-to-ceiling windows and chef kitchen. Premium lot backing to green space.',
    features: ['Floor-to-Ceiling Windows', 'Premium Lot', 'Green Space View', 'Chef Kitchen', 'Flex Room'],
  },
}

const salesInfo: Record<string, {
  agent: { name: string; email: string; phone: string; photo: string } | null
  buyer: { name: string; email: string; phone: string; preApprovalAmount: number } | null
  closingDate: string | null
  listDate: string
  daysOnMarket: number | null
  showings: number
  offers: number
}> = {
  '1': {
    agent: { name: 'Sarah Mitchell', email: 'sarah@newcastlehomes.com', phone: '(205) 555-2001', photo: 'SM' },
    buyer: { name: 'Michael Thompson', email: 'mthompson@email.com', phone: '(205) 555-3001', preApprovalAmount: 500000 },
    closingDate: 'Jan 25, 2024',
    listDate: 'Jan 05, 2024',
    daysOnMarket: 10,
    showings: 8,
    offers: 2,
  },
  '2': {
    agent: null,
    buyer: null,
    closingDate: null,
    listDate: 'Jan 10, 2024',
    daysOnMarket: null,
    showings: 45,
    offers: 0,
  },
  '3': {
    agent: { name: 'John Davis', email: 'john@newcastlehomes.com', phone: '(205) 555-2002', photo: 'JD' },
    buyer: null,
    closingDate: null,
    listDate: 'Dec 20, 2023',
    daysOnMarket: 38,
    showings: 15,
    offers: 0,
  },
  '4': {
    agent: { name: 'Sarah Mitchell', email: 'sarah@newcastlehomes.com', phone: '(205) 555-2001', photo: 'SM' },
    buyer: { name: 'Emily & David Chen', email: 'chen.family@email.com', phone: '(205) 555-3002', preApprovalAmount: 550000 },
    closingDate: 'Feb 15, 2024',
    listDate: 'Dec 15, 2023',
    daysOnMarket: 28,
    showings: 12,
    offers: 1,
  },
  '5': {
    agent: { name: 'John Davis', email: 'john@newcastlehomes.com', phone: '(205) 555-2002', photo: 'JD' },
    buyer: { name: 'Robert Johnson', email: 'robert.j@email.com', phone: '(205) 555-3003', preApprovalAmount: 400000 },
    closingDate: 'Dec 20, 2023',
    listDate: 'Dec 01, 2023',
    daysOnMarket: 15,
    showings: 6,
    offers: 1,
  },
  '6': {
    agent: { name: 'Sarah Mitchell', email: 'sarah@newcastlehomes.com', phone: '(205) 555-2001', photo: 'SM' },
    buyer: { name: 'The Martinez Family', email: 'martinez@email.com', phone: '(205) 555-3004', preApprovalAmount: 600000 },
    closingDate: 'Dec 10, 2023',
    listDate: 'Nov 15, 2023',
    daysOnMarket: 22,
    showings: 10,
    offers: 3,
  },
  '7': {
    agent: { name: 'John Davis', email: 'john@newcastlehomes.com', phone: '(205) 555-2002', photo: 'JD' },
    buyer: null,
    closingDate: null,
    listDate: 'Nov 01, 2023',
    daysOnMarket: 87,
    showings: 22,
    offers: 0,
  },
  '8': {
    agent: { name: 'Sarah Mitchell', email: 'sarah@newcastlehomes.com', phone: '(205) 555-2001', photo: 'SM' },
    buyer: { name: 'Amanda & Chris Lee', email: 'lees@email.com', phone: '(205) 555-3005', preApprovalAmount: 525000 },
    closingDate: 'Feb 28, 2024',
    listDate: 'Oct 20, 2023',
    daysOnMarket: 45,
    showings: 18,
    offers: 2,
  },
}

const contractors = [
  { id: '1', company: 'Rodriguez Concrete & Foundation', trade: 'Foundation', contact: 'Miguel Rodriguez', phone: '(205) 555-1001', rating: 4.8 },
  { id: '2', company: 'Wilson Framing Co.', trade: 'Framing', contact: 'James Wilson', phone: '(205) 555-1002', rating: 4.9 },
  { id: '3', company: 'Birmingham Electric Pro', trade: 'Electrical', contact: 'Carlos Hernandez', phone: '(205) 555-1003', rating: 4.7 },
  { id: '4', company: 'Thompson Plumbing Services', trade: 'Plumbing', contact: 'Derek Thompson', phone: '(205) 555-1004', rating: 4.6 },
  { id: '5', company: 'Bradley HVAC Solutions', trade: 'HVAC', contact: 'Tom Bradley', phone: '(205) 555-1005', rating: 4.8 },
  { id: '6', company: 'Alabama Roofing Experts', trade: 'Roofing', contact: 'David Mitchell', phone: '(205) 555-1006', rating: 4.5 },
  { id: '7', company: 'Precision Drywall Inc.', trade: 'Drywall', contact: 'Robert Chen', phone: '(205) 555-1007', rating: 4.7 },
  { id: '8', company: 'Southern Paint & Finishes', trade: 'Painting', contact: 'Jennifer Adams', phone: '(205) 555-1008', rating: 4.6 },
]

const activityLog = [
  { id: '1', action: 'Property marked as sold', date: 'Jan 25, 2024', user: 'Sarah Mitchell' },
  { id: '2', action: 'Closing documents signed', date: 'Jan 25, 2024', user: 'System' },
  { id: '3', action: 'Final walkthrough completed', date: 'Jan 24, 2024', user: 'Sarah Mitchell' },
  { id: '4', action: 'Inspection passed', date: 'Jan 18, 2024', user: 'System' },
  { id: '5', action: 'Offer accepted', date: 'Jan 15, 2024', user: 'Sarah Mitchell' },
  { id: '6', action: 'New showing scheduled', date: 'Jan 12, 2024', user: 'John Davis' },
  { id: '7', action: 'Property listed', date: 'Jan 05, 2024', user: 'Sarah Mitchell' },
  { id: '8', action: 'Construction completed', date: 'Jan 02, 2024', user: 'Mike Rodriguez' },
]

export default function CompletedDetailPage({ params }: { params: { id: string } }) {
  const property = completedProperties[params.id] || completedProperties['1']
  const sales = salesInfo[params.id] || salesInfo['1']

  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-700',
    PENDING: 'bg-amber-100 text-amber-700',
    SOLD: 'bg-slate-100 text-slate-600',
    RESERVED: 'bg-newcastle-100 text-newcastle-700',
    MODEL: 'bg-purple-100 text-purple-700',
  }

  const tradeColors: Record<string, string> = {
    Foundation: 'bg-slate-100 text-slate-700',
    Framing: 'bg-amber-100 text-amber-700',
    Electrical: 'bg-yellow-100 text-yellow-700',
    Plumbing: 'bg-blue-100 text-blue-700',
    HVAC: 'bg-cyan-100 text-cyan-700',
    Roofing: 'bg-red-100 text-red-700',
    Drywall: 'bg-purple-100 text-purple-700',
    Painting: 'bg-green-100 text-green-700',
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/completed" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Completed Properties
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-heading font-bold text-charcoal">{property.address}</h1>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[property.salesStatus]}`}>
                {property.salesStatus}
              </span>
            </div>
            <p className="text-charcoal-light">{property.community} • {property.lot} • {property.floorPlan}</p>
            <p className="text-sm text-charcoal-light mt-2">{property.description}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-newcastle">${property.price.toLocaleString()}</p>
            <p className="text-sm text-charcoal-light">List Price</p>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-slate">
          <div>
            <p className="text-2xl font-bold text-charcoal">{property.sqft.toLocaleString()}</p>
            <p className="text-sm text-charcoal-light">Square Feet</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">{property.bedrooms}</p>
            <p className="text-sm text-charcoal-light">Bedrooms</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">{property.bathrooms}</p>
            <p className="text-sm text-charcoal-light">Bathrooms</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-light">Completed</p>
            <p className="font-medium text-charcoal">{property.completedDate}</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-light">Days on Market</p>
            <p className={`font-medium ${sales.daysOnMarket && sales.daysOnMarket > 60 ? 'text-red-600' : 'text-charcoal'}`}>
              {sales.daysOnMarket ?? 'N/A'}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 pt-6 border-t border-slate">
          <h3 className="text-sm font-semibold text-charcoal mb-3">Features</h3>
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature) => (
              <span key={feature} className="px-3 py-1 bg-slate-light text-charcoal text-sm rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sales Information */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Sales Information</h2>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Agent */}
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-light uppercase tracking-wider mb-3">Listing Agent</h3>
                  {sales.agent ? (
                    <div className="flex items-center gap-4 p-4 bg-slate-light rounded-lg">
                      <div className="w-12 h-12 bg-newcastle-100 rounded-full flex items-center justify-center">
                        <span className="text-newcastle font-semibold">{sales.agent.photo}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal">{sales.agent.name}</h4>
                        <a href={`mailto:${sales.agent.email}`} className="text-sm text-newcastle hover:text-accent block">
                          {sales.agent.email}
                        </a>
                        <a href={`tel:${sales.agent.phone}`} className="text-sm text-charcoal-light">
                          {sales.agent.phone}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-slate-light rounded-lg text-center text-charcoal-light">
                      No agent assigned (Model Home)
                    </div>
                  )}
                </div>

                {/* Buyer */}
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-light uppercase tracking-wider mb-3">Buyer</h3>
                  {sales.buyer ? (
                    <div className="p-4 bg-slate-light rounded-lg">
                      <h4 className="font-medium text-charcoal mb-2">{sales.buyer.name}</h4>
                      <div className="space-y-1 text-sm">
                        <a href={`mailto:${sales.buyer.email}`} className="text-newcastle hover:text-accent block">
                          {sales.buyer.email}
                        </a>
                        <a href={`tel:${sales.buyer.phone}`} className="text-charcoal-light block">
                          {sales.buyer.phone}
                        </a>
                        <p className="text-charcoal-light">
                          Pre-approved: <span className="text-charcoal font-medium">${sales.buyer.preApprovalAmount.toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-slate-light rounded-lg text-center text-charcoal-light">
                      No buyer yet
                    </div>
                  )}
                </div>
              </div>

              {/* Sales Stats */}
              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate">
                <div className="text-center">
                  <p className="text-2xl font-bold text-charcoal">{sales.showings}</p>
                  <p className="text-sm text-charcoal-light">Showings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-charcoal">{sales.offers}</p>
                  <p className="text-sm text-charcoal-light">Offers</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-charcoal-light">Listed</p>
                  <p className="font-medium text-charcoal">{sales.listDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-charcoal-light">Closing</p>
                  <p className="font-medium text-charcoal">{sales.closingDate || '—'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Who Worked on Project */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Companies Who Built This Home</h2>
              <p className="text-sm text-charcoal-light">All contractors and subcontractors involved in construction</p>
            </div>
            <table className="w-full">
              <thead className="bg-slate-light">
                <tr>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Company</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Trade</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Contact</th>
                  <th className="px-5 py-3 text-right text-sm font-semibold text-charcoal">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate">
                {contractors.map((contractor) => (
                  <tr key={contractor.id} className="hover:bg-slate-light/50 transition-colors">
                    <td className="px-5 py-3">
                      <span className="font-medium text-charcoal">{contractor.company}</span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${tradeColors[contractor.trade]}`}>
                        {contractor.trade}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div>
                        <span className="text-sm text-charcoal block">{contractor.contact}</span>
                        <a href={`tel:${contractor.phone}`} className="text-sm text-newcastle hover:text-accent">
                          {contractor.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="font-medium text-charcoal">{contractor.rating}</span>
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Actions</h2>
            <div className="space-y-2">
              {property.salesStatus === 'AVAILABLE' && (
                <>
                  <button className="w-full btn-primary py-2 text-sm">Schedule Showing</button>
                  <button className="w-full btn-outline py-2 text-sm">Record Offer</button>
                </>
              )}
              {property.salesStatus === 'PENDING' && (
                <>
                  <button className="w-full btn-primary py-2 text-sm">Update Closing Status</button>
                  <button className="w-full btn-outline py-2 text-sm">Send Documents</button>
                </>
              )}
              {property.salesStatus === 'SOLD' && (
                <button className="w-full btn-outline py-2 text-sm">View Closing Documents</button>
              )}
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Photos
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Floor Plans
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate Report
              </button>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Activity Log</h2>
            </div>
            <div className="divide-y divide-slate max-h-96 overflow-y-auto">
              {activityLog.map((activity) => (
                <div key={activity.id} className="p-4">
                  <p className="text-sm text-charcoal">{activity.action}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-charcoal-light">
                    <span>{activity.date}</span>
                    <span>•</span>
                    <span>{activity.user}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Info */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Warranty Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Structural</span>
                <span className="text-sm font-medium text-charcoal">10 Years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Systems</span>
                <span className="text-sm font-medium text-charcoal">2 Years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Workmanship</span>
                <span className="text-sm font-medium text-charcoal">1 Year</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-charcoal">Appliances</span>
                <span className="text-sm font-medium text-charcoal">Manufacturer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
