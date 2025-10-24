import React from "react";

import './FooterLogo.scss';

import classNames from "classnames";

import { useMediaQuery } from "../../../../../hooks";

import { UiLink } from '../../../../ui';

import { FooterLogoImg } from './footer_logo_img';

import dataFooterLogoImg from '../../../../../data/data_footer/data_footer_section-2/data_footer_section2_logo/data_footer_section2_logo_img/dataFooterLogoImg.json';

import propsData from "../../../../../func/func_props/funcProps";
import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";

export const FooterLogo = (props) => {

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

    const footerLinkClass = classNames({
        'footer__link': media1728 === true,
        'footer--1133__link': media1133 === true,
        'footer--744__link': media744 === true,
        'footer--744l__link': media744l === true,
        'footer--375__link': media375 === true,
        'footer--275__link': media275 === true,
        'footer--1300__link': media1300 === true,
        'footer--900__link': media900 === true,
        'footer--600__link': media600 === true,
        'footer--600l__link': media600l === true,
    });

    const footerLinkLogoClass = classNames({
        'footer__link-logo': media1728 === true,
        'footer--1133__link-logo': media1133 === true,
        'footer--744__link-logo': media744 === true,
        'footer--744l__link-logo': media744l === true,
        'footer--375__link-logo': media375 === true,
        'footer--275__link-logo': media275 === true,
        'footer--1300__link-logo': media1300 === true,
        'footer--900__link-logo': media900 === true,
        'footer--600__link-logo': media600 === true,
        'footer--600l__link-logo': media600l === true,
    });

    return (
        <>
            {propsData(props).map((prop, i) => (
                <UiLink
                    key={`uiLinkFooterLogo${i}`}
                    {...prop}
                    className={`${footerLinkClass} ${footerLinkLogoClass}`}
                >
                    <FooterLogoImg data={dataFooterLogoImg} />
                </UiLink>
            ))}
        </>
    );
}  
