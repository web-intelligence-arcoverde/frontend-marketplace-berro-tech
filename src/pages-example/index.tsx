
import {
  Header,
  PresentationInfo,
  Footer,
  MainSearch,
  CountryRegion,
} from "@/components";
import { useAppDispatch } from "@/hooks/useSelectorHook";
import { getAllProducts } from "@/store/reducer/product/actions";
import { Main, Container } from "@/style";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const MyPresentation = dynamic(
  () => import("../components/organisms/Presentation")
);
const MyBussinessHighlight = dynamic(
  () => import("../components/organisms/BussinessHighlight/index")
);

const Home = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  return (
    <Container>
      <Header />
      <Main>
        <MyPresentation />
        <PresentationInfo />
        <MyBussinessHighlight />
        <CountryRegion />
        <MainSearch />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
