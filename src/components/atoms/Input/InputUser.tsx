import { ICONS } from "@/assets";
import { InputUserProps } from "@/types/IInputUserProps";
import Image from "next/image";
import { useState } from "react";

import { CardInputUser, Input, TextLabel } from "./style";

export const InputUser = ({
  name,
  type,
  onChange,
  value,
  placeholder,
  required,
  nameLabel,
  maxLength,
}: InputUserProps) => {
  const [showPassword, setShowPassord] = useState(false);
  const handleChangeIcon = () => {
    setShowPassord(!showPassword);
  };
  return (
    <CardInputUser>
      <div>
        <TextLabel>{nameLabel}</TextLabel>
        <Input
          name={name}
          type={showPassword ? "text" : type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
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
    </CardInputUser>
  );
};
