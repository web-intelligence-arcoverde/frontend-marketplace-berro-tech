
'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { CardInputUser, MessageErro, TextLabel } from './style';

export const Input = ({
  type,
  placeholder,
  nameLabel,
  errors,
}: any) => {
  const [showPassword, setShowPassord] = useState(false);
  const handleChangeIcon = () => {
    setShowPassord(!showPassword);
  };

  return (
    <CardInputUser>
      <div>
        <TextLabel>{nameLabel}</TextLabel>
        <input
          type={showPassword ? 'text' : type}
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
  );
};
