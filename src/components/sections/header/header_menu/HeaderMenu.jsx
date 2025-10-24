import React, { children, useContext } from 'react';

import './HeaderMenu.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';

import { ModalContext } from '../../../../contexts';

import {
    ModalContentB,
    ModalContentF,
    ModalContentG,
    ModalContentH,
} from '../../../modals/modal/modal_content';

import { UiButton } from '../../../ui';

import dataPhone from '../../../../data/data_phone/dataPhone.json';
import dataModalContentB from '../../../../data/data_modal/data_modal_content/data_modal_content_b/dataModalContentB.json';
import dataModalContentF from '../../../../data/data_modal/data_modal_content/data_modal_content_f/dataModalContentF.json';
import dataModalContentG from '../../../../data/data_modal/data_modal_content/data_modal_content_g/dataModalContentG.json';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

export const HeaderMenu = (props) => {

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

    const headerMenuClass = classNames({
        'header__menu': media1728 === true,
        'header--1133__menu': media1133 === true,
        'header--744__menu': media744 === true,
        'header--744l__menu': media744l === true,
        'header--375__menu': media375 === true,
        'header--275__menu': media275 === true,
        'header--1300__menu': media1300 === true,
        'header--900__menu': media900 === true,
        'header--600__menu': media600 === true,
        'header--600l__menu': media600l === true,
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

    const menuItemHeaderClass = classNames({
        'menu__item-header': media1728 === true,
        'menu--1133__item-header': media1133 === true,
        'menu--744__item-header': media744 === true,
        'menu--744l__item-header': media744l === true,
        'menu--375__item-header': media375 === true,
        'menu--275__item-header': media275 === true,
        'menu--1300__item-header': media1300 === true,
        'menu--900__item-header': media900 === true,
        'menu--600__item-header': media600 === true,
        'menu--600l__item-header': media600l === true,
    });

    const menuLinkClass = classNames({
        'menu__link': media1728 === true,
        'menu--1133__link': media1133 === true,
        'menu--744__link': media744 === true,
        'menu--744l__link': media744l === true,
        'menu--375__link': media375 === true,
        'menu--275__link': media275 === true,
        'menu--1300__link': media1300 === true,
        'menu--900__link': media900 === true,
        'menu--600__link': media600 === true,
        'menu--600l__link': media600l === true,
    });

    const menuLinkHeaderClass = classNames({
        'menu__link-header': media1728 === true,
        'menu--1133__link-header': media1133 === true,
        'menu--744__link-header': media744 === true,
        'menu--744l__link-header': media744l === true,
        'menu--375__link-header': media375 === true,
        'menu--275__link-header': media275 === true,
        'menu--1300__link-header': media1300 === true,
        'menu--900__link-header': media900 === true,
        'menu--600__link-header': media600 === true,
        'menu--600l__link-header': media600l === true,
    });

    const menuHeaderClass = classNames({
        'menu-header': media1728 === true,
        'menu-header--1133': media1133 === true,
        'menu-header--744': media744 === true,
        'menu-header--744l': media744l === true,
        'menu-header--375': media375 === true,
        'menu-header--275': media275 === true,
        'menu-header--1300': media1300 === true,
        'menu-header--900': media900 === true,
        'menu-header--600': media600 === true,
        'menu-header--600l': media600l === true,
    });

    const { openModal, handleToggle, isToggled } = useContext(ModalContext);

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const handleClickModalB = () => {
        openModal({
            id: `${modalId}b`,
            className: `${modalBodyClassName}b`,
            content: <ModalContentB dataPhone={dataPhone} data={dataModalContentB} />,
        });
    };

    const handleClickModalF = () => {
        openModal({
            id: `${modalId}f`,
            className: `${modalBodyClassName}f`,
            content: <ModalContentF dataPhone={dataPhone} data={dataModalContentF} />,
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

    const handleClickScroll = () => {
        props.callback();
        props.scroll();

        if (isToggled) handleToggle();
    };

    return (
        <>
            <div className={headerMenuClass}>
                <menu
                    className={`${menuClass} ${menuHeaderClass}`}
                    style={(media275 || media375 || media600 || media600l || media744 || media744l)
                        ? { flexDirection: 'column', alignItems: 'end' } : { flexDirection: 'row', alignItems: 'center' }}
                >
                    {propsData(props).map((prop, i) => (
                        <li className={`${menuItemClass} ${menuItemHeaderClass}`}
                            key={`liMenuItemHeader${i}`}
                        >
                            <UiButton
                                key={`uiButtonHeaderMenu${i}`}
                                id={prop.id}
                                className={`${menuLinkClass} ${menuLinkHeaderClass}`}
                                onClick={
                                    i === 0
                                        ? handleClickModalG
                                        : i === 1
                                            ? handleClickScroll
                                            : i === 2
                                                ? handleClickModalF
                                                : i === 3
                                                    ? handleClickModalB
                                                    : i === 4
                                                        ? handleClickModalH
                                                        : null
                                }
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
