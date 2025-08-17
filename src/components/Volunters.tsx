export default function VolunteersPage() {
    const volunteers = [
      {
        name: "Laura Smith",
        role: "Volunteer",
        image: "/placeholder-e6qqt.png",
        color: "bg-red-500",
      },
      {
        name: "Daniel Mark",
        role: "Volunteer",
        image: "/professional-man-volunteer-headshot.png",
        color: "bg-green-500",
      },
      {
        name: "Laura Larsen",
        role: "Volunteer",
        image: "/professional-volunteer-headshot.png",
        color: "bg-blue-500",
      },
    ]
  
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-9/12 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-red-500 font-medium text-sm uppercase tracking-wide mb-4">Our Volunteers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              Meet With Volunteers
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 -z-10"></div>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Volunteers are the heartbeat of our donation site, breathing life into every act of kindness and spreading
              hope with their selfless devotion.
            </p>
          </div>
  
          {/* Volunteers Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {volunteers.map((volunteer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${volunteer.color} p-2 rounded-lg`}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`${volunteer.color} p-6 text-center`}>
                  <h3 className="text-xl font-bold text-white mb-1">{volunteer.name}</h3>
                  <p className="text-white/90 font-medium">{volunteer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  