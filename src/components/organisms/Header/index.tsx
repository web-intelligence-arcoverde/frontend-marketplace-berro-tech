import { HeaderLogoContainer, HeaderNavigation } from "@/components";
import { ContainerHeader, MainHeader } from "./style";

export const Header = () => {
  return (
    <ContainerHeader>
      <MainHeader>
        <HeaderLogoContainer />
        <HeaderNavigation />
      </MainHeader>
    </ContainerHeader>
  );
};
