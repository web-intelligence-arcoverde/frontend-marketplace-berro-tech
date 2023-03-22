import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "../locale";

const schema = yup
  .object({
    password: yup
      .string()
      .required(ErrorMessage["password-required"])
      .min(8, ErrorMessage["password-min"]),

    repeatPassword: yup
      .string()
      .required(ErrorMessage["confirmation-password-required"])
      .min(8, ErrorMessage["password-min"])
      .oneOf(
        [yup.ref("password")],
        ErrorMessage["confirmation-password-equal-password"]
      ),
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

  const onSubmit = handleSubmit((data) => console.log(data));

  return { onSubmit, control, errors };
};
