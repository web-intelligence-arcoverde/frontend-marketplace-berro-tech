import {
  CardDescription,
  ContainerDescriptionProduct,
  ListDescriptionProduct,
} from "./style";

interface DescriptionProductProps {
  description: string;
  weight: string;
  birthDate: string;
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
          <h5>{weight} Kg</h5>
        </li>
        <li>
          <h6>Data de nascimento</h6>
          <h5>{birthDate}</h5>
        </li>
      </ListDescriptionProduct>
    </ContainerDescriptionProduct>
  );
};
