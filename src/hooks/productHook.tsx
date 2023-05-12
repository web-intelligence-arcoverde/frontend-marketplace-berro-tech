import { readProductRequest } from '@/store/reducer/product/actions';
import { filterByAllAttributes } from '@/store/reducer/product/reducer';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './';


export const productsHook = () => {
  const { loadingProducts, allProducts, allFilterSelected, filterProductByAnimal } = useAppSelector((state) => state.product);

  let isEmptyProducts = filterProductByAnimal.length >= 1 ? filterProductByAnimal : !!allProducts && allProducts.length > 0

  const [products, setProducts] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readProductRequest())
  }, [])

  useEffect(() => {
    setProducts(allProducts)
  }, [])

  let allFilterSelectedIsEmpty = allFilterSelected.length >= 1


  useEffect(() => {
    if (allFilterSelectedIsEmpty) {
      allFilterSelected.map((item: any) => {
        if (allFilterSelected.length === 1) {
          let productsFiltred = filterByAllAttributes(allProducts, item)
          setProducts(productsFiltred)
        } else if (allFilterSelected.length > 1) {
          let productsFiltred = filterByAllAttributes(products, item)
          setProducts(productsFiltred)
        }
      })
    } else {
      setProducts(allProducts)
    }
  }, [allFilterSelected])


  return { products, loadingProducts, isEmptyProducts }
}
