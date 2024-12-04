import { useAppSelector } from "@/hooks/useSelectorHook";
import { ModalMessage } from "../ModalMessage";
import React from "react";
interface ModalGenericProps {
  messageSucess?: string;
}

export const ModalGeneric = ({ messageSucess }: ModalGenericProps) => {
  const message = useAppSelector((state) => state.auth.error);

  return (
    <ModalMessage
      typeMessage={message ? message.type : ""}
      messageError={message ? message.message : ""}
      messageSucess={messageSucess}
    />
  );
};
