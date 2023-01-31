import React from "react";
import Image from "next/image";
import { Card, TitleCard, DetailsCard, DescriptionDetails } from "./style";
import { IMAGES, ICONS } from "@/assets";

const ProductCard: React.FC = () => {
  const detailMock = [
    {
      name: "Arcoverde-pe",
      icon: ICONS.Location,
    },
    {
      name: "Arcoverde-pe",
      icon: ICONS.Location,
    },
    {
      name: "Arcoverde-pe",
      icon: ICONS.Location,
    },
    {
      name: "Arcoverde-pe",
      icon: ICONS.Location,
    },
  ];
  return (
    <Card>
      <Image src={IMAGES.Logo} alt="fg" />
      <TitleCard>
        <h5>cabrito de alta qualidade</h5>
        <p>R$12,200.00</p>
      </TitleCard>
      <DetailsCard>
        {detailMock.map((item) => (
          <DescriptionDetails key={item.name}>
            <Image src={item.icon} alt="icone" />
            <p>{item.name}</p>
          </DescriptionDetails>
        ))}
      </DetailsCard>
    </Card>
  );
};

export default ProductCard;
