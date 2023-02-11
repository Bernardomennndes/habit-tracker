import { ReactNode } from 'react'
import StyledComponentsRegistry from './registry'
import '../styles/globalStyle.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
