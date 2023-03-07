import { Header, PhotosAnimal } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Container, Main } from "@/style";

const Product = () => {
  return (
    <Container>
      <Main>
        <Header />
        <div>
          <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
        </div>
      </Main>
    </Container>
  );
};

export default Product;
