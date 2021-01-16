import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import * as S from './styles'

type Platform = 'windows' | 'mac' | 'linux'

export type GameDetailsProps = {
  platforms: Platform[]
}

const GameDetails = ({ platforms = [] }: GameDetailsProps) => {
  const platformType = {
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Apple" size={18} />,
    linux: <Linux title="Linux" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconWrapper>
            {platforms.map((platform) => (
              <S.Icon key={platform}>{platformType[platform]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
