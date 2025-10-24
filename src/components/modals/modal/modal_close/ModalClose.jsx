import React from 'react';

import './ModalClose.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';
import { useBodyScrollLock } from '../../../../hooks';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import popupClose from '../../../../images/popup-close.svg';
import { UiButton, UiImg } from '../../../ui';

export const ModalClose = (props) => {

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

    const popupCloseClass = classNames({
        'popup__close': media1728 === true,
        'popup--1133__close': media1133 === true,
        'popup--744__close': media744 === true,
        'popup--744l__close': media744l === true,
        'popup--375__close': media375 === true,
        'popup--275__close': media275 === true,
        'popup--1300__close': media1300 === true,
        'popup--900__close': media900 === true,
        'popup--600__close': media600 === true,
        'popup--600l__close': media600l === true,
    });

    const popupLinkClass = classNames({
        'popup__link': media1728 === true,
        'popup--1133__link': media1133 === true,
        'popup--744__link': media744 === true,
        'popup--744l__link': media744l === true,
        'popup--375__link': media375 === true,
        'popup--275__link': media275 === true,
        'popup--1300__link': media1300 === true,
        'popup--900__link': media900 === true,
        'popup--600__link': media600 === true,
        'popup--600l__link': media600l === true,
    });

    const popupLinkCloseClass = classNames({
        'popup__link-close': media1728 === true,
        'popup--1133__link-close': media1133 === true,
        'popup--744__link-close': media744 === true,
        'popup--744l__link-close': media744l === true,
        'popup--375__link-close': media375 === true,
        'popup--275__link-close': media275 === true,
        'popup--1300__link-close': media1300 === true,
        'popup--900__link-close': media900 === true,
        'popup--600__link-close': media600 === true,
        'popup--600l__link-close': media600l === true,
    });

    const popupIconClass = classNames({
        'popup__icon': media1728 === true,
        'popup--1133__icon': media1133 === true,
        'popup--744__icon': media744 === true,
        'popup--744l__icon': media744l === true,
        'popup--375__icon': media375 === true,
        'popup--275__icon': media275 === true,
        'popup--1300__icon': media1300 === true,
        'popup--900__icon': media900 === true,
        'popup--600__icon': media600 === true,
        'popup--600l__icon': media600l === true,
    });

    const popupIconCloseClass = classNames({
        'popup__icon-close': media1728 === true,
        'popup--1133__icon-close': media1133 === true,
        'popup--744__icon-close': media744 === true,
        'popup--744l__icon-close': media744l === true,
        'popup--375__icon-close': media375 === true,
        'popup--275__icon-close': media275 === true,
        'popup--1300__icon-close': media1300 === true,
        'popup--900__icon-close': media900 === true,
        'popup--600__icon-close': media600 === true,
        'popup--600l__icon-close': media600l === true,
    });


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
