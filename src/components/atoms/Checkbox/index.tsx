/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, CheckboxInput } from './style';
import React from 'react';
export const Checkbox = ({
  name,
  onCheck,
}: {
  name: string;
  onCheck: (item: any) => void;
}) => {
  return (
    <Container>
      <CheckboxInput
        onChange={(e) => {
          onCheck({ name: name, value: e.target.checked });
        }}
        id={`filter-${name}`}
        type='checkbox'
      />
      <label htmlFor={`filter-${name}`}>{name}</label>
    </Container>
  );
};
