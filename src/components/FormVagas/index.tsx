import { Form, Input, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

function FormVagas({ aoPesquisar }: Props) {
  return (
    <Form
      onSubmit={(evento) => {
        evento.preventDefault()
        const termo = (evento.target as HTMLFormElement).pesquisa.value
        aoPesquisar(termo)
      }}
    >
      <Input name="pesquisa" type="search" placeholder="Digite uma vaga" />
      <Botao type="submit">Buscar</Botao>
    </Form>
  )
}

export default FormVagas
