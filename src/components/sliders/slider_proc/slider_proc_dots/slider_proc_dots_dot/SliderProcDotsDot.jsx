import React, { useContext, useRef, useLayoutEffect } from "react";

import './SliderProcDotsDot.scss';

import { useMediaQuery } from "../../../../../hooks";

import { ProcSliderContext } from "../../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";


export const SliderProcDotsDot = ({ number }) => {

    const queryMedia = funcQueryMedia();

    const media1728 = useMediaQuery(queryMedia.query1728);
    const media1133 = useMediaQuery(queryMedia.query1133);
    const media744 = useMediaQuery(queryMedia.query744);
    const media744l = useMediaQuery(queryMedia.query744l);
    const media375 = useMediaQuery(queryMedia.query375);
    const media275 = useMediaQuery(queryMedia.query275);
    const media1300 = useMediaQuery(queryMedia.query1300);
    const media900 = useMediaQuery(queryMedia.query900);
    const media600 = useMediaQuery(queryMedia.query600);
    const media600l = useMediaQuery(queryMedia.query600l);

    const dotsDotClass = classNames({
        'dots__dot': media1728 === true,
        'dots--1133__dot': media1133 === true,
        'dots--744__dot': media744 === true,
        'dots--744l__dot': media744l === true,
        'dots--375__dot': media375 === true,
        'dots--275__dot': media275 === true,
        'dots--1300__dot': media1300 === true,
        'dots--900__dot': media900 === true,
        'dots--600__dot': media600 === true,
        'dots--600l__dot': media600l === true,
    });

    const dotsDotProceduresClass = classNames({
        'dots__dot': media1728 === true,
        'dots--1133__dot': media1133 === true,
        'dots--744__dot': media744 === true,
        'dots--744l__dot': media744l === true,
        'dots--375__dot': media375 === true,
        'dots--275__dot': media275 === true,
        'dots--1300__dot': media1300 === true,
        'dots--900__dot': media900 === true,
        'dots--600__dot': media600 === true,
        'dots--600l__dot': media600l === true,
    });

    const dotsDotBodyClass = classNames({
        'dots__dot-body': media1728 === true,
        'dots--1133__dot-body': media1133 === true,
        'dots--744__dot-body': media744 === true,
        'dots--744l__dot-body': media744l === true,
        'dots--375__dot-body': media375 === true,
        'dots--275__dot-body': media275 === true,
        'dots--1300__dot-body': media1300 === true,
        'dots--900__dot-body': media900 === true,
        'dots--600__dot-body': media600 === true,
        'dots--600l__dot-body': media600l === true,
    });


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
