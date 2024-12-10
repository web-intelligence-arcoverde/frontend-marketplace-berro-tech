import React from "react"
import { Input } from "@/components/atoms/Input"
import { Form, LostPassword } from "./style"
import { Button } from "@/components/atoms/Button"
import { ICONS } from "@/assets"
import Image from "next/image"


export const FormSignIn = () => {
  return (
    <Form >
      <Input nameLabel="Email" />
      <Input nameLabel="Password" type="password" />
      <LostPassword href='/recuperar-senha'>
        Esqueci minha senha
      </LostPassword>
      <Button type='submit'> <Image src={ICONS.Email} alt='icone de email' />Entrar</Button>
    </Form>
  )
}