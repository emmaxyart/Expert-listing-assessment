"use client"

import {
  Home,
  Calendar,
  Users,
  FileText,
  Briefcase,
  CheckSquare,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Navigation() {
  const pathname = usePathname()
  const navItems = [
    { href: "/", icon: Home, label: "Dashboard" },
    { href: "/listings", icon: Calendar, label: "Listings" },
    { href: "/users", icon: Users, label: "Users" },
    { href: "/request", icon: FileText, label: "Request" },
    { href: "/applications", icon: Briefcase, label: "Applications" },
    { href: "/tasks", icon: CheckSquare, label: "Tasks" },
  ]

  return (
    <nav className="w-full bg-white px-6 sm:px-12 py-3 sm:py-4 flex items-center justify-between">
      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
              isActive
                ? "bg-[#176D5826] text-[#176D58]"
                : "text-foreground hover:bg-[#176D5826] hover:text-[#176D58]"
            }`}
          >
            <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-[14px] sm:text-sm">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}