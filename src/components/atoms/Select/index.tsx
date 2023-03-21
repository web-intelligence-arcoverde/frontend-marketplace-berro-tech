import React from 'react'
import { SelectProduct } from './style'

export const Select = () => {
  return (
      <SelectProduct placeholder="Orderna por" name="ordination" id="ordination">
        <option>Ordernar por</option>
        <option value="newer">Mais recentes</option>
        <option value="oldest">Mais antigos</option>
      </SelectProduct>
  )
}
