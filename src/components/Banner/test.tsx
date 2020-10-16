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
})
