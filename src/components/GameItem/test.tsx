import { render, screen } from '@testing-library/react'

import GameItem from '.'

const props = {
  image: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Title Mock',
  price: 'R$ 50,30'
}

describe('<GameItem />', () => {
  it('should render the heading', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /Title Mock/i })
    ).toBeInTheDocument()
  })
})
