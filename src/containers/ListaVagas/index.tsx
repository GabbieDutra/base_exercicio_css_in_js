import Vaga from '../../components/Vaga'
import { Lista } from './styles'

type VagaType = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

type Props = {
  vagas: VagaType[]
}

const ListaVagas = ({ vagas }: Props) => (
  <Lista>
    {vagas.map((vaga, index) => (
      <Vaga
        key={index}
        titulo={vaga.titulo}
        localizacao={vaga.localizacao}
        nivel={vaga.nivel}
        modalidade={vaga.modalidade}
        salarioMin={vaga.salarioMin}
        salarioMax={vaga.salarioMax}
        requisitos={vaga.requisitos}
      />
    ))}
  </Lista>
)

export default ListaVagas
