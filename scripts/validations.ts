import { REGEX_EMAIL } from '$/consts'

export function isValidEmail (possibleEmail?: string): boolean {
  return typeof possibleEmail === 'string' && possibleEmail.match(REGEX_EMAIL) != null
}
