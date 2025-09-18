"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  videoType: "highlight" | "premium"
}

export function SubscriptionModal({ isOpen, onClose, videoType }: SubscriptionModalProps) {
  if (!isOpen) return null

  const message =
    videoType === "highlight"
      ? "Subscribe to Stream D to watch this soccer highlight."
      : "Subscribe to Stream D to watch the Video."

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full relative">
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Stream D Logo */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full relative">
                <div
                  className="absolute inset-0 bg-white rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #8b5cf6 0deg, #a855f7 60deg, #9333ea 120deg, #7c3aed 180deg, #6d28d9 240deg, #5b21b6 300deg, #8b5cf6 360deg)",
                  }}
                ></div>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-300 rounded-full border-2 border-white transform rotate-12"></div>
          </div>
          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">STREAM D</h3>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{message}</p>
        </div>

        <div className="space-y-4">
          <Link href="/subscribe" className="block">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full">
              CHOOSE PLAN
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
