"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState, PropsWithChildren } from "react"

export function ThemeProvider({ children, ...props }: PropsWithChildren<any>) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}