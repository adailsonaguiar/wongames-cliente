import Container from 'components/Container'
import Divider from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Wishlist
      </Heading>
      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`ẁishlist-${index}`} {...game} />
        ))}
      </Grid>
      <Divider />
    </Container>
    <ShowCase
      heading="You may like these games"
      highlight={recommendedHighlight}
      gameCardItems={recommendedGames}
    />
  </Base>
)

export default Wishlist
