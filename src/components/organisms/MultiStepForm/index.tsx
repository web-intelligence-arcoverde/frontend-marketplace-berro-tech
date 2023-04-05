import {
  ContentStep,
  HeaderMultiSteps,
  LayoutRegisterConfig,
  StepsContainer,
} from './style';
import React, {useState} from 'react';
import {useAppSelector} from '@/hooks/useSelectorHook';

interface Step {
  id: number;
  name: string;
  step: string;
  firstColumnTitle?: string;
  secondColumnTitle?: string;
  firstColumnChilren?: any;
  secondColumnChilren?: any;
  submitButtonText?: string,
  component: React.FunctionComponent<{
    formValues: any;
    setFormValues: any;
    clickStep: (e: any) => void;
    registerProduct?: () => void;
    submitButtonText?: string,
    firstColumnTitle?: string;
    secondColumnTitle?: string;
    firstColumnChilren?: any;
    secondColumnChilren?: any;
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
  const {step_edit_user} = useAppSelector((state) => state.user);

  const [currentStep, setCurrentStep] = useState(1);

  const clickStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const submitButtonText = steps[currentStep - 1].submitButtonText;
  const ComponentStep = steps[currentStep - 1].component;
  const firstColumnTitle = steps[currentStep - 1].firstColumnTitle;
  const firstColumnChilren = steps[currentStep - 1].firstColumnChilren;
  const secondColumnTitle = steps[currentStep - 1].secondColumnTitle;
  const secondColumnChilren = steps[currentStep - 1].secondColumnChilren;

  return (
    <LayoutRegisterConfig>
      <HeaderMultiSteps>
        {steps.map((step) => {
          return (
            <StepsContainer
              onClick={() => setCurrentStep(step.id)}
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
          submitButtonText={submitButtonText}
          firstColumnTitle={firstColumnTitle}
          firstColumnChilren={firstColumnChilren}
          secondColumnTitle={secondColumnTitle}
          secondColumnChilren={secondColumnChilren}
          formValues={undefined}
          registerProduct={() => registerProduct()}
          clickStep={(e) => clickStep(e)}
          setFormValues={undefined}
        />
      </ContentStep>
    </LayoutRegisterConfig>
  );
};
