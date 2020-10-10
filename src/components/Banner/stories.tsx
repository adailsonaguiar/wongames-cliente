import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'title Test',
    subtitle: 'Subtitle Test',
    buttonLabel: 'Label Test',
    buttonLink: '/test'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
