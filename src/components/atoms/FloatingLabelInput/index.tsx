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
  error?: boolean;
  errorMessage?: string;
  value?: string;
}

export const FloatingLabelInput = ({
  placeholder,
  ...props
}: FloatingLabelInputProps) => {
  //@ts-ignore
  const [value, setValue] = useState<string>(props?.value);
  const [passwordType, setPasswordType] = useState<string>('password');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleChangeValueMask = () => {
    switch (props.name) {
      case 'price':
        return setMoneyMask(value);
      case 'weight':
        return setWeightMask(value);
      case 'phone':
        return setCellphoneMask(value);
      default:
        return value;
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.type === 'number') {
      const value = Number(event.currentTarget.value + event.key);
      if (value < 1 || value > 99) {
        event.preventDefault();
      }
    }
  };

  const {error, errorMessage} = props;

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <FormField>
        <Input
          name={props.name}
          type={props.isPassword ? passwordType : props.type}
          required={props.required}
          isWhite={props.isWhite}
          maxLength={props.maxLength}
          active={!value}
          value={handleChangeValueMask()}
          onChange={handleInputChange}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
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
      {error && (
        <p
          style={{
            fontSize: '12px',
            marginLeft: '10px',
            color: 'red',
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
