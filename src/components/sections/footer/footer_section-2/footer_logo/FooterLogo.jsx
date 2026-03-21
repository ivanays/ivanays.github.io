import React from "react";

import './FooterLogo.scss';

import classNames from "classnames";

import { useMediaQuery } from "../../../../../hooks";

import { UiLink } from '../../../../ui';

import { FooterLogoImg } from './footer_logo_img';

import dataFooterLogoImg from '../../../../../data/data_footer/data_footer_section-2/data_footer_section2_logo/data_footer_section2_logo_img/dataFooterLogoImg.json';

import propsData from "../../../../../func/func_props/funcProps";
import funcQueryMedia from "../../../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../../../func/func_query_number/funcQueryNumber";

export const FooterLogo = (props) => {

    let queryNumber = funcQueryNumber();

    const footerLinkClass = classNames(`footer${queryNumber}__link`);
    const footerLinkLogoClass = classNames(`footer${queryNumber}__link-logo`);

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
