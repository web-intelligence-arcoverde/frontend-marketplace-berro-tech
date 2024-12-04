/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCellphoneMask, setMoneyMask, setWeightMask } from '@/util';
import { FormField, Input, Label, ErrorMessage, ContainerField } from './style';
import React from 'react';
const handleDate = (value: string) => {
  const selectedDate = new Date(value);
  const currentYear = new Date().getFullYear();

  if (selectedDate.getFullYear() > currentYear) {
    alert(`Selecione uma data até ${currentYear} ou continue com a data atual`);
    const defaultDate = new Date();
    return defaultDate.toISOString().slice(0, 10);
  }
  return selectedDate.toISOString().slice(0, 10);
};

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  id: string | undefined;
  name: string;
  type: string;

  isWhite?: boolean;
  maxLength?: number;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  max?: any;

  maskType?: 'phone' | 'weight' | 'price' | 'date';
  value?: any;
  setValue?: any;
}

interface MaskType {
  [key: string]: {
    setMask: (value: string) => string;
    handleKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };
}

const maskTypes: MaskType = {
  price: {
    setMask: setMoneyMask,
  },
  weight: {
    setMask: setWeightMask,
  },
  date: {
    setMask: handleDate,
  },
  phone: {
    setMask: setCellphoneMask,
    handleKeyPress: (event) => {
      const value = Number(event.currentTarget.value + event.key);
      if (value < 1 || value > 99) {
        event.preventDefault();
      }
    },
  },
};

const getMaskedValue = (value: string, maskType?: string) => {
  if (!maskType) return value;

  const mask = maskTypes[maskType];

  if (!mask) return value;

  return mask.setMask(value);
};

export const FloatingInputMask = ({
  placeholder,
  max,
  maskType = 'phone',
  value,
  setValue,
  error,
  errorMessage,
  name,
  ...props
}: FloatingLabelInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(getMaskedValue(event.target.value, maskType));
  };

  return (
    <ContainerField>
      <FormField>
        <Input
          name={name}
          required={props.required}
          isWhite={props.isWhite}
          maxLength={props.maxLength}
          active={!value}
          value={getMaskedValue(value, maskType)}
          onChange={handleInputChange}
          placeholder={placeholder}
          max={max}
          {...props}
        />
        <Label active={!value} htmlFor={props.id}>
          {placeholder}
        </Label>
      </FormField>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContainerField>
  );
};
