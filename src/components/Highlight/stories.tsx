import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: item
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
