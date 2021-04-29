import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Your wishlist is empty',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render currently', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a game in a couch playing a videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i })
    ).toBeInTheDocument()

    expect(screen.getByText('A simple description')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Go back to store/i })
    ).toHaveAttribute('href', '/')
  })
})
