import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Banner
        img="test.png"
        buttonLabel="Loren Ipsum"
        buttonLink="google.com"
        subtitle="subtitle test"
        title="Let's go"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Let's go/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle test/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Let's go/)).toHaveAttribute('src', 'test.png')
  })

  it('shoukd render a Ribbon', () => {
    renderWithTheme(
      <Banner
        img="test.png"
        buttonLabel="Loren Ipsum"
        buttonLink="google.com"
        subtitle="subtitle test"
        title="Let's go"
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
