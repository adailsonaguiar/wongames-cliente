import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Title Mock',
    price: 'R$ 50,30'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />
