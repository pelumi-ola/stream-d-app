"use client"

import { useState } from "react"

const tabs = ["Yesterday", "Today", "Tomorrow", "View All"]

export function FilterTabs() {
  const [activeTab, setActiveTab] = useState("Today")

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
