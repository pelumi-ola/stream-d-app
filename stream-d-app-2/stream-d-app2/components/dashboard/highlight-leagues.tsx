import { ChevronDown } from "lucide-react"

const leagueMatches = [
  { team1: "Chelsea F.C", team2: "Liverpool", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
  { team1: "Manchester City", team2: "Liverpool", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
  { team1: "Liverpool", team2: "Arsnal FC", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
  { team1: "Manchester United", team2: "West Ham United", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
  { team1: "West Ham United", team2: "Chelsea", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
  { team1: "Arsenal F.C", team2: "Liverpool", score: "2 - 2", logo1: "⚽", logo2: "⚽" },
]

export function HighlightLeagues() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">🏆 Highlight Leagues</h3>

        <div className="mt-4 flex items-center gap-2">
          <div className="w-6 h-6 bg-red-600 rounded"></div>
          <span className="font-medium text-gray-900 dark:text-white">Premier League</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>Club</span>
          <span>Final Score</span>
        </div>

        <div className="space-y-3">
          {leagueMatches.map((match, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded px-2"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center font-bold text-gray-600">{index + 1}</span>
                <span className="text-2xl">{match.logo1}</span>
                <span className="font-medium text-gray-900 dark:text-white">{match.team1}</span>
                <span className="text-gray-500">VS</span>
                <span className="font-medium text-gray-900 dark:text-white">{match.team2}</span>
              </div>

              <span className="font-bold text-gray-900 dark:text-white">{match.score}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Champions League</span>
          <div className="w-3 h-3 bg-orange-500 rounded-full ml-4"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Europa League</span>
        </div>
      </div>
    </div>
  )
}
