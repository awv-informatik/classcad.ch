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
