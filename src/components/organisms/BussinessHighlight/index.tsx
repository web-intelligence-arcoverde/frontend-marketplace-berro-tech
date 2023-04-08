import { NotFoundFilter, ProductCard } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import {
  Container,
  TitleContainer,
  ProductCardsContainer,
  LinkMobileContainer,
} from "./style";

export const BussinessHighlight = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>Negócios em destaque</h2>
        <a href="negocios">Veja mais opções</a>
      </TitleContainer>
      <ProductCardsContainer
        moreProduct={BussinessHighlightProductMock.length <= 2}
      >
        {BussinessHighlightProductMock.map((item, index) => (
          <ProductCard
            minWidth="300px"
            widthTablet="48%"
            width="30%"
            maxWidth="none"
            key={`${item.name} ${index}`}
            {...item}
          />
        ))}
        {BussinessHighlightProductMock.length == 0 && (
          <NotFoundFilter
            title={`Lamentamos informar que não há produtos disponíveis no momento `}
            subtitle="Fique à vontade para verificar novamente mais tarde."
          />
        )}
      </ProductCardsContainer>
      <LinkMobileContainer>
        <a href="negocios">Veja mais opções</a>
      </LinkMobileContainer>
    </Container>
  );
};

export default BussinessHighlight;
