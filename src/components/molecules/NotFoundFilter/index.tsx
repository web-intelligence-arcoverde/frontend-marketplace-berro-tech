import { ICONS } from "@/assets";
import Image from "next/image";
import { ContainerNotFound } from "./style";

interface NotFoundFilterProps {
  title: string;
  subtitle: string;
}

export const NotFoundFilter = ({ title, subtitle }: NotFoundFilterProps) => {
  return (
    <ContainerNotFound>
      <Image src={ICONS.NotFound} alt="imagem nenhum produto encontrado" />
      <h1>{title}</h1>
      <h6>{subtitle}</h6>
    </ContainerNotFound>
  );
};
