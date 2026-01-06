"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-serif font-semibold">
              Maru Travel
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#destinations" className="text-sm hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link href="#packages" className="text-sm hover:text-primary transition-colors">
              Packages
            </Link>
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button>Book Now</Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button type="button" className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="#destinations"
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#packages"
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#about"
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-sm hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full">Book Now</Button>
          </div>
        )}
      </nav>
    </header>
  )
}
