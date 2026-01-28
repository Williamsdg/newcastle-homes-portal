import Link from 'next/link'

export function generateStaticParams() {
  return [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' },
    { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' },
  ]
}

const propertyData: Record<string, {
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
}> = {
  '1': {
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
    projectManager: { name: 'Mike Rodriguez', phone: '(205) 555-1001', email: 'mike@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Tom Bradley', phone: '(205) 555-3001', email: 'tom@realtor.com' },
    buyer: { name: 'The Johnson Family', phone: '(205) 555-4001', email: 'johnsons@email.com' },
  },
  '2': {
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
    projectManager: { name: 'James Wilson', phone: '(205) 555-1002', email: 'james@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
  },
  '3': {
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
    projectManager: { name: 'Carlos Hernandez', phone: '(205) 555-1003', email: 'carlos@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Lisa Chen', phone: '(205) 555-3002', email: 'lisa@realtor.com' },
    buyer: { name: 'Emily & David Chen', phone: '(205) 555-4002', email: 'chens@email.com' },
  },
  '4': {
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
    projectManager: { name: 'Tom Bradley', phone: '(205) 555-1004', email: 'tbradley@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
  },
  '5': {
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
    projectManager: { name: 'Mike Rodriguez', phone: '(205) 555-1001', email: 'mike@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Mark Thompson', phone: '(205) 555-3003', email: 'mark@realtor.com' },
    buyer: { name: 'The Martinez Family', phone: '(205) 555-4003', email: 'martinez@email.com' },
  },
  '6': {
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
    projectManager: { name: 'James Wilson', phone: '(205) 555-1002', email: 'james@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
  },
  '7': {
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
    projectManager: { name: 'Carlos Hernandez', phone: '(205) 555-1003', email: 'carlos@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Jennifer Adams', phone: '(205) 555-3004', email: 'jennifer@realtor.com' },
    buyer: { name: 'Robert & Lisa Thompson', phone: '(205) 555-4004', email: 'thompsons@email.com' },
  },
  '8': {
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
    projectManager: { name: 'Tom Bradley', phone: '(205) 555-1004', email: 'tbradley@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
  },
}

const constructionPhases = [
  {
    num: 1,
    name: 'Pre-Construction Phase',
    color: 'bg-slate-500',
    contractors: [
      { role: 'Architect / Residential Designer', company: 'Birmingham Design Group', contact: 'David Chen', phone: '(205) 555-5001', status: 'COMPLETED', required: true },
      { role: 'Structural Engineer', company: 'Southern Structural', contact: 'Mark Williams', phone: '(205) 555-5002', status: 'COMPLETED', required: false },
      { role: 'Land Surveyor', company: 'Alabama Survey Co.', contact: 'Robert Taylor', phone: '(205) 555-5003', status: 'COMPLETED', required: true },
      { role: 'Geotechnical Engineer', company: 'GeoTech Solutions', contact: 'Emily Brown', phone: '(205) 555-5004', status: 'NOT_NEEDED', required: false },
    ],
    permits: [
      { name: 'Building Permit', status: 'APPROVED', number: 'BP-2024-0142', date: 'Oct 05, 2023' },
      { name: 'Zoning Approval', status: 'APPROVED', number: 'ZA-2024-0089', date: 'Sep 28, 2023' },
      { name: 'Environmental Clearance', status: 'APPROVED', number: 'EC-2024-0056', date: 'Sep 20, 2023' },
      { name: 'Utility Connection Permit', status: 'PENDING', number: null, date: null },
    ],
    equipment: [],
    photos: 5,
  },
  {
    num: 2,
    name: 'Site Preparation',
    color: 'bg-amber-500',
    contractors: [
      { role: 'Excavation / Grading Contractor', company: 'Premier Excavation', contact: 'James Miller', phone: '(205) 555-5010', status: 'COMPLETED', required: true },
      { role: 'Tree Removal Service', company: 'Arbor Care Services', contact: 'Mike Johnson', phone: '(205) 555-5011', status: 'COMPLETED', required: false },
      { role: 'Utility Locator', company: 'AL-One Call', contact: 'Service Line', phone: '811', status: 'COMPLETED', required: true },
    ],
    equipment: [
      { name: 'Excavator CAT 320', id: 'EQ-001', hours: 24 },
      { name: 'Dump Truck - 10yd', id: 'EQ-009', hours: 16 },
    ],
    photos: 12,
  },
  {
    num: 3,
    name: 'Foundation & Structure',
    color: 'bg-orange-500',
    contractors: [
      { role: 'Concrete Contractor', company: 'Rodriguez Concrete & Foundation', contact: 'Miguel Rodriguez', phone: '(205) 555-5020', status: 'COMPLETED', required: true },
      { role: 'Waterproofing Contractor', company: 'DryShield Waterproofing', contact: 'Tom Harris', phone: '(205) 555-5021', status: 'COMPLETED', required: true },
      { role: 'Framing Contractor', company: 'Wilson Framing Co.', contact: 'James Wilson', phone: '(205) 555-5022', status: 'IN_PROGRESS', required: true },
      { role: 'Truss Manufacturer', company: 'Southern Truss Systems', contact: 'Keith Anderson', phone: '(205) 555-5023', status: 'DELIVERED', required: true },
    ],
    equipment: [
      { name: 'Concrete Mixer Truck', id: 'EQ-002', hours: 8 },
      { name: 'Forklift - Telehandler', id: 'EQ-006', hours: 40 },
      { name: 'Nail Gun Set (5 units)', id: 'EQ-005', hours: 120 },
      { name: 'Air Compressor Industrial', id: 'EQ-007', hours: 80 },
    ],
    photos: 28,
  },
  {
    num: 4,
    name: 'Mechanical Rough-Ins',
    color: 'bg-yellow-500',
    contractors: [
      { role: 'Plumber', company: 'Thompson Plumbing Services', contact: 'Derek Thompson', phone: '(205) 555-5030', status: 'COMPLETED', required: true },
      { role: 'Electrician', company: 'Birmingham Electric Pro', contact: 'Carlos Hernandez', phone: '(205) 555-5031', status: 'COMPLETED', required: true },
      { role: 'HVAC Contractor', company: 'Bradley HVAC Solutions', contact: 'Tom Bradley', phone: '(205) 555-5032', status: 'IN_PROGRESS', required: true },
      { role: 'Low Voltage / Structured Wiring', company: 'SmartHome Wiring Co.', contact: 'Alex Turner', phone: '(205) 555-5033', status: 'PENDING', required: true },
    ],
    equipment: [],
    photos: 18,
  },
  {
    num: 5,
    name: 'Building Envelope',
    color: 'bg-lime-500',
    contractors: [
      { role: 'Roofing Contractor', company: 'Alabama Roofing Experts', contact: 'David Mitchell', phone: '(205) 555-5040', status: 'COMPLETED', required: true },
      { role: 'Window & Door Installer', company: 'Crystal Clear Windows', contact: 'Brian Adams', phone: '(205) 555-5041', status: 'COMPLETED', required: true },
      { role: 'Siding / Exterior Contractor', company: 'Exterior Solutions LLC', contact: 'Kevin Martin', phone: '(205) 555-5042', status: 'IN_PROGRESS', required: true },
      { role: 'Insulation Contractor', company: 'ThermalPro Insulation', contact: 'Steve Clark', phone: '(205) 555-5043', status: 'PENDING', required: true },
    ],
    equipment: [
      { name: 'Scaffolding Set A', id: 'EQ-003', hours: 48 },
      { name: 'Air Compressor Industrial', id: 'EQ-007', hours: 24 },
    ],
    photos: 22,
  },
  {
    num: 6,
    name: 'Interior Finishes',
    color: 'bg-green-500',
    contractors: [
      { role: 'Drywall Contractor', company: 'Precision Drywall Inc.', contact: 'Robert Chen', phone: '(205) 555-5050', status: 'COMPLETED', required: true },
      { role: 'Painter', company: 'Southern Paint & Finishes', contact: 'Jennifer Adams', phone: '(205) 555-5051', status: 'IN_PROGRESS', required: true },
      { role: 'Trim Carpenter', company: 'Fine Trim Carpentry', contact: 'Michael Scott', phone: '(205) 555-5052', status: 'PENDING', required: true },
      { role: 'Flooring Contractor', company: 'Flooring Depot Pro', contact: 'Lisa Wong', phone: '(205) 555-5053', status: 'PENDING', required: true },
      { role: 'Cabinet Installer', company: 'Cabinet World', contact: 'John Peters', phone: '(205) 555-5054', status: 'PENDING', required: true },
      { role: 'Countertop Fabricator', company: 'Granite Masters', contact: 'Sarah Lee', phone: '(205) 555-5055', status: 'PENDING', required: true },
    ],
    equipment: [
      { name: 'Scaffolding Set B', id: 'EQ-008', hours: 32 },
      { name: 'Laser Level Kit', id: 'EQ-010', hours: 16 },
    ],
    photos: 15,
  },
  {
    num: 7,
    name: 'Final Mechanical & Fixtures',
    color: 'bg-teal-500',
    contractors: [
      { role: 'Plumber (Return Visit)', company: 'Thompson Plumbing Services', contact: 'Derek Thompson', phone: '(205) 555-5030', status: 'PENDING', required: true },
      { role: 'Electrician (Return Visit)', company: 'Birmingham Electric Pro', contact: 'Carlos Hernandez', phone: '(205) 555-5031', status: 'PENDING', required: true },
      { role: 'HVAC (Return Visit)', company: 'Bradley HVAC Solutions', contact: 'Tom Bradley', phone: '(205) 555-5032', status: 'PENDING', required: true },
      { role: 'Appliance Delivery / Installation', company: 'Home Appliance Center', contact: 'Nancy Wilson', phone: '(205) 555-5060', status: 'PENDING', required: true },
    ],
    equipment: [],
    photos: 0,
  },
  {
    num: 8,
    name: 'Exterior & Landscape',
    color: 'bg-cyan-500',
    contractors: [
      { role: 'Concrete / Flatwork (Driveway, Sidewalks, Patios)', company: 'Rodriguez Concrete & Foundation', contact: 'Miguel Rodriguez', phone: '(205) 555-5020', status: 'PENDING', required: true },
      { role: 'Landscaper', company: 'Green Thumb Landscaping', contact: 'Maria Garcia', phone: '(205) 555-5070', status: 'PENDING', required: true },
      { role: 'Fence Contractor', company: 'Alabama Fence Co.', contact: 'Bill Thompson', phone: '(205) 555-5071', status: 'PENDING', required: false },
    ],
    equipment: [
      { name: 'Concrete Mixer Truck', id: 'EQ-002', hours: 4 },
    ],
    photos: 0,
  },
  {
    num: 9,
    name: 'Final Inspections & Closeout',
    color: 'bg-blue-500',
    contractors: [
      { role: 'Cleaning Crew', company: 'Sparkle Clean Services', contact: 'Anna Martinez', phone: '(205) 555-5080', status: 'PENDING', required: true },
      { role: 'General Contractor Punch List', company: 'Newcastle Homes', contact: 'Project Manager', phone: '(205) 555-1000', status: 'PENDING', required: true },
    ],
    equipment: [],
    photos: 0,
  },
]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertyData[params.id] || propertyData['1']

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
      <div className="space-y-6">
        {constructionPhases.map((phase) => {
          const isCurrentPhase = phase.num === property.currentPhase
          const isCompleted = phase.num < property.currentPhase
          const isPending = phase.num > property.currentPhase

          return (
            <div
              key={phase.num}
              className={`bg-white rounded-xl shadow-soft overflow-hidden ${
                isCurrentPhase ? 'ring-2 ring-newcastle' : ''
              }`}
            >
              {/* Phase Header */}
              <div className={`p-5 ${isCurrentPhase ? 'bg-newcastle text-white' : isCompleted ? 'bg-green-50' : 'bg-slate-light'}`}>
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
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isCurrentPhase ? 'bg-white/20 text-white' :
                      isCompleted ? 'bg-green-100 text-green-700' :
                      'bg-slate text-charcoal-light'
                    }`}>
                      {phase.photos} Photos
                    </span>
                    <button className={`p-2 rounded-lg transition-colors ${
                      isCurrentPhase ? 'hover:bg-white/10' : 'hover:bg-slate'
                    }`}>
                      <svg className={`w-5 h-5 ${isCurrentPhase ? 'text-white' : 'text-charcoal-light'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Phase Content */}
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

                {/* Contractors */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Contractors</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs text-charcoal-light uppercase tracking-wider">
                          <th className="pb-2 font-semibold">Role</th>
                          <th className="pb-2 font-semibold">Company</th>
                          <th className="pb-2 font-semibold">Contact</th>
                          <th className="pb-2 font-semibold">Status</th>
                          <th className="pb-2 font-semibold"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate">
                        {phase.contractors.map((contractor, idx) => (
                          <tr key={idx} className="text-sm">
                            <td className="py-3">
                              <span className="font-medium text-charcoal">{contractor.role}</span>
                              {!contractor.required && <span className="text-xs text-charcoal-light ml-1">(if needed)</span>}
                            </td>
                            <td className="py-3 text-charcoal">{contractor.company}</td>
                            <td className="py-3">
                              <span className="text-charcoal">{contractor.contact}</span>
                              <a href={`tel:${contractor.phone}`} className="text-newcastle hover:text-accent block text-xs">
                                {contractor.phone}
                              </a>
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${contractorStatusColors[contractor.status]}`}>
                                {contractor.status.replace('_', ' ')}
                              </span>
                            </td>
                            <td className="py-3 text-right">
                              <button className="text-newcastle hover:text-accent text-xs font-medium">Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button className="mt-3 text-sm text-newcastle hover:text-accent font-medium">+ Add Contractor</button>
                </div>

                {/* Equipment Used */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">Newcastle Equipment Used</h3>
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
                    <p className="text-sm text-charcoal-light italic">No Newcastle equipment logged for this phase</p>
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
                        View {phase.photos} Photos →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
