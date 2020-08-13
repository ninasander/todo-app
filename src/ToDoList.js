import React from 'react'
import ToDo from './ToDo'

export default function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map(({ text, completed, id }) => (
        <ToDo key={id} text={text} completed={completed} />
      ))}
    </section>
  )
}
