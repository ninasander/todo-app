import React from 'react'

import ToDo from '../ToDo'

export default {
  title: 'ToDo Entry',
  component: ToDo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ToDo {...args} />

export const Completed = Template.bind({})

Completed.args = {
  text: 'Create ToDo App',
  completed: true,
  onDelete: undefined,
}
export const Uncompleted = Template.bind({})

Uncompleted.args = {
  text: 'Create ToDo App',
  completed: false,
  onDelete: undefined,
}
