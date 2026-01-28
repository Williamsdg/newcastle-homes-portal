const messages = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah.m@email.com',
    phone: '(205) 555-1234',
    property: '142 Barimore Lane',
    community: 'Barimore',
    message: "Hi, I'm very interested in the home at 142 Barimore Lane. I'd love to schedule a tour this weekend if possible. We're a family of 4 looking to move from our current home in Hoover. Please let me know your availability!",
    type: 'Tour Request',
    createdAt: 'Jan 27, 2024 at 2:45 PM',
    read: false,
  },
  {
    id: '2',
    name: 'James Wilson',
    email: 'jwilson@email.com',
    phone: '(205) 555-5678',
    property: null,
    community: null,
    message: "I'm looking for information about new construction homes in the Birmingham area. What communities do you currently have available? We're pre-approved for up to $500,000 and looking for 4 bedrooms minimum.",
    type: 'General Inquiry',
    createdAt: 'Jan 27, 2024 at 10:22 AM',
    read: false,
  },
  {
    id: '3',
    name: 'Emily Chen',
    email: 'chen.family@email.com',
    phone: '(205) 555-9012',
    property: '78 Falls Creek Dr',
    community: 'The Falls',
    message: "We toured the home at 78 Falls Creek Dr last week and absolutely loved it! We have a few questions about the lot size and HOA fees. Also, is there any flexibility on the price? We're ready to move forward quickly.",
    type: 'Follow-up',
    createdAt: 'Jan 26, 2024 at 4:15 PM',
    read: false,
  },
  {
    id: '4',
    name: 'Robert Johnson',
    email: 'robert.j@email.com',
    phone: '(205) 555-7890',
    property: null,
    community: 'Barimore',
    message: "Can you send me the floor plans and pricing for all available homes in Barimore? I'm particularly interested in single-story options. Thank you!",
    type: 'Information Request',
    createdAt: 'Jan 25, 2024 at 9:30 AM',
    read: true,
  },
  {
    id: '5',
    name: 'The Martinez Family',
    email: 'martinez@email.com',
    phone: '(205) 555-3456',
    property: '215 Grand River Way',
    community: 'Grand River',
    message: "Confirming our tour for January 28th at 2:00 PM at 215 Grand River Way. Looking forward to seeing the home! Quick question - is the home move-in ready or are there any ongoing construction items?",
    type: 'Tour Confirmation',
    createdAt: 'Jan 24, 2024 at 3:00 PM',
    read: true,
  },
]

export default function MessagesPage() {
  const typeColors: Record<string, string> = {
    'Tour Request': 'bg-green-100 text-green-700',
    'General Inquiry': 'bg-newcastle-100 text-newcastle-700',
    'Follow-up': 'bg-purple-100 text-purple-700',
    'Information Request': 'bg-amber-100 text-amber-700',
    'Tour Confirmation': 'bg-slate-100 text-slate-700',
  }

  const unreadCount = messages.filter(m => !m.read).length

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Inquiries</h1>
          <p className="text-charcoal-light mt-1">Website contact form submissions and tour requests</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
          <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
            Mark All Read
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{messages.length}</p>
          <p className="text-sm text-charcoal-light">Total Messages</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-accent">{unreadCount}</p>
            {unreadCount > 0 && <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />}
          </div>
          <p className="text-sm text-charcoal-light">Unread</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{messages.filter(m => m.type === 'Tour Request').length}</p>
          <p className="text-sm text-charcoal-light">Tour Requests</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-soft">
          <p className="text-2xl font-bold text-charcoal">{messages.filter(m => m.type === 'Follow-up').length}</p>
          <p className="text-sm text-charcoal-light">Follow-ups</p>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`bg-white rounded-xl shadow-soft overflow-hidden ${!message.read ? 'border-l-4 border-accent' : ''}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${!message.read ? 'bg-accent/10' : 'bg-slate-light'}`}>
                    <span className={`font-semibold ${!message.read ? 'text-accent' : 'text-charcoal-light'}`}>
                      {message.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-charcoal">{message.name}</h3>
                      {!message.read && (
                        <span className="px-2 py-0.5 text-xs bg-accent text-white rounded-full">New</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal-light">
                      <a href={`mailto:${message.email}`} className="hover:text-newcastle">{message.email}</a>
                      <span>•</span>
                      <a href={`tel:${message.phone}`} className="hover:text-newcastle">{message.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${typeColors[message.type]}`}>
                    {message.type}
                  </span>
                  <span className="text-sm text-charcoal-light whitespace-nowrap">{message.createdAt}</span>
                </div>
              </div>

              {(message.property || message.community) && (
                <div className="mb-3 flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-charcoal-light">
                    {message.property ? (
                      <span className="text-newcastle font-medium">{message.property}</span>
                    ) : (
                      <span>Interested in {message.community}</span>
                    )}
                  </span>
                </div>
              )}

              <p className="text-charcoal-light leading-relaxed">{message.message}</p>

              <div className="mt-4 pt-4 border-t border-slate flex flex-wrap gap-3">
                <a
                  href={`mailto:${message.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-newcastle text-white rounded-lg hover:bg-newcastle-dark transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Reply via Email
                </a>
                <a
                  href={`tel:${message.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-newcastle text-newcastle rounded-lg hover:bg-newcastle-50 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>
                {message.type === 'Tour Request' && (
                  <button className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Tour
                  </button>
                )}
                <button className="inline-flex items-center gap-2 px-4 py-2 text-charcoal-light hover:text-charcoal hover:bg-slate-light rounded-lg transition-colors text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Add to Buyers
                </button>
                {!message.read && (
                  <button className="ml-auto text-charcoal-light hover:text-charcoal text-sm font-medium">
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
