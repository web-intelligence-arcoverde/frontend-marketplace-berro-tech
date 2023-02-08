import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

import { CardInputUser, Input, TextLabel } from "./style";

interface InputUserProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
  required?: boolean;
  nameLabel:string
}

const InputUser = ({
  name,
  type,
  onChange,
  value,
  placeholder,
  required,
  nameLabel
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

export default InputUser;
