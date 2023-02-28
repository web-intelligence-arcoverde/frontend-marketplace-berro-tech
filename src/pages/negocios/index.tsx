import { Footer, Header, Tabs } from "@/components";
import { BussinesContainer, ProductContainer } from "@/style/negocios-style";

const Business = () => {
  return (
    <>
      <Header />
      <BussinesContainer>
        <aside>

        </aside>
        <ProductContainer>
          <Tabs tabs={[]} />
        </ProductContainer>
      </BussinesContainer>
      <Footer />
    </>
  );
};

export default Business;
