import React, { useLayoutEffect, children, useState, useRef } from 'react';

import './ProceduresTabs.scss';

import classNames from 'classnames';
import gsap from 'gsap';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../../hooks';

import { ProcSliderProvider } from '../../../../contexts/ProcSliderContext';

import { UiButton } from '../../../ui';

import { SliderProcContentBody, SliderProcContentFace } from '../../../sliders/slider_proc/slider_proc_content';

import dataProceduresSliderBody from '../../../../data/data_procedures/data_procedures_sliders/data_procedures_slider_body/dataProceduresSliderBody.json';
import dataProceduresSliderFace from '../../../../data/data_procedures/data_procedures_sliders/data_procedures_slider_face/dataProceduresSliderFace.json';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const ProceduresTabs = (props) => {

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

    let queryNumber = funcQueryNumber();

    const proceduresTabsClass = classNames(`procedures${queryNumber}__tabs`);
    const proceduresMenuClass = classNames(`procedures${queryNumber}__menu`);
    const menuClass = classNames(`menu${queryNumber}`);
    const menuProceduresClass = classNames(`menu-procedures${queryNumber}`);
    const menuItemClass = classNames(`menu${queryNumber}__item`);
    const menuItemTabClass = classNames(`menu${queryNumber}__item-tab`);
    const menuLinkClass = classNames(`menu${queryNumber}__link`);
    const menuLinkTabClass = classNames(`menu${queryNumber}__link-tab`);
    const tabsClass = classNames(`tabs${queryNumber}`);
    const tabsProceduresClass = classNames(`tabs-procedures${queryNumber}`);
    const tabsBodyClass = classNames(`tabs${queryNumber}__body`);
    const tabsFaceClass = classNames(`tabs${queryNumber}__face`);
    const tabsSliderClass = classNames(`tabs${queryNumber}__slider`);

    const menuRef = useRef(null);
    const tabsBodyRef = useRef(null);
    const tabsFaceRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isHoverBody, setIsHoverBody] = useState(false);
    const [isHoverFace, setIsHoverFace] = useState(false);
    const [isClickedButton, setIsClickedButton] = useState('body');

    const imagesBody = SliderProcContentBody;
    const imagesFace = SliderProcContentFace;

    const { isScrolling } = useScrollDirection();

    const [isMenuBodyFace, setIsMenuBodyFace] = useState(true);

    const animationScaleY = (current, scaleY, opacity, height, duration) => {
        gsap.timeline()
            .to(current, { scaleY: scaleY, opacity: opacity, duration: duration })
            .to(current, { height: height, duration: duration - 1, delay: -1 });
    };

    useLayoutEffect(() => {
        setWidth(tabsBodyRef.current.clientWidth);
        setHeight(tabsBodyRef.current.clientHeight);
    }, []);

    useLayoutEffect(() => {
        const headerHeight = 120;
        const handleScroll = () => {

            if (media1728 || media1300 || media1133) {
                if (menuRef.current.getBoundingClientRect().top < headerHeight - 80) {
                    setIsMenuBodyFace(false);
                    isClickedButton === 'body' ? animationScaleY(tabsBodyRef.current, 0, 0, 0, 2)
                        : isClickedButton === 'face' ? animationScaleY(tabsFaceRef.current, 0, 0, 0, 2) : null;
                } else {
                    setIsMenuBodyFace(true);
                    isClickedButton === 'body' ? animationScaleY(tabsBodyRef.current, 1, 1, 484, 2)
                        : isClickedButton === 'face' ? animationScaleY(tabsFaceRef.current, 1, 1, 484, 2) : null;
                }
            }

        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);

    const tabsBodyAllClass = classNames(`${tabsClass}`, `${tabsProceduresClass}`, {
        'tabs-active--1728': (isClickedButton === 'body') && (media1728 === true),
        'tabs-disactive--1728': (isClickedButton !== 'body') && (media1728 === true),
        'tabs-active--1300': (isClickedButton === 'body') && (media1300 === true),
        'tabs-disactive--1300': (isClickedButton !== 'body') && (media1300 === true),
        'tabs-active--1133': (isClickedButton === 'body') && (media1133 === true),
        'tabs-disactive--1133': (isClickedButton !== 'body') && (media1133 === true),
        'tabs-active--900': (isClickedButton === 'body') && (media900 === true),
        'tabs-disactive--900': (isClickedButton !== 'body') && (media900 === true),
        'tabs-active--744': (isClickedButton === 'body') && (media744 === true),
        'tabs-disactive--744': (isClickedButton !== 'body') && (media744 === true),
        'tabs-active--744l': (isClickedButton === 'body') && (media744l === true),
        'tabs-disactive--744l': (isClickedButton !== 'body') && (media744l === true),
        'tabs-active--600': (isClickedButton === 'body') && (media600 === true),
        'tabs-disactive--600': (isClickedButton !== 'body') && (media600 === true),
        'tabs-active--600l': (isClickedButton === 'body') && (media600l === true),
        'tabs-disactive--600l': (isClickedButton !== 'body') && (media600l === true),
        'tabs-active--375': (isClickedButton === 'body') && (media375 === true),
        'tabs-disactive--375': (isClickedButton !== 'body') && (media375 === true),
        'tabs-active--275': (isClickedButton === 'body') && (media275 === true),
        'tabs-disactive--275': (isClickedButton !== 'body') && (media275 === true),
    });

    const tabsFaceAllClass = classNames(`${tabsClass}`, `${tabsProceduresClass}`, {
        'tabs-active--1728': (isClickedButton === 'face') && (media1728 === true),
        'tabs-disactive--1728': (isClickedButton !== 'face') && (media1728 === true),
        'tabs-active--1300': (isClickedButton === 'face') && (media1300 === true),
        'tabs-disactive--1300': (isClickedButton !== 'face') && (media1300 === true),
        'tabs-active--1133': (isClickedButton === 'face') && (media1133 === true),
        'tabs-disactive--1133': (isClickedButton !== 'face') && (media1133 === true),
        'tabs-active--900': (isClickedButton === 'face') && (media900 === true),
        'tabs-disactive--900': (isClickedButton !== 'face') && (media900 === true),
        'tabs-active--744': (isClickedButton === 'face') && (media744 === true),
        'tabs-disactive--744': (isClickedButton !== 'face') && (media744 === true),
        'tabs-active--744l': (isClickedButton === 'face') && (media744l === true),
        'tabs-disactive--744l': (isClickedButton !== 'face') && (media744l === true),
        'tabs-active--600': (isClickedButton === 'face') && (media600 === true),
        'tabs-disactive--600': (isClickedButton !== 'face') && (media600 === true),
        'tabs-active--600l': (isClickedButton === 'face') && (media600l === true),
        'tabs-disactive--600l': (isClickedButton !== 'face') && (media600l === true),
        'tabs-active--375': (isClickedButton === 'face') && (media375 === true),
        'tabs-disactive--375': (isClickedButton !== 'face') && (media375 === true),
        'tabs-active--275': (isClickedButton === 'face') && (media275 === true),
        'tabs-disactive--275': (isClickedButton !== 'face') && (media275 === true),
    });

    const menuAllClass = classNames(`${menuClass}`, `${menuProceduresClass}`, {
        'menu-body--1728': (isClickedButton === 'body') && (media1728 === true),
        'menu-face--1728': (isClickedButton === 'face') && (media1728 === true),
        'menu-body--1300': (isClickedButton === 'body') && (media1300 === true),
        'menu-face--1300': (isClickedButton === 'face') && (media1300 === true),
        'menu-body--1133': (isClickedButton === 'body') && (media1133 === true),
        'menu-face--1133': (isClickedButton === 'face') && (media1133 === true),
        'menu-body--900': (isClickedButton === 'body') && (media900 === true),
        'menu-face--900': (isClickedButton === 'face') && (media900 === true),
        'menu-body--744': (isClickedButton === 'body') && (media744 === true),
        'menu-face--744': (isClickedButton === 'face') && (media744 === true),
        'menu-body--744l': (isClickedButton === 'body') && (media744l === true),
        'menu-face--744l': (isClickedButton === 'face') && (media744l === true),
        'menu-body--600': (isClickedButton === 'body') && (media600 === true),
        'menu-face--600': (isClickedButton === 'face') && (media600 === true),
        'menu-body--600l': (isClickedButton === 'body') && (media600l === true),
        'menu-face--600l': (isClickedButton === 'face') && (media600l === true),
        'menu-body--375': (isClickedButton === 'body') && (media375 === true),
        'menu-face--375': (isClickedButton === 'face') && (media375 === true),
        'menu-body--275': (isClickedButton === 'body') && (media275 === true),
        'menu-face--275': (isClickedButton === 'face') && (media275 === true),
    });

    const bodyClass = classNames(`${menuLinkClass}`, `${menuLinkTabClass}`, {
        'menu--1728__tab-active': (isClickedButton === 'body') && (media1728 === true),
        'menu--1728__tab-disactive': (isClickedButton !== 'body') && (media1728 === true),
        'menu--1728__link-hover': isHoverBody && (media1728 === true),
        'menu--1300__tab-active': (isClickedButton === 'body') && (media1300 === true),
        'menu--1300__tab-disactive': (isClickedButton !== 'body') && (media1300 === true),
        'menu--1300__link-hover': isHoverBody && (media1300 === true),
        'menu--1133__tab-active': (isClickedButton === 'body') && (media1133 === true),
        'menu--1133__tab-disactive': (isClickedButton !== 'body') && (media1133 === true),
        'menu--1133__link-hover': isHoverBody && (media1133 === true),
        'menu--900__tab-active': (isClickedButton === 'body') && (media900 === true),
        'menu--900__tab-disactive': (isClickedButton !== 'body') && (media900 === true),
        'menu--900__link-hover': isHoverBody && (media900 === true),
        'menu--744__tab-active': (isClickedButton === 'body') && (media744 === true),
        'menu--744__tab-disactive': (isClickedButton !== 'body') && (media744 === true),
        'menu--744__link-hover': isHoverBody && (media744 === true),
        'menu--744l__tab-active': (isClickedButton === 'body') && (media744l === true),
        'menu--744l__tab-disactive': (isClickedButton !== 'body') && (media744l === true),
        'menu--744l__link-hover': isHoverBody && (media744l === true),
        'menu--600__tab-active': (isClickedButton === 'body') && (media600 === true),
        'menu--600__tab-disactive': (isClickedButton !== 'body') && (media600 === true),
        'menu--600__link-hover': isHoverBody && (media600 === true),
        'menu--600l__tab-active': (isClickedButton === 'body') && (media600l === true),
        'menu--600l__tab-disactive': (isClickedButton !== 'body') && (media600l === true),
        'menu--600l__link-hover': isHoverBody && (media600l === true),
        'menu--375__tab-active': (isClickedButton === 'body') && (media375 === true),
        'menu--375__tab-disactive': (isClickedButton !== 'body') && (media375 === true),
        'menu--375__link-hover': isHoverBody && (media375 === true),
        'menu--275__tab-active': (isClickedButton === 'body') && (media275 === true),
        'menu--275__tab-disactive': (isClickedButton !== 'body') && (media275 === true),
        'menu--275__link-hover': isHoverBody && (media275 === true),
    });

    const faceClass = classNames(`${menuLinkClass}`, `${menuLinkTabClass}`, {
        'menu--1728__tab-active': (isClickedButton === 'face') && (media1728 === true),
        'menu--1728__tab-disactive': (isClickedButton !== 'face') && (media1728 === true),
        'menu--1728__link-hover': isHoverFace && (media1728 === true),
        'menu--1300__tab-active': (isClickedButton === 'face') && (media1300 === true),
        'menu--1300__tab-disactive': (isClickedButton !== 'face') && (media1300 === true),
        'menu--1300__link-hover': isHoverFace && (media1300 === true),
        'menu--1133__tab-active': (isClickedButton === 'face') && (media1133 === true),
        'menu--1133__tab-disactive': (isClickedButton !== 'face') && (media1133 === true),
        'menu--1133__link-hover': isHoverFace && (media1133 === true),
        'menu--900__tab-active': (isClickedButton === 'face') && (media900 === true),
        'menu--900__tab-disactive': (isClickedButton !== 'face') && (media900 === true),
        'menu--900__link-hover': isHoverFace && (media900 === true),
        'menu--744__tab-active': (isClickedButton === 'face') && (media744 === true),
        'menu--744__tab-disactive': (isClickedButton !== 'face') && (media744 === true),
        'menu--744__link-hover': isHoverFace && (media744 === true),
        'menu--744l__tab-active': (isClickedButton === 'face') && (media744l === true),
        'menu--744l__tab-disactive': (isClickedButton !== 'face') && (media744l === true),
        'menu--744l__link-hover': isHoverFace && (media744l === true),
        'menu--600__tab-active': (isClickedButton === 'face') && (media600 === true),
        'menu--600__tab-disactive': (isClickedButton !== 'face') && (media600 === true),
        'menu--600__link-hover': isHoverFace && (media600 === true),
        'menu--600l__tab-active': (isClickedButton === 'face') && (media600l === true),
        'menu--600l__tab-disactive': (isClickedButton !== 'face') && (media600l === true),
        'menu--600l__link-hover': isHoverFace && (media600l === true),
        'menu--375__tab-active': (isClickedButton === 'face') && (media375 === true),
        'menu--375__tab-disactive': (isClickedButton !== 'face') && (media375 === true),
        'menu--375__link-hover': isHoverFace && (media375 === true),
        'menu--275__tab-active': (isClickedButton === 'face') && (media275 === true),
        'menu--275__tab-disactive': (isClickedButton !== 'face') && (media275 === true),
        'menu--275__link-hover': isHoverFace && (media275 === true),
    });

    const animationIn = (current, opacity, scale, duration) => {
        gsap.fromTo(
            current,
            { opacity: 1, scale: 1 },
            { opacity: opacity, scale: scale, duration: duration }
        );
    };

    const animationOut = (current, opacity, scale, duration) => {
        gsap.fromTo(
            current,
            { opacity: opacity, scale: scale },
            { opacity: 1, scale: 1, duration: duration }
        );
    };

    const handleClickTab0 = async () => {
        await delay(200);
        animationIn(menuRef.current, 0.7, 0.99, 0.2);
        animationIn(tabsBodyRef.current, 0.7, 0.99, 0.4);
        await delay(400);
        setIsClickedButton('body');
        animationOut(menuRef.current, 0.7, 0.99, 0.2);
        animationIn(props.bodyRef.current, 0.7, 0.99, 0.2);
        animationOut(props.bodyRef.current, 0.7, 0.99, 0.2);
        animationIn(props.faceRef.current, 0.7, 1, 0.2);
        await delay(200);
        animationOut(tabsBodyRef.current, 0.7, 0.99, 0.4);
    };

    const handleClickTab1 = async () => {
        await delay(200);
        animationIn(menuRef.current, 0.7, 0.99, 0.2);
        animationIn(tabsFaceRef.current, 0.7, 0.99, 0.4);
        await delay(400);
        setIsClickedButton('face');
        animationOut(menuRef.current, 0.7, 0.99, 0.2);
        animationIn(props.faceRef.current, 0.7, 0.99, 0.2);
        animationOut(props.faceRef.current, 0.7, 0.99, 0.2);
        animationIn(props.bodyRef.current, 0.7, 1, 0.2);
        await delay(200);
        animationOut(tabsFaceRef.current, 0.7, 0.99, 0.4);
    };

    const handleBodyMouseEnter = () => {
        setIsHoverBody(true);
    };

    const handleBodyMouseLeave = () => {
        setIsHoverBody(false);
    };

    const handleFaceMouseEnter = () => {
        setIsHoverFace(true);
    };

    const handleFaceMouseLeave = () => {
        setIsHoverFace(false);
    };

    if (props.bodyRef === null || props.faceRef === null) throw new Error('ERROR_PROC_TABS_PROPS_REFS');
    if (menuRef === null || tabsBodyRef === null || tabsFaceRef === null) throw new Error('ERROR_PROC_TABS_REFS');
    if (imagesBody.length < 4 || imagesFace.length < 4) throw new Error('ERROR_PROC_TABS_IMAGES');

    const sliderTypeB = 'b';
    const sliderTypeF = 'f';

    return (
        <>
            <div className={proceduresTabsClass}>
                <div className={proceduresMenuClass}>
                    <menu
                        className={menuAllClass}
                        ref={menuRef}
                        style={(isMenuBodyFace === true) ? { opacity: 1, cursor: 'pointer', animationPlayState: 'running' }
                            : (isMenuBodyFace === false) ? { opacity: 0.1, cursor: 'default', animationPlayState: 'paused' } : null
                        }
                    >
                        {propsData(props).map((prop, i) => (
                            <li className={`${menuItemClass} ${menuItemTabClass}`}
                                key={`liMenuItemTab${i}`}
                            >
                                <UiButton
                                    key={`UiButtonProceduresTab${i}`}
                                    id={prop.id}
                                    className={i === 0 ? bodyClass : faceClass}
                                    ref={i === 0 ? props.bodyRef : i === 1 ? props.faceRef : null}
                                    onClick={i === 0 ? handleClickTab0 : i === 1 ? handleClickTab1 : null}
                                    onMouseEnter={i === 0 ? handleBodyMouseEnter : i === 1 ? handleFaceMouseEnter : null}
                                    onMouseLeave={i === 0 ? handleBodyMouseLeave : i === 1 ? handleFaceMouseLeave : null}
                                    disabled={isMenuBodyFace ? false : true}
                                    style={isMenuBodyFace ? { cursor: 'pointer' } : { cursor: 'default' }}
                                >
                                    {prop.children}
                                </UiButton>
                            </li>
                        ))}
                    </menu>
                </div>
                <div id="tab-b" ref={tabsBodyRef} className={tabsBodyAllClass}
                >
                    <div className={tabsBodyClass}>
                        <div className={tabsSliderClass}>
                            {<ProcSliderProvider
                                data={dataProceduresSliderBody}
                                viewportWidth={width}
                                viewportHeight={height}
                                images={imagesBody}
                                containerWidth={props.containerWidth}
                                sliderType={sliderTypeB}
                            />}
                        </div>
                    </div>
                </div>
                <div id="tab-f" ref={tabsFaceRef} className={tabsFaceAllClass}
                >
                    <div className={tabsFaceClass}>
                        <div className={tabsSliderClass}>
                            {<ProcSliderProvider
                                data={dataProceduresSliderFace}
                                viewportWidth={width}
                                viewportHeight={height}
                                images={imagesFace}
                                containerWidth={props.containerWidth}
                                sliderType={sliderTypeF}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
