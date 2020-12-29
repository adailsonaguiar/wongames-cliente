import { Story, Meta } from '@storybook/react/types-6-0'
import ShowCase, { ShowCaseProps } from '.'

import highlightMock from 'components/Highlight/mock'
import gameCardMock from 'components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'won-dark' }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  highlight: highlightMock,
  gameCardItems: gameCardMock,
  heading: 'News'
}

export const WithouthHighlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithouthHighlight.args = {
  heading: 'News',
  gameCardItems: gameCardMock
}
