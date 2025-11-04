import styled from 'styled-components'

interface VagaProps {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const Titulo = styled.h3`
  color: #0b3b60;
  margin-bottom: 8px;
`

const Info = styled.p`
  margin: 4px 0;
  color: #666;
`

const Vaga = ({ titulo, localizacao, nivel, modalidade }: VagaProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Info>{localizacao}</Info>
    <Info>{nivel}</Info>
    <Info>{modalidade}</Info>
  </Card>
)

export default Vaga

