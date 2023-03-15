import {
  ContentStep,
  HeaderMultiSteps,
  LayoutRegisterConfig,
  TitleStep,
} from "./style";
import { useState } from "react";

interface Step {
  id: number;
  name: string;
  step: string;
  component: React.FunctionComponent<{ formValues: any; setFormValues: any }>;
}

interface MultiStepFormProps {
  steps: Step[];
  titleStep: string;
  step?: number;
  onSubmit: (formValues: any) => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  onSubmit,
  titleStep,
  step,
}) => {
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  step = currentStep;

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const clickStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <LayoutRegisterConfig>
      <HeaderMultiSteps>
        {steps.map((step) => (
          <div
            className={currentStep === step.id ? "active" : ""}
            key={step.id}
            onClick={() => {
              clickStep(step.id);
            }}
          >
            <h6>{step.step}</h6>
            <h4>{step.name}</h4>
          </div>
        ))}
      </HeaderMultiSteps>
      <ContentStep>
        <TitleStep>{titleStep}</TitleStep>
        {currentStep === 1 &&
          typeof steps[currentStep - 1].component === "function" &&
          steps[currentStep - 1].component({ formValues, setFormValues })}
        {currentStep === 2 &&
          typeof steps[currentStep - 1].component === "function" &&
          steps[currentStep - 1].component({ formValues, setFormValues })}
        {currentStep === 3 &&
          typeof steps[currentStep - 1].component === "function" &&
          steps[currentStep - 1].component({ formValues, setFormValues })}
      </ContentStep>
    </LayoutRegisterConfig>
  );
};
