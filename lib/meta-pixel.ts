// Meta Pixel utilities
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView")
  }
}

export const event = (name: string, options = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options)
  }
}

declare global {
  interface Window {
    fbq: (action: string, event: string, options?: Record<string, unknown>) => void
    _fbq: typeof window.fbq
  }
}
