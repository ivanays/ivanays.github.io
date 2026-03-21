import React from 'react';

import './FooterSection2.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import { useMediaQuery } from '../../../../hooks';

import { FooterLogo } from './footer_logo';

import dataFooterLogo from '../../../../data/data_footer/data_footer_section-2/data_footer_section2_logo/dataFooterLogo.json';

import getYearsOnFooter from '../../../../func/func_date/funcDate';

export const FooterSection2 = () => {

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

    let queryNumber = funcQueryNumber();

    const footerInnerClass = classNames(`footer${queryNumber}__inner`);
    const footerInnerSection2Class = classNames(`footer${queryNumber}__inner-section2`);
    const footerInnerLeftClass = classNames(`footer${queryNumber}__inner-left`);
    const footerInnerWarningClass = classNames(`footer${queryNumber}__inner-warning`);
    const footerCopyrightClass = classNames(`footer${queryNumber}__copyright`);
    const footerLogoClass = classNames(`footer${queryNumber}__logo`);
    const footerCopyClass = classNames(`footer${queryNumber}__copy`);
    const footerPClass = classNames(`footer${queryNumber}__p`);
    const footerPCopyClass = classNames(`footer${queryNumber}__p-copy`);
    const footerPWarningClass = classNames(`footer${queryNumber}__p-warning`);
    const footerWarningClass = classNames(`footer${queryNumber}__warning`);

    return (
        <>
            <div className={`${footerInnerClass} ${footerInnerSection2Class}`}>
                <div className={footerCopyrightClass}>
                    <div className={`${footerInnerClass} ${footerInnerLeftClass}`}>
                        <div className={footerLogoClass}>
                            <FooterLogo data={dataFooterLogo} />
                        </div>
                        <div className={footerCopyClass}>
                            <p className={`${footerPClass} ${footerPCopyClass}`}>&copy; <span id="year" className="footer__year">{getYearsOnFooter(2024)} </span> SNV</p>
                            <p className={`${footerPClass} ${footerPCopyClass}`}>Все права защищены</p>
                        </div>
                    </div>
                </div>
                <div className={footerWarningClass}>
                    <div className={`${footerInnerClass} ${footerInnerWarningClass}`}>
                        <p className={`${footerPClass} ${footerPWarningClass}`}>
                            {media275 ? "Нужна консультация специалиста." : "Необходима консультация специалиста."}
                        </p>
                        <p className={`${footerPClass} ${footerPWarningClass}`}>
                            Имеются противопоказания.
                        </p>
                        {/* <p className={`${footerPClass} ${footerPWarningClass}`}>
                            Необходима консультация специалиста.
                        </p>
                        <p className={`${footerPClass} ${footerPWarningClass}`}>
                            Имеются противопоказания.
                        </p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

