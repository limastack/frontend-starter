/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  it('renders a initial heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Just start to 🚀/i,
    })

    expect(heading).toBeInTheDocument()
  })
})