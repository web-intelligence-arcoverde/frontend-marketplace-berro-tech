import { setMoneyMask, setWeightMask } from "@/util";
import { useState } from "react";
import { FormField, Textarea, Label } from "./style";

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  name: string;
  type: string;
  isWhite?:boolean;
  required?:boolean;
  inputvalue?: (e:any)=> void;
}

export const FloatingLabelTextarea = ({
  placeholder,
  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <FormField>
      <Textarea
        required={props.required}
        isWhite={props.isWhite}
        active={!value}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        {...props}
        rows={3}
      />
      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>
    </FormField>
  );
};
