/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  FormField,
  Input,
  Label,
  EyeButton,
  ErrorMessage,
  ContainerField,
} from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';

interface FloatingLabelInputProps {
  placeholder: string;
  id: string | undefined;
  name: string;
  type: string;
  isPassword?: boolean;
  isWhite?: boolean;
  maxLength?: number;
  required?: boolean;
  inputvalue?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;

  max?: any;
  maskType?: 'phone' | 'weight' | 'price' | 'date';
  value?: string;
  setValue?: any;
}

export const FloatingLabelInput = ({
  placeholder,
  max,
  value,
  setValue,
  name,
  ...props
}: FloatingLabelInputProps) => {
  const [passwordType, setPasswordType] = useState<string>('password');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.type === 'number') {
      const value = Number(event.currentTarget.value + event.key);
      if (value < 1 || value > 99) {
        event.preventDefault();
      }
    }
  };

  const { error, errorMessage } = props;
  return (
    <ContainerField>
      <FormField>
        <Input
          name={name}
          type={props.isPassword ? passwordType : props.type}
          required={props.required}
          isWhite={props.isWhite}
          maxLength={props.maxLength}
          active={!value}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          max={max}
        />
        <Label active={!value} htmlFor={props.id}>
          {placeholder}
        </Label>
        {passwordType === 'password' && props.isPassword && (
          <EyeButton onClick={() => setPasswordType('text')}>
            <Image src={ICONS.EyeOn} alt='icone de vizualizar senha' />
          </EyeButton>
        )}
        {passwordType === 'text' && props.isPassword && (
          <EyeButton onClick={() => setPasswordType('password')}>
            <Image src={ICONS.EyeOff} alt='icone de vizualizar senha' />
          </EyeButton>
        )}
      </FormField>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContainerField>
  );
};
