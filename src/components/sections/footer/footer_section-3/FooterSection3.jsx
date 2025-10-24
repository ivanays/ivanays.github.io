import React, { children, useContext, createRef, useRef } from 'react';

import './FooterSection3.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';

import gsap from 'gsap';

import { ModalContext } from '../../../../contexts';

import { UiDiv, UiLi, UiButton } from '../../../ui';
import { ModalContentD } from '../../../modals/modal/modal_content';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

export const FooterSection3 = (props) => {

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

    const footerIconsClass = classNames({
        'footer__icons': media1728 === true,
        'footer--1133__icons': media1133 === true,
        'footer--744__icons': media744 === true,
        'footer--744l__icons': media744l === true,
        'footer--375__icons': media375 === true,
        'footer--275__icons': media275 === true,
        'footer--1300__icons': media1300 === true,
        'footer--900__icons': media900 === true,
        'footer--600__icons': media600 === true,
        'footer--600l__icons': media600l === true,
    });

    const iconsClass = classNames({
        'icons': media1728 === true,
        'icons--1133': media1133 === true,
        'icons--744': media744 === true,
        'icons--744l': media744l === true,
        'icons--375': media375 === true,
        'icons--275': media275 === true,
        'icons--1300': media1300 === true,
        'icons--900': media900 === true,
        'icons--600': media600 === true,
        'icons--600l': media600l === true,
    });

    const iconsFooterClass = classNames({
        'icons-footer': media1728 === true,
        'icons-footer--1133': media1133 === true,
        'icons-footer--744': media744 === true,
        'icons-footer--744l': media744l === true,
        'icons-footer--375': media375 === true,
        'icons-footer--275': media275 === true,
        'icons-footer--1300': media1300 === true,
        'icons-footer--900': media900 === true,
        'icons-footer--600': media600 === true,
        'icons-footer--600l': media600l === true,
    });

    const iconsItemClass = classNames({
        'icons__item': media1728 === true,
        'icons--1133__item': media1133 === true,
        'icons--744__item': media744 === true,
        'icons--744l__item': media744l === true,
        'icons--375__item': media375 === true,
        'icons--275__item': media275 === true,
        'icons--1300__item': media1300 === true,
        'icons--900__item': media900 === true,
        'icons--600__item': media600 === true,
        'icons--600l__item': media600l === true,
    });

    const iconsItemFooterClass = classNames({
        'icons__item-footer': media1728 === true,
        'icons--1133__item-footer': media1133 === true,
        'icons--744__item-footer': media744 === true,
        'icons--744l__item-footer': media744l === true,
        'icons--375__item-footer': media375 === true,
        'icons--275__item-footer': media275 === true,
        'icons--1300__item-footer': media1300 === true,
        'icons--900__item-footer': media900 === true,
        'icons--600__item-footer': media600 === true,
        'icons--600l__item-footer': media600l === true,
    });

    const iconsItemWhatsappClass = classNames({
        'icons__item-whatsapp': media1728 === true,
        'icons--1133__item-whatsapp': media1133 === true,
        'icons--744__item-whatsapp': media744 === true,
        'icons--744l__item-whatsapp': media744l === true,
        'icons--375__item-whatsapp': media375 === true,
        'icons--275__item-whatsapp': media275 === true,
        'icons--1300__item-whatsapp': media1300 === true,
        'icons--900__item-whatsapp': media900 === true,
        'icons--600__item-whatsapp': media600 === true,
        'icons--600l__item-whatsapp': media600l === true,
    });

    const iconsItemTelegramClass = classNames({
        'icons__item-telegram': media1728 === true,
        'icons--1133__item-telegram': media1133 === true,
        'icons--744__item-telegram': media744 === true,
        'icons--744l__item-telegram': media744l === true,
        'icons--375__item-telegram': media375 === true,
        'icons--275__item-telegram': media275 === true,
        'icons--1300__item-telegram': media1300 === true,
        'icons--900__item-telegram': media900 === true,
        'icons--600__item-telegram': media600 === true,
        'icons--600l__item-telegram': media600l === true,
    });

    const iconsItemCheckmarkClass = classNames({
        'icons__item-checkmark': media1728 === true,
        'icons--1133__item-checkmark': media1133 === true,
        'icons--744__item-checkmark': media744 === true,
        'icons--744l__item-checkmark': media744l === true,
        'icons--375__item-checkmark': media375 === true,
        'icons--275__item-checkmark': media275 === true,
        'icons--1300__item-checkmark': media1300 === true,
        'icons--900__item-checkmark': media900 === true,
        'icons--600__item-checkmark': media600 === true,
        'icons--600l__item-checkmark': media600l === true,
    });

    const iconsLinkClass = classNames({
        'icons__link': media1728 === true,
        'icons--1133__link': media1133 === true,
        'icons--744__link': media744 === true,
        'icons--744l__link': media744l === true,
        'icons--375__link': media375 === true,
        'icons--275__link': media275 === true,
        'icons--1300__link': media1300 === true,
        'icons--900__link': media900 === true,
        'icons--600__link': media600 === true,
        'icons--600l__link': media600l === true,
    });

    const iconsLinkFooterClass = classNames({
        'icons__link-footer': media1728 === true,
        'icons--1133__link-footer': media1133 === true,
        'icons--744__link-footer': media744 === true,
        'icons--744l__link-footer': media744l === true,
        'icons--375__link-footer': media375 === true,
        'icons--275__link-footer': media275 === true,
        'icons--1300__link-footer': media1300 === true,
        'icons--900__link-footer': media900 === true,
        'icons--600__link-footer': media600 === true,
        'icons--600l__link-footer': media600l === true,
    });

    const iconsLinkWhatsappClass = classNames({
        'icons__link-whatsapp': media1728 === true,
        'icons--1133__link-whatsapp': media1133 === true,
        'icons--744__link-whatsapp': media744 === true,
        'icons--744l__link-whatsapp': media744l === true,
        'icons--375__link-whatsapp': media375 === true,
        'icons--275__link-whatsapp': media275 === true,
        'icons--1300__link-whatsapp': media1300 === true,
        'icons--900__link-whatsapp': media900 === true,
        'icons--600__link-whatsapp': media600 === true,
        'icons--600l__link-whatsapp': media600l === true,
    });

    const iconsLinkTelegramClass = classNames({
        'icons__link-telegram': media1728 === true,
        'icons--1133__link-telegram': media1133 === true,
        'icons--744__link-telegram': media744 === true,
        'icons--744l__link-telegram': media744l === true,
        'icons--375__link-telegram': media375 === true,
        'icons--275__link-telegram': media275 === true,
        'icons--1300__link-telegram': media1300 === true,
        'icons--900__link-telegram': media900 === true,
        'icons--600__link-telegram': media600 === true,
        'icons--600l__link-telegram': media600l === true,
    });

    const iconsLinkCheckmarkClass = classNames({
        'icons__link-checkmark': media1728 === true,
        'icons--1133__link-checkmark': media1133 === true,
        'icons--744__link-checkmark': media744 === true,
        'icons--744l__link-checkmark': media744l === true,
        'icons--375__link-checkmark': media375 === true,
        'icons--275__link-checkmark': media275 === true,
        'icons--1300__link-checkmark': media1300 === true,
        'icons--900__link-checkmark': media900 === true,
        'icons--600__link-checkmark': media600 === true,
        'icons--600l__link-checkmark': media600l === true,
    });

    const iconsLineClass = classNames({
        'icons__line': media1728 === true,
        'icons--1133__line': media1133 === true,
        'icons--744__line': media744 === true,
        'icons--744l__line': media744l === true,
        'icons--375__line': media375 === true,
        'icons--275__line': media275 === true,
        'icons--1300__line': media1300 === true,
        'icons--900__line': media900 === true,
        'icons--600__line': media600 === true,
        'icons--600l__line': media600l === true,
    });

    const iconsLineFooterClass = classNames({
        'icons__line-footer': media1728 === true,
        'icons--1133__line-footer': media1133 === true,
        'icons--744__line-footer': media744 === true,
        'icons--744l__line-footer': media744l === true,
        'icons--375__line-footer': media375 === true,
        'icons--275__line-footer': media275 === true,
        'icons--1300__line-footer': media1300 === true,
        'icons--900__line-footer': media900 === true,
        'icons--600__line-footer': media600 === true,
        'icons--600l__line-footer': media600l === true,
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

    const iconsLinkRef = useRef(props.data[1].map(() => createRef()));
    const iconsDivRef = useRef(props.data[2].map(() => createRef()));

    const { openModal } = useContext(ModalContext);

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const handleClickModalD = () => {
        console.log('clickD');
        openModal({
            id: `${modalId}d`,
            className: `${modalBodyClassName}d`,
            content: (
                <ModalContentD />
            )
        });
    };

    const handleLiMouseEnter = (current1, current2) => {
        gsap.timeline()
            .to(current1, { opacity: 0.7, scale: 1.08, duration: 0.3, ease: "ease" })
            .to(current2, { opacity: 0.7, scaleX: 1.2, left: -10, bottom: -3, duration: 0.3, delay: -0.3, ease: "ease" });
    };

    const handleLiMouseLeave = (current1, current2) => {
        gsap.timeline()
            .to(current1, { opacity: 0.5, scale: 1, duration: 0.3, ease: "ease" })
            .to(current2, { opacity: 0.5, scaleX: 1, left: 0, bottom: 0, duration: 0.3, delay: -0.3, ease: "ease" });
    };

    return (
        <>
            <div className={footerIconsClass}>
                <menu className={`${iconsClass} ${iconsFooterClass}`}>
                    {propsData(props)[0].map((propi, i) => (
                        <UiLi key={`uiLiFooterSection3${i}`}
                            {...propi}
                            className={`${iconsItemClass} ${iconsItemFooterClass} ${(i === 0) ? iconsItemWhatsappClass :
                                (i === 1) ? iconsItemTelegramClass :
                                    (i === 2) ? iconsItemCheckmarkClass : null
                                }`}
                            onMouseEnter={() => { handleLiMouseEnter(iconsLinkRef.current[i].current, iconsDivRef.current[i].current) }}
                            onMouseLeave={() => { handleLiMouseLeave(iconsLinkRef.current[i].current, iconsDivRef.current[i].current) }}
                        >
                            {propsData(props)[1].map((propj, j) =>
                                i === j ? (
                                    <UiButton
                                        key={`uiButtonFooterSection3${j}`}
                                        id={propj.id}
                                        ref={iconsLinkRef.current[j]}
                                        className={`${iconsLinkClass} ${iconsLinkFooterClass} ${(i === 0) ? iconsLinkWhatsappClass :
                                            (i === 1) ? iconsLinkTelegramClass :
                                                (i === 2) ? iconsLinkCheckmarkClass : null
                                            }`}
                                        onClick={
                                            j === 2
                                                ? handleClickModalD
                                                : null
                                        }
                                    ></UiButton>
                                ) : null
                            )}
                            {propsData(props)[2].map((propk, k) =>
                                i === k ? (
                                    <UiDiv
                                        key={`uiDivFooterSection3${k}`}
                                        ref={iconsDivRef.current[k]}
                                        {...propk}
                                        className={`${iconsLineClass} ${iconsLineFooterClass}`}
                                    />
                                ) : null
                            )}
                        </UiLi>
                    ))}
                </menu>
            </div>
        </>
    );
}
