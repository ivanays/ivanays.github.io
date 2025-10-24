import React, { useEffect, createRef, useRef } from 'react';

import './MainIconsIcon.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

export const MainIconsIcon = (props) => {

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

    const iconsMainClass = classNames({
        'icons__main': media1728 === true,
        'icons--1133__main': media1133 === true,
        'icons--744__main': media744 === true,
        'icons--744l__main': media744l === true,
        'icons--375__main': media375 === true,
        'icons--275__main': media275 === true,
        'icons--1300__main': media1300 === true,
        'icons--900__main': media900 === true,
        'icons--600__main': media600 === true,
        'icons--600l__main': media600l === true,
    });

    const iconsMainIconClass = classNames({
        'icons__main-icon': media1728 === true,
        'icons--1133__main-icon': media1133 === true,
        'icons--744__main-icon': media744 === true,
        'icons--744l__main-icon': media744l === true,
        'icons--375__main-icon': media375 === true,
        'icons--275__main-icon': media275 === true,
        'icons--1300__main-icon': media1300 === true,
        'icons--900__main-icon': media900 === true,
        'icons--600__main-icon': media600 === true,
        'icons--600l__main-icon': media600l === true,
    });

    const iconsMainShadowClass = classNames({
        'icons__main-shadow': media1728 === true,
        'icons--1133__main-shadow': media1133 === true,
        'icons--744__main-shadow': media744 === true,
        'icons--744l__main-shadow': media744l === true,
        'icons--375__main-shadow': media375 === true,
        'icons--275__main-shadow': media275 === true,
        'icons--1300__main-shadow': media1300 === true,
        'icons--900__main-shadow': media900 === true,
        'icons--600__main-shadow': media600 === true,
        'icons--600l__main-shadow': media600l === true,
    });


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

