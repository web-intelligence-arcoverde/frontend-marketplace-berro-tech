import { ICONS } from "@/assets";
import { InputUserProps } from "@/types/IInputUserProps";
import Image from "next/image";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { CardInputUser, Input, TextLabel } from "./style";

export const InputUser = ({
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
          <>
            <TextLabel>{nameLabel}</TextLabel>
            <Input
              value={value}
              onBlur={onBlur}
              type={showPassword ? "text" : type}
              onChange={onChange}
              placeholder={placeholder}
            />
          </>
          {type === "password" && (
            <button onClick={handleChangeIcon}>
              {showPassword ? (
                <Image src={ICONS.EyeOn} alt="icone mostrar password" />
              ) : (
                <Image src={ICONS.EyeOff} alt="icone esconder password" />
              )}
            </button>
          )}
          {!!errors && <span>{errors}</span>}
        </CardInputUser>
      )}
    />
  );
};
