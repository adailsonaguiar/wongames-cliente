import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Container from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        News
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most popular
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
