import {ICONS} from '@/assets';
import {NotFoundFilter, ProductCard, Tabs} from '@/components';
import Image from 'next/image';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {
  Container,
  SearchSideBar,
  SearchResponseContainer,
  InputSearchBar,
  InputContainer,
} from './style';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {tabs} from '@/mock';
import {useDispatch} from 'react-redux';
import {topSearchesFilter} from '@/store/reducer/product/actions';

export const MainSearch = () => {
  const [search, setSearch] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSearch(value);
  };

  const topSearches = useAppSelector((state) => state.product.topSearches);
  const filterSelected = useAppSelector(
    (state) => state.product.topSearchesFilter,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendFilter();
      }
    };

    inputRef.current?.addEventListener('keydown', handleKeyDown);

    return () => {
      inputRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const dispatch = useDispatch();

  const sendFilter = () => {
    dispatch(topSearchesFilter({type: filterSelected.type, search: search}));
  };

  return (
    <Container>
      <SearchSideBar>
        <h2>
          Encontre <br />o que procura
        </h2>
        <InputContainer>
          <Image src={ICONS.Search} alt='Icone de pesquisa' />
          <InputSearchBar
            name={'search'}
            type={'text'}
            placeholder='Buscar'
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                sendFilter();
              }
            }}
          />
        </InputContainer>
        <Tabs tabs={tabs} />
      </SearchSideBar>
      <SearchResponseContainer>
        {topSearches.slice(0, 4).map((item: any) => (
          <ProductCard
            width='48.5%'
            maxWidth='none'
            widthTablet='80%'
            key={item.id}
            id={item.id}
            documents={item.documents}
            breed={item.breed}
            business={item.business}
            name={item?.name}
            address={item.address}
            gender={item.gender}
            ageCategory={item?.ageCategory}
            classification={item?.classification}
          />
        ))}
        {topSearches.length == 0 && (
          <NotFoundFilter
            title={`Lamentamos informar que não há produtos disponíveis no momento `}
            subtitle='Fique à vontade para verificar novamente mais tarde.'
          />
        )}
      </SearchResponseContainer>
    </Container>
  );
};
