import React, { useEffect, useState, createRef, useRef, Children } from 'react';

import { useMediaQuery } from '../../../../hooks';

import './HeaderPhoneIcon.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { UiSpan } from '../../../ui';

import { HeaderPhoneIconImg } from './header_phone_icon_img/HeaderPhoneIconImg';

import hrefPhone from '../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import dataHeaderPhoneIconImg from '../../../../data/data_header/data_header_phone_icon/data_header_phone_icon_img/dataHeaderPhoneIconImg.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const HeaderPhoneIcon = (props) => {

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

    const headerPhoneClass = classNames({
        'header__phone': media1728 === true,
        'header--1133__phone': media1133 === true,
        'header--744__phone': media744 === true,
        'header--744l__phone': media744l === true,
        'header--375__phone': media375 === true,
        'header--275__phone': media275 === true,
        'header--1300__phone': media1300 === true,
        'header--900__phone': media900 === true,
        'header--600__phone': media600 === true,
        'header--600l__phone': media600l === true,
    });

    const headerLinkPhoneClass = classNames({
        'header__link-phone': media1728 === true,
        'header--1133__link-phone': media1133 === true,
        'header--744__link-phone': media744 === true,
        'header--744l__link-phone': media744l === true,
        'header--375__link-phone': media375 === true,
        'header--275__link-phone': media275 === true,
        'header--1300__link-phone': media1300 === true,
        'header--900__link-phone': media900 === true,
        'header--600__link-phone': media600 === true,
        'header--600l__link-phone': media600l === true,
    });

    const headerLinkPhoneRef = useRef();

    return (
        <>
            <div className={headerPhoneClass}>
                <a
                    href={hrefPhone(props)}
                    className={headerLinkPhoneClass}
                    ref={headerLinkPhoneRef}
                    key={`uiLinkHeaderPhoneIcon0`}
                >
                    <HeaderPhoneIconImg data={dataHeaderPhoneIconImg} />
                </a>
            </div>
        </>
    );
};
