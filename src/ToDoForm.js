import React from 'react'
import ButtonOk from './ButtonOk'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function ToDoForm({ onCreateTodo }) {
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="todo-input">Add todo:</FormLabel>
      <input id="todo-input" name="todo" />
      <ButtonOk />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.todo
    onCreateTodo({ text: input.value, id: uuidv4() })
    form.reset()
    input.focus()
  }
}

const FormLabel = styled.label`
  margin-right: 8px;
`
