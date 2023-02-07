import React from "react";
import { CardsContainer, Container, ImageArrowDown } from "./style";
import { ICONS } from "@/assets";
import PresentationInfoCard from "../../molecules/PresentationInfoCard";
import { PresentationInfoCardMock } from "@/mock";

const PresentationInfo = () => {
  return (
    <Container>
      <ImageArrowDown src={ICONS?.ArrowDown} alt={"Icone seta para baixo"} />
      <CardsContainer>
        {PresentationInfoCardMock?.map((item, index) => (
          <PresentationInfoCard
            key={index}
            icon={item?.icon}
            iconName={item?.iconName}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default PresentationInfo;
