import { LayoutInit, MiniContainer, SingUpStep1 } from "@/components";

import { useAppSelector } from "@/hooks/useSelectorHook";
import { SingUpStep2 } from "@/components/organisms/SingUpStep2";
const Steps:any = {
  1: SingUpStep1,
  2: SingUpStep2,
};

const SignUp = () => {
  const stateStep = useAppSelector((state) => state.user.currentStep);
  const Step = Steps[stateStep]

  return (
    <LayoutInit>
      <MiniContainer
        title="Seja bem-vindo"
        subTitle="Preencha os campos para criar sua conta"
        lastButton="Já tenho uma conta"
        lastButtonLink="entrar"
      >
    <Step/>
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignUp;
