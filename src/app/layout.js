import Header from '@/components/layout/Header'
import './globals.css'
import { NextUIThemeProvider } from '@/config/provider/NextUIThemeProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIThemeProvider>
          <Header />
          {children}
        </NextUIThemeProvider>
      </body>
    </html>
  )
}
