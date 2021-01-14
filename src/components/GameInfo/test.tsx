import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameMock from './mock'

import GameInfo from '.'

const props = GameMock

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Fall Guys é um party game para multijogador com até 60 jogadores online, em uma louca corrida free-for-all, com rounds e rounds cada vez mais caóticos até sobrar um único vencedor!/i
      )
    ).toBeInTheDocument()

    expect(screen.getByText(/37,99/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
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
