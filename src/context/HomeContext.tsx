/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect } from 'react'

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  const { setTheme } = useTheme();

  // This use effect runs once on page load
  // After that, the theme will be managed by the ThemeToggle component
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const systemTheme = media.matches ? 'dark' : 'light';
    setTheme(systemTheme);
  }, []);

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
