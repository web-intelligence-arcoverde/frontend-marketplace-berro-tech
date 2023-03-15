import { LayoutRegisterConfig } from "./style";
import { useState } from "react";

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
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <LayoutRegisterConfig>
      <header>
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
      </header>
      {currentStep === 1 &&
        steps[currentStep - 1].component({ formValues, setFormValues })}
      {currentStep === 2 &&
        steps[currentStep - 1].component({ formValues, setFormValues })}
      {currentStep === 3 &&
        steps[currentStep - 1].component({ formValues, setFormValues })}
      {currentStep < steps.length ? (
        <button onClick={handleNext}>Próximo</button>
      ) : (
        <button onClick={handleSubmit}>Enviar</button>
      )}
    </LayoutRegisterConfig>
  );
};
