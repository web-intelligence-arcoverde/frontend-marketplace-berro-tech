import {Button, Input} from '@/components';
import {useHookFormSignUp1} from '@/hooks/useFormSignUpStep2';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {SignUpInputs} from '@/mock/Inputs';
import {CardStep, FormRegister} from '@/style/criar-conta-style';

export const SingUpStep2 = () => {
  const {control, errors, onSubmit} = useHookFormSignUp1();
  const stateStep = useAppSelector((state) => state.product.currentStep);
  const totalStep = 2;
  return (
    <FormRegister onSubmit={onSubmit}>
      <CardStep>
        Etapa {stateStep} de {totalStep}
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
      <Button type='submit'>Criar conta</Button>
    </FormRegister>
  );
};
