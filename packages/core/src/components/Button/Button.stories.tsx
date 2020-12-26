import React from 'react'
import { action } from '@storybook/addon-actions' // eslint-disable-line

import Button from './index'

export default {
  title: 'Core/Button',
  component: Button,
  componentTitle: 'Basic buttons to provide the user with an action when user interaction is required.',
  decorators: [],
}

export const ButtonComponent = () => <Button onClick={action('button action click')}>Button</Button>

ButtonComponent.story = {
  name: 'Button',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}
