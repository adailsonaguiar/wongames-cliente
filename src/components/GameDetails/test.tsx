import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
  raiting: 'BR0',
  genres: ['Actions', 'Adventures']
}

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /apple/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
  })

  it('should render formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a label FREE when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('FREE')).toBeInTheDocument()
  })

  it('should render a genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Actions / Adventures')).toBeInTheDocument()
  })
})
