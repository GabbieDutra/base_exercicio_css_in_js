import styled from 'styled-components'

export const Form = styled.form`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
  max-width: 380px;
`

export const Botao = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: #087ea4;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #055f7a;
  }
`
