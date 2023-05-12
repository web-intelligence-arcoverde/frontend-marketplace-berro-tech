import { productsHook } from '@/hooks/productHook'
import { ProductCardContainer } from "./style"
import { ProductCard, NotFoundFilter } from "@/components"
import { useAppSelector } from '@/hooks';

export const BussinessListProducts = () => {
  const currentSearch = useAppSelector((state) => state.product.currentSearch);

  const { products, loadingProducts, isEmptyProducts } = productsHook()



  return (
    <ProductCardContainer>
      {loadingProducts ? <></> : <></>}
    </ProductCardContainer>
  )
}


/*

<NotFoundFilter title={
              `Nenhum resultado para “${currentSearch}” `
            }
              subtitle='Tente alterar os filtros para encontrar negócios' />

              */

/*

<NotFoundFilter title={`Não temos negócios no momento `}
          subtitle={`Tente novamente mais tarde`} />

          */