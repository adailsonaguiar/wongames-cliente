import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLInputElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    ref={ref}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
