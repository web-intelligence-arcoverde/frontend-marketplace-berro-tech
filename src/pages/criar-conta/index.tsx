import { Button, Input, LayoutInit, MiniContainer } from "@/components";
import { useState } from "react";
import { CardStep, FormRegister } from "@/style/criar-conta-style";
import { SignUpInputs } from "@/mock/Inputs";
import { useHookFormSignUp1 } from "@/hooks/useFormSignUpStep1";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { control, errors, onSubmit } = useHookFormSignUp1();
  const totalStep = 2;

  const handleNextStep = () => {
    if (errors) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <LayoutInit>
      <MiniContainer
        title="Seja bem-vindo"
        subTitle="Preencha os campos para criar sua conta"
        lastButton="Já tenho uma conta"
        lastButtonLink="entrar"
      >
        <FormRegister onSubmit={onSubmit}>
          {currentStep == 1 && (
            <>
              <CardStep>
                Etapa {currentStep} de {totalStep}
              </CardStep>
              {SignUpInputs.slice(0, 3).map((input, index) => (
                <Input
                  key={index}
                  nameLabel={input.label}
                  control={control}
                  //@ts-ignore
                  errors={errors[input.name]?.message}
                  {...input}
                />
              ))}
              <Button type="submit">Próximo</Button>
            </>
          )}
          {currentStep == 2 && (
            <>
              <CardStep>
                Etapa {currentStep} de {totalStep}
              </CardStep>
              {SignUpInputs.slice(3, 5).map((input, index) => (
                <Input
                  key={index}
                  nameLabel={input.label}
                  control={control}
                  //@ts-ignore
                  errors={errors[input.name]?.message}
                  {...input}
                />
              ))}
              <Button onClick={() => {}}>Criar conta</Button>
            </>
          )}
        </FormRegister>
      </MiniContainer>
    </LayoutInit>
  );
};

export default SignUp;
