import {  SellerCard } from "@/components";
import { Header, Presentation } from "@/components/organisms";
import { Main } from "./style";

const Home = () => {
  return (
    <Main>
      <Header />
      <Presentation />
      <SellerCard />
    </Main>
  );
};

export default Home;
