"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Wallet, Store, Menu } from "lucide-react"
import { CalendarModal } from "./calendar-modal"
import { BudgetModal } from "./budget-modal"
import { MobileMenu } from "./mobile-menu"

export function TopHeader() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
  const calendarBtnRef = useRef<HTMLButtonElement | null>(null)

  const openCalendar = () => {
    const rect = calendarBtnRef.current?.getBoundingClientRect() ?? null
    setAnchorRect(rect)
    setIsCalendarOpen(true)
  }

  const openBudget = () => {
    setIsBudgetOpen(true)
  }

  return (
    <>
      <header className="bg-[#105B48] text-white px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Image src="/logo.svg" alt="Logo" width={200} height={26.02} />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={openBudget}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src="/budget.png" alt="Budget" width={36} height={36} />
          </button>
          <button
            ref={calendarBtnRef}
            onClick={openCalendar}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src="/calendar.svg" alt="Calendar" width={36} height={36} />
          </button>
          <Image src="/search.png" alt="search" width={32} height={32} />
          <Image src="/Payout.svg" alt="payout" width={32} height={32} />
          <Image
            src="/Marketplace.svg"
            alt="marketplace"
            width={30.86}
            height={30.86}
          />
          <Image src="/Profile.svg" alt="profile" width={40} height={40} />
        </div>
      </header>

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        anchorRect={anchorRect}
      />
      <BudgetModal isOpen={isBudgetOpen} onClose={() => setIsBudgetOpen(false)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}