import { Container, CheckboxInput } from './style';

export const Checkbox = ({
  name,
  onCheck,
}: {
  name: string;
  onCheck: (e: { name: string; value: boolean }) => {};
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
