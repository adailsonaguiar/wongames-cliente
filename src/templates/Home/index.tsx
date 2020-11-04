import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Container from 'components/Container'
import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
