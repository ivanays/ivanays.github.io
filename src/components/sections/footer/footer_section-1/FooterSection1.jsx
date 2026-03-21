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
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const footerMenuClass = classNames(`footer${queryNumber}__menu`);
    const footerInnerClass = classNames(`footer${queryNumber}__inner`);
    const footerInnerColumnClass = classNames(`footer${queryNumber}__inner-column`);
    const footerColumnClass = classNames(`footer${queryNumber}__column`);
    const footerColumn1Class = classNames(`footer${queryNumber}__column-1`);
    const footerColumn2Class = classNames(`footer${queryNumber}__column-2`);
    const footerColumn3Class = classNames(`footer${queryNumber}__column-3`);
    const menuFooterClass = classNames(`menu-footer${queryNumber}`);
    const menuItemClass = classNames(`menu${queryNumber}__item`);
    const menuItemSection1Class = classNames(`menu${queryNumber}__item-section1`);
    const menuLinkSection1Class = classNames(`menu${queryNumber}__link-section1`);
    const popupBodyClass = classNames(`popup${queryNumber}__body`);

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
