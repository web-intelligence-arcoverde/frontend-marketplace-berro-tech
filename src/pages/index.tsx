import { ProductCard } from "@/components";
import { Header, Presentation } from "@/components/organisms";
import { Main } from "./style";

const Home = () => {
  return (
    <Main>
      <Header />
      <Presentation />
      <ProductCard />
    </Main>
  );
};

export default Home;
