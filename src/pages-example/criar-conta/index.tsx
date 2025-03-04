/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { LayoutInit, MiniContainer, SingUpStep1 } from "@/components";

import { useAppDispatch, useAppSelector } from "@/hooks/useSelectorHook";
import { SingUpStep2, AuthPublicRouter } from "@/components/";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { currentStep } from "@/store/reducer/product/actions";
interface StepsProps {
  [key: number]: FC<{}>;
}

const Steps: StepsProps = {
  1: SingUpStep1,
  2: SingUpStep2,
};

const SignUp = () => {
  const stateStep = useAppSelector((state) => state.product.currentStep);
  const Step = Steps[stateStep];
  const router = useRouter();
  const currenRoute = router.asPath;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currenRoute !== "/criar-rota") {
      dispatch(currentStep({ step: 1 }));
    }
  }, [currenRoute]);

  return (
    <AuthPublicRouter>
      <LayoutInit>
        <MiniContainer
          title="Seja bem-vindo"
          subTitle="Preencha os campos para criar sua conta"
          lastButton="Já tenho uma conta"
          lastButtonLink="entrar"
        >
          <Step />
        </MiniContainer>
      </LayoutInit>
    </AuthPublicRouter>
  );
};

export default SignUp;
