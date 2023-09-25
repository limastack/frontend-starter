/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  it('renders a initial heading', () => {
    render(<Home />)

    const element = screen.getByRole('main')

    expect(element).toBeInTheDocument()
  })
})