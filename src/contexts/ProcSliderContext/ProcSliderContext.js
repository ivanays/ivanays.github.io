import { createContext } from 'react';

export const ProcSliderContext = createContext({
    goToSlide: () => {},
    changeSlide: () => {},
    handleChangeViewport: () => {},
    autoPlay: null,
    slideCount: null,
    slideNumber: null,
    countSlides: null,
    countViewport: null,
    countFirstSlideViewport: null,
    pauseAnimationSlide: null,
    pauseInterval: null,
    arrFirstSlideViewport: null,
    items: null
})