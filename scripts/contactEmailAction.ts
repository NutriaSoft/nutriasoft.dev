import { toast } from 'wc-toast'
import { isValidEmail } from '$/validations'
import { $checkIcon, $contactForm, $input, $positiveMessage } from '$/declareRefs'

export function handleSubmit(possibleEmail: string): void {
  void (async () => {
    if (!isValidEmail(possibleEmail)) {
      toast('Invalid email', { icon: { type: 'error' }, theme: { type: 'light' } })
      return
    }

    await saveEmail(possibleEmail)
  })()
}

export function showInputCheck(pivot: boolean): void {
  $checkIcon?.classList.toggle('hidden', !pivot)
  $input?.classList.toggle('border-slate-500', !pivot)
  $input?.classList.toggle('border-green-500', pivot)
}

async function saveEmail(email: string): Promise<void> {
  const requestOptions = {
    body: JSON.stringify({ email }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch('/api/contact', requestOptions)
    const { ok } = (await response.json()) as { ok: boolean; message?: string }

    if (ok) {
      $contactForm?.classList.add('hidden')
      $positiveMessage?.classList.replace('hidden', 'flex')
      toast('Email sent', { icon: { type: 'success' }, theme: { type: 'light' } })
    }
  } catch (error) {
    toast('Error sending email', { icon: { type: 'error' }, theme: { type: 'light' } })
    console.error(error)
  }
}
