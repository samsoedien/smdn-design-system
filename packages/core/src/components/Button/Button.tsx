import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Appearance } from '@smdn-design-system/shared'

const StyledButton = styled.button<IButtonProps>`
  ${(props) =>
    props.appearance === 'primary' &&
    css`
      background-color: blue;
    `};
  ${(props) =>
    props.appearance === 'secondary' &&
    css`
      background-color: grey;
    `};
`

export interface IButtonProps {
  appearance?: Appearance
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ appearance, children }) => (
  <StyledButton appearance={appearance} className="smdn-button" data-test="button-component">
    {children}
  </StyledButton>
)

Button.defaultProps = {
  appearance: 'secondary',
}

Button.propTypes = {
  appearance: PropTypes.oneOf<Appearance>(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node.isRequired,
}

export default Button
