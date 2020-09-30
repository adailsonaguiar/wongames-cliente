import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: true | false
  lineBottom?: true | false
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading