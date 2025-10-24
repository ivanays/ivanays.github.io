import React, { useContext } from 'react';

import './HeaderBurger.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import { useMediaQuery } from '../../../../hooks';

import { ModalContext } from '../../../../contexts';

import { UiButton } from '../../../ui';
import { HeaderBurgerImg } from '../header_burger/header_burger_img';

import dataHeaderBurgerImg from '../../../../data/data_header/data_header_burger/data_header_burger_img/dataHeaderBurgerImg.json';

import dataPhone from '../../../../data/data_phone/dataPhone.json';
import dataModalContentC from '../../../../data/data_modal/data_modal_content/data_modal_content_c/dataModalContentC.json';

export const HeaderBurger = (props) => {

    const { openModal, handleToggle, isToggled } = useContext(ModalContext);

    const modalId = 'popup-';
    const modalBodyClassName = 'popup__body popup__body-';

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

    const headerBurgerClass = classNames({
        'header__burger': media1728 === true,
        'header--1133__burger': media1133 === true,
        'header--744__burger': media744 === true,
        'header--744l__burger': media744l === true,
        'header--375__burger': media375 === true,
        'header--275__burger': media275 === true,
        'header--1300__burger': media1300 === true,
        'header--900__burger': media900 === true,
        'header--600__burger': media600 === true,
        'header--600l__burger': media600l === true,
    });

    const headerLinkClass = classNames({
        'header__link': media1728 === true,
        'header--1133__link': media1133 === true,
        'header--744__link': media744 === true,
        'header--744l__link': media744l === true,
        'header--375__link': media375 === true,
        'header--275__link': media275 === true,
        'header--1300__link': media1300 === true,
        'header--900__link': media900 === true,
        'header--600__link': media600 === true,
        'header--600l__link': media600l === true,
    });

    const headerLinkBurgerClass = classNames({
        'header__link-burger': media1728 === true,
        'header--1133__link-burger': media1133 === true,
        'header--744__link-burger': media744 === true,
        'header--744l__link-burger': media744l === true,
        'header--375__link-burger': media375 === true,
        'header--275__link-burger': media275 === true,
        'header--1300__link-burger': media1300 === true,
        'header--900__link-burger': media900 === true,
        'header--600__link-burger': media600 === true,
        'header--600l__link-burger': media600l === true,
    });

    const handleClickBurger = () => {
        handleToggle();

    };

    return (
        <>
            <div className={headerBurgerClass}>
                {
                    <UiButton
                        key={`uiLinkHeaderBurger0`}
                        id={'header-burger-link-0'}
                        className={`${headerLinkClass} ${headerLinkBurgerClass}`}
                        onClick={handleClickBurger}
                    >
                        <HeaderBurgerImg data={dataHeaderBurgerImg} />
                    </UiButton>
                }
            </div>
        </>
    );
};
