import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
  `}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
