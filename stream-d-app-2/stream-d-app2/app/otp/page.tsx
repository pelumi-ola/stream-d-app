"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SuccessModal } from "@/components/success-modal"

export default function OTPPage() {
  const [otp, setOtp] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleConfirmOTP = () => {
    setShowSuccessModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex">
      {/* Left Side - OTP Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-full relative">
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
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Confirm OTP</h1>
            <p className="text-gray-600">Enter the 6-digit code sent to your phone.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">6-digit Code</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">📄</span>
                </div>
                <Input
                  type="text"
                  placeholder="XXXXXX"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-center text-lg tracking-widest"
                  maxLength={6}
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <span className="text-purple-500">👁️</span>
                </button>
              </div>
            </div>

            <Button
              onClick={handleConfirmOTP}
              className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full flex items-center justify-center"
            >
              Confirm Code
              <span className="ml-2">→</span>
            </Button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-8 border-2 border-gray-300 rounded-full">
                <span className="text-gray-600 font-semibold">MTN</span>
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                By subscribing to this service, customers on DND will be placed on Partial DND DND
                Communication/Broadcasting/Entertainment/IT..
              </p>
            </div>

            <div className="text-center text-xs text-gray-500">
              © 2023 MTN Nigeria Communications PLC, All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Football Players Image */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/STREAM%20D%20_%20SUBCRIPTION%20OTP-aHHRrigFMb5TtlWZYO2IfSYkOpkZgt.png"
            alt="Football players in action"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Subscription Successful !!"
        message="Wait to be redirected to home page or close"
        type="subscription"
      />
    </div>
  )
}
