import { Breadcrumb, Footer, Header } from "@/components";
import { BussinesContainer } from "@/style/negocios-style";

export const Business = () => {

  return (
    <div>
      <Header />
        <BussinesContainer>
          <Breadcrumb />
        </BussinesContainer>
      <Footer />
    </div>
  );
};

export default Business
