// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextUIThemeProvider ({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}