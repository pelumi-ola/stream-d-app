"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type: "login" | "subscription"
}

export function SuccessModal({ isOpen, onClose, title, message, type }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-3xl p-8 border-none shadow-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full relative">
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
        </div>

        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-gray-800 mb-4">{title}</DialogTitle>
        </DialogHeader>

        <div className="text-center mb-8">
          <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>

        <Button
          onClick={onClose}
          className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
