import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles'

export type Appearance = 'primary' | 'secondary' | 'tertiary'
export type Size = 'regular' | 'small' | 'large'

export interface IButtonProps {
  appearance?: Appearance
  size?: Size
  isLoading?: boolean
  type?: any
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ appearance, size, isLoading, type, disabled, children, ...props }) => {
  const onClickHandler = () => console.log('clicked')
  return (
    <StyledButton
      appearance={appearance}
      size={size}
      isLoading={isLoading}
      type={type || 'submit'}
      disabled={disabled}
      onClick={() => onClickHandler()}
      className="smdn-b-button"
      data-test="button-component"
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  appearance: 'secondary',
  size: 'regular',
  isLoading: false,
  type: 'submit',
  disabled: false,
}

Button.propTypes = {
  appearance: PropTypes.oneOf<Appearance>(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf<Size>(['regular', 'small', 'large']),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
