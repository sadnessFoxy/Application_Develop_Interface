import { useState, useEffect, useCallback } from 'react';
import './IntroCarousel.css';

const slides = [
  {
    id: 1,
    src: '/carousel1.png',
    alt: 'Gourmet Dishes on Marble',
  },
  {
    id: 2,
    src: '/carousel2.png',
    alt: 'Fresh Healthy Salads',
  },
  {
    id: 3,
    src: '/carousel3.png',
    alt: 'Artisan Desserts',
  },
];

export default function IntroCarousel({ currentSlide, onSlideChange }) {
  const goTo = useCallback(
    (index) => {
      onSlideChange(index);
    },
    [onSlideChange]
  );

  return (
    <div className="carousel-wrapper">
      {/* Image track */}
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={`carousel-image ${i === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots" role="tablist" aria-label="Carousel indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Go to slide ${i + 1}`}
            className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
