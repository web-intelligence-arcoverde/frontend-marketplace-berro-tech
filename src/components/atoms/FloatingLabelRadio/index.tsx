import {ICONS} from '@/assets';
import Image from 'next/image';
import {useState} from 'react';
import {ArrowDown, CardOptions, FormField, Input, Label} from './style';

interface FloatingLabelInputProps {
  placeholder: string;

  name?: string;
  id?: string | undefined;
  labels: any[];
  isWhite?: boolean;
  required?: boolean;
  setOption?: (e: string) => void;
  disable?: boolean;
  value: string;
  setValue?: any;
}

export const FloatingLabelRadio = ({
  placeholder,
  labels,
  value,
  setValue,
  name,
  ...props
}: FloatingLabelInputProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = () => {
    !props.disable && setOpenForm(!openForm);
  };

  const clearField = () => {
    setValue('');
    setSelectedOption('');
    setOpenForm(false);
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item?: any,
  ) => {
    setSelectedOption(event.target.value);
    props.setOption && props.setOption(event.target.value);
    setValue(event);
    setOpenForm(false);
  };

  return (
    <FormField>
      <Input
        disabled={props.disable}
        required={props.required}
        isWhite={props.isWhite}
        open={openForm}
        active={!value}
        value={value}
        placeholder={placeholder}
        type='text'
        onClick={handleClick}
        name={name}
        {...props}
      />

      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>

      {openForm && (
        <CardOptions isWhite={props.isWhite}>
          {labels.map((item) => (
            <label key={`${item.id}-${item.name}`}>
              <input
                name={name}
                type='radio'
                defaultValue=''
                value={item.name}
                checked={selectedOption === item}
                onChange={(event) => handleOptionChange(event, item)}
                onClick={() => {
                  handleOptionChange;
                }}
              />
              {item.name}
            </label>
          ))}
        </CardOptions>
      )}
      {openForm || value.length > 0 ? (
        <Image onClick={clearField} src={ICONS.Excluir} alt='excluir' />
      ) : (
        <ArrowDown onClick={handleClick} src={ICONS.Up} alt='seta para cima' />
      )}
    </FormField>
  );
};
