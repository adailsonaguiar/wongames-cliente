import * as S from './styles'

export type GameItemProps = {
  image: string
  title: string
  price: string
}

const GameItem = ({ image, title, price }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
)

export default GameItem
