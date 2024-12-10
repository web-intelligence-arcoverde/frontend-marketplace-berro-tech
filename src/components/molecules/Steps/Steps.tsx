'use client'

import React, { useState } from 'react';
import {
  LayoutRegisterConfig,
  HeaderMultiSteps,
  StepsContainer,
  ContentStep,
} from './style';

import { ProductEditBasicInformation } from '../ProductEditBasicInformation';

import { EditLocation } from '../EditLocation';
import { EditRegisterPhotos } from '../EditRegisterPhotos';

export const steps = [
  { id: 0, name: 'Informações', step: 'Passo 1' },
  { id: 1, name: 'Fotos', step: 'Passo 2' },
  { id: 2, name: 'Localização', step: 'Passo 3' },
];

const stepsComponents = {
  0: ProductEditBasicInformation,
  1: EditRegisterPhotos,
  2: EditLocation,
};

export const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const clickStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  //@ts-expect-error: Error
  const CurrentStepComponent = stepsComponents[currentStep];

  return (
    <LayoutRegisterConfig>
      <HeaderMultiSteps>
        {steps.map((step) => {
          return (
            <StepsContainer
              className={currentStep === step.id ? 'active' : ''}
              key={step.id}
              onClick={() => clickStep(step.id)}
            >
              <h6>{step.step}</h6>
              <h4>{step.name}</h4>
            </StepsContainer>
          );
        })}
      </HeaderMultiSteps>
      <ContentStep>
        <CurrentStepComponent clickStep={clickStep} />
      </ContentStep>
    </LayoutRegisterConfig>
  );
};
