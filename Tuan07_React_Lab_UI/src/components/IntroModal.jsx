import { useState } from 'react';
import IntroCarousel from './IntroCarousel';
import './IntroModal.css';

const TOTAL_SLIDES = 3;

export default function IntroModal({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div className="overlay" onClick={onClose} aria-label="Close introduction" />

      {/* Modal container */}
      <div
        className="intro-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-title"
      >
        {/* Close × */}
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close"
          id="btn-close-modal"
        >
          ✕
        </button>

        {/* Heading */}
        <h1 className="intro-title" id="intro-title">
          Discover Chefify
        </h1>

        {/* Subtitle */}
        <p className="intro-subtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        {/* Carousel */}
        <IntroCarousel
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />

        {/* Next button */}
        <button
          className="btn-next"
          onClick={handleNext}
          id="btn-next"
        >
          {currentSlide < TOTAL_SLIDES - 1 ? 'Next' : 'Get Started'}
        </button>

        {/* Skip button */}
        <button
          className="btn-skip"
          onClick={handleSkip}
          id="btn-skip"
        >
          Skip
        </button>
      </div>
    </>
  );
}
