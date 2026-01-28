import Link from 'next/link'

const projects = [
  {
    id: '1',
    property: '142 Barimore Lane',
    community: 'Barimore',
    floorPlan: 'The Oakmont',
    startDate: 'Oct 15, 2023',
    estimatedCompletion: 'Mar 15, 2024',
    currentPhase: 'Drywall',
    progress: 65,
    status: 'ON_TRACK',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 47,
  },
  {
    id: '2',
    property: '78 Falls Creek Dr',
    community: 'The Falls',
    floorPlan: 'The Belmont',
    startDate: 'Nov 01, 2023',
    estimatedCompletion: 'Apr 01, 2024',
    currentPhase: 'Framing',
    progress: 35,
    status: 'DELAYED',
    superintendent: 'James Wilson',
    daysRemaining: 64,
    delayReason: 'Weather delays - 5 days behind',
  },
  {
    id: '3',
    property: '215 Grand River Way',
    community: 'Grand River',
    floorPlan: 'The Willow',
    startDate: 'Sep 20, 2023',
    estimatedCompletion: 'Feb 20, 2024',
    currentPhase: 'Interior Finishes',
    progress: 82,
    status: 'ON_TRACK',
    superintendent: 'Carlos Hernandez',
    daysRemaining: 23,
  },
  {
    id: '4',
    property: '324 Havenridge Dr',
    community: 'Havenridge',
    floorPlan: 'The Hampton',
    startDate: 'Dec 01, 2023',
    estimatedCompletion: 'May 01, 2024',
    currentPhase: 'Foundation',
    progress: 15,
    status: 'ON_TRACK',
    superintendent: 'Tom Bradley',
    daysRemaining: 94,
  },
  {
    id: '5',
    property: '156 Barimore Circle',
    community: 'Barimore',
    floorPlan: 'The Charleston',
    startDate: 'Nov 15, 2023',
    estimatedCompletion: 'Apr 15, 2024',
    currentPhase: 'MEP Rough-In',
    progress: 45,
    status: 'AHEAD',
    superintendent: 'Mike Rodriguez',
    daysRemaining: 78,
  },
  {
    id: '6',
    property: '445 Falls View Terrace',
    community: 'The Falls',
    floorPlan: 'The Ashford',
    startDate: 'Oct 01, 2023',
    estimatedCompletion: 'Mar 01, 2024',
    currentPhase: 'Insulation',
    progress: 55,
    status: 'ON_TRACK',
    superintendent: 'James Wilson',
    daysRemaining: 33,
  },
]

const upcomingMilestones = [
  { id: '1', property: '215 Grand River Way', milestone: 'Final Inspection', date: 'Feb 15, 2024', daysAway: 18 },
  { id: '2', property: '215 Grand River Way', milestone: 'Certificate of Occupancy', date: 'Feb 20, 2024', daysAway: 23 },
  { id: '3', property: '142 Barimore Lane', milestone: 'Cabinet Installation', date: 'Feb 05, 2024', daysAway: 8 },
  { id: '4', property: '445 Falls View Terrace', milestone: 'Drywall Delivery', date: 'Feb 01, 2024', daysAway: 4 },
  { id: '5', property: '78 Falls Creek Dr', milestone: 'Roof Complete', date: 'Feb 10, 2024', daysAway: 13 },
]

const phases = [
  { name: 'Foundation', order: 1 },
  { name: 'Framing', order: 2 },
  { name: 'Roofing', order: 3 },
  { name: 'MEP Rough-In', order: 4 },
  { name: 'Insulation', order: 5 },
  { name: 'Drywall', order: 6 },
  { name: 'Interior Finishes', order: 7 },
  { name: 'Final', order: 8 },
]

export default function SchedulePage() {
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

  const onTrackCount = projects.filter(p => p.status === 'ON_TRACK').length
  const delayedCount = projects.filter(p => p.status === 'DELAYED').length
  const aheadCount = projects.filter(p => p.status === 'AHEAD').length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Construction Schedule</h1>
          <p className="text-charcoal-light mt-1">Track project timelines and milestones</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Calendar View
          </button>
          <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{projects.length}</p>
          <p className="text-sm text-charcoal-light">Active Projects</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{onTrackCount}</p>
          <p className="text-sm text-charcoal-light">On Track</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">{aheadCount}</p>
          <p className="text-sm text-charcoal-light">Ahead of Schedule</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-red-600">{delayedCount}</p>
            {delayedCount > 0 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          </div>
          <p className="text-sm text-charcoal-light">Delayed</p>
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
                <option value="ON_TRACK">On Track</option>
                <option value="DELAYED">Delayed</option>
                <option value="AHEAD">Ahead</option>
                <option value="PAUSED">Paused</option>
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
                <option value="">All Superintendents</option>
                <option value="Mike Rodriguez">Mike Rodriguez</option>
                <option value="James Wilson">James Wilson</option>
                <option value="Carlos Hernandez">Carlos Hernandez</option>
                <option value="Tom Bradley">Tom Bradley</option>
              </select>
            </div>
          </div>

          {/* Project Timeline Cards */}
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-shadow ${
                  project.status === 'DELAYED' ? 'border-l-4 border-red-500' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-charcoal text-lg">{project.property}</h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
                          {statusLabels[project.status]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-charcoal-light">
                        <span>{project.community}</span>
                        <span>•</span>
                        <span>{project.floorPlan}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {project.superintendent}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-newcastle">{project.daysRemaining}</span>
                      <p className="text-xs text-charcoal-light">days remaining</p>
                    </div>
                  </div>

                  {project.status === 'DELAYED' && project.delayReason && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-sm text-red-700">{project.delayReason}</span>
                    </div>
                  )}

                  {/* Progress Bar with Phase */}
                  <div className="mb-4">
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

                  {/* Timeline Info */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-charcoal-light">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Started: {project.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-charcoal-light">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Est. Completion: {project.estimatedCompletion}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 text-sm font-medium text-newcastle hover:bg-newcastle-50 rounded-lg transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 text-sm font-medium bg-newcastle text-white hover:bg-newcastle-dark rounded-lg transition-colors">
                        Update Progress
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Milestones */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Upcoming Milestones</h2>
            <div className="space-y-3">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="p-3 bg-slate-light rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-charcoal">{milestone.milestone}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      milestone.daysAway <= 7 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {milestone.daysAway}d
                    </span>
                  </div>
                  <div className="text-xs text-charcoal-light">
                    <span>{milestone.property}</span>
                    <span className="mx-1">•</span>
                    <span>{milestone.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-sm text-newcastle hover:text-accent font-medium">
              View All Milestones →
            </button>
          </div>

          {/* Construction Phases Legend */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Construction Phases</h2>
            <div className="space-y-2">
              {phases.map((phase, index) => (
                <div key={phase.name} className="flex items-center gap-3 py-2">
                  <div className="w-6 h-6 rounded-full bg-newcastle-100 text-newcastle text-xs font-semibold flex items-center justify-center">
                    {phase.order}
                  </div>
                  <span className="text-sm text-charcoal">{phase.name}</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Project
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Reschedule Milestone
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate Report
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Set Delay Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
