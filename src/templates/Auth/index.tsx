import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div>
          <Heading color="white" size="huge">
            All your favorite games in one place
          </Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.FormContainer>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo size="large" color="black" id="form" />
          </a>
        </Link>
        <Heading lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.FormContainer>
  </S.Wrapper>
)

export default Auth
