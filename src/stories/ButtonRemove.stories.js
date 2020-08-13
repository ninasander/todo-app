import React from 'react'

import ButtonRemove from '../ButtonRemove'

export default {
  title: 'Button-Remove',
  component: ButtonRemove,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Button = () => <ButtonRemove />
