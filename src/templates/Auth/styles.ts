import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.png);
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
        display: none
      `}

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
  `}
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 38rem
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
