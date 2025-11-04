import Cabecalho from './components/Cabecalho/Cabecalho'
import Hero from './components/Hero/Hero'
import Formulario from './components/Formulario/Formulario'
import ListaVagas from './components/ListaVagas/ListaVagas'


import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
