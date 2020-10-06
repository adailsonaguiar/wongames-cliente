import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /FOLLOW US/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /LOCATION/i })
    ).toBeInTheDocument()
  })
})
