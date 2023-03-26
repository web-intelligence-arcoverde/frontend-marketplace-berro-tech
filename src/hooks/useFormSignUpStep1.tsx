import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ErrorMessage } from "../locale";
import { currentStep,addUser} from "@/store/reducer/user/actions";
import { useAppDispatch } from "./useSelectorHook";
import { IRegisterUserProps } from "@/store/reducer/user/types";

const schema = yup
  .object({
    name: yup
      .string()
      .required(ErrorMessage["name-required"])
      .min(3, ErrorMessage["name-min"])
      .max(40, ErrorMessage["name-max"]),

    email: yup
      .string()
      .required(ErrorMessage["email-required"])
      .email(ErrorMessage["email-valid"]),

    phone: yup
      .string()
      .required(ErrorMessage["phone-required"])
      .test("phone-test", "Informe um telefone valido", (value) => {
        if (value && value.includes("_")) {
          return false;
        }
        return true;
      }),
  })
  .required();

export const useHookFormSignUp1 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
 
  });
  const dispatch = useAppDispatch();
  const nextStep = () => {
    dispatch(currentStep({step:2}));
  };

  const onSubmit = handleSubmit((data:IRegisterUserProps) => {
    dispatch(addUser(data))
    nextStep();
  
  });

  return { onSubmit, control, errors, nextStep };
};


