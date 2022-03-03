import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CardList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /My cards/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('card-test')).toHaveLength(cardsMock.length)
  })
})
