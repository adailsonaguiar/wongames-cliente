import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: grey;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Default: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
  </Slider>
)
