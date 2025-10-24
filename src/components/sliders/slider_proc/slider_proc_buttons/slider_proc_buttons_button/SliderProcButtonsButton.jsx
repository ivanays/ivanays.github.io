import React, { useContext, useRef, useLayoutEffect, useState } from "react";

import './SliderProcButtonsButton.scss';

import { useMediaQuery } from "../../../../../hooks";

import { ProcSliderContext } from "../../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import { UiButton } from '../../../../ui';

export const SliderProcButtonsButton = ({ id, numberFirstSlideViewport }) => {

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

    const buttonViewportClass = classNames({
        'button-viewport': media1728 === true,
        'button-viewport--1133': media1133 === true,
        'button-viewport--744': media744 === true,
        'button-viewport--744l': media744l === true,
        'button-viewport--375': media375 === true,
        'button-viewport--275': media275 === true,
        'button-viewport--1300': media1300 === true,
        'button-viewport--900': media900 === true,
        'button-viewport--600': media600 === true,
        'button-viewport--600l': media600l === true,
    });


    gsap.registerPlugin(CSSPlugin);
    const { handleChangeViewport } = useContext(ProcSliderContext);

    const [isHoverButton, setIsHoverButton] = useState(false);

    const buttonRef = useRef(null);

    const buttonAllClass = classNames(buttonViewportClass, {
        'button-viewport-hover': isHoverButton && (media1728 === true),
        'button-viewport-hover--1133': isHoverButton && (media1133 === true),
        'button-viewport-hover--744': isHoverButton && (media744 === true),
        'button-viewport-hover--744l': isHoverButton && (media744l === true),
        'button-viewport-hover--375': isHoverButton && (media375 === true),
        'button-viewport-hover--275': isHoverButton && (media275 === true),
        'button-viewport-hover--1300': isHoverButton && (media1300 === true),
        'button-viewport-hover--900': isHoverButton && (media900 === true),
        'button-viewport-hover--600': isHoverButton && (media600 === true),
        'button-viewport-hover--600l': isHoverButton && (media600l === true),
    });

    const handleButtonMouseEnter = () => {
        setIsHoverButton(true);
    };

    const handleButtonMouseLeave = () => {
        setIsHoverButton(false);
    };

    if (buttonRef === null) throw new Error('ERROR_PROC_TABS_SLIDER_BUTTONS_BUTTON_REFS');

    return (
        <>
            <UiButton
                className={buttonAllClass}
                onClick={() => handleChangeViewport(numberFirstSlideViewport)}
                id={id}
                ref={buttonRef}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
            >
            </UiButton>
        </>
    );
}
