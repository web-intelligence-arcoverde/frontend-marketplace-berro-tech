import { FloatingLabelInput, FloatingLabelRadio } from '@/components'

export const CreateProductBussines = () => {

  return (
    <div>
        <FloatingLabelRadio
            required
            isWhite
            placeholder={"Tipo de venda"}
            name='sellType'
            id="sellType"
            labels={["Em lote", "Por unidade"]}
          />
          <FloatingLabelInput
            required
            isWhite
            type="number"
            id="quantity"
            name="quantity"
            placeholder="quantidade de animais"
          />
          <FloatingLabelInput
            required
            isWhite
            type="text"
            id="price"
            name="price"
            placeholder="preço"
          />
          <FloatingLabelInput
            required
            isWhite
            type="number"
            id="installments"
            name="installments"
            placeholder="parcelas"
          />
    </div>
  )
}
