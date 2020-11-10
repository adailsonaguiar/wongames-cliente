import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Container from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighLight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighLight,
  upcomingGames,
  upcomingHighLight,
  upcomingMoreGames,
  freeGames,
  freeHighLight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        News
      </Heading>
      <GameCardSlider items={newGames} color="black" />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighLight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
      <GameCardSlider items={upcomingGames} />
      <Highlight {...upcomingHighLight} />
      <GameCardSlider items={upcomingMoreGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free games
      </Heading>
      <Highlight {...freeHighLight} />
      <GameCardSlider items={freeGames} />
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
