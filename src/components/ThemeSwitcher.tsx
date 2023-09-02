'use client'

import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return <div>ThemeSwitcher</div>
}

export default ThemeSwitcher
