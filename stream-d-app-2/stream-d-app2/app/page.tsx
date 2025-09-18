"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, User, Menu, ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { VideoOverlay } from "@/components/video-overlay"
import { SubscriptionModal } from "@/components/subscription-modal"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("highlights")
  const { theme, setTheme } = useTheme()
  const [videoOverlay, setVideoOverlay] = useState({ isOpen: false, title: "", category: "" })
  const [subscriptionModal, setSubscriptionModal] = useState({
    isOpen: false,
    videoType: "highlight" as "highlight" | "premium",
  })

  const [isSubscribed] = useState(false)

  const handleVideoClick = (title: string, category: string, videoType: "highlight" | "premium") => {
    if (isSubscribed) {
      setVideoOverlay({ isOpen: true, title, category })
    } else {
      setSubscriptionModal({ isOpen: true, videoType })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Navigation Header */}
      <header className="bg-purple-800/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-purple-600/30 dark:border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-600 rounded-full relative">
                    <div
                      className="absolute inset-0 bg-white rounded-full"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #8b5cf6 0deg, #a855f7 60deg, #9333ea 120deg, #7c3aed 180deg, #6d28d9 240deg, #5b21b6 300deg, #8b5cf6 360deg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-300 rounded-full border-2 border-white transform rotate-12"></div>
              </div>
              <span className="text-2xl font-bold text-white">STREAM D</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-purple-200 transition-colors">
                Home
              </a>
              <a href="#" className="text-white hover:text-purple-200 transition-colors">
                Highlights
              </a>
              <a href="#" className="text-white hover:text-purple-200 transition-colors">
                Live Matches
              </a>
              <a href="#" className="text-white hover:text-purple-200 transition-colors">
                All Sports
              </a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:bg-white/10"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                className="hidden sm:flex bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Link href="/login">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Login</Button>
              </Link>
              <Button variant="ghost" className="md:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Stream-D</h1>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Enjoy high quality football highlights, live scores and game live matches from leagues worldwide.
                </p>
              </div>

              <Link href="/login">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
                  GET STARTED
                </Button>
              </Link>
            </div>

            {/* Right Content - Football Players Collage */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 transform rotate-3">
                {/* Player images would go here - using placeholder for now */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={`/football-player-action.png?height=200&width=200&query=football player ${i + 1}`}
                      alt={`Football player ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border-y border-white/20 dark:border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {["Yesterday", "Today", "Tomorrow", "Live 24"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab.toLowerCase() ? "default" : "ghost"}
                  className={`${
                    activeTab === tab.toLowerCase()
                      ? "bg-purple-600 text-white"
                      : "text-white hover:bg-white/10 dark:hover:bg-gray-800/50"
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-white/10 dark:bg-gray-800/50 border-white/20 dark:border-gray-600/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Button variant="ghost" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3"></div>
              Highlights Matches
            </h2>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleVideoClick("Highlight", "Europa - Qualif", "highlight")}
              >
                <div className="aspect-video bg-red-600 relative">
                  <img
                    src="/football-match-highlight.png"
                    alt="Football highlight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    HIGHLIGHT
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Highlight</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Europa - Qualif</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "ghost"}
                size="sm"
                className={
                  page === 1 ? "bg-purple-600 text-white" : "text-white hover:bg-white/10 dark:hover:bg-gray-800/50"
                }
              >
                {page}
              </Button>
            ))}
            <span className="text-white px-2">...</span>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
              47
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
              Next
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Best of Stream D</h2>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleVideoClick("REAL MADRID VS LIGA", "Europa - Qualif", "premium")}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative">
                  <img
                    src="/football-match-highlight.png"
                    alt="Best match highlight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1">REAL MADRID VS LIGA</h3>
                  <p className="text-sm text-gray-400">Europa - Qualif</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Live and Upcoming Football Match</h2>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 dark:hover:bg-gray-800/50">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleVideoClick("REAL MADRID VS LIGA", "Europa - Qualif", "premium")}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative">
                  <img src="/football-match-highlight.png" alt="Live match" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1">REAL MADRID VS LIGA</h3>
                  <p className="text-sm text-gray-400">Europa - Qualif</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stream D Logo */}
            <div className="bg-purple-600 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
                    <div className="w-16 h-16 bg-purple-600 rounded-full relative">
                      <div
                        className="absolute inset-0 bg-white rounded-full"
                        style={{
                          background:
                            "conic-gradient(from 0deg, #8b5cf6 0deg, #a855f7 60deg, #9333ea 120deg, #7c3aed 180deg, #6d28d9 240deg, #5b21b6 300deg, #8b5cf6 360deg)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-300 rounded-full border-4 border-white transform rotate-12"></div>
                </div>
                <h3 className="text-4xl font-bold text-white">STREAM D</h3>
              </div>
            </div>

            {/* Right Side - How it Works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">How Stream D Works</h2>

              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  Stream D is your all-in-one platform for live football matches, past games, exciting highlights and
                  up-to-the-minute scores. To get started, simply dial *347# or visit the Stream D web app to sign up
                  directly. Enter your phone number, receive an OTP for verification, and your account will be ready in
                  seconds.
                </p>

                <p>
                  Once logged in, you can stream all your favorite matches live, watch past games, and catch every
                  highlight as soon as it drops. Stay informed with real-time scores and updates from leagues around the
                  world at far as little as ₦100. With Stream D, football is always just a click away.
                </p>
              </div>

              <div className="bg-purple-600 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">₦ 100</div>
                <div className="text-white mb-4">Daily</div>
                <Link href="/subscribe">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-2 rounded-full">
                    SUBSCRIBE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-purple-900 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-purple-600 rounded-full relative">
                      <div
                        className="absolute inset-0 bg-white rounded-full"
                        style={{
                          background:
                            "conic-gradient(from 0deg, #8b5cf6 0deg, #a855f7 60deg, #9333ea 120deg, #7c3aed 180deg, #6d28d9 240deg, #5b21b6 300deg, #8b5cf6 360deg)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-300 rounded-full border-2 border-white transform rotate-12"></div>
                </div>
                <span className="text-xl font-bold text-white">STREAM D</span>
              </div>
              <p className="text-purple-200 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Stream D is your all-in-one platform for live football matches, past games, exciting highlights and
                up-to-the-minute scores.
              </p>
              <p className="text-purple-300 dark:text-gray-400 text-xs">A product of Stream D</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-purple-200 dark:text-gray-300 hover:text-white transition-colors">
                    Stream D Highlights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 dark:text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 dark:text-gray-300 hover:text-white transition-colors">
                    Best of Stream D
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 dark:text-gray-300 hover:text-white transition-colors">
                    How Stream D Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-white font-semibold mb-4">Subscribe</h4>
              <div className="space-y-3">
                <Input
                  placeholder="Enter email address"
                  className="bg-white/10 dark:bg-gray-800/50 border-white/20 dark:border-gray-600/30 text-white placeholder:text-gray-300"
                />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-purple-300 dark:text-gray-400 text-sm">A product of Stream D</p>
          </div>
        </div>
      </footer>

      <VideoOverlay
        isOpen={videoOverlay.isOpen}
        onClose={() => setVideoOverlay({ isOpen: false, title: "", category: "" })}
        videoTitle={videoOverlay.title}
        videoCategory={videoOverlay.category}
      />

      <SubscriptionModal
        isOpen={subscriptionModal.isOpen}
        onClose={() => setSubscriptionModal({ isOpen: false, videoType: "highlight" })}
        videoType={subscriptionModal.videoType}
      />
    </div>
  )
}
