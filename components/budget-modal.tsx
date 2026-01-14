"use client"

import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"

interface BudgetModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-auto">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg text-black max-w-md w-full mx-auto overflow-hidden">
        <div className="relative h-48">
          <Image
            src="/media.png"
            alt="Media"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="pt-6 px-12 pb-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image src="/setting.svg" alt="settings Icon" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-[16px] text-[#191919]">Set up annual budgets by account category</h3>
                <p className="text-[#606060] text-[12px] text-regular">
                  Allocate funds across income and expense lines with full visibility.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/trend-up.svg" alt="Trend-up Icon" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-[16px] text-[#191919]">Track actuals vs budget in real time</h3>
                <p className="text-[#606060] text-[12px] text-regular">
                  See how your community is performing against plan, month by month.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/frame.svg" alt="frame Icon" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-[16px] text-[#191919]">Adjust figures and forecast with ease</h3>
                <p className="text-[#606060] text-[12px] text-regular">
                  Edit amounts, apply percentage changes, or roll forward last year’s data—all in one
                  place.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button onClick={onClose} className="w-full bg-[#18181B] font-medium text-white rounded-full py-4 text-lg hover:bg-gray-800">
              Create Budget
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}