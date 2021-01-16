import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from '.'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails platforms={['windows', 'linux', 'mac']} />)

    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
