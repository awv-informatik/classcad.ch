export const statuses = {
  valid: 'text-green-700 bg-green-50 ring-green-600/20',
  tag: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  dev: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getSelectionText() {
  let text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  // remove leading and trailing whitespaces
  text = text.replace(/^\s+|\s+$/g, '')
  return text
}
