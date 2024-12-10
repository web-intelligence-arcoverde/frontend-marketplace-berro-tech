'use client'

import React from "react";
import { Header, Row } from "./style";

import Image from "next/image";
import { ICONS } from "@/assets";

export const HeaderSignIn = () => {
  return (
    <Header>
      <Row>
        <h4>Bem-vindo de volta</h4>
        <h5>Escolha como entrar</h5>
      </Row>
      <Image src={ICONS.Hands} alt="icone boas vindas" />
    </Header>
  );
};