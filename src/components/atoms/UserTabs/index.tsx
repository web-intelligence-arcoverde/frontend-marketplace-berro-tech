/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabsProps } from '@/types';
import React, { useState } from 'react';
import { Container } from './style';
import { useDispatch } from 'react-redux';
import { topSearchesFilter } from '@/store/reducer/product/actions';
import { useAppSelector } from '@/hooks/useSelectorHook';
import { filterByAllAttributes } from '@/store/reducer/product/reducer';
import { filterUserProducts } from '@/store/reducer/auth/actions';

export const UserTabs = ({ tabs, initialTab = 3 }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const {
    user: { products },
  } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClick = (event: any, value: number) => {

    const currentValueTab = selectedTab
    const newValueTab = value

    if (currentValueTab === newValueTab) {
      setSelectedTab(3);
      dispatch(filterUserProducts(products))
    } else {

      setSelectedTab(value);

      if (newValueTab === 0) {
        const filterByBreed = filterByAllAttributes(products, 'caprino')
        dispatch(filterUserProducts(filterByBreed))
      } else if (value === 1) {
        const filterByBreed = filterByAllAttributes(products, 'ovino')
        dispatch(filterUserProducts(filterByBreed))
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
