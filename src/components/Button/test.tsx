import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Loren Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Loren Ipsum/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })
  })
  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Loren Ipsum</Button>)

    expect(screen.getByRole('button', { name: /Loren Ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Loren Ipsum</Button>)
    expect(screen.getByRole('button', { name: /Loren Ipsum/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem'
    })
  })
  it('should render a full width version', () => {
    renderWithTheme(
      <Button size="large" fullWidth>
        Loren Ipsum
      </Button>
    )
    expect(screen.getByRole('button', { name: /Loren Ipsum/i })).toHaveStyle({
      width: '100%'
    })
  })
})
