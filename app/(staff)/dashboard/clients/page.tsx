import Link from 'next/link'

const buyers = [
  { id: '1', name: 'Sarah Mitchell', email: 'sarah.m@email.com', phone: '(205) 555-1234', status: 'ACTIVE', interestedIn: [{ id: '1', address: '142 Barimore Lane' }], lastContact: 'Jan 25, 2024', stage: 'Tour Scheduled' },
  { id: '2', name: 'James Wilson', email: 'jwilson@email.com', phone: '(205) 555-5678', status: 'ACTIVE', interestedIn: [], lastContact: 'Jan 24, 2024', stage: 'Initial Contact' },
  { id: '3', name: 'Emily & David Chen', email: 'chen.family@email.com', phone: '(205) 555-9012', status: 'ACTIVE', interestedIn: [{ id: '2', address: '78 Falls Creek Dr' }], lastContact: 'Jan 23, 2024', stage: 'Tour Completed' },
  { id: '4', name: 'The Martinez Family', email: 'martinez@email.com', phone: '(205) 555-3456', status: 'ACTIVE', interestedIn: [{ id: '3', address: '215 Grand River Way' }], lastContact: 'Jan 25, 2024', stage: 'Tour Scheduled' },
  { id: '5', name: 'Robert Johnson', email: 'robert.j@email.com', phone: '(205) 555-7890', status: 'ACTIVE', interestedIn: [{ id: '1', address: '142 Barimore Lane' }, { id: '4', address: '89 Heritage Pine Ct' }], lastContact: 'Jan 22, 2024', stage: 'Negotiating' },
  { id: '6', name: 'Amanda & Chris Lee', email: 'lees@email.com', phone: '(205) 555-2345', status: 'ACTIVE', interestedIn: [{ id: '4', address: '89 Heritage Pine Ct' }], lastContact: 'Jan 20, 2024', stage: 'Tour Scheduled' },
  { id: '7', name: 'Michael Thompson', email: 'mthompson@email.com', phone: '(205) 555-6789', status: 'CLOSED', interestedIn: [], lastContact: 'Jan 10, 2024', stage: 'Purchased' },
  { id: '8', name: 'Jennifer Adams', email: 'jadams@email.com', phone: '(205) 555-0123', status: 'INACTIVE', interestedIn: [], lastContact: 'Dec 15, 2023', stage: 'Lost' },
]

export default function BuyersPage() {
  const stageColors: Record<string, string> = {
    'Initial Contact': 'bg-slate-100 text-slate-700',
    'Tour Scheduled': 'bg-newcastle-100 text-newcastle-700',
    'Tour Completed': 'bg-amber-100 text-amber-700',
    'Negotiating': 'bg-purple-100 text-purple-700',
    'Purchased': 'bg-green-100 text-green-700',
    'Lost': 'bg-red-100 text-red-700',
  }

  const statusColors: Record<string, string> = {
    ACTIVE: 'bg-green-500',
    INACTIVE: 'bg-slate-400',
    CLOSED: 'bg-newcastle-500',
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Buyers</h1>
          <p className="text-charcoal-light mt-1">Manage prospective and current home buyers</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Add Buyer
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{buyers.filter(b => b.status === 'ACTIVE').length}</p>
          <p className="text-sm text-charcoal-light">Active Buyers</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{buyers.filter(b => b.stage === 'Tour Scheduled').length}</p>
          <p className="text-sm text-charcoal-light">Tours Scheduled</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{buyers.filter(b => b.stage === 'Negotiating').length}</p>
          <p className="text-sm text-charcoal-light">In Negotiation</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{buyers.filter(b => b.stage === 'Purchased').length}</p>
          <p className="text-sm text-charcoal-light">Closed This Month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-soft p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="CLOSED">Closed</option>
          </select>
          <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
            <option value="">All Stages</option>
            <option value="Initial Contact">Initial Contact</option>
            <option value="Tour Scheduled">Tour Scheduled</option>
            <option value="Tour Completed">Tour Completed</option>
            <option value="Negotiating">Negotiating</option>
            <option value="Purchased">Purchased</option>
          </select>
          <input
            type="text"
            placeholder="Search buyers..."
            className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
          />
        </div>
      </div>

      {/* Buyers Table */}
      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-light">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Buyer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Contact</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Stage</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Interested In</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Last Contact</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate">
            {buyers.map((buyer) => (
              <tr key={buyer.id} className="hover:bg-slate-light/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-newcastle-100 rounded-full flex items-center justify-center">
                        <span className="text-newcastle font-semibold text-sm">
                          {buyer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColors[buyer.status]}`} />
                    </div>
                    <span className="font-medium text-charcoal">{buyer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <a href={`mailto:${buyer.email}`} className="text-newcastle hover:text-accent block">{buyer.email}</a>
                    <span className="text-charcoal-light">{buyer.phone}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${stageColors[buyer.stage]}`}>
                    {buyer.stage}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {buyer.interestedIn.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {buyer.interestedIn.map((property) => (
                        <Link
                          key={property.id}
                          href={`/dashboard/projects/${property.id}`}
                          className="inline-block px-2 py-1 text-xs bg-slate-light rounded hover:bg-slate transition-colors text-charcoal-light hover:text-charcoal"
                        >
                          {property.address}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <span className="text-charcoal-light text-sm">No properties</span>
                  )}
                </td>
                <td className="px-6 py-4 text-charcoal-light text-sm">{buyer.lastContact}</td>
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
  )
}
