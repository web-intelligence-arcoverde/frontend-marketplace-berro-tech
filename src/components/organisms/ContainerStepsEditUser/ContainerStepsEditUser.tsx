import {ContentStep, Header, Container, StepsContainer} from './style';
import {useAppSelector} from '@/hooks/useSelectorHook';

import {
  EditUserBasicInformations,
  EditAccountPassword,
  EditAccountLocation,
} from '@/components';
import {useDispatch} from 'react-redux';
import {setStepEditUser} from '@/store/reducer/user/actions';

interface StepsProps {
  [index: number]: any;
  0: any;
  1: any;
  2: any;
}

export const ContainerStepsEditUser = ({}) => {
  const {step_edit_user} = useAppSelector((state) => state.user);

  const dispatch = useDispatch();

  const Steps: StepsProps = {
    0: EditUserBasicInformations,
    1: EditAccountPassword,
    2: EditAccountLocation,
  };

  const StepsEditUser = () => {
    const Step = Steps[step_edit_user];

    return <Step />;
  };

  return (
    <Container>
      <Header>
        {[
          {name: 'Conta', step: 'Editar', id: 0},
          {name: 'Senha', step: 'Editer', id: 1},
          {name: 'Localização', step: 'Editar', id: 2},
        ].map((step) => {
          return (
            <StepsContainer
              onClick={() => dispatch(setStepEditUser(step.id))}
              className={step_edit_user === step.id ? 'active' : ''}
              key={step.id}
            >
              <h6>{step.step}</h6>
              <h4>{step.name}</h4>
            </StepsContainer>
          );
        })}
      </Header>
      <ContentStep>
        <StepsEditUser />
      </ContentStep>
    </Container>
  );
};
