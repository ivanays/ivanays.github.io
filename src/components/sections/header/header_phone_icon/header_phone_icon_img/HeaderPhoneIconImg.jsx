import React from 'react';

import './HeaderPhoneIconImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';

import headerPhoneIconImg from '../../../../../images/icon-header-phone-white.png';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

export const HeaderPhoneIconImg = (props) => {

    let queryNumber = funcQueryNumber();

    const burgerClass = classNames(`burger${queryNumber}`);
    const burgerHeaderClass = classNames(`burger-header${queryNumber}`);

    return (
        <>
            {propsData(props, [headerPhoneIconImg]).map((prop, i) => (
                <UiImg
                    key={`uiImgHeaderPhoneIconImg${i}`}
                    {...prop}
                    className={`${burgerClass} ${burgerHeaderClass}`}
                />
            ))}
        </>
    );
}

