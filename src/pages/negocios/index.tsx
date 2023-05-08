import {
  BussinessAside,
  Footer,
  Header,
  NotFoundFilter,
  ProductCard,
  SelectOrdenation,
  Tabs
} from '@/components';
import {
  BussinesContainer,
  ProductContainer,
  ProductCardContainer,
  TabsContainer,
  ProductHeaderContainer,
  SelectContainer
} from '@/style/negocios-style';
import {Bussinestabs} from '@/mock';

import {Container, Main} from '@/style';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {IProduct} from '@/types/ICardProductProps';

export const Business = () => {
  const allProduct = useAppSelector((state) => state.product.allProducts);
  const currentSearch = useAppSelector((state) => state.product.currentSearch);
  const router = useRouter();
  const routerBusiness = router.asPath;
  const [empty, setEmpty] = useState(false);

  const parameter = "Gabriel";


  const filteredProducts = allProduct.filter((product : any) => {
    return Object.values(product).some(value => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(parameter.toLowerCase());
      }
      return false;
    });
  });

  function filterByAllAttributes(data, term) {
    return data.filter((item) => {
      for (const key in item) {
        if (typeof item[key] === "object" && item[key] !== null) {
          if (filterByAllAttributes([item[key]], term).length > 0) {
            return true;
          }
        } else {
          if (item[key] && item[key].toString().toLowerCase().includes(term.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    });
  }


  console.log(filterByAllAttributes(allProduct, 'Pedra'))


  useEffect(() => {
    if (routerBusiness == '/negocios' && allProduct && allProduct.length > 0) {
      setEmpty(true);
    }
  }, [allProduct]);

  return (<Container>
    <Header/>
    <Main>
      <BussinesContainer>
        <BussinessAside/>
        <ProductContainer>
          <ProductHeaderContainer>
            <TabsContainer>
              <Tabs tabs={Bussinestabs}/>
            </TabsContainer>
            <SelectContainer>
              <SelectOrdenation/>
            </SelectContainer>
          </ProductHeaderContainer>
          <ProductCardContainer> {
            empty ? (<> {
              allProduct && allProduct.length > 0 ? (allProduct ?. map((item
              : any) => (<ProductCard widthTablet='60%' maxWidth='none'
                key={
                  item.id
                }
                id={
                  item.id
                }
                documents={
                  item.documents
                }
                breed={
                  item.breed
                }
                business={
                  item.business
                }
                name={
                  item ?. name
                }
                address={
                  item.address
                }
                gender={
                  item.gender
                }
                ageCategory={
                  item ?. ageCategory
                }
                classification={
                  item ?. classification
                }/>))) : (<NotFoundFilter title={
                  `Nenhum resultado para “${currentSearch}” `
                }
                subtitle='Tente alterar os filtros para encontrar negócios'/>)
            } </>) : (<NotFoundFilter title={`Não temos negócios no momento `}
              subtitle={`Tente novamente mais tarde`}/>)
          } </ProductCardContainer>
        </ProductContainer>
      </BussinesContainer>
    </Main>
    <Footer/>
  </Container>);
};

export default Business;
