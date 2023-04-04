import {setCellphoneMask, setMoneyMask, setWeightMask} from '@/util';
import {useState} from 'react';
import {FormField, Input, Label, EyeButton} from './style';
import Image from 'next/image';
import {ICONS} from '@/assets';

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
}

export const FloatingLabelInput = ({
  placeholder,
  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleChangeValueMask = () => {
    switch (props.name) {
      case 'price':
        return setMoneyMask(value);
      case 'Weight':
        return setWeightMask(value);
      case 'cellphone':
        return setCellphoneMask(value);
      default:
        return value;
    }
  };

  return (
    <FormField>
      <Input
        type={props.isPassword ? passwordType : props.type}
        required={props.required}
        isWhite={props.isWhite}
        maxLength={props.maxLength}
        active={!value}
        value={handleChangeValueMask()}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
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
      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>
    </FormField>
  );
};
