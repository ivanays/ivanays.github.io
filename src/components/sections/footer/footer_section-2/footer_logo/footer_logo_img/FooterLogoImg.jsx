import React from 'react';

import './FooterLogoImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../../hooks';

import logoFooter from '../../../../../../images/logo-footer.png';

import { UiImg } from '../../../../../ui';

import propsData from '../../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../../func/func_query_media/funcQueryMedia';

export const FooterLogoImg = (props) => {

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

    const logoClass = classNames({
        'logo': media1728 === true,
        'logo--1133': media1133 === true,
        'logo--744': media744 === true,
        'logo--744l': media744l === true,
        'logo--375': media375 === true,
        'logo--275': media275 === true,
        'logo--1300': media1300 === true,
        'logo--900': media900 === true,
        'logo--600': media600 === true,
        'logo--600l': media600l === true,
    });

    const logoFooterClass = classNames({
        'logo-footer': media1728 === true,
        'logo-footer--1133': media1133 === true,
        'logo-footer--744': media744 === true,
        'logo-footer--744l': media744l === true,
        'logo-footer--375': media375 === true,
        'logo-footer--275': media275 === true,
        'logo-footer--1300': media1300 === true,
        'logo-footer--900': media900 === true,
        'logo-footer--600': media600 === true,
        'logo-footer--600l': media600l === true,
    });

    return (
        <>
            {propsData(props, [logoFooter]).map((prop, i) => (
                <UiImg
                    key={`uiImgFooterLogoImg${i}`}
                    {...prop}
                    className={`${logoClass} ${logoFooterClass}`}
                />
            ))}
        </>
    );
}

