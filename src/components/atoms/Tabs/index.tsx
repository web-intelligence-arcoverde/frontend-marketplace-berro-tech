import {TabsProps} from '@/types';
import React, {useState} from 'react';
import {Container} from './style';
import {useDispatch} from 'react-redux';
import {topSearchesFilter} from '@/store/reducer/product/actions';

export const Tabs = ({tabs, initialTab = 0}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const dispatch = useDispatch();

  const handleClick = (event: any, value: number) => {
    setSelectedTab(value);
    dispatch(topSearchesFilter({type: event.typeFilter}));
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
