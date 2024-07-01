import type { APIRoute } from 'astro'
import { API_URL } from 'scripts/consts'

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }

  try {
    const body = await request.json()
    const email = body.email

    const requestOptions = {
      body: JSON.stringify({ email }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`${API_URL}/contact`, requestOptions)
    const { ok, message } = (await response.json()) as { ok: boolean, message?: string }

    return new Response(JSON.stringify({ ok, message }), { status: response.status })
  } catch (error) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}
