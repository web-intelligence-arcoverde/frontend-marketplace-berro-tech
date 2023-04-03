import { Button } from "../Button";
import { CardButtons } from "./style";

interface ButtonControlProps {
  editItem: () => void;
  removeItem: () => void;
}

export const ButtonsControl = ({
  editItem,
  removeItem,
}: ButtonControlProps) => {
  return (
    <CardButtons>
      <Button onClick={editItem}>Editar</Button>
      <Button onClick={removeItem}>Remover</Button>
    </CardButtons>
  );
};
