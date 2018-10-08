export function capitalize (text) {
  return text.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
}
