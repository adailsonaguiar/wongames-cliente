import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<UserDropdown username="Jhon Doe" />)
  })
  test('should render the username', () => {
    expect(screen.getByText(/jhon doe/i)).toBeInTheDocument()
  })

  test('should render the menu', () => {
    expect(screen.getByText('My profile').closest('a')).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByText('Wishlist').closest('a')).toHaveAttribute(
      'href',
      '/wishlist'
    )
    expect(screen.getByText('Sign out').closest('a')).toHaveAttribute(
      'href',
      '/logout'
    )
  })
})
