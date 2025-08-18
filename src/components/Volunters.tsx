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
    {
      name: "Laura Larsen",
      role: "Volunteer",
      image: "/professional-volunteer-headshot.png",
      color: "bg-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm uppercase tracking-wide mb-4">Our Volunteers</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block">
            Meet With Volunteers
            <div className="absolute -bottom-2 left-0 right-0 h-2 sm:h-3 bg-yellow-300 -z-10"></div>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Volunteers are the heartbeat of our donation site, breathing life into every act of kindness and spreading
            hope with their selfless devotion.
          </p>
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-none mx-auto">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={volunteer.image || "/placeholder.svg"}
                  alt={volunteer.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${volunteer.color} p-2 rounded-lg`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${volunteer.color} p-4 sm:p-6 text-center`}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{volunteer.name}</h3>
                <p className="text-sm sm:text-base text-white/90 font-medium">{volunteer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
