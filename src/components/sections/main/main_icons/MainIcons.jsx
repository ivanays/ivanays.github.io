import React, { children, useContext, useState, createRef, useRef, useLayoutEffect } from 'react';

import './MainIcons.scss';

import gsap from 'gsap';
import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../../hooks';

import { ModalContext } from '../../../../contexts';

import { UiButton } from '../../../ui';
import { MainIconsIcon } from './main_icons_icon';
import { ModalContentD } from '../../../modals/modal/modal_content';

import whatsappReview from '../../../../images/whatsapp-review.svg';
import whatsappShadow from '../../../../images/whatsapp-shadow.svg';
import telegramReview from '../../../../images/telegram-review.svg';
import telegramShadow from '../../../../images/telegram-shadow.svg';
import checkmarkReview from '../../../../images/checkmark-review.svg';
import checkmarkShadow from '../../../../images/checkmark-shadow.svg';

import dataMainIconsWhatsapp from '../../../../data/data_main/data_main_icons/data_main_icons_whatsapp/dataMainIconsWhatsapp.json';
import dataMainIconsTelegram from '../../../../data/data_main/data_main_icons/data_main_icons_telegram/dataMainIconsTelegram.json';
import dataMainIconsCheckmark from '../../../../data/data_main/data_main_icons/data_main_icons_checkmark/dataMainIconsCheckmark.json';

import propsData from '../../../../func/func_props/funcProps';

export const MainIcons = (props) => {

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

    const mainIconsClass = classNames(`main${queryNumber}__icons`);
    const iconsClass = classNames(`icons${queryNumber}`);
    const iconsMainClass = classNames(`icons-main${queryNumber}`);
    const iconsItemClass = classNames(`icons${queryNumber}__item`);
    const iconsItemMainClass = classNames(`icons${queryNumber}__item-main`);
    const iconsLinkClass = classNames(`icons${queryNumber}__link`);
    const iconsLinkMainClass = classNames(`icons${queryNumber}__link-main`);
    const popupBodyClass = classNames(`popup${queryNumber}__body`);

    const { openModal } = useContext(ModalContext);

    const { isScrolling } = useScrollDirection();

    const buttonsMainIconsRef = useRef([0, 1, 2].map(() => createRef()));

    const [isButtonMainIcons1, setIsButtonMainIcons1] = useState(true);
    const [isButtonMainIcons2, setIsButtonMainIcons2] = useState(true);
    const [isButtonMainIcons3, setIsButtonMainIcons3] = useState(true);

    useLayoutEffect(() => {
        if (media744l === true || media375 === true || media275 === true) return;
        const headerHeight = 120;
        const handleScroll = () => {

            if (buttonsMainIconsRef.current[0].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonMainIcons1(false);
            } else {
                setIsButtonMainIcons1(true);
            }

            if (buttonsMainIconsRef.current[1].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonMainIcons2(false);
            } else {
                setIsButtonMainIcons2(true);
            }

            if (buttonsMainIconsRef.current[2].current.getBoundingClientRect().top < headerHeight) {
                setIsButtonMainIcons3(false);
            } else {
                setIsButtonMainIcons3(true);
            }

        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);

    const [isMouseEnterWhatsapp, setIsMouseEnterWhatsapp] = useState(false);
    const [isMouseEnterTelegram, setIsMouseEnterTelegram] = useState(false);
    const [isMouseEnterCheckmark, setIsMouseEnterCheckmark] = useState(false);

    const imagesWhatsapp = [whatsappReview, whatsappShadow];
    const imagesTelegram = [telegramReview, telegramShadow];
    const imagesCheckmark = [checkmarkReview, checkmarkShadow];

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const handleClickModalD = () => {
        openModal({
            id: `${modalId}d`,
            className: `${modalBodyClassName}d`,
            content: (
                <ModalContentD />
            )
        });
    };

    const handleLiMouseEnter = (number) => {
        switch (number) {
            case 0:
                setIsMouseEnterWhatsapp(true);
                break;
            case 1:
                setIsMouseEnterTelegram(true);
                break;
            case 2:
                setIsMouseEnterCheckmark(true);
                break;
            default:
                setIsMouseEnterWhatsapp(false);
                setIsMouseEnterTelegram(false);
                setIsMouseEnterCheckmark(false);
        }
    };

    const handleLiMouseLeave = (number) => {
        switch (number) {
            case 0:
                setIsMouseEnterWhatsapp(false);
                break;
            case 1:
                setIsMouseEnterTelegram(false);
                break;
            case 2:
                setIsMouseEnterCheckmark(false);
                break;
            default:
                setIsMouseEnterWhatsapp(false);
                setIsMouseEnterTelegram(false);
                setIsMouseEnterCheckmark(false);
        }
    };

    return (
        <>
            <div className={mainIconsClass}>
                <menu className={`${iconsClass} ${iconsMainClass}`}>
                    {propsData(props).map((prop, i) => (
                        <li className={`${iconsItemClass} ${iconsItemMainClass}`}
                            key={`liIconsItemMain${i}`}
                            onMouseEnter={() => { handleLiMouseEnter(i) }}
                            onMouseLeave={() => { handleLiMouseLeave(i) }}
                        >
                            <UiButton
                                key={`uiButtonMainIcons${i}`}
                                id={prop.id}
                                className={`${iconsLinkClass} ${iconsLinkMainClass}`}
                                onClick={(i === 2) ? handleClickModalD : null}
                                ref={buttonsMainIconsRef.current[i]}
                                disabled={(i === 0 && isButtonMainIcons1 === true) ? false
                                    : (i === 0 && isButtonMainIcons1 === false) ? true
                                        : (i === 1 && isButtonMainIcons2 === true) ? false
                                            : (i === 1 && isButtonMainIcons2 === false) ? true
                                                : (i === 2 && isButtonMainIcons3 === true) ? false
                                                    : (i === 2 && isButtonMainIcons3 === false) ? true : null
                                }
                                style={(i === 0 && isButtonMainIcons1 === true) ? { opacity: 1, cursor: 'pointer' }
                                    : (i === 0 && isButtonMainIcons1 === false) ? { opacity: 0.2, cursor: 'default' }
                                        : (i === 1 && isButtonMainIcons2 === true) ? { opacity: 1, cursor: 'pointer' }
                                            : (i === 1 && isButtonMainIcons2 === false) ? { opacity: 0.2, cursor: 'default' }
                                                : (i === 2 && isButtonMainIcons3 === true) ? { opacity: 1, cursor: 'pointer' }
                                                    : (i === 2 && isButtonMainIcons3 === false) ? { opacity: 0.2, cursor: 'default' } : null
                                }
                            >
                                {i === 0 ? (
                                    <MainIconsIcon
                                        data={dataMainIconsWhatsapp}
                                        isMouseEnter={isButtonMainIcons1 && isMouseEnterWhatsapp}
                                        images={imagesWhatsapp}
                                    />
                                ) : i === 1 ? (
                                    <MainIconsIcon
                                        data={dataMainIconsTelegram}
                                        isMouseEnter={isButtonMainIcons2 && isMouseEnterTelegram}
                                        images={imagesTelegram}
                                    />
                                ) : i === 2 ? (
                                    <MainIconsIcon
                                        data={dataMainIconsCheckmark}
                                        isMouseEnter={isButtonMainIcons3 && isMouseEnterCheckmark}
                                        images={imagesCheckmark}
                                    />
                                ) : null}
                            </UiButton>
                        </li>
                    ))}
                </menu>
            </div>
        </>
    );
}

