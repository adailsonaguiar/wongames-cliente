import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstart Games',
    img: 'img/image 5.png',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />
