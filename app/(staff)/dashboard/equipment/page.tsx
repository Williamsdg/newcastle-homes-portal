import Link from 'next/link'

const equipment = [
  { id: '1', name: 'Excavator CAT 320', type: 'Heavy Equipment', status: 'IN_USE', location: 'Barimore - Lot 14', assignedTo: 'Mike Rodriguez', lastService: 'Jan 15, 2024', nextService: 'Apr 15, 2024' },
  { id: '2', name: 'Concrete Mixer Truck', type: 'Vehicle', status: 'AVAILABLE', location: 'Warehouse', assignedTo: null, lastService: 'Jan 10, 2024', nextService: 'Apr 10, 2024' },
  { id: '3', name: 'Scaffolding Set A', type: 'Safety Equipment', status: 'IN_USE', location: 'The Falls - Lot 8', assignedTo: 'James Wilson', lastService: 'Dec 20, 2023', nextService: 'Mar 20, 2024' },
  { id: '4', name: 'Generator 20kW', type: 'Power Equipment', status: 'IN_USE', location: 'Grand River - Lot 3', assignedTo: 'Carlos Hernandez', lastService: 'Jan 05, 2024', nextService: 'Apr 05, 2024' },
  { id: '5', name: 'Nail Gun Set (5 units)', type: 'Power Tools', status: 'AVAILABLE', location: 'Warehouse', assignedTo: null, lastService: 'Jan 18, 2024', nextService: 'Jul 18, 2024' },
  { id: '6', name: 'Forklift - Telehandler', type: 'Heavy Equipment', status: 'MAINTENANCE', location: 'Service Center', assignedTo: null, lastService: 'Jan 20, 2024', nextService: 'Jan 25, 2024' },
  { id: '7', name: 'Air Compressor Industrial', type: 'Power Equipment', status: 'IN_USE', location: 'Barimore - Lot 22', assignedTo: 'Tom Bradley', lastService: 'Jan 12, 2024', nextService: 'Apr 12, 2024' },
  { id: '8', name: 'Scaffolding Set B', type: 'Safety Equipment', status: 'AVAILABLE', location: 'Warehouse', assignedTo: null, lastService: 'Jan 08, 2024', nextService: 'Apr 08, 2024' },
  { id: '9', name: 'Dump Truck - 10yd', type: 'Vehicle', status: 'IN_USE', location: 'Heritage Pines - Lot 5', assignedTo: 'Derek Thompson', lastService: 'Jan 02, 2024', nextService: 'Apr 02, 2024' },
  { id: '10', name: 'Laser Level Kit', type: 'Measuring Tools', status: 'AVAILABLE', location: 'Warehouse', assignedTo: null, lastService: 'Dec 15, 2023', nextService: 'Jun 15, 2024' },
]

const categories = [
  { name: 'Heavy Equipment', count: 2, color: 'bg-purple-100 text-purple-700' },
  { name: 'Vehicles', count: 2, color: 'bg-blue-100 text-blue-700' },
  { name: 'Power Equipment', count: 2, color: 'bg-amber-100 text-amber-700' },
  { name: 'Safety Equipment', count: 2, color: 'bg-green-100 text-green-700' },
  { name: 'Power Tools', count: 1, color: 'bg-red-100 text-red-700' },
  { name: 'Measuring Tools', count: 1, color: 'bg-slate-100 text-slate-700' },
]

export default function EquipmentPage() {
  const statusColors: Record<string, string> = {
    AVAILABLE: 'bg-green-100 text-green-700',
    IN_USE: 'bg-newcastle-100 text-newcastle-700',
    MAINTENANCE: 'bg-amber-100 text-amber-700',
    RETIRED: 'bg-slate-100 text-slate-600',
  }

  const availableCount = equipment.filter(e => e.status === 'AVAILABLE').length
  const inUseCount = equipment.filter(e => e.status === 'IN_USE').length
  const maintenanceCount = equipment.filter(e => e.status === 'MAINTENANCE').length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Equipment</h1>
          <p className="text-charcoal-light mt-1">Manage tools, vehicles, and construction equipment</p>
        </div>
        <Link href="/dashboard/equipment/new" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Equipment
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{equipment.length}</p>
          <p className="text-sm text-charcoal-light">Total Items</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-green-600">{availableCount}</p>
          <p className="text-sm text-charcoal-light">Available</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-newcastle">{inUseCount}</p>
          <p className="text-sm text-charcoal-light">In Use</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-amber-600">{maintenanceCount}</p>
          <p className="text-sm text-charcoal-light">In Maintenance</p>
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
                <option value="AVAILABLE">Available</option>
                <option value="IN_USE">In Use</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <select className="px-4 py-2 border border-slate rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-newcastle/20">
                <option value="">All Types</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search equipment..."
                className="px-4 py-2 border border-slate rounded-lg flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-newcastle/20"
              />
            </div>
          </div>

          {/* Equipment Table */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-light">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Equipment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Assigned To</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal">Next Service</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate">
                {equipment.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-light/50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <span className="font-medium text-charcoal block">{item.name}</span>
                        <span className="text-sm text-charcoal-light">{item.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[item.status]}`}>
                        {item.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-charcoal-light text-sm">{item.location}</span>
                    </td>
                    <td className="px-6 py-4">
                      {item.assignedTo ? (
                        <span className="text-charcoal text-sm">{item.assignedTo}</span>
                      ) : (
                        <span className="text-charcoal-light text-sm">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-charcoal-light text-sm">{item.nextService}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-charcoal-light hover:text-newcastle hover:bg-slate-light rounded-lg transition-colors" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-2 text-charcoal-light hover:text-newcastle hover:bg-slate-light rounded-lg transition-colors" title="Assign">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
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
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-3 bg-slate-light rounded-lg">
                  <span className="text-sm text-charcoal">{category.name}</span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${category.color}`}>
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Maintenance */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Upcoming Maintenance</h2>
            <div className="space-y-3">
              {equipment.filter(e => e.status === 'MAINTENANCE' || new Date(e.nextService) < new Date('2024-02-15')).slice(0, 4).map((item) => (
                <div key={item.id} className="p-3 bg-slate-light rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-charcoal">{item.name}</span>
                    {item.status === 'MAINTENANCE' && (
                      <span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-700 rounded-full">Now</span>
                    )}
                  </div>
                  <span className="text-xs text-charcoal-light">{item.nextService}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-sm text-newcastle hover:text-accent font-medium">
              View Maintenance Schedule →
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h2 className="text-lg font-heading font-semibold text-charcoal mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Check Out Equipment
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Return Equipment
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Schedule Maintenance
              </button>
              <button className="w-full py-2 px-4 text-left text-sm text-charcoal hover:bg-slate-light rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
