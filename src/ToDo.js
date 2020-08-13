import React from 'react'
import Checkbox from './Checkbox'
import ButtonCancel from './ButtonCancel'
import styled from 'styled-components/macro'

export default function ToDo({ text, completed, onDelete }) {
  return (
    <div>
      <Checkbox completed={completed} />
      <ToDoText>{text}</ToDoText>
      <ButtonCancel onDelete={onDelete} />
    </div>
  )
}

const ToDoText = styled.span`
  margin-left: 4px;
`
