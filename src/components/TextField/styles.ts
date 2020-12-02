import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

const inputWrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.danger};

    ${Icon} {
      color: ${theme.colors.danger};
    }
  `
}

export const InputWrapper = styled.div<Pick<TextFieldProps, 'error'>>`
  ${({ theme, error }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${!!error && inputWrapperModifiers.error(theme)}
  `}
`

export const CustomInput = styled.input<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${CustomInput},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled'>>`
  ${({ disabled, theme }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall}
  `}
`
