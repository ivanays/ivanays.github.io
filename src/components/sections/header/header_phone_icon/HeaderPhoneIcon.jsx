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
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import dataHeaderPhoneIconImg from '../../../../data/data_header/data_header_phone_icon/data_header_phone_icon_img/dataHeaderPhoneIconImg.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const HeaderPhoneIcon = (props) => {

    let queryNumber = funcQueryNumber();

    const headerPhoneClass = classNames(`header${queryNumber}__phone`);
    const headerLinkPhoneClass = classNames(`header${queryNumber}__link-phone`);

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
