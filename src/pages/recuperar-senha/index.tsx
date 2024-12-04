import React from 'react';
import { ICONS } from '@/assets';
import {
  ButtonLink,
  LayoutInit,
  MiniContainer,
  AuthPublicRouter,
  SendEmailRecoveryAccount,
  VerifyCodeRecoveryAccount,
  ChangerPasswordRecoveryAccount,
} from '@/components';
import { CardRecovery } from '@/style/recovery-password';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/hooks/useSelectorHook';

import { setStepRecoveryAccount } from '@/store/reducer/step/actions';

const Steps = {
  0: SendEmailRecoveryAccount,
  1: VerifyCodeRecoveryAccount,
  2: ChangerPasswordRecoveryAccount,
};

const RecoveryPassword = () => {
  const { recovery_account_step } = useAppSelector((state) => state.step);

  const dispatch = useAppDispatch();

  //@ts-expect-error: Error
  const Step = Steps[recovery_account_step];

  const backStep = () => {
    if (recovery_account_step > 0) {
      dispatch(setStepRecoveryAccount(recovery_account_step - 1));
    }
  };

  return (
    <AuthPublicRouter>
      <LayoutInit>
        <MiniContainer
          title='Esqueci minha senha'
          subTitle='Siga os passos abaixo para recuperar'
          lastButtonLink='dsddsdsdsdsd'
        >
          <CardRecovery>
            <div onClick={() => backStep()}>
              <ButtonLink
                id='back'
                link={
                  recovery_account_step === 0 ? 'entrar' : 'recuperar-senha'
                }
              >
                <Image src={ICONS.Up} alt='voltar' />
                Voltar
              </ButtonLink>
            </div>
            <Step />
          </CardRecovery>
        </MiniContainer>
      </LayoutInit>
    </AuthPublicRouter>
  );
};

export default RecoveryPassword;
