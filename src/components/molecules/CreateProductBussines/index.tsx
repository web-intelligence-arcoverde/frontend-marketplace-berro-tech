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
            placeholder="Quantidade de animais"
          />
          <FloatingLabelInput
            required
            isWhite
            type="text"
            id="price"
            name="price"
            placeholder="Preço"
            maxLength={14}
          />
          <FloatingLabelInput
            required
            isWhite
            type="number"
            id="installments"
            name="installments"
            placeholder="Parcelas"
          />
    </div>
  )
}
