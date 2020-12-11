import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading color="white">All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>
      <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>
    <S.FormContainer>
      <Logo size="large" color="black" />
      <Heading lineColor="secondary" lineLeft>
        {title}
      </Heading>
      {children}
    </S.FormContainer>
  </S.Wrapper>
)

export default Auth
