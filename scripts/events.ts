import { $contactButton, $input } from '$/declareRefs'
import { handleSubmit, isValidEmail, showInputCheck } from './contactEmailAction'

$input?.addEventListener('input', () => {
  showInputCheck(isValidEmail($input?.value))
})

$contactButton?.addEventListener('click', () => {
  if ($input?.value != null) {
    handleSubmit($input.value)
  }
})
