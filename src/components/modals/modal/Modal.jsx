import React, { useContext, useState } from 'react';

import './Modal.scss';

import classNames from 'classnames';

// import { useBodyScrollLock } from '../../../hooks';
import { useMediaQuery } from '../../../hooks';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

import { ModalClose } from '../modal/modal_close';
import { ModalContext } from '../../../contexts';

import dataModelClose from '../../../data/data_modal/data_modal_close/dataModalClose.json';
import dataPhone from '../../../data/data_phone/dataPhone.json'

export const Modal = (props) => {

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

    const popupClass = classNames({
        'popup': media1728 === true,
        'popup--1133': media1133 === true,
        'popup--744': media744 === true,
        'popup--744l': media744l === true,
        'popup--375': media375 === true,
        'popup--275': media275 === true,
        'popup--1300': media1300 === true,
        'popup--900': media900 === true,
        'popup--600': media600 === true,
        'popup--600l': media600l === true,
    });

    const popupContentClass = classNames({
        'popup__content': media1728 === true,
        'popup--1133__content': media1133 === true,
        'popup--744__content': media744 === true,
        'popup--744l__content': media744l === true,
        'popup--375__content': media375 === true,
        'popup--275__content': media275 === true,
        'popup--1300__content': media1300 === true,
        'popup--900__content': media900 === true,
        'popup--600__content': media600 === true,
        'popup--600l__content': media600l === true,
    });

    const contentClass = classNames({
        'content': media1728 === true,
        'content--1133': media1133 === true,
        'content--744': media744 === true,
        'content--744l': media744l === true,
        'content--375': media375 === true,
        'content--275': media275 === true,
        'content--1300': media1300 === true,
        'content--900': media900 === true,
        'content--600': media600 === true,
        'content--600l': media600l === true,
    });

    const contentBodyClass = classNames({
        'content__body': media1728 === true,
        'content--1133__body': media1133 === true,
        'content--744__body': media744 === true,
        'content--744l__body': media744l === true,
        'content--375__body': media375 === true,
        'content--275__body': media275 === true,
        'content--1300__body': media1300 === true,
        'content--900__body': media900 === true,
        'content--600__body': media600 === true,
        'content--600l__body': media600l === true,
    });

    const popupBodyHideClass = classNames({
        'popup__body-hide': media1728 === true,
        'popup--1133__body-hide': media1133 === true,
        'popup--744__body-hide': media744 === true,
        'popup--744l__body-hide': media744l === true,
        'popup--375__body-hide': media375 === true,
        'popup--275__body-hide': media275 === true,
        'popup--1300__body-hide': media1300 === true,
        'popup--900__body-hide': media900 === true,
        'popup--600__body-hide': media600 === true,
        'popup--600l__body-hide': media600l === true,
    });

    const popupHideClass = classNames({
        'popup-hide': media1728 === true,
        'popup-hide--1133': media1133 === true,
        'popup-hide--744': media744 === true,
        'popup-hide--744l': media744l === true,
        'popup-hide--375': media375 === true,
        'popup-hide--275': media275 === true,
        'popup-hide--1300': media1300 === true,
        'popup-hide--900': media900 === true,
        'popup-hide--600': media600 === true,
        'popup-hide--600l': media600l === true,
    });

    // useBodyScrollLock();

    const { id, className, content } = props;

    const { closeModal, playSliderProcCert } = useContext(ModalContext);

    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        playSliderProcCert();
        closeModal();
    };

    const popupClasses = closing ? `${popupClass} ${popupHideClass}` : popupClass;
    // const popupClasses = closing ? 'popup popup-hide' : 'popup';
    const popupBodyClasses = closing ? `${className} ${popupBodyHideClass}` : className;
    // const popupBodyClasses = closing ? `${className} popup__body-hide` : className;

    return (
        <>
            <div id={id} className={popupClasses} onClick={handleClose}>
                <div className={popupBodyClasses} onClick={(event) => event.stopPropagation()}>
                    <ModalClose data={dataModelClose} handleClose={handleClose} />
                    <div className={popupContentClass}>
                        <div className={contentClass}>
                            <div className={contentBodyClass}>
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
