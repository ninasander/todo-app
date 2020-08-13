import React from 'react'
import styled from 'styled-components/macro'

export default function ButtonOk() {
  return <OkButton className="ButtonOk">Add</OkButton>
}

const OkButton = styled.button`
  background-color: green;
  font-weight: 600;
  color: white;
  border-style: none;
  margin: 10px;
  padding: 4px;
`
