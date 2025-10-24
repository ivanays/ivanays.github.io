import React, { children, useContext, createRef, useRef, useState, useLayoutEffect } from 'react';

import './MainSidebar.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import gsap from 'gsap';

import { ModalContext } from '../../../../contexts';
import { UiButton } from '../../../ui/ui_button';
import {
    ModalContentB,
    ModalContentC,
    ModalContentF
} from '../../../modals/modal/modal_content';

import dataModalContentB from '../../../../data/data_modal/data_modal_content/data_modal_content_b/dataModalContentB.json';
import dataModalContentC from '../../../../data/data_modal/data_modal_content/data_modal_content_c/dataModalContentC.json';
import dataModalContentF from '../../../../data/data_modal/data_modal_content/data_modal_content_f/dataModalContentF.json';
import dataPhone from '../../../../data/data_phone/dataPhone.json';

export const MainSidebar = (props) => {

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

    const mainSidebarClass = classNames({
        'main__sidebar': media1728 === true,
        'main--1133__sidebar': media1133 === true,
        'main--744__sidebar': media744 === true,
        'main--744l__sidebar': media744l === true,
        'main--375__sidebar': media375 === true,
        'main--275__sidebar': media275 === true,
        'main--1300__sidebar': media1300 === true,
        'main--900__sidebar': media900 === true,
        'main--600__sidebar': media600 === true,
        'main--600l__sidebar': media600l === true,
    });

    const sidebarClass = classNames({
        'sidebar': media1728 === true,
        'sidebar--1133': media1133 === true,
        'sidebar--744': media744 === true,
        'sidebar--744l': media744l === true,
        'sidebar--375': media375 === true,
        'sidebar--275': media275 === true,
        'sidebar--1300': media1300 === true,
        'sidebar--900': media900 === true,
        'sidebar--600': media600 === true,
        'sidebar--600l': media600l === true,
    });

    const sidebarMainClass = classNames({
        'sidebar-main': media1728 === true,
        'sidebar-main--1133': media1133 === true,
        'sidebar-main--744': media744 === true,
        'sidebar-main--744l': media744l === true,
        'sidebar-main--375': media375 === true,
        'sidebar-main--275': media275 === true,
        'sidebar-main--1300': media1300 === true,
        'sidebar-main--900': media900 === true,
        'sidebar-main--600': media600 === true,
        'sidebar-main--600l': media600l === true,
    });

    const sidebarItemClass = classNames({
        'sidebar__item': media1728 === true,
        'sidebar--1133__item': media1133 === true,
        'sidebar--744__item': media744 === true,
        'sidebar--744l__item': media744l === true,
        'sidebar--375__item': media375 === true,
        'sidebar--275__item': media275 === true,
        'sidebar--1300__item': media1300 === true,
        'sidebar--900__item': media900 === true,
        'sidebar--600__item': media600 === true,
        'sidebar--600l__item': media600l === true,
    });

    const sidebarItemMainClass = classNames({
        'sidebar__item-main': media1728 === true,
        'sidebar--1133__item-main': media1133 === true,
        'sidebar--744__item-main': media744 === true,
        'sidebar--744l__item-main': media744l === true,
        'sidebar--375__item-main': media375 === true,
        'sidebar--275__item-main': media275 === true,
        'sidebar--1300__item-main': media1300 === true,
        'sidebar--900__item-main': media900 === true,
        'sidebar--600__item-main': media600 === true,
        'sidebar--600l__item-main': media600l === true,
    });

    const sidebarSubClass = classNames({
        'sidebar-sub': media1728 === true,
        'sidebar-sub--1133': media1133 === true,
        'sidebar-sub--744': media744 === true,
        'sidebar-sub--744l': media744l === true,
        'sidebar-sub--375': media375 === true,
        'sidebar-sub--275': media275 === true,
        'sidebar-sub--1300': media1300 === true,
        'sidebar-sub--900': media900 === true,
        'sidebar-sub--600': media600 === true,
        'sidebar-sub--600l': media600l === true,
    });

    const sidebarItemSubClass = classNames({
        'sidebar__item-sub': media1728 === true,
        'sidebar--1133__item-sub': media1133 === true,
        'sidebar--744__item-sub': media744 === true,
        'sidebar--744l__item-sub': media744l === true,
        'sidebar--375__item-sub': media375 === true,
        'sidebar--275__item-sub': media275 === true,
        'sidebar--1300__item-sub': media1300 === true,
        'sidebar--900__item-sub': media900 === true,
        'sidebar--600__item-sub': media600 === true,
        'sidebar--600l__item-sub': media600l === true,
    });

    const sidebarLinkClass = classNames({
        'sidebar__link': media1728 === true,
        'sidebar--1133__link': media1133 === true,
        'sidebar--744__link': media744 === true,
        'sidebar--744l__link': media744l === true,
        'sidebar--375__link': media375 === true,
        'sidebar--275__link': media275 === true,
        'sidebar--1300__link': media1300 === true,
        'sidebar--900__link': media900 === true,
        'sidebar--600__link': media600 === true,
        'sidebar--600l__link': media600l === true,
    });

    const sidebarLinkSubClass = classNames({
        'sidebar__link-sub': media1728 === true,
        'sidebar--1133__link-sub': media1133 === true,
        'sidebar--744__link-sub': media744 === true,
        'sidebar--744l__link-sub': media744l === true,
        'sidebar--375__link-sub': media375 === true,
        'sidebar--275__link-sub': media275 === true,
        'sidebar--1300__link-sub': media1300 === true,
        'sidebar--900__link-sub': media900 === true,
        'sidebar--600__link-sub': media600 === true,
        'sidebar--600l__link-sub': media600l === true,
    });

    const sidebarLinkMainClass = classNames({
        'sidebar__link-main': media1728 === true,
        'sidebar--1133__link-main': media1133 === true,
        'sidebar--744__link-main': media744 === true,
        'sidebar--744l__link-main': media744l === true,
        'sidebar--375__link-main': media375 === true,
        'sidebar--275__link-main': media275 === true,
        'sidebar--1300__link-main': media1300 === true,
        'sidebar--900__link-main': media900 === true,
        'sidebar--600__link-main': media600 === true,
        'sidebar--600l__link-main': media600l === true,
    });

    const popupBodyClass = classNames({
        'popup__body': media1728 === true,
        'popup--1133__body': media1133 === true,
        'popup--744__body': media744 === true,
        'popup--744l__body': media744l === true,
        'popup--375__body': media375 === true,
        'popup--275__body': media275 === true,
        'popup--1300__body': media1300 === true,
        'popup--900__body': media900 === true,
        'popup--600__body': media600 === true,
        'popup--600l__body': media600l === true,
    });

    const buttonsSubRef = useRef([0, 1].map(() => createRef()));
    const buttonsMainRef = useRef([0].map(() => createRef()));

    const { openModal } = useContext(ModalContext);

    const { isScrolling } = useScrollDirection();

    const [isButtonSub1, setIsButtonSub1] = useState(true);
    const [isButtonSub2, setIsButtonSub2] = useState(true);
    const [isButtonMain1, setIsButtonMain1] = useState(true);

    useLayoutEffect(() => {

        if (media744l === true || media600 === true || media375 === true || media275 === true) return;

        const headerHeight = 120;
        const handleScroll = () => {

            if (buttonsSubRef.current[0].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonSub1(false);
            } else {
                setIsButtonSub1(true);
            }

            if (buttonsSubRef.current[1].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonSub2(false);
            } else {
                setIsButtonSub2(true);
            }

            if (buttonsMainRef.current[0].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonMain1(false);
            } else {
                setIsButtonMain1(true);
            }

        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const handleClickModalB = () => {
        openModal({
            id: `${modalId}b`,
            className: `${modalBodyClassName}b`,
            content: (
                <ModalContentB dataPhone={dataPhone} data={dataModalContentB} />
            )
        });
    };

    const handleClickModalF = () => {
        openModal({
            id: `${modalId}f`,
            className: `${modalBodyClassName}f`,
            content: (
                <ModalContentF dataPhone={dataPhone} data={dataModalContentF} />
            )
        });
    };

    const handleClickModalC = () => {
        openModal({
            id: `${modalId}c`,
            className: `${modalBodyClassName}c`,
            content: (<ModalContentC dataPhone={dataPhone} data={dataModalContentC} />)
        });
    };

    let widthEnter, widthLeave;

    if (media1728) {
        widthEnter = 370;
        widthLeave = 290;
    } else if (media1300) {
        widthEnter = 312;
        widthLeave = 246;
    } else if (media1133) {
        widthEnter = 312;
        widthLeave = 246;
    } else if (media900) {
        widthEnter = 257;
        widthLeave = 202;
    } else if (media744) {
        widthEnter = 257;
        widthLeave = 202;
    } else if (media744l) {
        widthEnter = 257;
        widthLeave = 202;
    } else if (media600) {
        widthEnter = 232;
        widthLeave = 135;
    } else if (media600l) {
        widthEnter = 232;
        widthLeave = 135;
    } else if (media375) {
        widthEnter = 232;
        widthLeave = 135;
    } else if (media275) {
        widthEnter = 232;
        widthLeave = 135;
    }

    const handleLiMouseEnter = (current, width) => {
        gsap.timeline()
            .to(current, { width: width, duration: 0.3, ease: "ease" });
    };

    const handleLiMouseLeave = (current, width) => {
        gsap.timeline()
            .to(current, { width: width, duration: 0.3, ease: "ease" });
    };

    const propsData = (props) => {
        let propsAll = props;
        let data = [];

        data.push(JSON.parse(JSON.stringify(propsAll.data[0])));
        data.push(JSON.parse(JSON.stringify(propsAll.data[1])));

        return data;
    };

    return (
        <>
            <div className={mainSidebarClass}>
                <menu className={`${sidebarClass} ${sidebarMainClass}`}>
                    <li className={`${sidebarItemClass} ${sidebarItemMainClass}`}>
                        <menu className={`${sidebarClass} ${sidebarSubClass}`}>
                            {propsData(props)[0].map((prop, i) => (
                                <li className={`${sidebarItemClass} ${sidebarItemSubClass}`}
                                    key={`liSidebarItemSub${i}`}
                                >
                                    <UiButton
                                        key={`uiButtonMainSidebarSub${i}`}
                                        id={prop.id}
                                        className={`${sidebarLinkClass} ${sidebarLinkSubClass}`}
                                        ref={buttonsSubRef.current[i]}
                                        onClick={(i === 0) ? handleClickModalB : (i === 1) ? handleClickModalF : null}
                                        onMouseEnter={() => { handleLiMouseEnter(buttonsSubRef.current[i].current, widthEnter) }}
                                        onMouseLeave={() => { handleLiMouseLeave(buttonsSubRef.current[i].current, widthLeave) }}
                                        disabled={(i === 0 && isButtonSub1 === true) ? false
                                            : (i === 0 && isButtonSub1 === false) ? true
                                                : (i === 1 && isButtonSub2 === true) ? false
                                                    : (i === 1 && isButtonSub2 === false) ? true : null
                                        }
                                        style={(i === 0 && isButtonSub1 === true) ? { opacity: 1, cursor: 'pointer', animationPlayState: 'running' }
                                            : (i === 0 && isButtonSub1 === false) ? { opacity: 0.5, cursor: 'default', animationPlayState: 'paused' }
                                                : (i === 1 && isButtonSub2 === true) ? { opacity: 1, cursor: 'pointer', animationPlayState: 'running' }
                                                    : (i === 1 && isButtonSub2 === false) ? { opacity: 0.5, cursor: 'default', animationPlayState: 'paused' } : null
                                        }
                                    >
                                        {prop.children}
                                    </UiButton>
                                </li>
                            ))}
                        </menu>
                    </li>
                    {propsData(props)[1].map((prop, i) => (
                        <li className={`${sidebarItemClass} ${sidebarItemMainClass}`}
                            key={`liSidebarItemMain${i}`}
                        >
                            <UiButton
                                key={`uiButtonMainSidebarMain${i}`}
                                id={prop.id}
                                className={`${sidebarLinkClass} ${sidebarLinkMainClass}`}
                                ref={buttonsMainRef.current[i]}
                                onClick={handleClickModalC}
                                onMouseEnter={() => { handleLiMouseEnter(buttonsMainRef.current[i].current, widthEnter) }}
                                onMouseLeave={() => { handleLiMouseLeave(buttonsMainRef.current[i].current, widthLeave) }}
                                disabled={(i === 0 && isButtonMain1 === true) ? false : true}
                                style={(i === 0 && isButtonMain1 === true) ? { opacity: 1, cursor: 'pointer', animationPlayState: 'running' }
                                    : (i === 0 && isButtonMain1 === false) ? { opacity: 0.5, cursor: 'default', animationPlayState: 'paused' } : null}
                            >
                                {prop.children}
                            </UiButton>
                        </li>
                    ))}
                </menu>
            </div>
        </>
    );
};
