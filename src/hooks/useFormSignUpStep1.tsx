import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ErrorMessage } from "../locale";

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

    phone: yup.string().required(ErrorMessage["phone-required"]),
  })
  .required();

export const useHookFormSignUp1 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      repeatPassword: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(control));

  return { onSubmit, control, errors };
};
