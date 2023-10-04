export function convertToSlug(Text: string) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export function convertDateYYYYMMDD(yourDate: Date) {
  const date = new Date(yourDate)
  return date.toISOString().split('T')[0]
}
