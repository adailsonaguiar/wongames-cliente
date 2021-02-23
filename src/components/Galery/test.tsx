import 'match-media-mock'

import { renderWithTheme } from 'utils/tests/helpers'
import { fireEvent, screen } from '@testing-library/react'
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
  })

  it('should render open modal', () => {
    renderWithTheme(<Galery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should render close modal', () => {
    renderWithTheme(<Galery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' })
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should render close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(<Galery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal whith selected image', async () => {
    renderWithTheme(<Galery items={items.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
