import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 16px;
`

export const Campo = styled.input`
  padding: 12px 16px;
  width: 320px;
  border-radius: 8px;
  border: 2px solid #7c3aed;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #5b21b6;
  }
`

export const Botao = styled.button`
  padding: 12px 24px;
  background-color: #7c3aed;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #5b21b6;
  }
`
