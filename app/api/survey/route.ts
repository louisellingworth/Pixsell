import { NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://primary-production-68b0.up.railway.app/webhook/41161db8-ef0d-4990-97c6-fedb28c25dc5'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log('Received survey data:', data)

    // Forward the data to n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })

    // Log the response for debugging
    const responseText = await response.text()
    console.log('Webhook response status:', response.status)
    console.log('Webhook response:', responseText)

    if (!response.ok) {
      throw new Error(`Failed to forward data to webhook: ${response.status} ${responseText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    // Detailed error logging
    console.error('Error handling survey submission:', {
      message: error.message,
      stack: error.stack,
      data: error.response?.data
    })

    // Return a more specific error message
    return NextResponse.json(
      { 
        error: 'Failed to process survey submission',
        details: error.message
      },
      { status: 500 }
    )
  }
} 
