import {Button} from '@/components/atoms';
import {useAppSelector} from '@/hooks/useSelectorHook';
import {
  EditAccountImage,
  EditAccountInfo,
  EditAccountLocation,
  EditAccountPassword,
} from '../../';

export const EditUserBasicInformations = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <div style={{padding: '24px', width: '506px'}}>
        <EditAccountInfo />
      </div>
      <div
        style={{
          width: '294px',
          backgroundColor: '#FAFAFC',
          padding: '24px',
        }}
      >
        <div style={{height: '296px', marginBottom: '24px'}}>
          <EditAccountImage />
        </div>
        <div style={{padding: '0'}}>
          <Button>Salvar alterações</Button>
        </div>
      </div>
    </div>
  );
};

const Steps = {
  0: EditUserBasicInformations,
  1: EditAccountPassword,
  2: EditAccountLocation,
};

export const StepsEditUser = () => {
  const {step_edit_user} = useAppSelector((state) => state.user);

  const Step = Steps[step_edit_user];

  return <Step />;
};
