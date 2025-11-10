import Vaga, { VagaProps } from '../../components/Vaga'
import { Lista } from './styles'

type Props = {
  vagas: VagaProps[]
}

const ListaVagas = ({ vagas }: Props) => {
  return (
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
}

export default ListaVagas
