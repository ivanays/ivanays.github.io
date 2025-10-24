import React, { useContext } from 'react';

import './FooterSection1.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';

import { ModalContext } from '../../../../contexts';

import {
    ModalContentB,
    ModalContentF,
    ModalContentG,
    ModalContentH
} from '../../../modals/modal/modal_content';

import dataModalContentB from '../../../../data/data_modal/data_modal_content/data_modal_content_b/dataModalContentB.json';
import dataModalContentF from '../../../../data/data_modal/data_modal_content/data_modal_content_f/dataModalContentF.json';
import dataModalContentG from '../../../../data/data_modal/data_modal_content/data_modal_content_g/dataModalContentG.json';

import dataPhone from '../../../../data/data_phone/dataPhone.json';

import { UiButton } from '../../../ui';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const FooterSection1 = (props) => {

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

    const footerMenuClass = classNames({
        'footer__menu': media1728 === true,
        'footer--1133__menu': media1133 === true,
        'footer--744__menu': media744 === true,
        'footer--744l__menu': media744l === true,
        'footer--375__menu': media375 === true,
        'footer--275__menu': media275 === true,
        'footer--1300__menu': media1300 === true,
        'footer--900__menu': media900 === true,
        'footer--600__menu': media600 === true,
        'footer--600l__menu': media600l === true,
    });

    const footerInnerClass = classNames({
        'footer__inner': media1728 === true,
        'footer--1133__inner': media1133 === true,
        'footer--744__inner': media744 === true,
        'footer--744l__inner': media744l === true,
        'footer--375__inner': media375 === true,
        'footer--275__inner': media275 === true,
        'footer--1300__inner': media1300 === true,
        'footer--900__inner': media900 === true,
        'footer--600__inner': media600 === true,
        'footer--600l__inner': media600l === true,
    });

    const footerInnerColumnClass = classNames({
        'footer__inner-column': media1728 === true,
        'footer--1133__inner-column': media1133 === true,
        'footer--744__inner-column': media744 === true,
        'footer--744l__inner-column': media744l === true,
        'footer--375__inner-column': media375 === true,
        'footer--275__inner-column': media275 === true,
        'footer--1300__inner-column': media1300 === true,
        'footer--900__inner-column': media900 === true,
        'footer--600__inner-column': media600 === true,
        'footer--600l__inner-column': media600l === true,
    });

    const footerColumnClass = classNames({
        'footer__column': media1728 === true,
        'footer--1133__column': media1133 === true,
        'footer--744__column': media744 === true,
        'footer--744l__column': media744l === true,
        'footer--375__column': media375 === true,
        'footer--275__column': media275 === true,
        'footer--1300__column': media1300 === true,
        'footer--900__column': media900 === true,
        'footer--600__column': media600 === true,
        'footer--600l__column': media600l === true,
    });

    const footerColumn1Class = classNames({
        'footer__column-1': media1728 === true,
        'footer--1133__column-1': media1133 === true,
        'footer--744__column-1': media744 === true,
        'footer--744l__column-1': media744l === true,
        'footer--375__column-1': media375 === true,
        'footer--275__column-1': media275 === true,
        'footer--1300__column-1': media1300 === true,
        'footer--900__column-1': media900 === true,
        'footer--600__column-1': media600 === true,
        'footer--600l__column-1': media600l === true,
    });

    const footerColumn2Class = classNames({
        'footer__column-2': media1728 === true,
        'footer--1133__column-2': media1133 === true,
        'footer--744__column-2': media744 === true,
        'footer--744l__column-2': media744l === true,
        'footer--375__column-2': media375 === true,
        'footer--275__column-2': media275 === true,
        'footer--1300__column-2': media1300 === true,
        'footer--900__column-2': media900 === true,
        'footer--600__column-2': media600 === true,
        'footer--600l__column-2': media600l === true,
    });

    const footerColumn3Class = classNames({
        'footer__column-3': media1728 === true,
        'footer--1133__column-3': media1133 === true,
        'footer--744__column-3': media744 === true,
        'footer--744l__column-3': media744l === true,
        'footer--375__column-3': media375 === true,
        'footer--275__column-3': media275 === true,
        'footer--1300__column-3': media1300 === true,
        'footer--900__column-3': media900 === true,
        'footer--600__column-3': media600 === true,
        'footer--600l__column-3': media600l === true,
    });

    const menuFooterClass = classNames({
        'menu-footer': media1728 === true,
        'menu-footer--1133': media1133 === true,
        'menu-footer--744': media744 === true,
        'menu-footer--744l': media744l === true,
        'menu-footer--375': media375 === true,
        'menu-footer--275': media275 === true,
        'menu-footer--1300': media1300 === true,
        'menu-footer--900': media900 === true,
        'menu-footer--600': media600 === true,
        'menu-footer--600l': media600l === true,
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

    const menuItemSection1Class = classNames({
        'menu__item-section1': media1728 === true,
        'menu--1133__item-section1': media1133 === true,
        'menu--744__item-section1': media744 === true,
        'menu--744l__item-section1': media744l === true,
        'menu--375__item-section1': media375 === true,
        'menu--275__item-section1': media275 === true,
        'menu--1300__item-section1': media1300 === true,
        'menu--900__item-section1': media900 === true,
        'menu--600__item-section1': media600 === true,
        'menu--600l__item-section1': media600l === true,
    });

    const menuLinkSection1Class = classNames({
        'menu__link-section1': media1728 === true,
        'menu--1133__link-section1': media1133 === true,
        'menu--744__link-section1': media744 === true,
        'menu--744l__link-section1': media744l === true,
        'menu--375__link-section1': media375 === true,
        'menu--275__link-section1': media275 === true,
        'menu--1300__link-section1': media1300 === true,
        'menu--900__link-section1': media900 === true,
        'menu--600__link-section1': media600 === true,
        'menu--600l__link-section1': media600l === true,
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

    const { openModal } = useContext(ModalContext);

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

    const handleClickModalG = () => {
        openModal({
            id: `${modalId}g`,
            className: `${modalBodyClassName}g`,
            content: <ModalContentG dataPhone={dataPhone} data={dataModalContentG} />,
        });
    };

    const handleClickModalH = () => {
        openModal({
            id: `${modalId}h`,
            className: `${modalBodyClassName}h`,
            content: <ModalContentH />,
        });
    };

    const funcTimeout = (callback, timeout) => {
        const timeoutReference = setTimeout(callback, timeout);

        return () => clearTimeout(timeoutReference);
    };

    const handleClickBody = async event => {
        props.scroll();
        await delay(1500);
        props.bodyRef.current?.click();
    };

    const handleClickFace = async event => {
        props.scroll();
        await delay(1500);
        props.faceRef.current?.click();
    };

    return (
        <>
            <div className={footerMenuClass}>
                <div className={`${footerInnerClass} ${footerInnerColumnClass}`}>
                    <div className={`${footerColumnClass} ${footerColumn1Class}`}>
                        <menu className={menuFooterClass}>
                            {propsData(props)[0].map((prop, i) => (
                                <>
                                    <li className={`${menuItemClass} ${menuItemSection1Class}`}>
                                        <UiButton
                                            key={`uiButtonFooterSection1Column1${i}`}
                                            id={prop.id}
                                            className={menuLinkSection1Class}
                                            onClick={handleClickModalH}
                                        >
                                            {prop.children}
                                        </UiButton>
                                    </li>
                                </>
                            ))}
                        </menu>
                    </div>
                    <div className={`${footerColumnClass} ${footerColumn2Class}`}>
                        <menu className={menuFooterClass}>
                            {propsData(props)[1].map((prop, i) => (
                                <>
                                    <li className={`${menuItemClass} ${menuItemSection1Class}`}>
                                        <UiButton
                                            key={`uiButtonFooterSection1Column2${i}`}
                                            id={prop.id}
                                            className={menuLinkSection1Class}
                                            onClick={i === 0 ? handleClickBody : i === 1 ? handleClickFace : null}
                                        >
                                            {media275 && i === 0 ? "Тело"
                                                : media275 && i === 1 ? "Лицо"
                                                    : prop.children}
                                        </UiButton>
                                    </li>
                                </>
                            ))}
                        </menu>
                    </div>
                    <div className={`${footerColumnClass} ${footerColumn3Class}`}>
                        <menu className={menuFooterClass}>
                            {propsData(props)[2].map((prop, i) => (
                                <>
                                    <li className={`${menuItemClass} ${menuItemSection1Class}`}
                                        key={`liMenuItemSection1${i}`}
                                    >
                                        <UiButton
                                            key={`uiButtonFooterSection1Column3${i}`}
                                            id={prop.id}
                                            className={menuLinkSection1Class}
                                            onClick={
                                                i === 0
                                                    ? handleClickModalB
                                                    : i === 1
                                                        ? handleClickModalG
                                                        : i === 2
                                                            ? handleClickModalF
                                                            : null
                                            }
                                        >
                                            {prop.children}
                                        </UiButton>
                                    </li>
                                </>
                            ))}
                        </menu>
                    </div>
                </div>
            </div>
        </>
    );
}
