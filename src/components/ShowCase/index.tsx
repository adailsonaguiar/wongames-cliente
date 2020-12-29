import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  highlight?: HighlightProps
  gameCardItems?: GameCardProps[]
  heading?: string
}

const ShowCase = ({ highlight, gameCardItems, heading }: ShowCaseProps) => (
  <S.Wrapper>
    {!!heading && (
      <Heading lineLeft lineColor="secondary" color="white">
        {heading}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!gameCardItems && <GameCardSlider items={gameCardItems} />}
  </S.Wrapper>
)

export default ShowCase
