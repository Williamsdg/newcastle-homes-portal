import Link from 'next/link'

const checklists = [
  {
    id: '1',
    name: 'Foundation Inspection',
    property: '142 Barimore Lane',
    community: 'Barimore',
    phase: 'Foundation',
    assignedTo: 'Mike Rodriguez',
    dueDate: 'Jan 28, 2024',
    status: 'IN_PROGRESS',
    completedItems: 8,
    totalItems: 12,
  },
  {
    id: '2',
    name: 'Rough Framing Checklist',
    property: '78 Falls Creek Dr',
    community: 'The Falls',
    phase: 'Framing',
    assignedTo: 'James Wilson',
    dueDate: 'Jan 30, 2024',
    status: 'PENDING',
    completedItems: 0,
    totalItems: 18,
  },
  {
    id: '3',
    name: 'Electrical Rough-In',
    property: '215 Grand River Way',
    community: 'Grand River',
    phase: 'MEP Rough-In',
    assignedTo: 'Carlos Hernandez',
    dueDate: 'Jan 29, 2024',
    status: 'IN_PROGRESS',
    completedItems: 14,
    totalItems: 20,
  },
  {
    id: '4',
    name: 'Plumbing Rough-In',
    property: '215 Grand River Way',
    community: 'Grand River',
    phase: 'MEP Rough-In',
    assignedTo: 'Derek Thompson',
    dueDate: 'Jan 29, 2024',
    status: 'COMPLETED',
    completedItems: 15,
    totalItems: 15,
  },
  {
    id: '5',
    name: 'Insulation Inspection',
    property: '324 Havenridge Dr',
    community: 'Havenridge',
    phase: 'Insulation',
    assignedTo: 'Tom Bradley',
    dueDate: 'Feb 01, 2024',
    status: 'PENDING',
    completedItems: 0,
    totalItems: 10,
  },
  {
    id: '6',
    name: 'Drywall Inspection',
    property: '156 Barimore Circle',
    community: 'Barimore',
    phase: 'Drywall',
    assignedTo: 'Mike Rodriguez',
    dueDate: 'Feb 02, 2024',
    status: 'PENDING',
    completedItems: 0,
    totalItems: 14,
  },
  {
    id: '7',
    name: 'Final Walkthrough',
    property: '89 Heritage Pine Ct',
    community: 'Heritage Pines',
    phase: 'Final',
    assignedTo: 'Sarah Mitchell',
    dueDate: 'Jan 27, 2024',
    status: 'IN_PROGRESS',
    completedItems: 22,
    totalItems: 25,
  },
  {
    id: '8',
    name: 'Pre-Drywall Inspection',
    property: '445 Falls View Terrace',
    community: 'The Falls',
    phase: 'Pre-Drywall',
    assignedTo: 'James Wilson',
    dueDate: 'Feb 05, 2024',
    status: 'PENDING',
    completedItems: 0,
    totalItems: 16,
  },
]

const phases = [
  { name: 'Foundation', count: 1, color: 'bg-slate-100 text-slate-700' },
  { name: 'Framing', count: 1, color: 'bg-amber-100 text-amber-700' },
  { name: 'MEP Rough-In', count: 2, color: 'bg-blue-100 text-blue-700' },
  { name: 'Pre-Drywall', count: 1, color: 'bg-purple-100 text-purple-700' },
  { name: 'Insulation', count: 1, color: 'bg-green-100 text-green-700' },
  { name: 'Drywall', count: 1, color: 'bg-red-100 text-red-700' },
  { name: 'Final', count: 1, color: 'bg-newcastle-100 text-newcastle-700' },
]

export default function ChecklistsPage() {
  const statusColors: Record<string, string> = {
    PENDING: 'bg-slate-100 text-slate-700',
    IN_PROGRESS: 'bg-newcastle-100 text-newcastle-700',
    COMPLETED: 'bg-green-100 text-green-700',
    FAILED: 'bg-red-100 text-red-700',
  }

  const pendingCount = checklists.filter(c => c.status === 'PENDING').length
  const inProgressCount = checklists.filter(c => c.status === 'IN_PROGRESS').length
  const completedCount = checklists.filter(c => c.status === 'COMPLETED').length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Construction Checklists</h1>
          <p className="text-charcoal-light mt-1">Track inspections and construction milestones</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Checklist
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{checklists.length}</p>
          <p className="text-sm text-charcoal-light">Total Checklists</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-slate-600">{pendingCount}</p>
          <p className="text-sm text-charcoal-light">Pending</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">{inProgressCount}</p>
          <p className="text-sm text-charcoal-light">In Progress</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
          <p className="text-sm text-charcoal-light">Completed</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
                <option value="">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
              <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
                <option value="">All Phases</option>
                {phases.map(phase => (
                  <option key={phase.name} value={phase.name}>{phase.name}</option>
                ))}
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
                placeholder="Search checklists..."
                className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
              />
            </div>
          </div>

          {/* Checklists List */}
          <div className="space-y-4">
            {checklists.map((checklist) => {
              const progress = Math.round((checklist.completedItems / checklist.totalItems) * 100)
              return (
                <div
                  key={checklist.id}
                  className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-charcoal text-lg">{checklist.name}</h3>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[checklist.status]}`}>
                            {checklist.status.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-charcoal-light">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="text-newcastle font-medium">{checklist.property}</span>
                          <span>•</span>
                          <span>{checklist.community}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          phases.find(p => p.name === checklist.phase)?.color || 'bg-slate-100 text-slate-700'
                        }`}>
                          {checklist.phase}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-charcoal-light">Progress</span>
                        <span className="text-sm font-medium text-charcoal">
                          {checklist.completedItems} / {checklist.totalItems} items ({progress}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-light rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            progress === 100 ? 'bg-green-500' : progress > 50 ? 'bg-newcastle' : 'bg-amber-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate">
                      <div className="flex items-center gap-4 text-sm text-charcoal-light">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{checklist.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Due: {checklist.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm font-medium text-newcastle hover:bg-newcastle-50 rounded-lg transition-colors">
                          View Details
                        </button>
                        {checklist.status !== 'COMPLETED' && (
                          <button className="px-4 py-2 text-sm font-medium bg-newcastle text-white hover:bg-newcastle-dark rounded-lg transition-colors">
                            Continue
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Construction Phases */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Construction Phases</h2>
            <div className="space-y-2">
              {phases.map((phase) => (
                <div key={phase.name} className="flex items-center justify-between p-3 bg-slate-light rounded-lg">
                  <span className="text-sm text-charcoal">{phase.name}</span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${phase.color}`}>
                    {phase.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Due Soon */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Due Soon</h2>
            <div className="space-y-3">
              {checklists
                .filter(c => c.status !== 'COMPLETED')
                .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                .slice(0, 4)
                .map((item) => (
                  <div key={item.id} className="p-3 bg-slate-light rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-charcoal">{item.name}</span>
                      {item.status === 'IN_PROGRESS' && (
                        <span className="px-2 py-0.5 text-xs bg-newcastle-100 text-newcastle-700 rounded-full">Active</span>
                      )}
                    </div>
                    <div className="text-xs text-charcoal-light">
                      <span>{item.property}</span>
                      <span className="mx-1">•</span>
                      <span>{item.dueDate}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Checklist Templates */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Templates</h2>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Foundation Inspection
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Framing Checklist
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Pre-Drywall Inspection
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Final Walkthrough
              </button>
            </div>
            <button className="w-full mt-4 py-2 text-center text-sm text-newcastle hover:text-accent font-medium">
              Manage Templates →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
