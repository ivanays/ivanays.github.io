import React from 'react';

import './ModalContentC.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import { UiImg, UiLink } from '../../../../ui';
import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import iconPopupC from '../../../../../images/icon-popup-c.svg';

export const ModalContentC = (props) => {

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

    const contentPhoneClass = classNames({
        'content__phone': media1728 === true,
        'content--1133__phone': media1133 === true,
        'content--744__phone': media744 === true,
        'content--744l__phone': media744l === true,
        'content--375__phone': media375 === true,
        'content--275__phone': media275 === true,
        'content--1300__phone': media1300 === true,
        'content--900__phone': media900 === true,
        'content--600__phone': media600 === true,
        'content--600l__phone': media600l === true,
    });

    const phoneClass = classNames({
        'phone': media1728 === true,
        'phone--1133': media1133 === true,
        'phone--744': media744 === true,
        'phone--744l': media744l === true,
        'phone--375': media375 === true,
        'phone--275': media275 === true,
        'phone--1300': media1300 === true,
        'phone--900': media900 === true,
        'phone--600': media600 === true,
        'phone--600l': media600l === true,
    });

    const phoneInnerClass = classNames({
        'phone__inner': media1728 === true,
        'phone--1133__inner': media1133 === true,
        'phone--744__inner': media744 === true,
        'phone--744l__inner': media744l === true,
        'phone--375__inner': media375 === true,
        'phone--275__inner': media275 === true,
        'phone--1300__inner': media1300 === true,
        'phone--900__inner': media900 === true,
        'phone--600__inner': media600 === true,
        'phone--600l__inner': media600l === true,
    });

    const phoneIconClass = classNames({
        'phone__icon': media1728 === true,
        'phone--1133__icon': media1133 === true,
        'phone--744__icon': media744 === true,
        'phone--744l__icon': media744l === true,
        'phone--375__icon': media375 === true,
        'phone--275__icon': media275 === true,
        'phone--1300__icon': media1300 === true,
        'phone--900__icon': media900 === true,
        'phone--600__icon': media600 === true,
        'phone--600l__icon': media600l === true,
    });

    const phoneItemsClass = classNames({
        'phone__items': media1728 === true,
        'phone--1133__items': media1133 === true,
        'phone--744__items': media744 === true,
        'phone--744l__items': media744l === true,
        'phone--375__items': media375 === true,
        'phone--275__items': media275 === true,
        'phone--1300__items': media1300 === true,
        'phone--900__items': media900 === true,
        'phone--600__items': media600 === true,
        'phone--600l__items': media600l === true,
    });

    const phoneNumberClass = classNames({
        'phone__number': media1728 === true,
        'phone--1133__number': media1133 === true,
        'phone--744__number': media744 === true,
        'phone--744l__number': media744l === true,
        'phone--375__number': media375 === true,
        'phone--275__number': media275 === true,
        'phone--1300__number': media1300 === true,
        'phone--900__number': media900 === true,
        'phone--600__number': media600 === true,
        'phone--600l__number': media600l === true,
    });

    const phoneImgClass = classNames({
        'phone__img': media1728 === true,
        'phone--1133__img': media1133 === true,
        'phone--744__img': media744 === true,
        'phone--744l__img': media744l === true,
        'phone--375__img': media375 === true,
        'phone--275__img': media275 === true,
        'phone--1300__img': media1300 === true,
        'phone--900__img': media900 === true,
        'phone--600__img': media600 === true,
        'phone--600l__img': media600l === true,
    });




    const propsData = (props) => {
        let propsAll = props;
        let data = [];
        arrPhone(propsAll).length !== -1
            ? data.push(JSON.parse(JSON.stringify(propsAll.data)))
            : null;
        data[0][0].href = hrefPhone(propsAll);
        arrPhone(propsAll).map((value, i) => {
            i === 1 || i === 4 || i === 7 || i === 9
                ? (data[0][0].children += ` ${value}`)
                : (data[0][0].children += `${value}`);
        });
        return data[0];
    };

    return (
        <>
            <div className={contentPhoneClass}>
                <div id="phone" className={phoneClass}>
                    <div className={phoneInnerClass}>
                        <div className={phoneIconClass}>
                            <UiImg
                                key={`uiImgModalContentC0`}
                                id={propsData(props)[1].id}
                                className={phoneImgClass}
                                // className={propsData(props)[1].className}
                                alt={propsData(props)[1].alt}
                                src={iconPopupC}
                            />
                        </div>
                        <phone className={phoneItemsClass}>
                            <UiLink
                                key={`uiLinkModalContentC0`}
                                id={propsData(props)[0].id}
                                className={phoneNumberClass}
                                // className={propsData(props)[0].className}
                                href={propsData(props)[0].href}
                            >
                                {propsData(props)[0].children}
                            </UiLink>
                        </phone>
                    </div>
                </div>
            </div>
        </>
    );
};
