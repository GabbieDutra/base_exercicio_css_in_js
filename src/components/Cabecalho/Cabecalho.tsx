import styled from 'styled-components'

const Header = styled.header`
  background-color: #0b3b60;
  color: #fff;
  padding: 24px 0;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-top: 8px;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
    <Subtitle>Encontre a vaga dos seus sonhos</Subtitle>
  </Header>
)

export default Cabecalho
