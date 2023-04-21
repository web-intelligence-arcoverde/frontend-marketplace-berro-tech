import {format, isValid} from 'date-fns';

export const formatDate = (value: Date, dateFormat: string = 'dd/MM/yyyy') =>
  isValid(value) ? format(value, dateFormat) : '';
