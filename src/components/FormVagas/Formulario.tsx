import styled from 'styled-components'
import { useState } from 'react'

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32px 0;
`

const Input = styled.input`
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
`

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  background-color: #0b3b60;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0d4d80;
  }
`

interface FormularioProps {
  aoPesquisar: (termo: string) => void
}

const Formulario = ({ aoPesquisar }: FormularioProps) => {
  const [termo, setTermo] = useState('')

  const aoSubmeter = (e: React.FormEvent) => {
    e.preventDefault()
    aoPesquisar(termo)
  }

  return (
    <FormContainer onSubmit={aoSubmeter}>
      <Input
        type="text"
        placeholder="Digite o cargo ou área"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  )
}

export default Formulario
