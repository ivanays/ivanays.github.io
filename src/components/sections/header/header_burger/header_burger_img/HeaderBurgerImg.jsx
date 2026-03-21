import React from 'react';

import './HeaderBurgerImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';

import headerBurgerImg from '../../../../../images/burger-header744.svg';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

export const HeaderBurgerImg = (props) => {

    let queryNumber = funcQueryNumber();

    const burgerClass = classNames(`burger${queryNumber}`);
    const burgerHeaderClass = classNames(`burger-header${queryNumber}`);

    return (
        <>
            {propsData(props, [headerBurgerImg]).map((prop, i) => (
                <UiImg
                    key={`uiImgHeaderBurgerImg${i}`}
                    {...prop}
                    className={`${burgerClass} ${burgerHeaderClass}`}
                />
            ))}
        </>
    );
}

