import React from 'react'
import Checkbox from './Checkbox'
import ButtonCancel from './ButtonCancel'

export default function ToDo({ text, completed, onDelete }) {
  return (
    <div>
      <Checkbox completed={completed} />
      {text}
      <ButtonCancel onDelete={onDelete} />
    </div>
  )
}
