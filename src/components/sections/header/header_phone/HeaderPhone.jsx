import React, { useEffect, useState, createRef, useRef, Children } from 'react';

import { useMediaQuery } from '../../../../hooks';

import './HeaderPhone.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { UiSpan } from '../../../ui';

import hrefPhone from '../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const HeaderPhone = (props) => {

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

    const headerPhoneClass = classNames({
        'header__phone': media1728 === true,
        'header--1133__phone': media1133 === true,
        'header--744__phone': media744 === true,
        'header--744l__phone': media744l === true,
        'header--375__phone': media375 === true,
        'header--275__phone': media275 === true,
        'header--1300__phone': media1300 === true,
        'header--900__phone': media900 === true,
        'header--600__phone': media600 === true,
        'header--600l__phone': media600l === true,
    });

    const propsData = (props, index = 0) => {
        let propsAll = props;
        let spanPhone = arrPhone(props, index);
        spanPhone.length !== -1
            ? spanPhone.map((value, i) => (propsAll.data[i].children = value))
            : null;
        return propsAll.data;
    };

    const [isHeaderPhone, setIsHeaderPhone] = useState(false);

    const headerLinkPhoneRef = useRef();
    const headerSpansPhoneRef = useRef(arrPhone(props, 0).map(() => createRef()));

    const classHeaderLinkPhone = classNames('header__link-phone');

    const animationHeaderLinkPhoneIn = () => {
        gsap.timeline()
            .to(headerLinkPhoneRef.current, {
                right: 10, duration: 1.5, delay: 5,
            })
            .to(headerLinkPhoneRef.current, {
                right: 5, duration: 0.2, delay: 0.2,
                onComplete: () => {
                    setIsHeaderPhone(true);
                }
            });
    };

    const animationHeaderLinkPhoneOut = () => {
        gsap.timeline()
            .to(headerLinkPhoneRef.current, {
                right: -160, duration: 1.5,
                onComplete: () => {
                    setIsHeaderPhone(false);
                }
            });
    };

    const animationHeaderSpanPhoneIn = (number) => {
        gsap.timeline()
            .to(headerSpansPhoneRef.current[number].current, {
                opacity: 0.8, scale: 1.1, fontStyle: 'normal', duration: 0.5
            })
            .to(headerSpansPhoneRef.current[number].current, {
                opacity: 1, scale: 1, duration: 0.5, delay: 0.2
            });
    };

    const animationHeaderSpanPhoneOut = (number) => {
        gsap.timeline()
            .to(headerSpansPhoneRef.current[number].current, {
                opacity: 0.6, scale: 0.9, fontStyle: 'italic', duration: 0.1, delay: 2
            });
    };

    const onPageLoad = async () => {
        console.log('page loaded');
        animationHeaderLinkPhoneIn();

        const arr = arrPhone(props, 0);

        await delay(7000);

        for (let i = 0; i < arr.length; i++) {
            await delay(200);
            animationHeaderSpanPhoneIn(i);
        }
    };

    useEffect(() => {

        if (document.readyState === 'complete') {
            onPageLoad();

        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    useEffect(() => {
        if (!isHeaderPhone) {
            onPageLoad();
        } else {
            const timeout = setTimeout(() => {
                animationHeaderLinkPhoneOut();

                const arr = arrPhone(props, 0);

                for (let i = 0; i < arr.length; i++) {
                    animationHeaderSpanPhoneOut(i);
                }
                clearTimeout(timeout);
            }, 20000);
        }

    }, [isHeaderPhone]);

    return (
        <>
            <div className={headerPhoneClass}>
                <a href={hrefPhone(props)} className={classHeaderLinkPhone} ref={headerLinkPhoneRef}>
                    {propsData(props).map((prop, i) => (
                        <UiSpan key={`uiSpanHeaderPhone${i}`} {...prop} ref={headerSpansPhoneRef.current[i]} />
                    ))}
                </a>
            </div>
        </>
    );
};
