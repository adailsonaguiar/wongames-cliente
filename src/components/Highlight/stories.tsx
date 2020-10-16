import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy now',
    buttonLink: '/teste.com',
    backgroundImage: '/img/back-hero.png'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
