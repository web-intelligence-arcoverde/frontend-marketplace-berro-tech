import { useState } from "react";
import Information from "./Information";
import Location from "./Location";
import Photos from "./Photos";

export const RegisterProduct = () => {
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    // lógica de envio do formulário
  };

  return (
    <div>
      {currentStep === 1 && (
        <Information formValues={formValues} setFormValues={setFormValues} />
      )}
      {currentStep === 2 && (
        <Photos formValues={formValues} setFormValues={setFormValues} />
      )}
      {currentStep === 3 && (
        <Location formValues={formValues} setFormValues={setFormValues} />
      )}
      {currentStep < 3 ? (
        <button onClick={handleNext}>Próximo</button>
      ) : (
        <button onClick={handleSubmit}>Enviar</button>
      )}
    </div>
  );
};
