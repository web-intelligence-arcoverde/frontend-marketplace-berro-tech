import { Container } from "./style";
import Image from "next/image";
import { ICONS } from "@/assets/icons";
import { CardContactProps } from "@/types";
import { Button } from "@/components";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const CardContact = ({ phone }: CardContactProps) => {
  const isMobile = !useMediaQuery("md");

    const onClickDots = () =>{
      if (navigator.share) {
        navigator.share({
        title: 'Título do conteúdo',
        text: 'Descrição do conteúdo',
        url: `${location?.href}}`
      })
        .then(() => console.log('Conteúdo compartilhado com sucesso!'))
        .catch(error => console.log('Ocorreu um erro ao compartilhar: ', error));
    }
  }

  return (
    <Container>
      <a href={`https://wa.me/${phone}?text=<mensagem>`} >
        <Image src={ICONS.Whatsapp} alt="Icone whatsapp" />
        Entrar em contato
      </a>
     {isMobile &&
      <Button onClick={onClickDots}>
        <Image src={ICONS.ShareDots} alt="Icone compartilhar" />
      </Button>
     }
    </Container>
  );
};
