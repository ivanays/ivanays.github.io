import React from 'react';

import './FooterSection2.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

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

    const footerInnerClass = classNames({
        'footer__inner': media1728 === true,
        'footer--1133__inner': media1133 === true,
        'footer--744__inner': media744 === true,
        'footer--744l__inner': media744l === true,
        'footer--375__inner': media375 === true,
        'footer--275__inner': media275 === true,
        'footer--1300__inner': media1300 === true,
        'footer--900__inner': media900 === true,
        'footer--600__inner': media600 === true,
        'footer--600l__inner': media600l === true,
    });

    const footerInnerSection2Class = classNames({
        'footer__inner-section2': media1728 === true,
        'footer--1133__inner-section2': media1133 === true,
        'footer--744__inner-section2': media744 === true,
        'footer--744l__inner-section2': media744l === true,
        'footer--375__inner-section2': media375 === true,
        'footer--275__inner-section2': media275 === true,
        'footer--1300__inner-section2': media1300 === true,
        'footer--900__inner-section2': media900 === true,
        'footer--600__inner-section2': media600 === true,
        'footer--600l__inner-section2': media600l === true,
    });

    const footerInnerLeftClass = classNames({
        'footer__inner-left': media1728 === true,
        'footer--1133__inner-left': media1133 === true,
        'footer--744__inner-left': media744 === true,
        'footer--744l__inner-left': media744l === true,
        'footer--375__inner-left': media375 === true,
        'footer--275__inner-left': media275 === true,
        'footer--1300__inner-left': media1300 === true,
        'footer--900__inner-left': media900 === true,
        'footer--600__inner-left': media600 === true,
        'footer--600l__inner-left': media600l === true,
    });

    const footerInnerWarningClass = classNames({
        'footer__inner-warning': media1728 === true,
        'footer--1133__inner-warning': media1133 === true,
        'footer--744__inner-warning': media744 === true,
        'footer--744l__inner-warning': media744l === true,
        'footer--375__inner-warning': media375 === true,
        'footer--275__inner-warning': media275 === true,
        'footer--1300__inner-warning': media1300 === true,
        'footer--900__inner-warning': media900 === true,
        'footer--600__inner-warning': media600 === true,
        'footer--600l__inner-warning': media600l === true,
    });

    const footerCopyrightClass = classNames({
        'footer__copyright': media1728 === true,
        'footer--1133__copyright': media1133 === true,
        'footer--744__copyright': media744 === true,
        'footer--744l__copyright': media744l === true,
        'footer--375__copyright': media375 === true,
        'footer--275__copyright': media275 === true,
        'footer--1300__copyright': media1300 === true,
        'footer--900__copyright': media900 === true,
        'footer--600__copyright': media600 === true,
        'footer--600l__copyright': media600l === true,
    });

    const footerLogoClass = classNames({
        'footer__logo': media1728 === true,
        'footer--1133__logo': media1133 === true,
        'footer--744__logo': media744 === true,
        'footer--744l__logo': media744l === true,
        'footer--375__logo': media375 === true,
        'footer--275__logo': media275 === true,
        'footer--1300__logo': media1300 === true,
        'footer--900__logo': media900 === true,
        'footer--600__logo': media600 === true,
        'footer--600l__logo': media600l === true,
    });

    const footerCopyClass = classNames({
        'footer__copy': media1728 === true,
        'footer--1133__copy': media1133 === true,
        'footer--744__copy': media744 === true,
        'footer--744l__copy': media744l === true,
        'footer--375__copy': media375 === true,
        'footer--275__copy': media275 === true,
        'footer--1300__copy': media1300 === true,
        'footer--900__copy': media900 === true,
        'footer--600__copy': media600 === true,
        'footer--600l__copy': media600l === true,
    });

    const footerPClass = classNames({
        'footer__p': media1728 === true,
        'footer--1133__p': media1133 === true,
        'footer--744__p': media744 === true,
        'footer--744l__p': media744l === true,
        'footer--375__p': media375 === true,
        'footer--275__p': media275 === true,
        'footer--1300__p': media1300 === true,
        'footer--900__p': media900 === true,
        'footer--600__p': media600 === true,
        'footer--600l__p': media600l === true,
    });

    const footerPCopyClass = classNames({
        'footer__p-copy': media1728 === true,
        'footer--1133__p-copy': media1133 === true,
        'footer--744__p-copy': media744 === true,
        'footer--744l__p-copy': media744l === true,
        'footer--375__p-copy': media375 === true,
        'footer--275__p-copy': media275 === true,
        'footer--1300__p-copy': media1300 === true,
        'footer--900__p-copy': media900 === true,
        'footer--600__p-copy': media600 === true,
        'footer--600l__p-copy': media600l === true,
    });

    const footerPWarningClass = classNames({
        'footer__p-warning': media1728 === true,
        'footer--1133__p-warning': media1133 === true,
        'footer--744__p-warning': media744 === true,
        'footer--744l__p-warning': media744l === true,
        'footer--375__p-warning': media375 === true,
        'footer--275__p-warning': media275 === true,
        'footer--1300__p-warning': media1300 === true,
        'footer--900__p-warning': media900 === true,
        'footer--600__p-warning': media600 === true,
        'footer--600l__p-warning': media600l === true,
    });

    const footerWarningClass = classNames({
        'footer__warning': media1728 === true,
        'footer--1133__warning': media1133 === true,
        'footer--744__warning': media744 === true,
        'footer--744l__warning': media744l === true,
        'footer--375__warning': media375 === true,
        'footer--275__warning': media275 === true,
        'footer--1300__warning': media1300 === true,
        'footer--900__warning': media900 === true,
        'footer--600__warning': media600 === true,
        'footer--600l__warning': media600l === true,
    });

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

