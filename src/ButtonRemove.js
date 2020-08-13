import React from 'react'
import styled from 'styled-components/macro'

export default function ButtonRemove({ onDelete }) {
  return <RemoveButton onClick={onDelete}>X Remove</RemoveButton>
}

const RemoveButton = styled.button`
  background-color: red;
  font-weight: 600;
  color: white;
  border-style: none;
  margin: 10px;
  padding: 4px;
`
