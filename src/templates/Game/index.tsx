import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Galery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'

import * as S from './styles'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Divider from 'components/Divider'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  galery?: GalleryImageProps[]
  description: string
  gameDetail: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  galery,
  description,
  gameDetail,
  upcomingGames,
  upcomingHighlights,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGalery>
        {!!galery && <Gallery items={galery} />}
      </S.SectionGalery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...gameDetail} />
        <Divider />
      </S.SectionGameDetails>
      <ShowCase
        heading="Upcoming"
        gameCardItems={upcomingGames}
        highlight={upcomingHighlights}
      />

      <ShowCase
        heading="You may like this games"
        gameCardItems={recommendedGames}
      />
    </S.Main>
  </Base>
)

export default Game
