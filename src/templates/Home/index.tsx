import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import Container from 'components/Container'
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
  <Base>
    <Container>
      {/* <Menu /> */}
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase heading="News" gameCardItems={newGames} />
    </S.SectionNews>

    <ShowCase
      heading="Most Popular"
      highlight={mostPopularHighLight}
      gameCardItems={mostPopularGames}
    />

    <S.SectionUpcoming>
      <ShowCase heading="Upcomming" gameCardItems={upcommingGames} />
      <ShowCase
        highlight={upcommingHighligth}
        gameCardItems={upcommingMoreGames}
      />
    </S.SectionUpcoming>

    <ShowCase
      heading="Free games"
      highlight={freeHighligth}
      gameCardItems={freeGames}
    />

    {/* <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter> */}
  </Base>
)

export default Home
