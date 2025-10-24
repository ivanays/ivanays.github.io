import React from 'react';

import './HeaderLogoImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';
import logoHeader from '../../../../../images/logo-header.png';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

export const HeaderLogoImg = (props) => {

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

    const logoHeaderClass = classNames({
        'logo-header': media1728 === true,
        'logo-header--1133': media1133 === true,
        'logo-header--744': media744 === true,
        'logo-header--744l': media744l === true,
        'logo-header--375': media375 === true,
        'logo-header--275': media275 === true,
        'logo-header--1300': media1300 === true,
        'logo-header--900': media900 === true,
        'logo-header--600': media600 === true,
        'logo-header--600l': media600l === true,
    });

    return (
        <>
            {propsData(props, [logoHeader]).map((prop, i) => (
                <UiImg key={`uiImgHeaderLogoImg${i}`} {...prop} className={logoHeaderClass} />
            ))}
        </>
    );
};
