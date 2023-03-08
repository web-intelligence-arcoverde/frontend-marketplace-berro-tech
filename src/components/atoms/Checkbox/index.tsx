import { useState } from "react"
import { Container, CheckboxInput } from "./style"

export const Checkbox = ({ name }: { name: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>()
  return (
    <Container>
      <CheckboxInput onChange={(e) => { setIsChecked(e.target.checked) }} id={`filter-${name}`} type="checkbox" />
      <label htmlFor={`filter-${name}`}>
        {name}
      </label>
    </Container>
  )
}
