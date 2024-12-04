/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from '@/assets';
import { useCallback, useState } from 'react';
import { ArrowDown, CardOptions, FormField, Input, Label } from './style';
import React from 'react';
interface FloatingLabelInputProps {
  placeholder: string;
  name?: string;
  id?: string | undefined;
  labels: any[];
  isWhite?: boolean;
  required?: boolean;
  setOption?: (e: string) => void;
  disabled?: boolean;
  value: string;
  setValue?: any;
  setItem?: any;
}

interface ILabel {
  id: string;
  name: string;
}

export const FloatingLabelRadio = ({
  placeholder,
  labels,
  value,
  setValue,
  name,
  setItem,
  setOption,
  isWhite = false,
  required = false,
  disabled = false,
}: FloatingLabelInputProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = useCallback(() => {
    if (!disabled) {
      setOpenForm((prev) => !prev);
    }
  }, [disabled]);

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, item?: ILabel) => {
      setSelectedOption(event.target.value);
      if (setOption) {
        setOption(event.target.value);
      }
      setValue(event);
      setOpenForm(false);

      if (setItem) {
        setItem(item);
      }
    },
    [setOption, setValue, setItem],
  );


  return (
    <FormField>
      <Input
        disabled={disabled}
        required={required}
        isWhite={isWhite}
        open={openForm}
        active={!value}
        value={value}
        placeholder={placeholder}
        type='text'
        autoComplete="off"
        onClick={handleClick}
        name={name}
      />

      <Label active={!value} htmlFor={name}>
        {placeholder}
      </Label>

      {openForm && (
        <CardOptions isWhite={isWhite}>
          {labels.map((item) => (
            <label key={item.id} htmlFor={name}>
              <input
                name={name}
                type='radio'
                value={item.name}
                checked={selectedOption === item.name}
                onChange={(event) => handleOptionChange(event, item)}
              />
              {item.name}
            </label>
          ))}
        </CardOptions>
      )}

      <ArrowDown onClick={handleClick} src={ICONS.Up} alt='seta para cima' />
    </FormField>
  );
};
