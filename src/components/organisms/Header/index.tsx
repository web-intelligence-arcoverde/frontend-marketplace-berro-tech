import { Button, Search } from "@/components/atoms";
import { ContainerHeader } from "./style";

const Header = () => {
  return (
    <header>
      <ContainerHeader>
        <div>
          <Search />
        </div>
        <div>
          <Button padding='8px 46px' children="Vender animal" onClick={console.log} />
        </div>
      </ContainerHeader>
    </header>
  );
};

export default Header;
