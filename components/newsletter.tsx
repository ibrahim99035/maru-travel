"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">Start Your Journey Today</h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Subscribe to receive exclusive travel deals and destination inspiration
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
