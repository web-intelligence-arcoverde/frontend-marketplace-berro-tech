import { IMAGES } from "@/assets";
import { Button, Logo, Search } from "@/components/atoms";
import { NavigationHeader } from "@/mock";
import Image from "next/image";
import { CardAvatar, ContainerHeader, Flex, Nav, Navigation } from "./style";

interface HeaderProps {
  isLogged:boolean
}

const Header = ({isLogged}: HeaderProps) => {
  return (
    <ContainerHeader>
      <Flex>
        <Logo />
      </Flex>
      <Navigation>
        <Nav>
          {NavigationHeader.map((item, index) => (
            <li key={index}>
              <Image src={item.icon} alt={item.name} />
            </li>
          ))}
        </Nav>
        <Search />
        {isLogged ? (
          <CardAvatar>
            <Image src={IMAGES.Avatar} alt="foto perfil" />
          </CardAvatar>
        ) : (
          <Button maxWidth="120px" padding="0px 30px" onClick={console.log}>
           Entrar
          </Button>
        )}
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;
