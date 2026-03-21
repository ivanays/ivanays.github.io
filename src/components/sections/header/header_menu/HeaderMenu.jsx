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
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const popupBodyClass = classNames(`popup${queryNumber}__body`);
    const headerMenuClass = classNames(`header${queryNumber}__menu`);
    const menuClass = classNames(`menu${queryNumber}`);
    const menuItemClass = classNames(`menu${queryNumber}__item`);
    const menuItemHeaderClass = classNames(`menu${queryNumber}__item-header`);
    const menuLinkClass = classNames(`menu${queryNumber}__link`);
    const menuLinkHeaderClass = classNames(`menu${queryNumber}__link-header`);
    const menuHeaderClass = classNames(`menu-header${queryNumber}`);

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
