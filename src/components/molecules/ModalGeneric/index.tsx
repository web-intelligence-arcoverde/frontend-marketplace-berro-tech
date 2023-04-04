import { useAppSelector } from "@/hooks/useSelectorHook";
import { ModalMessage } from "../ModalMessage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearErros } from "@/store/reducer/auth/actions";

interface ModalGenericProps {
  messageSucess?: string;
}

export const ModalGeneric = ({
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
        typeMessage={!!message ? message.type : ""}
        messageError={!!message ? message.message : ""}
        messageSucess={messageSucess}
      />
    </>
  );
};
