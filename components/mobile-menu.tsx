"use client"

import {
  Home,
  Calendar,
  Users,
  FileText,
  Briefcase,
  CheckSquare,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()
  const navItems = [
    { href: "/", icon: Home, label: "Dashboard" },
    { href: "/listings", icon: Calendar, label: "Listings" },
    { href: "/users", icon: Users, label: "Users" },
    { href: "/request", icon: FileText, label: "Request" },
    { href: "/applications", icon: Briefcase, label: "Applications" },
    { href: "/tasks", icon: CheckSquare, label: "Tasks" },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="fixed inset-y-0 left-0 w-64 bg-white p-4">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6" />
        </button>
        <nav className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive
                    ? "bg-[#176D5826] text-[#176D58]"
                    : "text-foreground hover:bg-[#176D5826] hover:text-[#176D58]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}