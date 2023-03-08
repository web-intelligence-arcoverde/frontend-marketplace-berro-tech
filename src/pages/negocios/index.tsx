import { BussinessAside, Footer, Header, ProductCard, Select, Tabs } from "@/components";
import { BussinesContainer, ProductContainer, ProductCardContainer, TabsContainer, ProductHeaderContainer } from "@/style/negocios-style";
import { BussinessHighlightProductMock, Bussinestabs } from "@/mock"
import { useMediaQuery } from "@/hooks/useMediaQuery";


export const Business = () => {
  return (
    <div>
      <Header />
      <BussinesContainer>
        <BussinessAside />
        <ProductContainer>
          <ProductHeaderContainer>
            <TabsContainer>
              <Tabs tabs={Bussinestabs} />
            </TabsContainer>
            <Select />
          </ProductHeaderContainer>
          <ProductCardContainer>
            {BussinessHighlightProductMock.map((item, index) => (
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
          </ProductCardContainer>
        </ProductContainer>
      </BussinesContainer>
      <Footer />
    </div>
  );
};

export default Business
