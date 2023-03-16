import { ContentStep, HeaderMultiSteps, LayoutRegisterConfig } from "./style";
import { useEffect, useState } from "react";

interface Step {
  id: number;
  name: string;
  step: string;
  component: React.FunctionComponent<{ formValues: any; setFormValues: any }>;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (formValues: any) => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const clickStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
    console.log("teste", currentStep);
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  const ComponentStep = steps[currentStep - 1].component;

  return (
    <LayoutRegisterConfig>
      <HeaderMultiSteps>
        {steps.map((step) => {
          return (
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
          );
        })}
      </HeaderMultiSteps>
      <ContentStep>
        <ComponentStep formValues={undefined} setFormValues={undefined} />
      </ContentStep>
    </LayoutRegisterConfig>
  );
};
