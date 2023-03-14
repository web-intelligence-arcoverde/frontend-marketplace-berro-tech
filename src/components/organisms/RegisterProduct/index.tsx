import { LayoutRegisterConfig } from "@/style";
import { useState } from "react";
import {
  RegisterInformation,
  RegisterLocation,
  RegisterPhotos,
} from "@/components";

export const RegisterProduct = () => {
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const initialValues = {};
  const steps = [RegisterInformation, RegisterPhotos, RegisterLocation];
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    // lógica de envio do formulário
  };

  return (
    <LayoutRegisterConfig>
      <header>
        <div>
          <h6>Passo 1</h6>
          <h4>Informações</h4>
        </div>
        <div>
          <h6>Passo 2</h6>
          <h4>Fotos e vídeos</h4>
        </div>
        <div>
          <h6>Passo 1</h6>
          <h4>Localização</h4>
        </div>
      </header>
      {currentStep === 1 && (
        <RegisterInformation
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {currentStep === 2 && (
        <RegisterPhotos formValues={formValues} setFormValues={setFormValues} />
      )}
      {currentStep === 3 && (
        <RegisterLocation
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {currentStep < 3 ? (
        <button onClick={handleNext}>Próximo</button>
      ) : (
        <button onClick={handleSubmit}>Enviar</button>
      )}
    </LayoutRegisterConfig>
  );
};
