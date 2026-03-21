import React from 'react';

import './ModalClose.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';
import { useBodyScrollLock } from '../../../../hooks';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import popupClose from '../../../../images/popup-close.svg';
import { UiButton, UiImg } from '../../../ui';

export const ModalClose = (props) => {

    let queryNumber = funcQueryNumber();

    const popupCloseClass = classNames(`popup${queryNumber}__close`);
    const popupLinkClass = classNames(`popup${queryNumber}__link`);
    const popupLinkCloseClass = classNames(`popup${queryNumber}__link-close`);
    const popupIconClass = classNames(`popup${queryNumber}__icon`);
    const popupIconCloseClass = classNames(`popup${queryNumber}__icon-close`);


    useBodyScrollLock();


    const propsData = (props) => {
        let propsAll = props;
        let data = [];

        data.push(JSON.parse(JSON.stringify(propsAll.data[0])));
        data.push(JSON.parse(JSON.stringify(propsAll.data[1])));

        return data;
    };

    return (
        <>
            <div className={popupCloseClass}>
                <UiButton
                    key={`uiButtonModalClose0`}
                    id={propsData(props)[0].id}
                    className={`${popupLinkClass} ${popupLinkCloseClass}`}
                    onClick={() => { props.handleClose() }}
                >
                    <UiImg
                        key={`uiImgModalClose0`}
                        id={propsData(props)[1].id}
                        className={`${popupIconClass} ${popupIconCloseClass}`}
                        alt={propsData(props)[1].alt}
                        src={popupClose}
                    />
                </UiButton>
            </div>
        </>
    );
};
