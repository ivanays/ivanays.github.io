import React, { children, useContext, createRef, useRef, useState, useLayoutEffect } from 'react';

import './MainSidebar.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const mainSidebarClass = classNames(`main${queryNumber}__sidebar`);
    const sidebarClass = classNames(`sidebar${queryNumber}`);
    const sidebarMainClass = classNames(`sidebar-main${queryNumber}`);
    const sidebarItemClass = classNames(`sidebar${queryNumber}__item`);
    const sidebarItemMainClass = classNames(`sidebar${queryNumber}__item-main`);
    const sidebarSubClass = classNames(`sidebar-sub${queryNumber}`);
    const sidebarItemSubClass = classNames(`sidebar${queryNumber}__item-sub`);
    const sidebarLinkClass = classNames(`sidebar${queryNumber}__link`);
    const sidebarLinkSubClass = classNames(`sidebar${queryNumber}__link-sub`);
    const sidebarLinkMainClass = classNames(`sidebar${queryNumber}__link-main`);
    const popupBodyClass = classNames(`popup${queryNumber}__body`);

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
