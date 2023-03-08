import { Header, PhotosAnimal } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Container, Main } from "@/style";
import { Content } from "@/style/minhas-publicacoes-style";

const Product = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Content>
          <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
        </Content>
      </Main>
    </Container>
  );
};

export default Product;
