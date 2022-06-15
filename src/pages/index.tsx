import { gql, useQuery } from '@apollo/client'
import Index, { HomeTemplateProps } from '../templates/Home'

import bannerSlideMock from 'components/BannerSlider/mock'
import highlihtMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'
import { initializeApollo } from 'utils/tests/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Home(props: HomeTemplateProps) {
  console.log(props.data)

  return <Index {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: GET_GAMES })
  return {
    props: {
      data,
      initializeApolloState: apolloClient.cache.extract(),
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
