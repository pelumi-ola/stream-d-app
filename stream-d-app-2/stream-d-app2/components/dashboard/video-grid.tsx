"use client"

const highlights = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "Highlight",
  subtitle: "Congo - Sudan",
  thumbnail: "/football-highlight.png",
}))

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlights.map((highlight) => (
        <div
          key={highlight.id}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="relative">
            <img
              src={highlight.thumbnail || "/placeholder.svg"}
              alt={highlight.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-red-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h3>
            <p className="text-sm text-red-600 dark:text-red-400">{highlight.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
