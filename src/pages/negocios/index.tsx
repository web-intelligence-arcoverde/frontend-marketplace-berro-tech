import { Footer, Header, Tabs } from "@/components";
import { BussinesContainer, ProductContainer, TabsContainer, SelectProduct, SelectContainer } from "@/style/negocios-style";
import { BussinessHighlightProductMock, Bussinestabs } from "@/mock"

export const Business = () => {

  return (
    <div>
      <Header />
      <BussinesContainer>
        <div>aside</div>
        <ProductContainer>
          <TabsContainer>
            <Tabs tabs={Bussinestabs} />
          </TabsContainer>
          <SelectContainer>
            <SelectProduct placeholder="Orderna por" name="ordanation" id="ordanation">
              <option>Orderna por</option>
              <option value="newer">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </SelectProduct>
          </SelectContainer>
        </ProductContainer>
      </BussinesContainer>
      <Footer />
    </div>
  );
};

export default Business
