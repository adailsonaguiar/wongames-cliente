import Container from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'
// import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Wishlist
      </Heading>
    </Container>
    <ShowCase
      heading="You may like these games"
      highlight={recommendedHighlight}
      gameCardItems={recommendedGames}
    />
  </Base>
)

export default Wishlist
