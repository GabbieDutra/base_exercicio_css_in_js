import styled from 'styled-components'

export const VagaContainer = styled.div`
  background: #fff;
  border: 2px solid #d8b4fe;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`

export const Titulo = styled.h3`
  font-size: 22px;
  color: #5b21b6;
  margin: 0;
`

export const Localizacao = styled.span`
  font-size: 14px;
  color: #6b7280;
`

export const Botao = styled.button`
  align-self: flex-start;
  padding: 10px 18px;
  border-radius: 8px;
  background-color: #7c3aed;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #5b21b6;
  }
`
