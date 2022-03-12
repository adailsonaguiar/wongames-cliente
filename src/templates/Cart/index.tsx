import CartList, { CartListProps } from 'components/CartList'
import Container from 'components/Container'
import Divider from 'components/Divider'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  PaymentOptionsProps

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My Cart
        </Heading>
        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            hasLink
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
          />
        )}
        <Divider />
      </Container>
      <ShowCase
        heading="You may like these games"
        gameCardItems={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
