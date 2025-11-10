import { useState } from 'react'
import { FormContainer, Campo, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    aoPesquisar(termo)
  }

  return (
    <FormContainer onSubmit={submit}>
      <Campo
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Digite o título da vaga"
      />
      <Botao type="submit">Pesquisar</Botao>
    </FormContainer>
  )
}

export default FormVagas
