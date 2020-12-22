import styled, { css } from 'styled-components'
import * as TextFieldStyles from '../../components/TextField/styles'
import * as ButtonStyles from '../../components/Button/styles'

import { darken } from 'polished'

export const FormWrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xxsmall};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};

    a {
      margin-left: 0.2rem;
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.secondary};
    }

    a:hover {
      color: ${darken(0.1, theme.colors.secondary)};
    }
  `}
`
