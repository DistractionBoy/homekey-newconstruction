import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReviewsCarousel } from './ReviewsCarousel'
import { SEED_REVIEWS } from '@/app/_data/homepage'

describe('ReviewsCarousel', () => {
  it('renders all seed reviews', () => {
    render(<ReviewsCarousel />)
    SEED_REVIEWS.forEach((review) => {
      expect(screen.getByText(review.reviewer)).toBeInTheDocument()
    })
  })

  it('truncates review text longer than 200 characters', () => {
    const longReview = SEED_REVIEWS.find((r) => r.text.length > 200)
    if (!longReview) return
    render(<ReviewsCarousel />)
    expect(screen.getAllByText(/Read more/i).length).toBeGreaterThan(0)
  })

  it('renders source platform badges', () => {
    render(<ReviewsCarousel />)
    expect(screen.getAllByText('Google').length).toBeGreaterThan(0)
  })
})
