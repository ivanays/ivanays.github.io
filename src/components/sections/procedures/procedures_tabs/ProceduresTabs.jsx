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

    const proceduresTabsClass = classNames({
        'procedures__tabs': media1728 === true,
        'procedures--1133__tabs': media1133 === true,
        'procedures--744__tabs': media744 === true,
        'procedures--744l__tabs': media744l === true,
        'procedures--375__tabs': media375 === true,
        'procedures--275__tabs': media275 === true,
        'procedures--1300__tabs': media1300 === true,
        'procedures--900__tabs': media900 === true,
        'procedures--600__tabs': media600 === true,
        'procedures--600l__tabs': media600l === true,
    });

    const proceduresMenuClass = classNames({
        'procedures__menu': media1728 === true,
        'procedures--1133__menu': media1133 === true,
        'procedures--744__menu': media744 === true,
        'procedures--744l__menu': media744l === true,
        'procedures--375__menu': media375 === true,
        'procedures--275__menu': media275 === true,
        'procedures--1300__menu': media1300 === true,
        'procedures--900__menu': media900 === true,
        'procedures--600__menu': media600 === true,
        'procedures--600l__menu': media600l === true,
    });

    const menuClass = classNames({
        'menu': media1728 === true,
        'menu--1133': media1133 === true,
        'menu--744': media744 === true,
        'menu--744l': media744l === true,
        'menu--375': media375 === true,
        'menu--275': media275 === true,
        'menu--1300': media1300 === true,
        'menu--900': media900 === true,
        'menu--600': media600 === true,
        'menu--600l': media600l === true,
    });

    const menuProceduresClass = classNames({
        'menu-procedures': media1728 === true,
        'menu-procedures--1133': media1133 === true,
        'menu-procedures--744': media744 === true,
        'menu-procedures--744l': media744l === true,
        'menu-procedures--375': media375 === true,
        'menu-procedures--275': media275 === true,
        'menu-procedures--1300': media1300 === true,
        'menu-procedures--900': media900 === true,
        'menu-procedures--600': media600 === true,
        'menu-procedures--600l': media600l === true,
    });

    const menuItemClass = classNames({
        'menu__item': media1728 === true,
        'menu--1133__item': media1133 === true,
        'menu--744__item': media744 === true,
        'menu--744l__item': media744l === true,
        'menu--375__item': media375 === true,
        'menu--275__item': media275 === true,
        'menu--1300__item': media1300 === true,
        'menu--900__item': media900 === true,
        'menu--600__item': media600 === true,
        'menu--600l__item': media600l === true,
    });

    const menuItemTabClass = classNames({
        'menu__item-tab': media1728 === true,
        'menu--1133__item-tab': media1133 === true,
        'menu--744__item-tab': media744 === true,
        'menu--744l__item-tab': media744l === true,
        'menu--375__item-tab': media375 === true,
        'menu--275__item-tab': media275 === true,
        'menu--1300__item-tab': media1300 === true,
        'menu--900__item-tab': media900 === true,
        'menu--600__item-tab': media600 === true,
        'menu--600l__item-tab': media600l === true,
    });

    const menuLinkClass = classNames({
        'menu__link': media1728 === true,
        'menu--1133__link': media1133 === true,
        'menu--744__link': media744 === true,
        'menu--744l__link': media744l === true,
        'menu--375__link': media375 === true,
        'menu--375__link': media275 === true,
        'menu--1300__link': media1300 === true,
        'menu--900__link': media900 === true,
        'menu--600__link': media600 === true,
        'menu--600l__link': media600l === true,
    });

    const menuLinkTabClass = classNames({
        'menu__link-tab': media1728 === true,
        'menu--1133__link-tab': media1133 === true,
        'menu--744__link-tab': media744 === true,
        'menu--744l__link-tab': media744l === true,
        'menu--375__link-tab': media375 === true,
        'menu--275__link-tab': media275 === true,
        'menu--1300__link-tab': media1300 === true,
        'menu--900__link-tab': media900 === true,
        'menu--600__link-tab': media600 === true,
        'menu--600l__link-tab': media600l === true,
    });

    const tabsClass = classNames({
        'tabs': media1728 === true,
        'tabs--1133': media1133 === true,
        'tabs--744': media744 === true,
        'tabs--744l': media744l === true,
        'tabs--375': media375 === true,
        'tabs--275': media275 === true,
        'tabs--1300': media1300 === true,
        'tabs--900': media900 === true,
        'tabs--600': media600 === true,
        'tabs--600l': media600l === true,
    });

    const tabsProceduresClass = classNames({
        'tabs-procedures': media1728 === true,
        'tabs-procedures--1133': media1133 === true,
        'tabs-procedures--744': media744 === true,
        'tabs-procedures--744l': media744l === true,
        'tabs-procedures--375': media375 === true,
        'tabs-procedures--275': media275 === true,
        'tabs-procedures--1300': media1300 === true,
        'tabs-procedures--900': media900 === true,
        'tabs-procedures--600': media600 === true,
        'tabs-procedures--600l': media600l === true,
    });

    const tabsBodyClass = classNames({
        'tabs__body': media1728 === true,
        'tabs--1133__body': media1133 === true,
        'tabs--744__body': media744 === true,
        'tabs--744l__body': media744l === true,
        'tabs--375__body': media375 === true,
        'tabs--275__body': media275 === true,
        'tabs--1300__body': media1300 === true,
        'tabs--900__body': media900 === true,
        'tabs--600__body': media600 === true,
        'tabs--600l__body': media600l === true,
    });

    const tabsFaceClass = classNames({
        'tabs__face': media1728 === true,
        'tabs--1133__face': media1133 === true,
        'tabs--744__face': media744 === true,
        'tabs--744l__face': media744l === true,
        'tabs--375__face': media375 === true,
        'tabs--275__face': media275 === true,
        'tabs--1300__face': media1300 === true,
        'tabs--900__face': media900 === true,
        'tabs--600__face': media600 === true,
        'tabs--600l__face': media600l === true,
    });

    const tabsSliderClass = classNames({
        'tabs__slider': media1728 === true,
        'tabs--1133__slider': media1133 === true,
        'tabs--744__slider': media744 === true,
        'tabs--744l__slider': media744l === true,
        'tabs--375__slider': media375 === true,
        'tabs--275__slider': media275 === true,
        'tabs--1300__slider': media1300 === true,
        'tabs--900__slider': media900 === true,
        'tabs--600__slider': media600 === true,
        'tabs--600l__slider': media600l === true,
    });

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
        'tabs-active': (isClickedButton === 'body') && (media1728 === true),
        'tabs-disactive': (isClickedButton !== 'body') && (media1728 === true),
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
        'tabs-active': (isClickedButton === 'face') && (media1728 === true),
        'tabs-disactive': (isClickedButton !== 'face') && (media1728 === true),
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
        'menu-body': (isClickedButton === 'body') && (media1728 === true),
        'menu-face': (isClickedButton === 'face') && (media1728 === true),
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
        'menu__tab-active': (isClickedButton === 'body') && (media1728 === true),
        'menu__tab-disactive': (isClickedButton !== 'body') && (media1728 === true),
        'menu__link-hover': isHoverBody && (media1728 === true),
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
        'menu__tab-active': (isClickedButton === 'face') && (media1728 === true),
        'menu__tab-disactive': (isClickedButton !== 'face') && (media1728 === true),
        'menu__link-hover': isHoverFace && (media1728 === true),
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
