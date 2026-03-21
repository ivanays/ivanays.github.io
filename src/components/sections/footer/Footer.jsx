import React from 'react';

import './Footer.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

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

import ArtCifraBg1728 from '../../../images/logo_105-81_origin.png';
import ArtCifraBg1300 from '../../../images/logo_105-81_origin.png';
import ArtCifraBg1133 from '../../../images/logo_105-81_origin.png';
import ArtCifraBg900 from '../../../images/logo_105-81_origin.png';
import ArtCifraBg744 from '../../../images/logo_81-81-lite.png';
import ArtCifraBg600 from '../../../images/logo_41-41-lite.png';
import ArtCifraBg375 from '../../../images/logo_36-36-lite.png';
import ArtCifraBg275 from '../../../images/logo_26-26-lite.png';

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

    let queryNumber = funcQueryNumber();

    const footerClass = classNames(`footer${queryNumber}`);
    const containerClass = classNames(`container${queryNumber}`);
    const footerRelativeClass = classNames(`footer${queryNumber}__relative`);
    const footerSection1Class = classNames(`footer${queryNumber}__section1`);
    const footerSection2Class = classNames(`footer${queryNumber}__section2`);
    const footerSection3Class = classNames(`footer${queryNumber}__section3`);
    const footerSection4Class = classNames(`footer${queryNumber}__section4`);
    const footerSection5Class = classNames(`footer${queryNumber}__section5`);
    const footerArtCifraLinkClass = classNames(`footer${queryNumber}__artcifra-link`);

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
    
    const loadedArtCifraBg1728 = useLoadImageBg(ArtCifraBg1728);
    const loadedArtCifraBg1300 = useLoadImageBg(ArtCifraBg1300);
    const loadedArtCifraBg1133 = useLoadImageBg(ArtCifraBg1133);
    const loadedArtCifraBg900 = useLoadImageBg(ArtCifraBg900);
    const loadedArtCifraBg744 = useLoadImageBg(ArtCifraBg744);
    const loadedArtCifraBg600 = useLoadImageBg(ArtCifraBg600);
    const loadedArtCifraBg375 = useLoadImageBg(ArtCifraBg375);
    const loadedArtCifraBg275 = useLoadImageBg(ArtCifraBg275);
    
    let loadedArtCifraBg;
    
    (media1728) ? loadedArtCifraBg = loadedArtCifraBg1728
        : (media1300) ? loadedArtCifraBg = loadedArtCifraBg1300
            : (media1133) ? loadedArtCifraBg = loadedArtCifraBg1133
                : (media900) ? loadedArtCifraBg = loadedArtCifraBg900
                    : (media744) ? loadedArtCifraBg = loadedArtCifraBg744
                        : (media744l) ? loadedArtCifraBg = loadedArtCifraBg744
                            : (media600) ? loadedArtCifraBg = loadedArtCifraBg600
                                : (media600l) ? loadedArtCifraBg = loadedArtCifraBg600
                                    : (media375) ? loadedArtCifraBg = loadedArtCifraBg375
                                        : (media275) ? loadedArtCifraBg = loadedArtCifraBg275 : null;

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
                        <div className={footerSection5Class} style={{ backgroundImage: `url(${loadedArtCifraBg})` }}>
                            <a href="https://artcifra.ru" className={footerArtCifraLinkClass}></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
