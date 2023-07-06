import { useCallback, useEffect, useState } from 'react';

export enum themeVariant {
  DARK = 'dark',
  LIGHT = 'light',
}

const storageName = 'data-theme'

export const useTheme = () => {
  const [theme, setTheme] = useState(themeVariant.LIGHT)
  let html: null | HTMLElement = null
  if (typeof window === 'object') {
    html = document.querySelector('html')
  }

  const changeTheme = useCallback(
    (variant: themeVariant) => {
      localStorage.setItem(storageName, variant)
      html?.setAttribute(storageName, variant)
      setTheme(variant)
    },
    [html]
  )

  useEffect(() => {
    const currentTheme = localStorage.getItem(storageName)

    if (currentTheme == themeVariant.DARK) {
      changeTheme(themeVariant.DARK)
    } else if (currentTheme === themeVariant.LIGHT) {
      changeTheme(themeVariant.LIGHT)
    } else {
      const { matches } = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

      if (matches) {
        changeTheme(themeVariant.DARK)
      } else {
        changeTheme(themeVariant.LIGHT)
      }
    }
  }, [html, changeTheme])

  return { theme, changeTheme }
}