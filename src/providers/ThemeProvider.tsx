'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { FC } from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider attribute='class' enableSystem>
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
