import React from 'react'
import styled from 'styled-components/macro'

export default function ButtonCancel({ onDelete }) {
  return (
    <CancelButton onClick={onDelete} className="ButtonCancel">
      X Remove
    </CancelButton>
  )
}

const CancelButton = styled.button`
  background-color: red;
  font-weight: 600;
  color: white;
  border-style: none;
  margin: 10px;
  padding: 4px;
`
