import {VerificationCode, Button} from '@/components';
import {useChronometerHook} from '@/hooks';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {
  confirmationVerificationCodeRequest,
  recoveryAccountSendEmailRequest,
} from '@/store/reducer/auth/actions';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export const VerifyCodeRecoveryAccount = () => {
  const {recoveryEmail} = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const resendEmailRecoveryAccount = () => {
    dispatch(recoveryAccountSendEmailRequest({email: recoveryEmail}));
    handleStart();
  };

  const {chronometer, handleStart} = useChronometerHook();

  const [code, setCode] = useState<Array<string>>(['', '', '', '', '', '']);

  const confirmationCode = () => {
    let codeConvert = '';

    code.map((item) => {
      codeConvert += item;
    });

    dispatch(confirmationVerificationCodeRequest({code: codeConvert}));
  };

  return (
    <>
      <h4>Verifique o código que enviamos pro seu email:</h4>
      <h6>
        {
          //@ts-ignore
          recoveryEmail?.email
        }
      </h6>
      <VerificationCode code={code} setCode={setCode} />
      <Button onClick={() => confirmationCode()}>Confirmar</Button>
      {chronometer === '00:00' ? (
        <Button className='resend' onClick={() => resendEmailRecoveryAccount()}>
          Reenviar código
        </Button>
      ) : (
        <Button className='resend cursor' onClick={() => {}} disabled>
          {chronometer}
        </Button>
      )}
    </>
  );
};
