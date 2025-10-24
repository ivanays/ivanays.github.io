import React, { useContext, useEffect, useRef } from "react";

import './SliderProcButtons.scss';

import { useMediaQuery } from "../../../../hooks";

import { ProcSliderContext } from "../../../../contexts/ProcSliderContext";
import { ModalContext } from "../../../../contexts";

import classNames from 'classnames';
import gsap from 'gsap';

import funcQueryMedia from "../../../../func/func_query_media/funcQueryMedia";

import { SliderProcButtonsButton } from "./slider_proc_buttons_button";

export const SliderProcButtons = ({ typeButtons }) => {

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

    const buttonsViewportClass = classNames({
        'buttons-viewport': media1728 === true,
        'buttons-viewport--1133': media1133 === true,
        'buttons-viewport--744': media744 === true,
        'buttons-viewport--744l': media744l === true,
        'buttons-viewport--375': media375 === true,
        'buttons-viewport--275': media275 === true,
        'buttons-viewport--1300': media1300 === true,
        'buttons-viewport--900': media900 === true,
        'buttons-viewport--600': media600 === true,
        'buttons-viewport--600l': media600l === true,
    });

    const buttonsPreClass = classNames({
        'buttons-pre': media1728 === true,
        'buttons-pre--1133': media1133 === true,
        'buttons-pre--744': media744 === true,
        'buttons-pre--744l': media744l === true,
        'buttons-pre--375': media375 === true,
        'buttons-pre--275': media275 === true,
        'buttons-pre--1300': media1300 === true,
        'buttons-pre--900': media900 === true,
        'buttons-pre--600': media600 === true,
        'buttons-pre--600l': media600l === true,
    });

    const buttonsNextClass = classNames({
        'buttons-next': media1728 === true,
        'buttons-next--1133': media1133 === true,
        'buttons-next--744': media744 === true,
        'buttons-next--744l': media744l === true,
        'buttons-next--375': media375 === true,
        'buttons-next--275': media275 === true,
        'buttons-next--1300': media1300 === true,
        'buttons-next--900': media900 === true,
        'buttons-next--600': media600 === true,
        'buttons-next--600l': media600l === true,
    });

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