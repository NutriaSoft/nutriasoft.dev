import type { APIRoute } from 'astro'

import { isValidEmail } from '$/validations'
import { API_URL } from '$/consts'

interface ContactApiResponse {
  ok: boolean
  message?: string
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()
    const email = body.email as string

    if (!isValidEmail(email)) {
      throw new Error()
    }

    const requestOptions = {
      body: JSON.stringify({ email }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`${API_URL}/contact`, requestOptions)
    const { ok, message } = (await response.json()) as ContactApiResponse

    return new Response(JSON.stringify({ ok, message }), { status: response.status })
  } catch (error) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}
