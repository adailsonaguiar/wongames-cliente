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
        title="title test"
      />
    )

    expect(screen.getByLabelText(/title test/i)).toBeInTheDocument()
    expect(screen.getByText(/subtitle test/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/title test/)).toHaveAttribute(
      'src',
      'test.png'
    )
  })
})
