import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    position: relative;

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
    ${RibbonStyles.Wrapper} {
      right: ${theme.spacings.small};
      top: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
      &:before{
        border: none
      }
    }

    p{
      max-width: 77rem;
    }
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    width: 100%;
  }

  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
    > button {
      width: initial;
    }
  `}
`
