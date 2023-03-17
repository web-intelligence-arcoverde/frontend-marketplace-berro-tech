import { useState } from "react";
import { FormField, Input, Label } from "./style";

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  name: string;
}

export const FloatingLabelInput = ({
  placeholder,

  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <Input
        active={!value}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        {...props}
      />
      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>
    </FormField>
  );
};
