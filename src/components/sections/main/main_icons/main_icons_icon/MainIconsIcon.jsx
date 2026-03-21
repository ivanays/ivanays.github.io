import React, { useEffect, createRef, useRef } from 'react';

import './MainIconsIcon.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

export const MainIconsIcon = (props) => {

    let queryNumber = funcQueryNumber();

    const iconsMainClass = classNames(`icons${queryNumber}__main`);
    const iconsMainIconClass = classNames(`icons${queryNumber}__main-icon`);
    const iconsMainShadowClass = classNames(`icons${queryNumber}__main-shadow`);


    const iconsIconRef = useRef(props.images.map(() => createRef()));


    const animationIconMouseEnter = (current1, current2) => {
        gsap.timeline()
            .to(current1, { opacity: 1, scale: 1.08, duration: 0.3, ease: "ease" })
            .to(current2, { scale: 0.8, duration: 0.3, delay: -0.3, ease: "ease" });
    };

    const animationIconMouseLeave = (current1, current2) => {
        gsap.timeline()
            .to(current1, { opacity: 0.8, scale: 1, duration: 0.3, ease: "ease" })
            .to(current2, { scale: 1, duration: 0.3, delay: -0.3, ease: "ease" });
    };

    useEffect(() => {
        props.isMouseEnter ? animationIconMouseEnter(iconsIconRef.current[0].current, iconsIconRef.current[1].current)
            : animationIconMouseLeave(iconsIconRef.current[0].current, iconsIconRef.current[1].current);
    });

    return (
        <>
            {propsData(props, props.images).map((prop, i) => (
                <UiImg key={`uiImgMainIconsWhatsapp${i}`}
                    {...prop}
                    className={i === 0 ? iconsMainIconClass : iconsMainShadowClass}
                    ref={iconsIconRef.current[i]}
                />
            ))}
        </>
    );
}

