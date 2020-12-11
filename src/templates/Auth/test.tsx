import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Auth title="Title">
        <input type="text" />
      </Auth>
    )

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one plac/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()
  })
})
