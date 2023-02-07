import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';

const Business = () => {
  const router = useRouter();

  const {id}: ParsedUrlQuery = router.query;

  console.log(id);

  return (
    <div>
      <h2>Produto especifico</h2>
    </div>
  );
};

export default Business;
