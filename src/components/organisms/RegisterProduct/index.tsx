import { MultiStepForm } from "@/components";
import { StepRegisterProduct } from "@/mock";

export const RegisterProduct = () => {
  const handleSubmit = () => {
    // lógica de envio do formulário
  };

  return (
    <>
      <MultiStepForm
        titleStep="Sobre o produto"
        steps={StepRegisterProduct}
        onSubmit={() => {
          handleSubmit;
        }}
      />
    </>
  );
};
