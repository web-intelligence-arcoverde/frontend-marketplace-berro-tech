import { useState } from "react";
import { ButtonToogle, CardToogle, ContainerNotification } from "./style";

export const Notification = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <ContainerNotification>
      <p>
        Suas publicações ficam ativas por 1 mês, depois desse período você será
        notificado por email para renovar
      </p>
      <CardToogle>
        <p>Ativar renovação automática</p>
        <ButtonToogle isOn={state} onClick={handleClick} />
      </CardToogle>
    </ContainerNotification>
  );
};
