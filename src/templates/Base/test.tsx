import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="MenuMock"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="FooterMock"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render base with children', () => {
    renderWithTheme(
      <Base>
        <h1>heading</h1>
      </Base>
    )

    expect(screen.getByTestId('MenuMock')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('FooterMock')).toBeInTheDocument()
  })
})
