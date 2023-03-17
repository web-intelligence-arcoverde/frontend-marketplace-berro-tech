import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { ArrowDown, CardOptions, FormField, Input, Label } from "./style";

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
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    setOpenForm(!openForm);
  };
  const clearField = () => {
    setValue("");
    setSelectedOption("");
    setOpenForm(false);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setValue(event.target.defaultValue);
    setOpenForm(false);
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
              <input
                name="radio-options"
                type="radio"
                value={item}
                checked={selectedOption === item}
                onChange={handleOptionChange}
                onClick={() => {
                  handleOptionChange;
                }}
              />
              {item}
            </label>
          ))}
        </CardOptions>
      )}
      {openForm || value.length > 0 ? (
        <Image onClick={clearField} src={ICONS.Excluir} alt="excluir" />
      ) : (
        <ArrowDown onClick={handleClick} src={ICONS.Up} alt="seta para cima" />
      )}
    </FormField>
  );
};
