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
}

export const FloatingLabelRadio = ({
  placeholder,
  labels,
  ...props
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState<any>('');
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
    setValue(item);
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
        value={value?.name}
        placeholder={placeholder}
        type={'text'}
        {...props}
        onClick={handleClick}
      />

      <Label active={!value} htmlFor={props.id}>
        {placeholder}
      </Label>

      {openForm && (
        <CardOptions isWhite={props.isWhite}>
          {labels.map((item) => (
            <label key={`${item.id} - ${item.name}`}>
              <input
                name={props.name}
                type='radio'
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
