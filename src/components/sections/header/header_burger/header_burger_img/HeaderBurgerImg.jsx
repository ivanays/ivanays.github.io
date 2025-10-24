import React from 'react';

import './HeaderBurgerImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';

import headerBurgerImg from '../../../../../images/burger-header744.svg';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

export const HeaderBurgerImg = (props) => {

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

    const burgerClass = classNames({
        'burger': media1728 === true,
        'burger--1133': media1133 === true,
        'burger--744': media744 === true,
        'burger--744l': media744l === true,
        'burger--375': media375 === true,
        'burger--275': media275 === true,
        'burger--1300': media1300 === true,
        'burger--900': media900 === true,
        'burger--600': media600 === true,
        'burger--600l': media600l === true,
    });

    const burgerHeaderClass = classNames({
        'burger-header': media1728 === true,
        'burger-header--1133': media1133 === true,
        'burger-header--744': media744 === true,
        'burger-header--744l': media744l === true,
        'burger-header--375': media375 === true,
        'burger-header--275': media275 === true,
        'burger-header--1300': media1300 === true,
        'burger-header--900': media900 === true,
        'burger-header--600': media600 === true,
        'burger-header--600l': media600l === true,
    });

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

