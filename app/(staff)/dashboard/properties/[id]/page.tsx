import PropertyDetailClient from './PropertyDetailClient'

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
      { role: 'Architect / Residential Designer', company: 'Birmingham Design Group', contact: 'David Chen', phone: '(205) 555-5001', status: 'COMPLETED', required: true, rating: 5, review: 'Excellent design work, delivered on time with great attention to detail.' },
      { role: 'Structural Engineer', company: 'Southern Structural', contact: 'Mark Williams', phone: '(205) 555-5002', status: 'COMPLETED', required: false, rating: 4, review: 'Good structural analysis, minor delays in documentation.' },
      { role: 'Land Surveyor', company: 'Alabama Survey Co.', contact: 'Robert Taylor', phone: '(205) 555-5003', status: 'COMPLETED', required: true, rating: 5, review: 'Fast and accurate survey work.' },
      { role: 'Geotechnical Engineer', company: 'GeoTech Solutions', contact: 'Emily Brown', phone: '(205) 555-5004', status: 'NOT_NEEDED', required: false, rating: 0, review: '' },
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
      { role: 'Excavation / Grading Contractor', company: 'Premier Excavation', contact: 'James Miller', phone: '(205) 555-5010', status: 'COMPLETED', required: true, rating: 4, review: 'Good work, site properly graded. Minor cleanup issues.' },
      { role: 'Tree Removal Service', company: 'Arbor Care Services', contact: 'Mike Johnson', phone: '(205) 555-5011', status: 'COMPLETED', required: false, rating: 5, review: 'Professional tree removal, clean worksite.' },
      { role: 'Utility Locator', company: 'AL-One Call', contact: 'Service Line', phone: '811', status: 'COMPLETED', required: true, rating: 5, review: 'All utilities properly marked.' },
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
      { role: 'Concrete Contractor', company: 'Rodriguez Concrete & Foundation', contact: 'Miguel Rodriguez', phone: '(205) 555-5020', status: 'COMPLETED', required: true, rating: 5, review: 'Outstanding concrete work, level foundation, no issues.' },
      { role: 'Waterproofing Contractor', company: 'DryShield Waterproofing', contact: 'Tom Harris', phone: '(205) 555-5021', status: 'COMPLETED', required: true, rating: 4, review: 'Good waterproofing application.' },
      { role: 'Framing Contractor', company: 'Wilson Framing Co.', contact: 'James Wilson', phone: '(205) 555-5022', status: 'IN_PROGRESS', required: true, rating: 0, review: '' },
      { role: 'Truss Manufacturer', company: 'Southern Truss Systems', contact: 'Keith Anderson', phone: '(205) 555-5023', status: 'DELIVERED', required: true, rating: 5, review: 'Trusses delivered on schedule, perfect fit.' },
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
      { role: 'Plumber', company: 'Thompson Plumbing Services', contact: 'Derek Thompson', phone: '(205) 555-5030', status: 'COMPLETED', required: true, rating: 5, review: 'Clean pipe work, passed inspection first time.' },
      { role: 'Electrician', company: 'Birmingham Electric Pro', contact: 'Carlos Hernandez', phone: '(205) 555-5031', status: 'COMPLETED', required: true, rating: 4, review: 'Good electrical rough-in, one minor code correction needed.' },
      { role: 'HVAC Contractor', company: 'Bradley HVAC Solutions', contact: 'Tom Bradley', phone: '(205) 555-5032', status: 'IN_PROGRESS', required: true, rating: 0, review: '' },
      { role: 'Low Voltage / Structured Wiring', company: 'SmartHome Wiring Co.', contact: 'Alex Turner', phone: '(205) 555-5033', status: 'PENDING', required: true, rating: 0, review: '' },
    ],
    equipment: [],
    photos: 18,
  },
  {
    num: 5,
    name: 'Building Envelope',
    color: 'bg-lime-500',
    contractors: [
      { role: 'Roofing Contractor', company: 'Alabama Roofing Experts', contact: 'David Mitchell', phone: '(205) 555-5040', status: 'COMPLETED', required: true, rating: 5, review: 'Excellent roofing job, very clean and professional.' },
      { role: 'Window & Door Installer', company: 'Crystal Clear Windows', contact: 'Brian Adams', phone: '(205) 555-5041', status: 'COMPLETED', required: true, rating: 4, review: 'Good installation, one window seal needed adjustment.' },
      { role: 'Siding / Exterior Contractor', company: 'Exterior Solutions LLC', contact: 'Kevin Martin', phone: '(205) 555-5042', status: 'IN_PROGRESS', required: true, rating: 0, review: '' },
      { role: 'Insulation Contractor', company: 'ThermalPro Insulation', contact: 'Steve Clark', phone: '(205) 555-5043', status: 'PENDING', required: true, rating: 0, review: '' },
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
      { role: 'Drywall Contractor', company: 'Precision Drywall Inc.', contact: 'Robert Chen', phone: '(205) 555-5050', status: 'COMPLETED', required: true, rating: 5, review: 'Smooth finish, no visible seams, excellent work.' },
      { role: 'Painter', company: 'Southern Paint & Finishes', contact: 'Jennifer Adams', phone: '(205) 555-5051', status: 'IN_PROGRESS', required: true, rating: 0, review: '' },
      { role: 'Trim Carpenter', company: 'Fine Trim Carpentry', contact: 'Michael Scott', phone: '(205) 555-5052', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Flooring Contractor', company: 'Flooring Depot Pro', contact: 'Lisa Wong', phone: '(205) 555-5053', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Cabinet Installer', company: 'Cabinet World', contact: 'John Peters', phone: '(205) 555-5054', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Countertop Fabricator', company: 'Granite Masters', contact: 'Sarah Lee', phone: '(205) 555-5055', status: 'PENDING', required: true, rating: 0, review: '' },
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
      { role: 'Plumber (Return Visit)', company: 'Thompson Plumbing Services', contact: 'Derek Thompson', phone: '(205) 555-5030', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Electrician (Return Visit)', company: 'Birmingham Electric Pro', contact: 'Carlos Hernandez', phone: '(205) 555-5031', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'HVAC (Return Visit)', company: 'Bradley HVAC Solutions', contact: 'Tom Bradley', phone: '(205) 555-5032', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Appliance Delivery / Installation', company: 'Home Appliance Center', contact: 'Nancy Wilson', phone: '(205) 555-5060', status: 'PENDING', required: true, rating: 0, review: '' },
    ],
    equipment: [],
    photos: 0,
  },
  {
    num: 8,
    name: 'Exterior & Landscape',
    color: 'bg-cyan-500',
    contractors: [
      { role: 'Concrete / Flatwork (Driveway, Sidewalks, Patios)', company: 'Rodriguez Concrete & Foundation', contact: 'Miguel Rodriguez', phone: '(205) 555-5020', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Landscaper', company: 'Green Thumb Landscaping', contact: 'Maria Garcia', phone: '(205) 555-5070', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'Fence Contractor', company: 'Alabama Fence Co.', contact: 'Bill Thompson', phone: '(205) 555-5071', status: 'PENDING', required: false, rating: 0, review: '' },
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
      { role: 'Cleaning Crew', company: 'Sparkle Clean Services', contact: 'Anna Martinez', phone: '(205) 555-5080', status: 'PENDING', required: true, rating: 0, review: '' },
      { role: 'General Contractor Punch List', company: 'Newcastle Homes', contact: 'Project Manager', phone: '(205) 555-1000', status: 'PENDING', required: true, rating: 0, review: '' },
    ],
    equipment: [],
    photos: 0,
  },
]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertyData[params.id] || propertyData['1']

  return (
    <PropertyDetailClient
      property={property}
      constructionPhases={constructionPhases}
    />
  )
}
