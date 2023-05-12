import { MultiStepForm } from '@/components';
import { StepRegisterProduct } from '@/mock';

export const RegisterProduct = ({
  registerProduct,
}: {
  registerProduct: () => void;
}) => {
  return (
    <>
      <MultiStepForm
        steps={StepRegisterProduct}
        registerProduct={() => registerProduct()}
      />
    </>
  );
};
