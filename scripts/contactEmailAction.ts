import { $checkIcon, $contactForm, $input, $positiveMessage } from '$/declareRefs'

export function handleSubmit (possibleEmail: string): void {
  void (async () => {
    await saveEmail(possibleEmail)
  })()
}

export function showInputCheck (pivot: boolean): void {
  $checkIcon?.classList.toggle('hidden', !pivot)
  $input?.classList.toggle('border-slate-500', !pivot)
  $input?.classList.toggle('border-green-500', pivot)
}

async function saveEmail (email: string): Promise<void> {
  const requestOptions = {
    body: JSON.stringify({ email }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch('/api/contact', requestOptions)
    const { ok } = (await response.json()) as { ok: boolean, message?: string }

    if (ok) {
      $contactForm?.classList.add('hidden')
      $positiveMessage?.classList.replace('hidden', 'flex')
    }
  } catch (error) {
    console.error(error)
  }
}
