import { Badge } from "@/components/ui/badge"

const matches = [
  { team1: "Argentina", team2: "Italy", score: "1 - 2", flag1: "🇦🇷", flag2: "🇮🇹", date: "18 December 2022" },
  { team1: "Portugal", team2: "Belgium", score: "2 - 3", flag1: "🇵🇹", flag2: "🇧🇪", date: "18 December 2022" },
  { team1: "Ghana", team2: "Brazil", score: "1 - 3", flag1: "🇬🇭", flag2: "🇧🇷", date: "17 December 2022" },
  { team1: "Uruguay", team2: "Poland", score: "2 - 2", flag1: "🇺🇾", flag2: "🇵🇱", date: "17 December 2022" },
  { team1: "SpanisH", team2: "Czech", score: "3 - 3", flag1: "🇪🇸", flag2: "🇨🇿", date: "16 December 2022" },
]

export function LatestMatches() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">⚽ Football Match</h3>
        <div className="mt-4">
          <div className="border-b border-purple-600">
            <span className="text-sm font-medium text-purple-600 pb-2 inline-block">Latest Match</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {matches.map((match, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.flag1}</span>
              <span className="font-medium text-gray-900 dark:text-white">{match.team1}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-900 dark:text-white">{match.score}</span>
              <span className="font-medium text-gray-900 dark:text-white">{match.team2}</span>
              <span className="text-2xl">{match.flag2}</span>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="destructive" className="bg-red-500">
                Full - Time
              </Badge>
              <span className="text-sm text-gray-500">{match.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
