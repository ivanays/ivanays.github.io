import React, { useContext, useState } from 'react';

import './Modal.scss';

import classNames from 'classnames';

// import { useBodyScrollLock } from '../../../hooks';
import { useMediaQuery } from '../../../hooks';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

import { ModalClose } from '../modal/modal_close';
import { ModalContext } from '../../../contexts';

import dataModelClose from '../../../data/data_modal/data_modal_close/dataModalClose.json';
import dataPhone from '../../../data/data_phone/dataPhone.json'

export const Modal = (props) => {

    let queryNumber = funcQueryNumber();

    const popupClass = classNames(`popup${queryNumber}`);
    const popupContentClass = classNames(`popup${queryNumber}__content`);
    const contentClass = classNames(`content${queryNumber}`);
    const contentBodyClass = classNames(`content${queryNumber}__body`);
    const popupBodyHideClass = classNames(`popup${queryNumber}__body-hide`);
    const popupHideClass = classNames(`popup-hide${queryNumber}`);

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
