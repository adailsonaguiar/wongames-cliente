import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render form', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })
})
