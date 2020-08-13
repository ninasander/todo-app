import React from 'react'
import styled from 'styled-components/macro'

export default function ButtonAdd() {
  return <AddButton>Add</AddButton>
}

const AddButton = styled.button`
  background-color: green;
  font-weight: 600;
  color: white;
  border-style: none;
  margin: 10px;
  padding: 4px;
`
