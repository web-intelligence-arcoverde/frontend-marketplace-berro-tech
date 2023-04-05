import {ContentStep, Header, Container, StepsContainer} from './style';
import React, {useState} from 'react';
import {useAppSelector} from '@/hooks/useSelectorHook';

import {StepsEditUser} from '../../';
import {useDispatch} from 'react-redux';
import {setStepEditUser} from '@/store/reducer/user/actions';

export const ContainerStepsEditUser = ({}) => {
  const {step_edit_user} = useAppSelector((state) => state.user);

  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const clickStep = (stepNumber: number) => {
    dispatch(setStepEditUser(stepNumber));
  };

  console.log(step_edit_user);

  return (
    <Container>
      <Header>
        {[
          {name: 'example', step: 'exemple', id: 0},
          {name: 'example', step: 'exemple', id: 1},
          {name: 'example', step: 'exemple', id: 2},
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
