import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './containers/ListaVagas'

const App = () => {
  const aoPesquisar = (termo: string) => {
    console.log('Buscar com:', termo)
  }

  const vagas = [
    {
      titulo: 'Desenvolvedor Front-End',
      localizacao: 'São Paulo - SP',
      nivel: 'Júnior',
      modalidade: 'Presencial',
      salarioMin: 2500,
      salarioMax: 4000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      titulo: 'UI/UX Designer',
      localizacao: 'Remoto',
      nivel: 'Pleno',
      modalidade: 'PJ',
      salarioMin: 3500,
      salarioMax: 6000,
      requisitos: ['Figma', 'Design System', 'Prototipação']
    }
  ]

  return (
    <>
      <Cabecalho />
      <Hero />
      <FormVagas aoPesquisar={aoPesquisar} />
      <ListaVagas vagas={vagas} />
    </>
  )
}

export default App
