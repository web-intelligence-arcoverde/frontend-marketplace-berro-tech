import { TabsProps } from '@/types';
import React, { useState } from 'react';
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { filterProductsByAnimal, getAllProducts, productsWithOutFilters, topSearchesFilter } from '@/store/reducer/product/actions';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { filterByAllAttributes } from '@/store/reducer/product/reducer';

export const Tabs = ({ tabs, initialTab = 3 }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const { allProducts } = useAppSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleClick = (event: any, value: number) => {

    let currentValueTab = selectedTab
    let newValueTab = value

    if (currentValueTab === newValueTab) {
      setSelectedTab(3);
      dispatch(getAllProducts())
      dispatch(filterProductsByAnimal([]))
    } else {

      setSelectedTab(value);

      if (newValueTab === 0) {
        const filterByBreed = filterByAllAttributes(allProducts, 'caprino')
        dispatch(filterProductsByAnimal(filterByBreed))
      } else if (value === 1) {
        const filterByBreed = filterByAllAttributes(allProducts, 'ovino')
        dispatch(filterProductsByAnimal(filterByBreed))
      }

    }

    dispatch(topSearchesFilter({ type: event.typeFilter }));

  };

  return (
    <Container>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
            className={`tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => handleClick(tab, index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </Container>
  );
};
