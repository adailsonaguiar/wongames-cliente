import Index, { HomeTemplateProps } from '../templates/Home'

import bannerSlideMock from 'components/BannerSlider/mock'
import highlihtMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'

export default function Home(props: HomeTemplateProps) {
  return <Index {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannerSlideMock,
      newGames: gameCardMock,
      mostPopularHighLight: highlihtMock,
      mostPopularGames: gameCardMock,
      upcommingGames: gameCardMock,
      upcommingHighligth: highlihtMock,
      upcommingMoreGames: gameCardMock,
      freeGames: gameCardMock,
      freeHighligth: highlihtMock
    }
  }
}
