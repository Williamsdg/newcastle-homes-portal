import Link from 'next/link'

export function generateStaticParams() {
  return [
    { id: '1' }, { id: '2' }, { id: '3' },
    { id: '4' }, { id: '5' }, { id: '6' },
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
  projectManager: { name: string; phone: string; email: string }
  buildersAgent: { name: string; phone: string; email: string }
  buyersAgent: { name: string; phone: string; email: string } | null
  buyer: { name: string; phone: string; email: string } | null
  closingDate: string | null
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
    projectManager: { name: 'Carlos Hernandez', phone: '(205) 555-1003', email: 'carlos@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Jennifer Adams', phone: '(205) 555-3004', email: 'jennifer@realtor.com' },
    buyer: { name: 'Robert & Lisa Thompson', phone: '(205) 555-4004', email: 'thompsons@email.com' },
    closingDate: 'Jan 25, 2024',
  },
  '2': {
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
    description: 'Stunning craftsman style home with attention to detail throughout. Features include coffered ceilings, built-in bookshelves, and a chef kitchen.',
    features: ['Coffered Ceilings', 'Built-in Bookshelves', 'Quartz Countertops', 'Outdoor Fireplace', 'Mudroom'],
    projectManager: { name: 'Mike Rodriguez', phone: '(205) 555-1001', email: 'mike@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
    closingDate: null,
  },
  '3': {
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
    description: 'Spacious modern farmhouse design with bonus room, butler pantry, and premium finishes.',
    features: ['Butler Pantry', 'Bonus Room', 'Wooded Lot', 'Premium Tile', 'Wine Storage'],
    projectManager: { name: 'James Wilson', phone: '(205) 555-1002', email: 'james@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Lisa Chen', phone: '(205) 555-3002', email: 'lisa@realtor.com' },
    buyer: { name: 'Emily & David Chen', phone: '(205) 555-4002', email: 'chens@email.com' },
    closingDate: 'Feb 15, 2024',
  },
  '4': {
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
    description: 'Charming single-story home perfect for first-time buyers. Open concept living.',
    features: ['Single Story', 'Open Concept', 'Covered Porch', 'Walk-in Closets'],
    projectManager: { name: 'Tom Bradley', phone: '(205) 555-1004', email: 'tom@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: { name: 'Mark Thompson', phone: '(205) 555-3003', email: 'mark@realtor.com' },
    buyer: { name: 'Robert Johnson', phone: '(205) 555-4003', email: 'robert@email.com' },
    closingDate: 'Dec 20, 2023',
  },
  '5': {
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
    description: 'Luxury estate home with guest suite, home theater, and outdoor kitchen.',
    features: ['Guest Suite', 'Home Theater', 'Outdoor Kitchen', 'Pool Ready', 'Wine Cellar'],
    projectManager: { name: 'Carlos Hernandez', phone: '(205) 555-1003', email: 'carlos@newcastlehomes.com' },
    buildersAgent: { name: 'Sarah Mitchell', phone: '(205) 555-2001', email: 'sarah@newcastlehomes.com' },
    buyersAgent: { name: 'Tom Bradley', phone: '(205) 555-3001', email: 'tbradley@realtor.com' },
    buyer: { name: 'The Martinez Family', phone: '(205) 555-4005', email: 'martinez@email.com' },
    closingDate: 'Dec 10, 2023',
  },
  '6': {
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
    description: 'Elegant single-story ranch with split bedroom layout and spa-like bathroom.',
    features: ['Split Bedrooms', 'Large Island', 'Spa Bathroom', 'Vaulted Ceilings'],
    projectManager: { name: 'Mike Rodriguez', phone: '(205) 555-1001', email: 'mike@newcastlehomes.com' },
    buildersAgent: { name: 'John Davis', phone: '(205) 555-2002', email: 'john@newcastlehomes.com' },
    buyersAgent: null,
    buyer: null,
    closingDate: null,
  },
}

// Combined list of all contractors who worked on each completed property
const allContractors = [
  { phase: '1. Pre-Construction', company: 'Birmingham Design Group', role: 'Architect / Residential Designer', contact: 'David Chen', phone: '(205) 555-5001' },
  { phase: '1. Pre-Construction', company: 'Alabama Survey Co.', role: 'Land Surveyor', contact: 'Robert Taylor', phone: '(205) 555-5003' },
  { phase: '2. Site Preparation', company: 'Premier Excavation', role: 'Excavation / Grading', contact: 'James Miller', phone: '(205) 555-5010' },
  { phase: '2. Site Preparation', company: 'AL-One Call', role: 'Utility Locator', contact: 'Service Line', phone: '811' },
  { phase: '3. Foundation & Structure', company: 'Rodriguez Concrete & Foundation', role: 'Concrete Contractor', contact: 'Miguel Rodriguez', phone: '(205) 555-5020' },
  { phase: '3. Foundation & Structure', company: 'DryShield Waterproofing', role: 'Waterproofing', contact: 'Tom Harris', phone: '(205) 555-5021' },
  { phase: '3. Foundation & Structure', company: 'Wilson Framing Co.', role: 'Framing Contractor', contact: 'James Wilson', phone: '(205) 555-5022' },
  { phase: '3. Foundation & Structure', company: 'Southern Truss Systems', role: 'Truss Manufacturer', contact: 'Keith Anderson', phone: '(205) 555-5023' },
  { phase: '4. Mechanical Rough-Ins', company: 'Thompson Plumbing Services', role: 'Plumber', contact: 'Derek Thompson', phone: '(205) 555-5030' },
  { phase: '4. Mechanical Rough-Ins', company: 'Birmingham Electric Pro', role: 'Electrician', contact: 'Carlos Hernandez', phone: '(205) 555-5031' },
  { phase: '4. Mechanical Rough-Ins', company: 'Bradley HVAC Solutions', role: 'HVAC', contact: 'Tom Bradley', phone: '(205) 555-5032' },
  { phase: '4. Mechanical Rough-Ins', company: 'SmartHome Wiring Co.', role: 'Low Voltage / Structured Wiring', contact: 'Alex Turner', phone: '(205) 555-5033' },
  { phase: '5. Building Envelope', company: 'Alabama Roofing Experts', role: 'Roofing Contractor', contact: 'David Mitchell', phone: '(205) 555-5040' },
  { phase: '5. Building Envelope', company: 'Crystal Clear Windows', role: 'Window & Door Installer', contact: 'Brian Adams', phone: '(205) 555-5041' },
  { phase: '5. Building Envelope', company: 'Exterior Solutions LLC', role: 'Siding / Exterior', contact: 'Kevin Martin', phone: '(205) 555-5042' },
  { phase: '5. Building Envelope', company: 'ThermalPro Insulation', role: 'Insulation', contact: 'Steve Clark', phone: '(205) 555-5043' },
  { phase: '6. Interior Finishes', company: 'Precision Drywall Inc.', role: 'Drywall Contractor', contact: 'Robert Chen', phone: '(205) 555-5050' },
  { phase: '6. Interior Finishes', company: 'Southern Paint & Finishes', role: 'Painter', contact: 'Jennifer Adams', phone: '(205) 555-5051' },
  { phase: '6. Interior Finishes', company: 'Fine Trim Carpentry', role: 'Trim Carpenter', contact: 'Michael Scott', phone: '(205) 555-5052' },
  { phase: '6. Interior Finishes', company: 'Flooring Depot Pro', role: 'Flooring Contractor', contact: 'Lisa Wong', phone: '(205) 555-5053' },
  { phase: '6. Interior Finishes', company: 'Cabinet World', role: 'Cabinet Installer', contact: 'John Peters', phone: '(205) 555-5054' },
  { phase: '6. Interior Finishes', company: 'Granite Masters', role: 'Countertop Fabricator', contact: 'Sarah Lee', phone: '(205) 555-5055' },
  { phase: '7. Final Mechanical', company: 'Thompson Plumbing Services', role: 'Plumber (Return)', contact: 'Derek Thompson', phone: '(205) 555-5030' },
  { phase: '7. Final Mechanical', company: 'Birmingham Electric Pro', role: 'Electrician (Return)', contact: 'Carlos Hernandez', phone: '(205) 555-5031' },
  { phase: '7. Final Mechanical', company: 'Bradley HVAC Solutions', role: 'HVAC (Return)', contact: 'Tom Bradley', phone: '(205) 555-5032' },
  { phase: '7. Final Mechanical', company: 'Home Appliance Center', role: 'Appliance Installation', contact: 'Nancy Wilson', phone: '(205) 555-5060' },
  { phase: '8. Exterior & Landscape', company: 'Rodriguez Concrete & Foundation', role: 'Flatwork (Driveway/Patios)', contact: 'Miguel Rodriguez', phone: '(205) 555-5020' },
  { phase: '8. Exterior & Landscape', company: 'Green Thumb Landscaping', role: 'Landscaper', contact: 'Maria Garcia', phone: '(205) 555-5070' },
  { phase: '9. Final Inspections', company: 'Sparkle Clean Services', role: 'Cleaning Crew', contact: 'Anna Martinez', phone: '(205) 555-5080' },
  { phase: '9. Final Inspections', company: 'Newcastle Homes', role: 'Punch List Review', contact: 'Project Manager', phone: '(205) 555-1000' },
]

// Equipment used throughout the project
const allEquipment = [
  { name: 'Excavator CAT 320', id: 'EQ-001', phase: 'Site Preparation', hours: 24 },
  { name: 'Dump Truck - 10yd', id: 'EQ-009', phase: 'Site Preparation', hours: 16 },
  { name: 'Concrete Mixer Truck', id: 'EQ-002', phase: 'Foundation', hours: 12 },
  { name: 'Forklift - Telehandler', id: 'EQ-006', phase: 'Foundation & Framing', hours: 56 },
  { name: 'Nail Gun Set (5 units)', id: 'EQ-005', phase: 'Framing', hours: 120 },
  { name: 'Air Compressor Industrial', id: 'EQ-007', phase: 'Multiple Phases', hours: 104 },
  { name: 'Scaffolding Set A', id: 'EQ-003', phase: 'Envelope & Finishes', hours: 72 },
  { name: 'Scaffolding Set B', id: 'EQ-008', phase: 'Interior Finishes', hours: 48 },
  { name: 'Laser Level Kit', id: 'EQ-010', phase: 'Interior Finishes', hours: 24 },
  { name: 'Generator 20kW', id: 'EQ-004', phase: 'Multiple Phases', hours: 80 },
]

export default function CompletedDetailPage({ params }: { params: { id: string } }) {
  const property = completedProperties[params.id] || completedProperties['1']

  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-700',
    PENDING: 'bg-amber-100 text-amber-700',
    SOLD: 'bg-slate-100 text-slate-600',
    RESERVED: 'bg-newcastle-100 text-newcastle-700',
  }

  const totalEquipmentHours = allEquipment.reduce((sum, eq) => sum + eq.hours, 0)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/completed" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Completed Homes
        </Link>
      </div>

      {/* Property Header */}
      <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-heading font-bold text-charcoal">{property.address}</h1>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[property.salesStatus]}`}>
                {property.salesStatus}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Construction Complete
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 pb-6 border-b border-slate">
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
            <p className="text-sm text-charcoal-light">Closing Date</p>
            <p className="font-medium text-charcoal">{property.closingDate || 'Not yet'}</p>
          </div>
        </div>

        {/* Key Personnel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-soft text-center">
          <p className="text-3xl font-bold text-newcastle">{allContractors.length}</p>
          <p className="text-sm text-charcoal-light">Total Contractors</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft text-center">
          <p className="text-3xl font-bold text-newcastle">{allEquipment.length}</p>
          <p className="text-sm text-charcoal-light">Equipment Items</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft text-center">
          <p className="text-3xl font-bold text-newcastle">{totalEquipmentHours}h</p>
          <p className="text-sm text-charcoal-light">Total Equipment Hours</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* All Contractors */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate bg-newcastle text-white">
              <h2 className="text-lg font-heading font-semibold">All Contractors on Project</h2>
              <p className="text-sm text-white/80">Complete list of companies who built this home</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-light">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Phase</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Company</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Role</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate">
                  {allContractors.map((contractor, idx) => (
                    <tr key={idx} className="hover:bg-slate-light/50 transition-colors">
                      <td className="px-5 py-3">
                        <span className="text-xs font-medium text-charcoal-light">{contractor.phase}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="font-medium text-charcoal">{contractor.company}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-sm text-charcoal">{contractor.role}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div>
                          <span className="text-sm text-charcoal block">{contractor.contact}</span>
                          <a href={`tel:${contractor.phone}`} className="text-xs text-newcastle hover:text-accent">
                            {contractor.phone}
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* All Equipment Used */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate bg-amber-500 text-white">
              <h2 className="text-lg font-heading font-semibold">Newcastle Equipment Used</h2>
              <p className="text-sm text-white/80">Equipment logged throughout construction</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-light">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Equipment</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">ID</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-charcoal uppercase">Phase(s) Used</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold text-charcoal uppercase">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate">
                  {allEquipment.map((equipment, idx) => (
                    <tr key={idx} className="hover:bg-slate-light/50 transition-colors">
                      <td className="px-5 py-3">
                        <span className="font-medium text-charcoal">{equipment.name}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-sm text-charcoal-light">{equipment.id}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-sm text-charcoal">{equipment.phase}</span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="font-medium text-newcastle">{equipment.hours}h</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-light">
                  <tr>
                    <td colSpan={3} className="px-5 py-3 text-right font-semibold text-charcoal">
                      Total Equipment Hours:
                    </td>
                    <td className="px-5 py-3 text-right font-bold text-newcastle">
                      {totalEquipmentHours}h
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
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
                <button className="w-full btn-primary py-2 text-sm">Update Closing Status</button>
              )}
              {property.salesStatus === 'SOLD' && (
                <button className="w-full btn-outline py-2 text-sm">View Closing Documents</button>
              )}
              <button className="w-full py-2 px-4 text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View All Photos
              </button>
              <button className="w-full py-2 px-4 text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Full Report
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Features</h2>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature) => (
                <span key={feature} className="px-3 py-1 bg-slate-light text-charcoal text-sm rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Warranty */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Warranty</h2>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Structural</span>
                <span className="text-sm font-medium text-charcoal">10 Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Systems</span>
                <span className="text-sm font-medium text-charcoal">2 Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate">
                <span className="text-sm text-charcoal">Workmanship</span>
                <span className="text-sm font-medium text-charcoal">1 Year</span>
              </div>
              <div className="flex justify-between py-2">
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
