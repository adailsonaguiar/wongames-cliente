import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Container from 'components/Container'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
export default Base
