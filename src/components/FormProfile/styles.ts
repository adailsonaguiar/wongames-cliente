import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    max-width: 100%;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xlarge};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
      }
    `}
  `}
`
