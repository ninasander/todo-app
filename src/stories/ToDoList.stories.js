import React from 'react'

import ToDoList from '../ToDoList'
import ToDo from '../ToDo'

export default {
  title: 'ToDo List',
  component: ToDoList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ToDoList {...args} />

export const List = Template.bind({})

List.args = {
  todos: [ToDo({}), ToDo({})],
  onDelete: undefined,
}

ToDo.defaultProps = {
  text: 'Example ToDo',
  completed: false,
  onDelete: undefined,
}
