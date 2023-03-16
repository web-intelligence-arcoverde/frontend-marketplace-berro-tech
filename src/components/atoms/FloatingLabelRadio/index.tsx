import { useState } from "react";
import { CardOptions, FormField, Input, Label } from "./style";

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  labels: string[];
}

export const FloatingLabelRadio = ({
  placeholder,
  labels,
  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");
  const [openForm, setOpenForm] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setOpenForm(!openForm);
  };

  return (
    <FormField>
      <Input
        open={openForm}
        active={!value}
        value={value}
        placeholder={placeholder}
        type={"text"}
        {...props}
        onClick={handleClick}
      />
      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>

      {openForm && (
        <CardOptions>
          {labels.map((item, index) => (
            <label key={index}>
              <input name={item} type="radio" />
              {item}
            </label>
          ))}
        </CardOptions>
      )}
    </FormField>
  );
};
