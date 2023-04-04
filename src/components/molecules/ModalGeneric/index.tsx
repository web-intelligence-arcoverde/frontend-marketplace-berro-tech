import { useAppSelector } from "@/hooks/useSelectorHook";
import { ModalMessage } from "../ModalMessage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearErros } from "@/store/reducer/auth/actions";

interface ModalGenericProps {
  typeMessage: "error" | "sucess" | "loading";
  messageSucess?: string;
}

export const ModalGeneric = ({
  typeMessage,
  messageSucess,
}: ModalGenericProps) => {
  const message = useAppSelector((state) => state.auth.error);
  const dispath = useDispatch()

  useEffect(()=>{
    dispath(clearErros())
  },[])


  return (
    <>
      <ModalMessage
        typeMessage={typeMessage}
        messageError={message !== null ? message : ""}
        messageSucess={messageSucess}
      />
    </>
  );
};
