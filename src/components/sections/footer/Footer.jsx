import React from 'react';

import './Footer.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

import { FooterSection1 } from './footer_section-1';
import { FooterSection2 } from './footer_section-2';
import { FooterSection3 } from './footer_section-3';
import { FooterSection4 } from './footer_section-4';

import { useLoadImageBg } from '../../../hooks';
import { useMediaQuery } from '../../../hooks';

import FooterBg1728 from '../../../images/bg-footer.png';
import FooterBg1300 from '../../../images/bg-footer1300.png';
import FooterBg1133 from '../../../images/bg-footer1133.png';
import FooterBg900 from '../../../images/bg-footer900.png';
import FooterBg744 from '../../../images/bg-footer744.png';
import FooterBg600 from '../../../images/bg-footer600.png';
import FooterBg375 from '../../../images/bg-footer375_214.png';
import FooterBg275 from '../../../images/bg-footer275_212.png';
// import FooterBg375 from '../../../images/bg-footer375.png';

import dataFooterSection1 from '../../../data/data_footer/data_footer_section-1/dataFooterSection1.json';
import dataFooterSection3 from '../../../data/data_footer/data_footer_section-3/dataFooterSection3.json';
import dataFooterSection4 from '../../../data/data_footer/data_footer_section-4/dataFooterSection4.json';

import dataPhone from '../../../data/data_phone/dataPhone.json';

export const Footer = (props) => {

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


    const footerClass = classNames({
        'footer': media1728 === true,
        'footer--1133': media1133 === true,
        'footer--744': media744 === true,
        'footer--744l': media744l === true,
        'footer--375': media375 === true,
        'footer--275': media275 === true,
        'footer--1300': media1300 === true,
        'footer--900': media900 === true,
        'footer--600': media600 === true,
        'footer--600l': media600l === true,
    });

    const containerClass = classNames({
        'container': media1728 === true,
        'container--1133': media1133 === true,
        'container--744': media744 === true,
        'container--744l': media744l === true,
        'container--375': media375 === true,
        'container--275': media275 === true,
        'container--1300': media1300 === true,
        'container--900': media900 === true,
        'container--600': media600 === true,
        'container--600l': media600l === true,
    });

    const footerRelativeClass = classNames({
        'footer__relative': media1728 === true,
        'footer--1133__relative': media1133 === true,
        'footer--744__relative': media744 === true,
        'footer--744l__relative': media744l === true,
        'footer--375__relative': media375 === true,
        'footer--275__relative': media275 === true,
        'footer--1300__relative': media1300 === true,
        'footer--900__relative': media900 === true,
        'footer--600__relative': media600 === true,
        'footer--600l__relative': media600l === true,
    });

    const footerSection1Class = classNames({
        'footer__section1': media1728 === true,
        'footer--1133__section1': media1133 === true,
        'footer--744__section1': media744 === true,
        'footer--744l__section1': media744l === true,
        'footer--375__section1': media375 === true,
        'footer--275__section1': media275 === true,
        'footer--1300__section1': media1300 === true,
        'footer--900__section1': media900 === true,
        'footer--600__section1': media600 === true,
        'footer--600l__section1': media600l === true,
    });

    const footerSection2Class = classNames({
        'footer__section2': media1728 === true,
        'footer--1133__section2': media1133 === true,
        'footer--744__section2': media744 === true,
        'footer--744l__section2': media744l === true,
        'footer--375__section2': media375 === true,
        'footer--275__section2': media275 === true,
        'footer--1300__section2': media1300 === true,
        'footer--900__section2': media900 === true,
        'footer--600__section2': media600 === true,
        'footer--600l__section2': media600l === true,
    });

    const footerSection3Class = classNames({
        'footer__section3': media1728 === true,
        'footer--1133__section3': media1133 === true,
        'footer--744__section3': media744 === true,
        'footer--744l__section3': media744l === true,
        'footer--375__section3': media375 === true,
        'footer--275__section3': media275 === true,
        'footer--1300__section3': media1300 === true,
        'footer--900__section3': media900 === true,
        'footer--600__section3': media600 === true,
        'footer--600l__section3': media600l === true,
    });

    const footerSection4Class = classNames({
        'footer__section4': media1728 === true,
        'footer--1133__section4': media1133 === true,
        'footer--744__section4': media744 === true,
        'footer--744l__section4': media744l === true,
        'footer--375__section4': media375 === true,
        'footer--275__section4': media275 === true,
        'footer--1300__section4': media1300 === true,
        'footer--900__section4': media900 === true,
        'footer--600__section4': media600 === true,
        'footer--600l__section4': media600l === true,
    });

    const loadedImageBg1728 = useLoadImageBg(FooterBg1728);
    const loadedImageBg1300 = useLoadImageBg(FooterBg1300);
    const loadedImageBg1133 = useLoadImageBg(FooterBg1133);
    const loadedImageBg900 = useLoadImageBg(FooterBg900);
    const loadedImageBg744 = useLoadImageBg(FooterBg744);
    const loadedImageBg600 = useLoadImageBg(FooterBg600);
    const loadedImageBg375 = useLoadImageBg(FooterBg375);
    const loadedImageBg275 = useLoadImageBg(FooterBg275);

    let loadedImageBg;

    (media1728) ? loadedImageBg = loadedImageBg1728
        : (media1300) ? loadedImageBg = loadedImageBg1300
            : (media1133) ? loadedImageBg = loadedImageBg1133
                : (media900) ? loadedImageBg = loadedImageBg900
                    : (media744) ? loadedImageBg = loadedImageBg744
                        : (media744l) ? loadedImageBg = loadedImageBg744
                            : (media600) ? loadedImageBg = loadedImageBg600
                                : (media600l) ? loadedImageBg = loadedImageBg600
                                    : (media375) ? loadedImageBg = loadedImageBg375
                                        : (media275) ? loadedImageBg = loadedImageBg275 : null;

    return (
        <>
            <footer className={footerClass} style={{ backgroundImage: `url(${loadedImageBg})` }}>
                <div className={containerClass}>
                    <div className={footerRelativeClass}>
                        <div className={footerSection1Class}>
                            <FooterSection1
                                bodyRef={props.bodyRef}
                                faceRef={props.faceRef}
                                isClickedBody={props.isClickedBody}
                                setIsClickedBody={props.setIsClickedBody}
                                scroll={props.scroll}
                                data={dataFooterSection1}
                            />
                        </div>
                        <div className={footerSection2Class}>
                            <FooterSection2 />
                        </div>
                        <div className={footerSection3Class}>
                            <FooterSection3 data={dataFooterSection3} />
                        </div>
                        <div className={footerSection4Class}>
                            <FooterSection4 dataPhone={dataPhone} data={dataFooterSection4} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
