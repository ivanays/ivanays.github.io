import React, { useContext, useEffect, useRef } from "react";

import './SliderProcButtons.scss';

import { useMediaQuery } from "../../../../hooks";

import { ProcSliderContext } from "../../../../contexts/ProcSliderContext";
import { ModalContext } from "../../../../contexts";

import classNames from 'classnames';
import gsap from 'gsap';

import funcQueryMedia from "../../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../../func/func_query_number/funcQueryNumber";

import { SliderProcButtonsButton } from "./slider_proc_buttons_button";

export const SliderProcButtons = ({ typeButtons }) => {

    let queryNumber = funcQueryNumber();

    const buttonsViewportClass = classNames(`buttons-viewport${queryNumber}`);
    const buttonsPreClass = classNames(`buttons-pre${queryNumber}`);
    const buttonsNextClass = classNames(`buttons-next${queryNumber}`);

    const { countSlides, countViewport, arrFirstSlideViewport, countFirstSlideViewport, slideCount } = useContext(ProcSliderContext);
    const { autoPlaySliderProc } = useContext(ModalContext);

    const buttonsPreRef = useRef(null);
    const buttonsNextRef = useRef(null);

    const buttonsPreAllClass = classNames(buttonsViewportClass, buttonsPreClass);
    const buttonsNextAllClass = classNames(buttonsViewportClass, buttonsNextClass);

    const countViewports = Math.ceil(slideCount / countSlides);

    const countViewportNext = countViewports - countViewport;
    const countViewportPre = countViewports - countViewportNext;

    const renderButtons = () => {

        const buttons = [];

        if (typeButtons === 'pre') {

            if (countViewport !== 1) {
                for (let i = 0; i < arrFirstSlideViewport.length - 1; i++) {
                    if (arrFirstSlideViewport[i] < countFirstSlideViewport) {
                        buttons.push(<SliderProcButtonsButton
                            key={`buttonPre${i}`}
                            id={`buttonPre${i}`}
                            numberFirstSlideViewport={arrFirstSlideViewport[i]}
                        >
                        </SliderProcButtonsButton>);
                    }
                }
            }
        }

        if (typeButtons === 'next') {

            for (let i = 0; i < arrFirstSlideViewport.length; i++) {
                if (arrFirstSlideViewport[i] > countFirstSlideViewport) {
                    buttons.push(<SliderProcButtonsButton
                        key={`buttonNext${i}`}
                        id={`buttonNext${i}`}
                        numberFirstSlideViewport={arrFirstSlideViewport[i]}
                    >
                    </SliderProcButtonsButton>);
                }
            }

        }

        return buttons;
    };

    if (buttonsPreRef === null) throw new Error('ERROR_PROC_TABS_SLIDER_BUTTONS_REFS');
    if (buttonsNextRef === null) throw new Error('ERROR_PROC_TABS_SLIDER_BUTTONS_REFS');

    if (typeButtons === 'pre') {
        return <div className={buttonsPreAllClass} ref={buttonsPreRef} >{renderButtons()}</div>
    } else {
        return <div className={buttonsNextAllClass} ref={buttonsNextRef} >{renderButtons()}</div>
    }

}