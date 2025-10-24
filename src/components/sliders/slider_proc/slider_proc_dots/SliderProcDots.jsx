import React, { useContext, useRef } from "react";

import './SliderProcDots.scss';

import { useMediaQuery } from "../../../../hooks";

import { ProcSliderContext } from "../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../func/func_query_media/funcQueryMedia";

import { SliderProcDotsDot } from './slider_proc_dots_dot';

export const SliderProcDots = (props) => {

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

    const dotsBodyClass = classNames({
        'dots__body': media1728 === true,
        'dots--1133__body': media1133 === true,
        'dots--744__body': media744 === true,
        'dots--744l__body': media744l === true,
        'dots--375__body': media375 === true,
        'dots--275__body': media275 === true,
        'dots--1300__body': media1300 === true,
        'dots--900__body': media900 === true,
        'dots--600__body': media600 === true,
        'dots--600l__body': media600l === true,
    });

    const dotsBodyProceduresClass = classNames({
        'dots__body-procedures': media1728 === true,
        'dots--1133__body-procedures': media1133 === true,
        'dots--744__body-procedures': media744 === true,
        'dots--744l__body-procedures': media744l === true,
        'dots--375__body-procedures': media375 === true,
        'dots--275__body-procedures': media275 === true,
        'dots--1300__body-procedures': media1300 === true,
        'dots--900__body-procedures': media900 === true,
        'dots--600__body-procedures': media600 === true,
        'dots--600l__body-procedures': media600l === true,
    });

    const dotsBodyBodyClass = classNames({
        'dots__body-body': media1728 === true,
        'dots--1133__body-body': media1133 === true,
        'dots--744__body-body': media744 === true,
        'dots--744l__body-body': media744l === true,
        'dots--375__body-body': media375 === true,
        'dots--275__body-body': media275 === true,
        'dots--1300__body-body': media1300 === true,
        'dots--900__body-body': media900 === true,
        'dots--600__body-body': media600 === true,
        'dots--600l__body-body': media600l === true,
    });


    const { countSlides, countFirstSlideViewport, slideCount } = useContext(ProcSliderContext);

    const dotsRef = useRef(null);

    const dotsAllClass = classNames(dotsBodyClass, dotsBodyProceduresClass, dotsBodyBodyClass);

    let count = countFirstSlideViewport;

    const renderDots = () => {
        const dots = [];

        if (countFirstSlideViewport < slideCount - countSlides) {
            for (let i = count; i < (count + countSlides); i++) {
                dots.push(<SliderProcDotsDot key={`dot${i}`} number={i} dotsRef={dotsRef.current} />);
            }
        } else {
            for (let i = slideCount - countSlides; i < slideCount; i++) {
                dots.push(<SliderProcDotsDot key={`dot${i}`} number={i} dotsRef={dotsRef.current} />);
            }
        }

        return dots;
    };

    if (dotsRef === null) throw new Error('ERROR_PROC_TABS_SLIDER_DOTS_REFS');

    return <div className={dotsAllClass} ref={dotsRef} >{renderDots()}</div>

}