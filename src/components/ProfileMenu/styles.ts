import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
       flex-direction: column;
       border: 0;

       a:not(:last-child){
           border-bottom: 0.1rem solid ${theme.colors.lightGray}
       }
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    flex: 1;
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.xsmall} 0;
    text-decoration: none;
    transition: background, color, ${theme.transition.default};

    span {
      display: none;
    }

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }

    ${media.greaterThan('medium')`
        justify-content: flex-start;
        padding-left: ${theme.spacings.xsmall};
        padding-right: ${theme.spacings.xsmall};
        span {
            display: block;
            margin-left: ${theme.spacings.xsmall}
        }
    `}
  `}
`
