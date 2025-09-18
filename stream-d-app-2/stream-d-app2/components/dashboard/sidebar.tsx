"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Play, Star, Clock, ChevronDown, LogOut, Trophy, Users, Globe } from "lucide-react"
import { useState } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Play, label: "Highlights", href: "/dashboard/highlights" },
  { icon: Star, label: "Favourite Match", href: "/dashboard/favourites" },
  { icon: Clock, label: "Watch Later", href: "/dashboard/watch-later" },
]

const footballLeagues = [
  { icon: Trophy, label: "Worldcup Qatar 2022", href: "/dashboard/worldcup" },
  { icon: Users, label: "Champions League", href: "/dashboard/champions" },
  { icon: Globe, label: "Premier League", href: "/dashboard/premier" },
  { icon: Globe, label: "La Liga", href: "/dashboard/laliga" },
  { icon: Globe, label: "Ligue 1", href: "/dashboard/ligue1" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isLeagueOpen, setIsLeagueOpen] = useState(true)

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Stream D</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">MENU</div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Football League Section */}
        <div className="mt-8">
          <button
            onClick={() => setIsLeagueOpen(!isLeagueOpen)}
            className="flex items-center justify-between w-full text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4"
          >
            FOOTBALL LEAGUE
            <ChevronDown className={`w-4 h-4 transition-transform ${isLeagueOpen ? "rotate-180" : ""}`} />
          </button>

          {isLeagueOpen && (
            <nav className="space-y-2">
              {footballLeagues.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
