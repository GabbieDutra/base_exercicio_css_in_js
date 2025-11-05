import { VagaContainer } from './styles'

type Props = {
  titulo: string
  localizacao: string
}

const Vaga = ({ titulo, localizacao }: Props) => (
  <VagaContainer>
    <h3>{titulo}</h3>
    <span>{localizacao}</span>
    <a href="#">Ver detalhes</a>
  </VagaContainer>
)

export default Vaga
