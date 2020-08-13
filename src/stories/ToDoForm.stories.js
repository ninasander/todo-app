import React from 'react'

import ToDoForm from '../ToDoForm'

export default {
  title: 'ToDo Form',
  component: ToDoForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const EntryForm = () => <ToDoForm />
