import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { FeaturedMatch } from "@/components/dashboard/featured-match"
import { LatestMatches } from "@/components/dashboard/latest-matches"
import { HighlightLeagues } from "@/components/dashboard/highlight-leagues"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <FeaturedMatch />
          <LatestMatches />
          <HighlightLeagues />
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Latest Highlight</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400">62 : 24</div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MX</span>
                </div>
                <span className="text-sm font-medium">2 - 2</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
