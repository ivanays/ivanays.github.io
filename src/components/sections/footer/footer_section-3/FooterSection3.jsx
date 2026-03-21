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
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

export const FooterSection3 = (props) => {

    let queryNumber = funcQueryNumber();

    const footerIconsClass = classNames(`footer${queryNumber}__icons`);
    const iconsClass = classNames(`icons${queryNumber}`);
    const iconsFooterClass = classNames(`icons-footer${queryNumber}`);
    const iconsItemClass = classNames(`icons${queryNumber}__item`);
    const iconsItemFooterClass = classNames(`icons${queryNumber}__item-footer`);
    const iconsItemWhatsappClass = classNames(`icons${queryNumber}__item-whatsapp`);
    const iconsItemTelegramClass = classNames(`icons${queryNumber}__item-telegram`);
    const iconsItemCheckmarkClass = classNames(`icons${queryNumber}__item-checkmark`);
    const iconsLinkClass = classNames(`icons${queryNumber}__link`);

    const iconsLinkFooterClass = classNames(`icons${queryNumber}__link-footer`);
    const iconsLinkWhatsappClass = classNames(`icons${queryNumber}__link-whatsapp`);
    const iconsLinkTelegramClass = classNames(`icons${queryNumber}__link-telegram`);
    const iconsLinkCheckmarkClass = classNames(`icons${queryNumber}__link-checkmark`);
    const iconsLineClass = classNames(`icons${queryNumber}__line`);
    const iconsLineFooterClass = classNames(`icons${queryNumber}__line-footer`);
    const popupBodyClass = classNames(`popup${queryNumber}__body`);
    
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
