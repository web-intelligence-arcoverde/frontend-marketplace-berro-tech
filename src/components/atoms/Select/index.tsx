import React from 'react'
import { SelectContainer, SelectProduct } from './style'

export const Select = () => {
  return (
    <SelectContainer>
      <SelectProduct placeholder="Orderna por" name="ordination" id="ordination">
        <option>Orderna por</option>
        <option value="newer">Mais recentes</option>
        <option value="oldest">Mais antigos</option>
      </SelectProduct>
    </SelectContainer>
  )
}
