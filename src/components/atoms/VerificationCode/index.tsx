'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, ChangeEvent } from 'react';
import { CardInputs } from './style';
import React from 'react';
interface IVerificationCode {
  code: string[];
  setCode: any;
}

export const VerificationCode = ({ code, setCode }: IVerificationCode) => {
  const codeInputs = useRef<Array<HTMLInputElement>>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value) {
      const newCode = [...code];
      newCode[index] = value.slice(0, 1);
      setCode(newCode);
      if (index < codeInputs.current.length - 1 && value) {
        codeInputs.current[index + 1].focus();
      }
    }
  };

  const KEY_DELETE = 'Backspace';

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const indexLetter = index;

    if (e.key === KEY_DELETE && indexLetter >= 0) {
      if (indexLetter > 0) {
        codeInputs.current[indexLetter - 1].focus();
      } else {
        codeInputs.current[0].focus();
      }
      const newCode = [...code];
      newCode[indexLetter] = '';
      setCode(newCode);
    }
  };

  return (
    <CardInputs>
      {code.map((digit, index) => (
        <input
          key={index}
          type='text'
          maxLength={1}
          placeholder='-'
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(input) => {
            if (input) {
              codeInputs.current[index] = input;
            }
          }}
        />
      ))}
    </CardInputs>
  );
};
