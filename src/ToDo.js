import React from 'react'
import Checkbox from './Checkbox'
import styled from 'styled-components/macro'
import ButtonRemove from './ButtonRemove'

export default function ToDo({ text, completed, onDelete }) {
  return (
    <div>
      <Checkbox completed={completed} />
      <ToDoText>{text}</ToDoText>
      <ButtonRemove onDelete={onDelete} />
    </div>
  )
}
// ToDo.defaultProps = {
//   text: 'Example ToDo',
//   completed: false,
//   onDelete: undefined,
// }
const ToDoText = styled.span`
  margin-left: 4px;
`
