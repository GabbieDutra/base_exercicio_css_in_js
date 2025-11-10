import { VagaContainer, Titulo, Localizacao, Botao } from './styles'

export type VagaProps = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: VagaProps) => {
  return (
    <VagaContainer>
      <Titulo>{titulo}</Titulo>
      <Localizacao>{localizacao}</Localizacao>

      <p>
        {nivel} • {modalidade}
      </p>
      <p>
        R$ {salarioMin} - R$ {salarioMax}
      </p>

      <ul>
        {requisitos.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <Botao>Ver detalhes</Botao>
    </VagaContainer>
  )
}

export default Vaga
