import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom>{title}</Heading>
    <Ribbon color="secondary">{`$${price}`}</Ribbon>
    <p>{description}</p>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} minimal size="large">
        whishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
