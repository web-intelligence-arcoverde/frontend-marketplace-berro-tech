import { DescriptionProduct, Header, PhotosAnimal } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";
import { Container, Main } from "@/style";
import { Content, InfoProduct } from "@/style/minhas-publicacoes-style";

const Product = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Content>
          <InfoProduct style={{ display: "flex", flexDirection: "column" }}>
            <PhotosAnimal arrayPhoto={BussinessHighlightProductMock} />
            <DescriptionProduct
              description="Viverra ultrices ut egestas quis. Nascetur turpis fringilla dignissim dis amet turpis neque vitae auctor. Ac et tellus sed non nulla lacus scelerisque scelerisque. Dapibus vitae elementum et arcu faucibus malesuada tempor velit amet."
              genetics={"Puro de Origem"}
              weight={"588,9"}
              birthDate={"30/11/2020"}
            />
          </InfoProduct>
        </Content>
      </Main>
    </Container>
  );
};

export default Product;
