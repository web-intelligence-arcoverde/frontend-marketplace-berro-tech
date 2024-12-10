'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ContentStep,
  HeaderMultiSteps,
  LayoutRegisterConfig,
  StepsContainer,
} from './style';
import React, { useState } from 'react';

interface Step {
  id: number;
  name: string;
  step: string;
  component: React.FunctionComponent<{
    formValues: any;
    setFormValues: any;
    clickStep: (e: any) => void;
    registerProduct?: () => void;
  }>;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit?: (formValues: any) => void;
  registerProduct: () => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  registerProduct,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const clickStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const ComponentStep = steps[currentStep - 1].component;

  return (
    <LayoutRegisterConfig>
      <HeaderMultiSteps>
        {steps.map((step) => {
          return (
            <StepsContainer
              className={currentStep === step.id ? 'active' : ''}
              key={step.id}
            >
              <h6>{step.step}</h6>
              <h4>{step.name}</h4>
            </StepsContainer>
          );
        })}
      </HeaderMultiSteps>
      <ContentStep>
        <ComponentStep
          formValues={undefined}
          registerProduct={() => registerProduct()}
          clickStep={(e) => clickStep(e)}
          setFormValues={undefined}
        />
      </ContentStep>
    </LayoutRegisterConfig>
  );
};
