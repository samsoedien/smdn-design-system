import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer' // eslint-disable-line
import 'jest-styled-components'

import Button from './Button'

test('Button snapshot works', () => {
  const tree = renderer.create(<Button>Button</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
