"use client"

import { useState } from "react"
import { SuccessModal } from "@/components/success-modal"
import { useRouter } from "next/navigation"

export default function SubscriptionSuccessPage() {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const handleClose = () => {
    setIsOpen(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center">
      <SuccessModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Subscription Successful !!"
        message="Wait to be redirected to home page or close"
        type="subscription"
      />
    </div>
  )
}
