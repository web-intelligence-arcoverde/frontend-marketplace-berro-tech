import React from 'react';
import Image from 'next/image';
import {
  ProductSellerContainer,
  DescriptionContainer,
  ImageContainer,
  InfoCard,
  DescriptionCard,
  NameAvaliation,
  LinkContainer,
  SellerLink,
  InfoCardToMobile,
  TitleToMobile,
} from './style';
import {ICONS, IMAGES} from '@/assets';

import {StyleDesktop, StyleMobile} from '@/style';
import {useRouter} from 'next/router';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import {useAppSelector} from '@/hooks/useSelectorHook';

export const ProductSellerCard = () => {
  const router = useRouter();
  const isMobile = !useMediaQuery('md');
  const handleRedirect = () => {
    router.push(`/negocios/perfil-vendedor/${1}`);
  };

  const {avatar_url,name} = useAppSelector((state) => state.auth.user);

  return (
    <ProductSellerContainer>
      <StyleMobile>
        <TitleToMobile>
          <h3>Perfil do vendedor</h3>
        </TitleToMobile>
      </StyleMobile>
      <DescriptionContainer>
        <InfoCard>
          <StyleDesktop>
            <h3>Perfil do vendedor</h3>
          </StyleDesktop>
          <InfoCardToMobile>
            <DescriptionCard>
              <h6>nome</h6>
              <NameAvaliation>
                <p>{name}</p>
                <StyleDesktop>
                  {/* <Avaliation avaliation="4.8" /> */}
                </StyleDesktop>
              </NameAvaliation>
            </DescriptionCard>
            <DescriptionCard>
              <h6>Localização</h6>
              <p>...</p>
            </DescriptionCard>
          </InfoCardToMobile>
          {isMobile && (
            <ImageContainer>
              <Image src={IMAGES.Seller} alt='imagem do vendedor' />
            </ImageContainer>
          )}
        </InfoCard>
        <StyleDesktop>
          <LinkContainer>
            <SellerLink onClick={handleRedirect}>Ver mais</SellerLink>
          </LinkContainer>
        </StyleDesktop>
      </DescriptionContainer>
      <StyleMobile>
        <LinkContainer>
          <SellerLink onClick={handleRedirect}>Ver mais</SellerLink>
          {/* <AvaliationBorderToMobile>
              <Avaliation avaliation="4.8" />
            </AvaliationBorderToMobile> */}
        </LinkContainer>
      </StyleMobile>
      <StyleDesktop>
        <ImageContainer>
          <Image
            src={!!avatar_url ? avatar_url : ICONS.Avatar}
            alt='imagem do vendedor'
          />
        </ImageContainer>
      </StyleDesktop>
    </ProductSellerContainer>
  );
};
