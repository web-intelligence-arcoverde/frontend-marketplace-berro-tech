import { IMAGES } from "@/assets";
import { Button, Logo, Search } from "@/components/atoms";
import { NavigationHeader } from "@/mock";
import Image from "next/image";
import { CardAvatar, ContainerHeader, Flex, Nav, Navigation } from "./style";

const Header = () => {
  return (
    <ContainerHeader>
      <Flex>
        <Logo />
        <Search />
      </Flex>
      <Navigation>
        <Button padding="8px 46px" onClick={console.log}>
          Vender animal
        </Button>
        <Nav>
          {NavigationHeader.map((item, index) => (
            <li key={index}>
              <Image src={item.icon} alt={item.name} />
            </li>
          ))}
        </Nav>
        <CardAvatar>
          <Image src={IMAGES.Avatar} alt="foto perfil" />
        </CardAvatar>
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;
