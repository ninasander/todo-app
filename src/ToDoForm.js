import React from 'react'
import ButtonAdd from './ButtonAdd'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function ToDoForm({ onCreateTodo }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="todo-input">Add todo:</FormLabel>
      <input id="todo-input" name="todo" />
      <ButtonAdd />
    </Form>
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

const Form = styled.form`
  margin: 10px;
`

const FormLabel = styled.label`
  margin-right: 8px;
`
