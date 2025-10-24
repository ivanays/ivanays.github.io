import React from 'react';

import './FooterSection4.scss';

import classNames from 'classnames';

import { useLoadImageBg } from '../../../../hooks';
import { useMediaQuery } from '../../../../hooks';

import { UiLink } from '../../../ui';

import FooterPhoneBg1728 from '../../../../images/bg-call.png';
import FooterPhoneBg1300 from '../../../../images/bg-call1133.png';
import FooterPhoneBg1133 from '../../../../images/bg-call1133.png';
import FooterPhoneBg375 from '../../../../images/bg-call375.png';

import hrefPhone from '../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

export const FooterSection4 = (props) => {

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

    const footerPhoneClass = classNames({
        'footer__phone': media1728 === true,
        'footer--1133__phone': media1133 === true,
        'footer--744__phone': media744 === true,
        'footer--744l__phone': media744l === true,
        'footer--375__phone': media375 === true,
        'footer--275__phone': media275 === true,
        'footer--1300__phone': media1300 === true,
        'footer--900__phone': media900 === true,
        'footer--600__phone': media600 === true,
        'footer--600l__phone': media600l === true,
    });

    const footerLinkPhoneClass = classNames({
        'footer__link-phone': media1728 === true,
        'footer--1133__link-phone': media1133 === true,
        'footer--744__link-phone': media744 === true,
        'footer--744l__link-phone': media744l === true,
        'footer--375__link-phone': media375 === true,
        'footer--275__link-phone': media275 === true,
        'footer--1300__link-phone': media1300 === true,
        'footer--900__link-phone': media900 === true,
        'footer--600__link-phone': media600 === true,
        'footer--600l__link-phone': media600l === true,
    });

    const propsData = (props) => {
        let propsAll = props;
        let data = [];
        (arrPhone(propsAll).length !== -1) ? data.push(JSON.parse(JSON.stringify(propsAll.data))) : null
        data[0].href = hrefPhone(propsAll);
        arrPhone(propsAll).map((value, i) => {
            (i === 1 || i === 4 || i === 7 || i === 9) ? data[0].children += ` ${value}` : data[0].children += `${value}`
        })
        return data;
    };

    const loadedImageBg1728 = useLoadImageBg(FooterPhoneBg1728);
    const loadedImageBg1300 = useLoadImageBg(FooterPhoneBg1300);
    const loadedImageBg1133 = useLoadImageBg(FooterPhoneBg1133);
    const loadedImageBg900 = useLoadImageBg(FooterPhoneBg1133);
    const loadedImageBg744 = useLoadImageBg(FooterPhoneBg1133);
    const loadedImageBg600 = useLoadImageBg(FooterPhoneBg375);
    const loadedImageBg375 = useLoadImageBg(FooterPhoneBg375);
    const loadedImageBg275 = useLoadImageBg(FooterPhoneBg375);

    let loadedImageBg;

    (media1728) ? loadedImageBg = loadedImageBg1728
        : (media1300) ? loadedImageBg = loadedImageBg1300
            : (media1133) ? loadedImageBg = loadedImageBg1133
                : (media900) ? loadedImageBg = loadedImageBg900
                    : (media744) ? loadedImageBg = loadedImageBg744
                        : (media744l) ? loadedImageBg = loadedImageBg744
                            : (media600) ? loadedImageBg = loadedImageBg375
                                : (media600l) ? loadedImageBg = loadedImageBg375
                                    : (media375) ? loadedImageBg = loadedImageBg375
                                        : (media275) ? loadedImageBg = loadedImageBg275 : null;

    return (
        <>
            <div className={footerPhoneClass} style={{ backgroundImage: `url(${loadedImageBg})` }}>
                {propsData(props).map((prop, i) => (
                    <UiLink
                        key={`uiLinkFooterSection4Phone${i}`}
                        {...prop}
                        className={footerLinkPhoneClass}
                    />
                ))}
            </div>
        </>
    );
}

