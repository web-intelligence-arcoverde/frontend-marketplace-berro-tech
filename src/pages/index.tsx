import {Header, Presentation, PresentationInfo} from '@/components/organisms';
import {useAppSelector, useAppDispatch} from '@/hooks/useSelectorHook';
import {Main} from '@/style';

import {increment} from '@/store/reducer/counter/actions';
import {getKanyeQuote} from '@/store/reducer/kenye/reducer';

const Home = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const {data, pending, error} = useAppSelector((state) => state.kenye);
  console.log(data);

  return (
    <Main>
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
      <button onClick={() => dispatch(increment())}>example</button>
      <Header />
      <Presentation />
      <PresentationInfo />
    </Main>
  );
};

export default Home;
