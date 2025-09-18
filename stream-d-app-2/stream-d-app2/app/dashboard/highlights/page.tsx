import { FilterTabs } from "@/components/dashboard/filter-tabs"
import { VideoGrid } from "@/components/dashboard/video-grid"
import { Pagination } from "@/components/dashboard/pagination"

export default function HighlightsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">🏆 Saved Highlight</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Filter</span>
            <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800">
              <option>League</option>
            </select>
          </div>
        </div>
      </div>

      <FilterTabs />
      <VideoGrid />
      <Pagination />
    </div>
  )
}
