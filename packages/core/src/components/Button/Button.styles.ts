import styled, { css } from 'styled-components'

import { IButtonProps } from './Button'

export const StyledButton = styled.button<IButtonProps>`
  border: none;
  border-radius: 3px;
  padding: 0 12px;
  background-color: lightgrey;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkgrey;
    cursor: pointer;
  }

  ${(props) =>
    props.size === 'regular' &&
    css`
      height: 36px;
    `};

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 30px;
    `};

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 48px;
    `};

  ${(props) =>
    props.appearance === 'primary' &&
    css`
      background-color: teal;
      color: white;
    `};

  ${(props) =>
    props.appearance === 'secondary' &&
    css`
      color: #121212;
    `};

  ${(props) =>
    props.appearance === 'tertiary' &&
    css`
      background-color: transparent;
      color: #121212;
    `};

  ${(props) =>
    props.isLoading &&
    css`
      &:hover {
        cursor: progress;
      }
    `}
`
