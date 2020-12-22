import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    color: ${theme.colors.black};
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
