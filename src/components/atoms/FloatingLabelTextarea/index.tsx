/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormField, Textarea, Label } from './style';

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  name: string;
  type: string;
  isWhite?: boolean;
  required?: boolean;
  value?: string;
  setValue?: any;

  inputvalue?: (e: any) => void;
}

export const FloatingLabelTextarea = ({
  placeholder,
  setValue,
  value,
  name,
  ...props
}: FloatingLabelInputProps) => {
  return (
    <FormField>
      <Textarea
        required={props.required}
        isWhite={props.isWhite}
        active={!value}
        value={value}
        name={name}
        onChange={setValue}
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
