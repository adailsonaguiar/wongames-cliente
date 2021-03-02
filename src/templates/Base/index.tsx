import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Container from 'components/Container'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <S.Content>{children}</S.Content>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)
export default Base
