import { Control, FieldValues } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  name: string;
  type: string;
  placeholder: string;
  nameLabel: string;
  control?: Control<T>;
  errors?: string;
}
