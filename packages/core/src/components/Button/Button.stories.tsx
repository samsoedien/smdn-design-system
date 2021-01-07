import React from 'react'
import { action } from '@storybook/addon-actions' // eslint-disable-line

import Button from './index'

export default {
  title: 'Core/Button',
  component: Button,
  componentTitle: 'Basic buttons to provide the user with an action when user interaction is required.',
  decorators: [],
}

export const ButtonDefault = () => <Button onClick={action('button action click')}>Button</Button>

ButtonDefault.story = {
  name: 'Button',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}

export const ButtonSizes = () => (
  <>
    <Button size="small" onClick={action('button action click')}>
      Small Button
    </Button>
    <Button size="regular" onClick={action('button action click')}>
      Regular Button
    </Button>
    <Button size="large" onClick={action('button action click')}>
      Large Button
    </Button>
  </>
)

ButtonSizes.story = {
  name: 'Button - Sizes',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}

export const ButtonAppearances = () => (
  <>
    <Button appearance="primary" onClick={action('button action click')}>
      Primary Button
    </Button>
    <Button appearance="secondary" onClick={action('button action click')}>
      Secondary Button
    </Button>
    <Button appearance="tertiary" onClick={action('button action click')}>
      Tertiary Button
    </Button>
  </>
)

ButtonAppearances.story = {
  name: 'Button - Appearances',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}

export const ButtonLoading = () => <Button isLoading>Loading Button...</Button>

ButtonLoading.story = {
  name: 'Button - Loading',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}
