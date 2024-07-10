export function slugify(text: string): string {
  const specialChars: { [key: string]: string } = {
    á: 'a',
    à: 'a',
    ã: 'a',
    â: 'a',
    é: 'e',
    è: 'e',
    ê: 'e',
    í: 'i',
    ì: 'i',
    î: 'i',
    ó: 'o',
    ò: 'o',
    õ: 'o',
    ô: 'o',
    ú: 'u',
    ù: 'u',
    û: 'u',
    ç: 'c',
    ñ: 'n',
    ' ': '-',
    _: '-',
    '.': '',
    ',': '',
    ';': '',
    ':': '',
    '!': '',
    '?': '',
    '(': '',
    ')': '',
    '[': '',
    ']': '',
    '{': '',
    '}': '',
    '<': '',
    '>': '',
    '&': 'e',
    '@': '',
    '#': '',
    $: '',
    '%': '',
    '*': '',
    '+': '',
    '=': '',
    '~': '',
    '^': '',
    '|': '',
    '\\': '',
    '`': '',
    '´': '',
    '¨': '',
    '"': '',
  }

  return text
    .toLowerCase()
    .split('')
    .map((char) => specialChars[char] || char)
    .join('')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '')
}
