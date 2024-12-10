'use client'

import React, { ReactNode } from "react"

import { ICONS } from "@/assets"
import { Container, Logo } from "./style"


interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Container>
      <Logo src={ICONS.SimboloBackground} alt="simbolo berro tech" />
      {children}
    </Container>
  )
}