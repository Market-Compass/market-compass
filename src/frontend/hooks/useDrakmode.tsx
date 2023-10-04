import { useEffect, useState } from 'react'

export const useDarkmode = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const colorScheme = event.matches
      setIsDark(colorScheme)
    })
  }, [])
  return isDark
}
