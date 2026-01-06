// Google Tag Manager utilities
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ""

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    })
  }
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
  }
}
