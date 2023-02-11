'use client'

import { ReactNode } from 'react'
import StyledComponentsRegistry from './registry'
import '../styles/globalStyle.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Header } from '@/containers/BaseLayout/Header/Header'
import { Body } from '@/containers/BaseLayout/Body/Body'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <Header />
            <Body>{children}</Body>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
