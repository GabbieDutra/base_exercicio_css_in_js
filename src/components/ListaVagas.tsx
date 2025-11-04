import styled from 'styled-components'
import Vaga from './Vaga/Vaga'

const Container = styled.section`
  padding: 32px;
  background-color: #f9f9f9;
`

const Titulo = styled.h2`
  color: #0b3b60;
  text-align: center;
  margin-bottom: 24px;
`

const VagasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

interface VagaItem {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
}

interface ListaVagasProps {
  vagas: VagaItem[]
}

const ListaVagas = ({ vagas }: ListaVagasProps) => (
  <Container>
    <Titulo>Vagas em Destaque</Titulo>
    <VagasContainer>
      {vagas.map((vaga) => (
        <Vaga
          key={vaga.id}
          titulo={vaga.titulo}
          localizacao={vaga.localizacao}
          nivel={vaga.nivel}
          modalidade={vaga.modalidade}
        />
      ))}
    </VagasContainer>
  </Container>
)

export default ListaVagas
