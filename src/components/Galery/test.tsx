import 'match-media-mock'

import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import items from './mock'

import Galery from '.'

describe('<Galery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Galery items={items.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' })
    ).toHaveAttribute('src', items[0].src)

    expect(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 2' })
    ).toHaveAttribute('src', items[1].src)

    // expect(container.firstChild).toMatchSnapshot()
  })
})
