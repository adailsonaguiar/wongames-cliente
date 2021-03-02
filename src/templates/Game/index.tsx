import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Galery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  galery?: GalleryImageProps[]
  description: string
  gameDetail: GameDetailsProps
}

const Game = ({
  cover,
  gameInfo,
  galery,
  description,
  gameDetail
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
      </S.SectionGameDetails>
    </S.Main>
  </Base>
)

export default Game
