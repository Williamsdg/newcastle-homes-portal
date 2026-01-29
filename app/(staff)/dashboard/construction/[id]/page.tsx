import Link from 'next/link'

// Generate static params for all construction projects
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

const constructionProjects: Record<string, {
  id: string
  address: string
  community: string
  lot: string
  floorPlan: string
  sqft: number
  bedrooms: number
  bathrooms: number
  startDate: string
  estimatedCompletion: string
  currentPhase: string
  progress: number
  status: string
  superintendent: string
  daysRemaining: number
  description: string
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
    startDate: 'Oct 15, 2023',
    estimatedCompletion: 'Mar 15, 2024',
    currentPhase: 'Drywall',
    progress: 65,
    status: 'ON_TRACK',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 47,
    description: 'Two-story craftsman with open floor plan, covered back patio, and three-car garage.',
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
    startDate: 'Nov 01, 2023',
    estimatedCompletion: 'Apr 01, 2024',
    currentPhase: 'Framing',
    progress: 35,
    status: 'DELAYED',
    superintendent: 'James Wilson',
    daysRemaining: 64,
    description: 'Spacious modern farmhouse with bonus room, butler pantry, and covered outdoor living.',
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
    startDate: 'Sep 20, 2023',
    estimatedCompletion: 'Feb 20, 2024',
    currentPhase: 'Interior Finishes',
    progress: 82,
    status: 'ON_TRACK',
    superintendent: 'Carlos Hernandez',
    daysRemaining: 23,
    description: 'Single-story ranch with split bedroom layout and gourmet kitchen.',
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
    startDate: 'Dec 01, 2023',
    estimatedCompletion: 'May 01, 2024',
    currentPhase: 'Foundation',
    progress: 15,
    status: 'ON_TRACK',
    superintendent: 'Tom Bradley',
    daysRemaining: 94,
    description: 'Traditional design with formal dining, study, and covered front porch.',
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
    startDate: 'Nov 15, 2023',
    estimatedCompletion: 'Apr 15, 2024',
    currentPhase: 'MEP Rough-In',
    progress: 45,
    status: 'AHEAD',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 78,
    description: 'Luxury estate home with guest suite, home theater, and outdoor kitchen.',
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
    startDate: 'Oct 01, 2023',
    estimatedCompletion: 'Mar 01, 2024',
    currentPhase: 'Insulation',
    progress: 55,
    status: 'ON_TRACK',
    superintendent: 'James Wilson',
    daysRemaining: 33,
    description: 'Contemporary design with floor-to-ceiling windows and chef kitchen.',
  },
}

const materialsNeeded = [
  { id: '1', name: 'Drywall Sheets (4x8)', quantity: 120, unit: 'sheets', status: 'ORDERED', deliveryDate: 'Feb 01, 2024', vendor: 'BuildPro Supply' },
  { id: '2', name: 'Interior Paint - Eggshell White', quantity: 25, unit: 'gallons', status: 'PENDING', deliveryDate: null, vendor: null },
  { id: '3', name: 'Cabinet Set - Kitchen', quantity: 1, unit: 'set', status: 'ORDERED', deliveryDate: 'Feb 15, 2024', vendor: 'Cabinet World' },
  { id: '4', name: 'Hardwood Flooring - Oak', quantity: 1800, unit: 'sqft', status: 'DELIVERED', deliveryDate: 'Jan 25, 2024', vendor: 'Flooring Depot' },
  { id: '5', name: 'Light Fixtures Package', quantity: 1, unit: 'set', status: 'PENDING', deliveryDate: null, vendor: null },
]

const buildingPlans = [
  { id: '1', name: 'Foundation Plan', type: 'PDF', uploadedDate: 'Oct 10, 2023', version: '1.0' },
  { id: '2', name: 'Floor Plan - First Floor', type: 'PDF', uploadedDate: 'Oct 10, 2023', version: '1.2' },
  { id: '3', name: 'Floor Plan - Second Floor', type: 'PDF', uploadedDate: 'Oct 10, 2023', version: '1.2' },
  { id: '4', name: 'Electrical Layout', type: 'PDF', uploadedDate: 'Oct 15, 2023', version: '2.0' },
  { id: '5', name: 'Plumbing Diagram', type: 'PDF', uploadedDate: 'Oct 15, 2023', version: '1.1' },
  { id: '6', name: 'HVAC Layout', type: 'PDF', uploadedDate: 'Oct 18, 2023', version: '1.0' },
  { id: '7', name: 'Elevation - Front', type: 'PDF', uploadedDate: 'Oct 10, 2023', version: '1.0' },
  { id: '8', name: 'Elevation - Rear', type: 'PDF', uploadedDate: 'Oct 10, 2023', version: '1.0' },
]

const photos = [
  { id: '1', phase: 'Foundation', date: 'Oct 20, 2023', count: 8, thumbnail: 'Foundation complete' },
  { id: '2', phase: 'Framing', date: 'Nov 15, 2023', count: 12, thumbnail: 'Framing progress' },
  { id: '3', phase: 'Roofing', date: 'Dec 05, 2023', count: 6, thumbnail: 'Roof installation' },
  { id: '4', phase: 'MEP Rough-In', date: 'Dec 20, 2023', count: 10, thumbnail: 'Electrical and plumbing' },
  { id: '5', phase: 'Drywall', date: 'Jan 15, 2024', count: 9, thumbnail: 'Drywall installation' },
]

const checklists = [
  { id: '1', name: 'Foundation Inspection', status: 'COMPLETED', completedDate: 'Oct 25, 2023', items: 12, completedItems: 12 },
  { id: '2', name: 'Framing Inspection', status: 'COMPLETED', completedDate: 'Nov 20, 2023', items: 18, completedItems: 18 },
  { id: '3', name: 'Roofing Checklist', status: 'COMPLETED', completedDate: 'Dec 10, 2023', items: 10, completedItems: 10 },
  { id: '4', name: 'Electrical Rough-In', status: 'COMPLETED', completedDate: 'Dec 28, 2023', items: 20, completedItems: 20 },
  { id: '5', name: 'Plumbing Rough-In', status: 'COMPLETED', completedDate: 'Dec 28, 2023', items: 15, completedItems: 15 },
  { id: '6', name: 'Insulation Inspection', status: 'COMPLETED', completedDate: 'Jan 10, 2024', items: 10, completedItems: 10 },
  { id: '7', name: 'Drywall Inspection', status: 'IN_PROGRESS', completedDate: null, items: 14, completedItems: 8 },
  { id: '8', name: 'Interior Finishes', status: 'PENDING', completedDate: null, items: 22, completedItems: 0 },
  { id: '9', name: 'Final Walkthrough', status: 'PENDING', completedDate: null, items: 25, completedItems: 0 },
]

const workers = [
  { id: '1', name: 'Mike Rodriguez', role: 'Superintendent', company: 'Crestview Homes', phone: '(205) 555-1001', hoursLogged: 320 },
  { id: '2', name: 'Demo Concrete & Foundation', role: 'Foundation', company: 'Rodriguez Concrete', phone: '(205) 555-1002', hoursLogged: 80 },
  { id: '3', name: 'Demo Framing Co.', role: 'Framing', company: 'Wilson Framing', phone: '(205) 555-1003', hoursLogged: 160 },
  { id: '4', name: 'Demo Electric Pro', role: 'Electrical', company: 'Birmingham Electric', phone: '(205) 555-1004', hoursLogged: 95 },
  { id: '5', name: 'Demo Plumbing Services', role: 'Plumbing', company: 'Thompson Plumbing', phone: '(205) 555-1005', hoursLogged: 72 },
  { id: '6', name: 'Demo HVAC Solutions', role: 'HVAC', company: 'Bradley HVAC', phone: '(205) 555-1006', hoursLogged: 48 },
  { id: '7', name: 'Demo Roofing Experts', role: 'Roofing', company: 'AL Roofing', phone: '(205) 555-1007', hoursLogged: 40 },
  { id: '8', name: 'Demo Drywall Inc.', role: 'Drywall', company: 'Precision Drywall', phone: '(205) 555-1008', hoursLogged: 56 },
]

export default function ConstructionDetailPage({ params }: { params: { id: string } }) {
  const project = constructionProjects[params.id] || constructionProjects['1']

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

  const materialStatusColors: Record<string, string> = {
    PENDING: 'bg-amber-100 text-amber-700',
    ORDERED: 'bg-blue-100 text-blue-700',
    DELIVERED: 'bg-green-100 text-green-700',
  }

  const checklistStatusColors: Record<string, string> = {
    PENDING: 'bg-slate-100 text-slate-600',
    IN_PROGRESS: 'bg-newcastle-100 text-newcastle-700',
    COMPLETED: 'bg-green-100 text-green-700',
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/dashboard/construction" className="text-newcastle hover:text-accent text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Active Builds
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-heading font-bold text-charcoal">{project.address}</h1>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
            </div>
            <p className="text-charcoal-light">{project.community} • {project.lot} • {project.floorPlan}</p>
            <p className="text-sm text-charcoal-light mt-1">{project.description}</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline py-2 px-4 text-sm">
              Edit Project
            </button>
            <button className="btn-primary py-2 px-4 text-sm">
              Update Progress
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-charcoal">
              Current Phase: <span className="text-newcastle">{project.currentPhase}</span>
            </span>
            <span className="text-sm font-medium text-charcoal">{project.progress}% Complete</span>
          </div>
          <div className="w-full bg-slate-light rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                project.status === 'DELAYED' ? 'bg-red-500' :
                project.status === 'AHEAD' ? 'bg-newcastle' : 'bg-green-500'
              }`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-slate">
          <div>
            <p className="text-2xl font-bold text-charcoal">{project.daysRemaining}</p>
            <p className="text-sm text-charcoal-light">Days Remaining</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">{project.sqft.toLocaleString()}</p>
            <p className="text-sm text-charcoal-light">Square Feet</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">{project.bedrooms} / {project.bathrooms}</p>
            <p className="text-sm text-charcoal-light">Bed / Bath</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-light">Started</p>
            <p className="font-medium text-charcoal">{project.startDate}</p>
          </div>
          <div>
            <p className="text-sm text-charcoal-light">Est. Completion</p>
            <p className="font-medium text-charcoal">{project.estimatedCompletion}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Materials Needed */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate flex items-center justify-between">
              <div>
                <h2 className="text-lg font-heading font-semibold text-charcoal">Materials Needed</h2>
                <p className="text-sm text-charcoal-light">Track material orders and deliveries</p>
              </div>
              <button className="btn-outline py-1.5 px-3 text-sm">Add Material</button>
            </div>
            <div className="divide-y divide-slate">
              {materialsNeeded.map((material) => (
                <div key={material.id} className="p-4 hover:bg-slate-light/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal">{material.name}</h4>
                      <p className="text-sm text-charcoal-light">
                        {material.quantity} {material.unit}
                        {material.vendor && <span> • {material.vendor}</span>}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${materialStatusColors[material.status]}`}>
                      {material.status}
                    </span>
                  </div>
                  {material.deliveryDate && (
                    <p className="text-xs text-charcoal-light mt-2">
                      Delivery: {material.deliveryDate}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Building Plans */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate flex items-center justify-between">
              <div>
                <h2 className="text-lg font-heading font-semibold text-charcoal">Building Plans</h2>
                <p className="text-sm text-charcoal-light">Architectural and engineering documents</p>
              </div>
              <button className="btn-outline py-1.5 px-3 text-sm">Upload Plan</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
              {buildingPlans.map((plan) => (
                <div key={plan.id} className="p-4 bg-slate-light rounded-lg hover:bg-slate transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-charcoal truncate">{plan.name}</h4>
                  <p className="text-xs text-charcoal-light">v{plan.version}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate flex items-center justify-between">
              <div>
                <h2 className="text-lg font-heading font-semibold text-charcoal">Photo Documentation</h2>
                <p className="text-sm text-charcoal-light">Construction progress photos by phase</p>
              </div>
              <button className="btn-primary py-1.5 px-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Photos
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5">
              {photos.map((album) => (
                <div key={album.id} className="cursor-pointer group">
                  <div className="aspect-square bg-gradient-to-br from-newcastle-100 to-newcastle-200 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-8 h-8 text-newcastle/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute inset-0 bg-newcastle/0 group-hover:bg-newcastle/10 transition-colors" />
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/50 text-white text-xs rounded-full">
                      {album.count}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-charcoal">{album.phase}</h4>
                  <p className="text-xs text-charcoal-light">{album.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workers on Project */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate flex items-center justify-between">
              <div>
                <h2 className="text-lg font-heading font-semibold text-charcoal">Workers & Contractors</h2>
                <p className="text-sm text-charcoal-light">Teams who have worked on this project</p>
              </div>
              <button className="btn-outline py-1.5 px-3 text-sm">Add Worker</button>
            </div>
            <table className="w-full">
              <thead className="bg-slate-light">
                <tr>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Name / Company</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Role</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-charcoal">Contact</th>
                  <th className="px-5 py-3 text-right text-sm font-semibold text-charcoal">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate">
                {workers.map((worker) => (
                  <tr key={worker.id} className="hover:bg-slate-light/50 transition-colors">
                    <td className="px-5 py-3">
                      <div>
                        <span className="font-medium text-charcoal block">{worker.name}</span>
                        <span className="text-sm text-charcoal-light">{worker.company}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className="text-sm text-charcoal">{worker.role}</span>
                    </td>
                    <td className="px-5 py-3">
                      <a href={`tel:${worker.phone}`} className="text-sm text-newcastle hover:text-accent">
                        {worker.phone}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="font-medium text-charcoal">{worker.hoursLogged}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Superintendent */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Project Lead</h2>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-newcastle-100 rounded-full flex items-center justify-center">
                <span className="text-newcastle font-semibold text-lg">MR</span>
              </div>
              <div>
                <h4 className="font-medium text-charcoal">{project.superintendent}</h4>
                <p className="text-sm text-charcoal-light">Superintendent</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate flex gap-2">
              <button className="flex-1 btn-outline py-2 text-sm">Call</button>
              <button className="flex-1 btn-primary py-2 text-sm">Message</button>
            </div>
          </div>

          {/* Checklists */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="p-5 border-b border-slate">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Checklists</h2>
              <p className="text-sm text-charcoal-light">Inspection and milestone tracking</p>
            </div>
            <div className="divide-y divide-slate max-h-96 overflow-y-auto">
              {checklists.map((checklist) => (
                <div key={checklist.id} className="p-4 hover:bg-slate-light/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-charcoal text-sm">{checklist.name}</h4>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${checklistStatusColors[checklist.status]}`}>
                      {checklist.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-charcoal-light">
                      {checklist.completedItems} / {checklist.items} items
                    </span>
                    {checklist.completedDate && (
                      <span className="text-xs text-charcoal-light">{checklist.completedDate}</span>
                    )}
                  </div>
                  {checklist.status === 'IN_PROGRESS' && (
                    <div className="mt-2 w-full bg-slate-light rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-newcastle"
                        style={{ width: `${(checklist.completedItems / checklist.items) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate">
              <button className="w-full py-2 text-center text-sm text-newcastle hover:text-accent font-medium">
                View All Checklists →
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-soft p-5">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Create Inspection
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Log Delay
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate Report
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mark as Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
