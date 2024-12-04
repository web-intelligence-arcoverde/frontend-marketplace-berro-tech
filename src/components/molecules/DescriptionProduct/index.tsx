/* eslint-disable @typescript-eslint/no-explicit-any */
import { setWeightMask } from '@/util';
import {
  CardDescription,
  ContainerDescriptionProduct,
  ListDescriptionProduct,
} from './style';
import React from "react";
interface DescriptionProductProps {
  description: string;
  weight: string;
  birthDate: any;
  genetics: string;
}

export const DescriptionProduct = ({
  description,
  weight,
  birthDate,
  genetics,
}: DescriptionProductProps) => {

  return (
    <ContainerDescriptionProduct>
      <CardDescription>
        <h5>Descrição</h5>
        <p>{description}</p>
      </CardDescription>
      <ListDescriptionProduct>
        <li>
          <h6>Genética</h6>
          <h5>{genetics}</h5>
        </li>
        <li>
          <h6>Peso</h6>
          <h5>{setWeightMask(weight.toString())}</h5>
        </li>
        <li>
          <h6>Data de nascimento</h6>
          <h5>{birthDate}</h5>
        </li>
      </ListDescriptionProduct>
    </ContainerDescriptionProduct>
  );
};
