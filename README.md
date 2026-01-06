# Maru Travel - Luxury Travel Website

A modern, SEO-optimized luxury travel website built with Next.js 16, featuring Google Tag Manager, Google Analytics 4, Meta Pixel, and Meta Conversion API integration.

## Features

- ✨ Beautiful, responsive design with dark mode support
- 📊 Google Tag Manager (GTM) integration
- 📈 Google Analytics 4 (GA4) tracking
- 🎯 Meta Pixel for Facebook advertising
- 🔄 Meta Conversion API (CAPI) for server-side tracking
- 🚀 Perfect SEO with structured data and meta tags
- 🌍 Featured destinations showcase
- 📦 Curated travel packages
- 🎨 Luxury-focused design with serif typography
- ♿ Accessible and semantic HTML

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Meta Pixel
NEXT_PUBLIC_FB_PIXEL_ID=YOUR_PIXEL_ID

# Meta Conversion API (Server-side)
FB_CONVERSION_API_TOKEN=YOUR_ACCESS_TOKEN
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Analytics Setup

### Google Tag Manager
1. Create a GTM container at [tagmanager.google.com](https://tagmanager.google.com)
2. Add your GTM ID to `.env.local`
3. Configure tags, triggers, and variables in GTM dashboard

### Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add your measurement ID to `.env.local`

### Meta Pixel
1. Create a Meta Pixel in Facebook Events Manager
2. Add your Pixel ID to `.env.local`

### Meta Conversion API
1. Generate an access token in Facebook Events Manager
2. Add the token to `.env.local` as `FB_CONVERSION_API_TOKEN`
3. The API route at `/api/meta-capi` handles server-side events

## SEO Features

- Comprehensive meta tags
- Open Graph protocol for social sharing
- Twitter Cards
- Schema.org structured data (TravelAgency)
- Semantic HTML5 elements
- Optimized for search engines
- Mobile-friendly and responsive

## Dark Mode

Dark mode is implemented with localStorage persistence. Users can toggle between light and dark themes using the theme switcher in the header.

## License

MIT
