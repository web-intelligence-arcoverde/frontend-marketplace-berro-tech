import { ProductCard } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Container, TitleContainer, ProductCardsContainer ,LinkMobileContainer} from "./style";

export const BussinessHighlight = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>Negócios em destaque</h2>
        <a href="./">Veja mais opções</a>
      </TitleContainer>
      <ProductCardsContainer>
        {BussinessHighlightProductMock.map((item , index) => (
          <ProductCard
            key={`${item.name} ${index}`}
            photo={item.photo}
            breed={item.breed}
            quantity={item.quantity}
            name={item.name}
            city={item.city}
            state={item.state}
            country={item.country}
            sex={item.sex}
            age={item.age}
            rank={item.rank}
          />
        ))}
      </ProductCardsContainer>
      <LinkMobileContainer>
        <a href="./">Veja mais opções</a>
      </LinkMobileContainer>
    </Container>
  );
};

export default BussinessHighlight