import { Story, Meta } from '@storybook/react/types-6-0'
import CardList from '.'

import cardsMock from 'components/PaymentOptions/mock'
import { CartListProps } from 'components/CartList'

export default {
  title: 'CardList',
  component: CardList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 880, margin: 'auto' }}>
    <CardList {...args} />
  </div>
)
