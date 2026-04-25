import { describe, it, expect } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { MobileStickyCTA } from './MobileStickyCTA'

describe('MobileStickyCTA', () => {
  it('is hidden before scrolling', () => {
    render(<MobileStickyCTA label="Reserve your bundle →" />)
    expect(screen.queryByRole('link', { name: /reserve your bundle/i })).not.toBeInTheDocument()
  })

  it('appears after scrolling past 400px', () => {
    render(<MobileStickyCTA label="Reserve your bundle →" />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      fireEvent.scroll(window)
    })
    expect(screen.getByRole('link', { name: /reserve your bundle/i })).toBeInTheDocument()
  })
})
