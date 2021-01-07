import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Super Mario World',
    description: 'In promotional price!',
    price: '215,00'
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />
