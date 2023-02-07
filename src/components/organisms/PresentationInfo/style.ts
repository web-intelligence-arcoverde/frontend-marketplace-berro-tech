import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ImageArrowDown = styled(Image)`
  margin: 50px auto;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
