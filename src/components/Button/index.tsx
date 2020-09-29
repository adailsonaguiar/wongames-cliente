import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
