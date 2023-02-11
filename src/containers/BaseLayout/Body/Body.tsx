import { ReactNode } from 'react'
import { BodyContainer } from './styled'

interface BodyProps {
  children: ReactNode
}

export function Body({ children }: BodyProps) {
  return <BodyContainer>{children}</BodyContainer>
}
