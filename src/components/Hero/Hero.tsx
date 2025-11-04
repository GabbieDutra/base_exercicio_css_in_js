import styled from 'styled-components'

const HeroSection = styled.section`
  background-color: #f7f7f7;
  padding: 64px 0;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #0b3b60;
  margin-bottom: 16px;
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 24px;
`

const Hero = () => (
  <HeroSection>
    <HeroTitle>As melhores vagas para tecnologia</HeroTitle>
    <HeroSubtitle>
      Desenvolva sua carreira com oportunidades incríveis!
    </HeroSubtitle>
  </HeroSection>
)

export default Hero
