// The site is deployed as a static export, so form submissions go straight
// to the n8n webhook rather than through a Next.js API route.
const WEBHOOK_URL =
  'https://primary-production-68b0.up.railway.app/webhook/41161db8-ef0d-4990-97c6-fedb28c25dc5'

export async function submitLead(data: Record<string, unknown>): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`)
  }
}
