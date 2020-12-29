import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'
import ShowCase from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      {/* <Heading lineLeft lineColor="secondary" color="white">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" /> */}
      <ShowCase heading="News" gameCardItems={newGames} />
    </S.SectionNews>

    <S.SectionMostPopular>
      <ShowCase
        heading="Most Popular"
        highlight={mostPopularHighLight}
        gameCardItems={mostPopularGames}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <ShowCase heading="Upcomming" gameCardItems={upcommingGames} />
      <ShowCase
        highlight={upcommingHighligth}
        gameCardItems={upcommingMoreGames}
      />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <ShowCase
        heading="Free games"
        highlight={freeHighligth}
        gameCardItems={freeGames}
      />
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
