import { ICONS } from "@/assets";
import { InputUserProps } from "@/types/IInputUserProps";
import Image from "next/image";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { CardInputUser, MessageErro, StyleInput, TextLabel } from "./style";

export const Input = ({
  name,
  type,
  placeholder,
  nameLabel,
  control,
  errors,
}: InputUserProps) => {
  const [showPassword, setShowPassord] = useState(false);
  const handleChangeIcon = () => {
    setShowPassord(!showPassword);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <CardInputUser>
          <div>
            <TextLabel>{nameLabel}</TextLabel>
            <StyleInput
              value={value}
              onBlur={onBlur}
              type={showPassword ? "text" : type}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>

          {type === "password" && (
            <button onClick={handleChangeIcon}>
              {showPassword ? (
                <Image src={ICONS.EyeOn} alt="icone mostrar password" />
              ) : (
                <Image src={ICONS.EyeOff} alt="icone esconder password" />
              )}
            </button>
          )}
          {!!errors && <MessageErro>{errors}</MessageErro>}
        </CardInputUser>
      )}
    />
  );
};
