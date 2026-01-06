import { type NextRequest, NextResponse } from "next/server"

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""
const FB_ACCESS_TOKEN = process.env.FB_CONVERSION_API_TOKEN || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Meta Conversion API endpoint
    const url = `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            event_name: body.event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: body.event_source_url,
            user_data: {
              client_ip_address: body.client_ip_address,
              client_user_agent: body.client_user_agent,
              fbp: body.fbp, // Facebook browser pixel cookie
              fbc: body.fbc, // Facebook click ID cookie
            },
            custom_data: body.custom_data || {},
          },
        ],
      }),
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Meta CAPI Error:", error)
    return NextResponse.json({ error: "Failed to send event to Meta CAPI" }, { status: 500 })
  }
}
