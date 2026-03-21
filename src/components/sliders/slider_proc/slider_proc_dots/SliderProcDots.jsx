import React, { useContext, useRef } from "react";

import './SliderProcDots.scss';

import { useMediaQuery } from "../../../../hooks";

import { ProcSliderContext } from "../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../../func/func_query_number/funcQueryNumber";

import { SliderProcDotsDot } from './slider_proc_dots_dot';

export const SliderProcDots = (props) => {

    let queryNumber = funcQueryNumber();

    const dotsBodyClass = classNames(`dots${queryNumber}__body`);
    const dotsBodyProceduresClass = classNames(`dots${queryNumber}__body-procedures`);
    const dotsBodyBodyClass = classNames(`dots${queryNumber}__body-body`);


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