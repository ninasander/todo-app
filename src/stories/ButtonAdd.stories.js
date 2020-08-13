import React from 'react'

import ButtonAdd from '../ButtonAdd'

export default {
  title: 'Button-Add',
  component: ButtonAdd,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Button = () => <ButtonAdd />
