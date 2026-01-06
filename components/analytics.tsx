"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import * as gtm from "@/lib/gtm"
import * as fbPixel from "@/lib/meta-pixel"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      gtm.pageview(url)
      fbPixel.pageview()
    }
  }, [pathname, searchParams])

  return null
}
