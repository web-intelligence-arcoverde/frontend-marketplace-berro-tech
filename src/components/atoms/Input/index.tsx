/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from '@/assets';
import MaskedInput from 'react-input-mask';
import Image from 'next/image';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import React from "react";
import { CardInputUser, MessageErro, TextLabel } from './style';

export const Input = ({
  name,
  type,
  placeholder,
  nameLabel,
  control,
  errors,
}: any) => {
  const [showPassword, setShowPassord] = useState(false);
  const handleChangeIcon = () => {
    setShowPassord(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <CardInputUser>
          <div>
            <TextLabel>{nameLabel}</TextLabel>
            <MaskedInput
              mask={type == 'tel' ? '(99) 99999-9999' : ''}
              value={value}
              onBlur={onBlur}
              type={showPassword ? 'text' : type}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>
          {type === 'password' && (
            <button onClick={handleChangeIcon} type='button'>
              {showPassword ? (
                <Image src={ICONS.EyeOn} alt='icone mostrar password' />
              ) : (
                <Image src={ICONS.EyeOff} alt='icone esconder password' />
              )}
            </button>
          )}

          {!!errors && <MessageErro>{errors}</MessageErro>}
        </CardInputUser>
      )}
    />
  );
};
