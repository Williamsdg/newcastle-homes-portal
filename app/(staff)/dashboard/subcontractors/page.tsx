import Link from 'next/link'

const subcontractors = [
  {
    id: '1',
    company: 'Rodriguez Concrete & Foundation',
    contact: 'Miguel Rodriguez',
    email: 'miguel@rodriguezconc.com',
    phone: '(205) 555-1001',
    trade: 'Foundation',
    status: 'ACTIVE',
    rating: 4.8,
    activeProjects: 2,
    completedProjects: 28,
    insuranceExpiry: 'Jun 30, 2024',
    licenseNumber: 'AL-CON-45821',
  },
  {
    id: '2',
    company: 'Wilson Framing Co.',
    contact: 'James Wilson',
    email: 'james@wilsonframing.com',
    phone: '(205) 555-1002',
    trade: 'Framing',
    status: 'ACTIVE',
    rating: 4.9,
    activeProjects: 3,
    completedProjects: 45,
    insuranceExpiry: 'Aug 15, 2024',
    licenseNumber: 'AL-FRM-32156',
  },
  {
    id: '3',
    company: 'Birmingham Electric Pro',
    contact: 'Carlos Hernandez',
    email: 'carlos@birminghamelectric.com',
    phone: '(205) 555-1003',
    trade: 'Electrical',
    status: 'ACTIVE',
    rating: 4.7,
    activeProjects: 4,
    completedProjects: 52,
    insuranceExpiry: 'Sep 01, 2024',
    licenseNumber: 'AL-ELE-78943',
  },
  {
    id: '4',
    company: 'Thompson Plumbing Services',
    contact: 'Derek Thompson',
    email: 'derek@thompsonplumb.com',
    phone: '(205) 555-1004',
    trade: 'Plumbing',
    status: 'ACTIVE',
    rating: 4.6,
    activeProjects: 3,
    completedProjects: 38,
    insuranceExpiry: 'Jul 20, 2024',
    licenseNumber: 'AL-PLB-56782',
  },
  {
    id: '5',
    company: 'Bradley HVAC Solutions',
    contact: 'Tom Bradley',
    email: 'tom@bradleyhvac.com',
    phone: '(205) 555-1005',
    trade: 'HVAC',
    status: 'ACTIVE',
    rating: 4.8,
    activeProjects: 2,
    completedProjects: 31,
    insuranceExpiry: 'May 15, 2024',
    licenseNumber: 'AL-HVC-89234',
  },
  {
    id: '6',
    company: 'Alabama Roofing Experts',
    contact: 'David Mitchell',
    email: 'david@alaroofing.com',
    phone: '(205) 555-1006',
    trade: 'Roofing',
    status: 'ACTIVE',
    rating: 4.5,
    activeProjects: 1,
    completedProjects: 22,
    insuranceExpiry: 'Apr 30, 2024',
    licenseNumber: 'AL-ROF-34521',
  },
  {
    id: '7',
    company: 'Precision Drywall Inc.',
    contact: 'Robert Chen',
    email: 'robert@precisiondrywall.com',
    phone: '(205) 555-1007',
    trade: 'Drywall',
    status: 'ACTIVE',
    rating: 4.7,
    activeProjects: 2,
    completedProjects: 35,
    insuranceExpiry: 'Oct 10, 2024',
    licenseNumber: 'AL-DRY-67892',
  },
  {
    id: '8',
    company: 'Southern Paint & Finishes',
    contact: 'Jennifer Adams',
    email: 'jennifer@southernpaint.com',
    phone: '(205) 555-1008',
    trade: 'Painting',
    status: 'INACTIVE',
    rating: 4.3,
    activeProjects: 0,
    completedProjects: 18,
    insuranceExpiry: 'Jan 15, 2024',
    licenseNumber: 'AL-PNT-23456',
  },
]

const trades = [
  { name: 'Foundation', count: 1, color: 'bg-slate-100 text-slate-700' },
  { name: 'Framing', count: 1, color: 'bg-amber-100 text-amber-700' },
  { name: 'Electrical', count: 1, color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Plumbing', count: 1, color: 'bg-blue-100 text-blue-700' },
  { name: 'HVAC', count: 1, color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Roofing', count: 1, color: 'bg-red-100 text-red-700' },
  { name: 'Drywall', count: 1, color: 'bg-purple-100 text-purple-700' },
  { name: 'Painting', count: 1, color: 'bg-green-100 text-green-700' },
]

export default function SubcontractorsPage() {
  const statusColors: Record<string, string> = {
    ACTIVE: 'bg-green-100 text-green-700',
    INACTIVE: 'bg-slate-100 text-slate-600',
    SUSPENDED: 'bg-red-100 text-red-700',
    PENDING: 'bg-amber-100 text-amber-700',
  }

  const activeCount = subcontractors.filter(s => s.status === 'ACTIVE').length
  const totalActiveProjects = subcontractors.reduce((sum, s) => sum + s.activeProjects, 0)
  const avgRating = (subcontractors.reduce((sum, s) => sum + s.rating, 0) / subcontractors.length).toFixed(1)

  const expiringInsurance = subcontractors.filter(s => {
    const expiry = new Date(s.insuranceExpiry)
    const now = new Date()
    const daysUntilExpiry = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry <= 90 && daysUntilExpiry > 0
  })

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Subcontractors</h1>
          <p className="text-charcoal-light mt-1">Manage trade partners and vendor relationships</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Subcontractor
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{subcontractors.length}</p>
          <p className="text-sm text-charcoal-light">Total Subcontractors</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{activeCount}</p>
          <p className="text-sm text-charcoal-light">Active</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">{totalActiveProjects}</p>
          <p className="text-sm text-charcoal-light">Active Assignments</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-1">
            <p className="text-2xl font-bold text-amber-500">{avgRating}</p>
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-sm text-charcoal-light">Avg Rating</p>
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
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="SUSPENDED">Suspended</option>
              </select>
              <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
                <option value="">All Trades</option>
                {trades.map(trade => (
                  <option key={trade.name} value={trade.name}>{trade.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search subcontractors..."
                className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
              />
            </div>
          </div>

          {/* Subcontractors Table */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-light">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Trade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Projects</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate">
                {subcontractors.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-light/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <span className="font-medium text-charcoal block">{sub.company}</span>
                        <span className="text-sm text-charcoal-light">{sub.contact}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        trades.find(t => t.name === sub.trade)?.color || 'bg-slate-100 text-slate-700'
                      }`}>
                        {sub.trade}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[sub.status]}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-charcoal">{sub.rating}</span>
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <span className="font-medium text-newcastle">{sub.activeProjects}</span>
                        <span className="text-charcoal-light"> active / </span>
                        <span className="text-charcoal-light">{sub.completedProjects} completed</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-charcoal-light hover:text-newcastle hover:bg-slate-light rounded-lg transition-colors" title="Email">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button className="p-2 text-charcoal-light hover:text-newcastle hover:bg-slate-light rounded-lg transition-colors" title="Call">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </button>
                        <button className="text-newcastle hover:text-accent text-sm font-medium pl-2">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trades */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Trades</h2>
            <div className="space-y-2">
              {trades.map((trade) => (
                <div key={trade.name} className="flex items-center justify-between p-3 bg-slate-light rounded-lg">
                  <span className="text-sm text-charcoal">{trade.name}</span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${trade.color}`}>
                    {trade.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Expiring */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-heading font-semibold text-charcoal">Insurance Alerts</h2>
              {expiringInsurance.length > 0 && (
                <span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-700 rounded-full font-medium">
                  {expiringInsurance.length}
                </span>
              )}
            </div>
            <div className="space-y-3">
              {expiringInsurance.length > 0 ? (
                expiringInsurance.map((sub) => (
                  <div key={sub.id} className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-charcoal">{sub.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Expires: {sub.insuranceExpiry}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-charcoal-light text-center py-4">No insurance expiring soon</p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Request Insurance Cert
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Work Order
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Vendor List
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
