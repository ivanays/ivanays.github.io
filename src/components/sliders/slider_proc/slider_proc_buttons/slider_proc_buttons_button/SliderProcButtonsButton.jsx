import React, { useContext, useRef, useLayoutEffect, useState } from "react";

import './SliderProcButtonsButton.scss';

import { useMediaQuery } from "../../../../../hooks";

import { ProcSliderContext } from "../../../../../contexts/ProcSliderContext";
import classNames from 'classnames';

import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../../../func/func_query_number/funcQueryNumber";

import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import { UiButton } from '../../../../ui';

export const SliderProcButtonsButton = ({ id, numberFirstSlideViewport }) => {

    let queryNumber = funcQueryNumber();

    const buttonViewportClass = classNames(`button-viewport${queryNumber}`);


    gsap.registerPlugin(CSSPlugin);
    const { handleChangeViewport } = useContext(ProcSliderContext);

    const [isHoverButton, setIsHoverButton] = useState(false);

    const buttonRef = useRef(null);

    const buttonAllClass = classNames(buttonViewportClass, `button-viewport-hover${queryNumber}`);

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
