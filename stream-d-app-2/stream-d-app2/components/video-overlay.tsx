"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Pause, Volume2, Maximize, Heart, Share2 } from "lucide-react"

interface VideoOverlayProps {
  isOpen: boolean
  onClose: () => void
  videoTitle: string
  videoCategory: string
}

export function VideoOverlay({ isOpen, onClose, videoTitle, videoCategory }: VideoOverlayProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <Button variant="ghost" onClick={onClose} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <div className="text-white text-right">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Profile
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Video Player */}
        <div className="flex-1 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 relative">
            <img src="/football-match-highlight.png" alt="Football match" className="w-full h-full object-cover" />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </Button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <span className="text-sm">0:45 / 2:30</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                <div className="bg-yellow-500 h-1 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Comments Sidebar */}
        <div className="w-80 bg-white dark:bg-gray-900 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Live Comments</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">S</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Sandra Wilson</span>
                    <span className="text-xs text-gray-500">😍</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    This match is becoming so tense here 😍 is anyone home feeling this way too ?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Matches Section */}
      <div className="bg-white dark:bg-gray-900 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Matches</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-video bg-red-600 relative">
                <img src="/football-match-highlight.png" alt="Related match" className="w-full h-full object-cover" />
                <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded text-xs font-semibold">
                  HIGHLIGHT
                </div>
              </div>
              <div className="p-2">
                <h4 className="font-semibold text-xs text-gray-900 dark:text-white">Highlight</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Europa - Qualif</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
