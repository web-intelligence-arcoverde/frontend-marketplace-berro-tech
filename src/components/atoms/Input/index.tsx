import { InputProps } from "@/types";
import { CardInput } from "./style";

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  width,
}: InputProps) => {
  return (
    <CardInput width={width}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </CardInput>
  );
};

export default Input;
