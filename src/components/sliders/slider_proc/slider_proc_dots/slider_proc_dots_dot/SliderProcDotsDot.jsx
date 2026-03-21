import React, { useContext, useRef, useLayoutEffect } from "react";

import './SliderProcDotsDot.scss';

import { useMediaQuery } from "../../../../../hooks";

import { ProcSliderContext } from "../../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../../../func/func_query_number/funcQueryNumber";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";


export const SliderProcDotsDot = ({ number }) => {

    let queryNumber = funcQueryNumber();

    const dotsDotClass = classNames(`dots${queryNumber}__dot`);
    const dotsDotProceduresClass = classNames(`dots${queryNumber}__dot`);
    const dotsDotBodyClass = classNames(`dots${queryNumber}__dot-body`);


    gsap.registerPlugin(CSSPlugin);
    const { goToSlide, slideNumber, pauseAnimationSlide } = useContext(ProcSliderContext);

    const dotRef = useRef(null);

    const dotAllClass = classNames(dotsDotClass, dotsDotProceduresClass, dotsDotBodyClass);

    const animationDot = (current, time) => {
        let pause = time;
        gsap
            .timeline()
            .to(current, {
                scale: 1,
                duration: 0.25,
                delay: pause,
                ease: 'power1.in',
            }).to(current, {
                scale: 1,
                duration: 1,
                ease: 'power1.inOut',
            }).to(current, {
                scale: 0.9,
                // scale: 0.8,
                duration: 0.25,
                ease: 'power1.out',
            }, `+=${pause}`);
    }

    useLayoutEffect(() => {
        if (dotRef.current === null) throw new Error('ERROR_PROC_TABS_SLIDER_DOTS_DOT_REFS');
        slideNumber === number ? animationDot(dotRef.current, pauseAnimationSlide) : null;
    }, [slideNumber, number]);


    return (
        <>
            <div
                ref={dotRef}
                className={dotAllClass}
                onClick={() => goToSlide(number)}
            ></div>
        </>
    );
}
