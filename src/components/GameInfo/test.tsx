import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Super Mario World',
  description: 'In promotional price!',
  price: '20.09'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render butons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /whishlist/i })
    ).toBeInTheDocument()
  })
})
