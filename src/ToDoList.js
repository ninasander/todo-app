import React from 'react'
import ToDo from './ToDo'

export default function TodoList({ todos, onDelete }) {
  return (
    <section className="TodoList">
      {todos.map(({ text, completed, id }, index) => (
        <ToDo
          key={id}
          text={text}
          completed={completed}
          onDelete={() => onDelete(index)}
        />
      ))}
    </section>
  )
}
