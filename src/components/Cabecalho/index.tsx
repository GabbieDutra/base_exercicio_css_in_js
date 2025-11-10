import logo from '../../assets/logo.png'
import { CabecalhoContainer } from './styles'

const Cabecalho = () => {
  return (
    <CabecalhoContainer>
      <img src={logo} alt="Logo da empresa" />
    </CabecalhoContainer>
  )
}

export default Cabecalho
