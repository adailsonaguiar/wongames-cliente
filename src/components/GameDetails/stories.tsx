import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'
import gameDetailsMock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: { backgrounds: { default: 'won-dark' } },
  args: gameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
