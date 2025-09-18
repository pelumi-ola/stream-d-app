"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { SuccessModal } from "@/components/success-modal"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleLogin = () => {
    setShowSuccessModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex">
      {/* Left Side - Login Form */}
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
            <h1 className="text-3xl font-bold text-purple-600 mb-2">STREAM D</h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-purple-500 text-sm">📞</span>
                </div>
                <Input
                  type="tel"
                  placeholder="0903XXXXXXX"
                  className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-purple-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-purple-500" />
                  )}
                </button>
              </div>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full"
            >
              GET STARTED
            </Button>

            <div className="flex items-center justify-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div>
              <p className="text-center text-gray-600 mb-4">Choose a plan to subscribe</p>
              <Link href="/subscribe">
                <Button
                  variant="outline"
                  className="w-full h-12 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-full bg-transparent"
                >
                  CHOOSE PLAN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Football Players Image */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/STREAM%20D%20_%20REDESIGN%20LOGIN%20PAGE-BnD8RAUoSqd1N3BoHWzi7piohCzumV.png"
            alt="Football players in action"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Login Successful !!"
        message="Wait to be redirected to home page or close"
        type="login"
      />
    </div>
  )
}
