import { useState } from "react";
import { FormField, Radio, Label } from "./style";

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  name: string;
}

export const FloatingLabelRadio = ({
  placeholder,
  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <Radio
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
