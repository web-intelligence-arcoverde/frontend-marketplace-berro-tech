import React from "react";
import { ProductCard } from "@/components";
import { BussinessHighlightProductMock } from "@/mock";

import { Container, TitleContainer } from "./style";

const BussinessHighlight = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>Negócios em destaque</h2>
        <a href="./">Ver mais</a>
      </TitleContainer>
      {BussinessHighlightProductMock.map((item) => (
        <ProductCard
          key={item.name}
          photo={item.photo}
          breed={item.breed}
          quantity={item.quantity}
          name={item.name}
          city={item.city}
          state={item.state}
          country={item.country}
          sex={item.sex}
          age={item.age}
          rank={item.rank}
        />
      ))}
    </Container>
  );
};

export default BussinessHighlight;
