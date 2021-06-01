import ProfileTemplate from '../../templates/Profile'

import CardList, { CardListProps } from 'components/CardList'

import cardsMock from 'components/PaymentOptions/mock'

export default function Cards({ cards }: CardListProps) {
  console.log(cards)
  return (
    <ProfileTemplate>
      <CardList cards={cards} />
    </ProfileTemplate>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
