import React, { useRef, useEffect } from 'react';

import './HeaderTitle.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';

import { UiH1 } from '../../../ui';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

export const HeaderTitle = (props) => {

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

    const headerTitleClass = classNames({
        'header__title': media1728 === true,
        'header--1133__title': media1133 === true,
        'header--744__title': media744 === true,
        'header--744l__title': media744l === true,
        'header--375__title': media375 === true,
        'header--275__title': media275 === true,
        'header--1300__title': media1300 === true,
        'header--900__title': media900 === true,
        'header--600__title': media600 === true,
        'header--600l__title': media600l === true,
    });

    const titleClass = classNames({
        'title': media1728 === true,
        'title--1133': media1133 === true,
        'title--744': media744 === true,
        'title--744l': media744l === true,
        'title--375': media375 === true,
        'title--275': media275 === true,
        'title--1300': media1300 === true,
        'title--900': media900 === true,
        'title--600': media600 === true,
        'title--600l': media600l === true,
    });

    const headerTitle = useRef(null);

    const animationHeaderTitle = () => {
        gsap.timeline()
            .to(headerTitle.current, {
                opacity: 0.5,
                blur: 2,
                scale: 1.03,
                duration: 0.5,
                delay: 2.2
            })
            .to(headerTitle.current, {
                opacity: 1,
                blur: 0,
                scale: 1,
                duration: 0.5
            });
    };

    useEffect(() => {
        if (media1728 === true || media1300 ===true || media1133 === true || media900 === true || media744 === true) animationHeaderTitle();
    }, []);

    return (
        <>
            <div className={headerTitleClass} ref={headerTitle}>
                <h1
                    id='header-logo-title-0'
                    style={props.position === 0 ? { cursor: 'text' } : { cursor: 'default' }}
                    className={titleClass}
                >
                    Аппаратная коррекция&nbsp;фигуры
                </h1>
                {/* {propsData(props).map((prop, i) => (
                    <UiH1 key={`uiH1HeaderTitle${i}`}
                        {...prop}
                        style={props.position === 0 ? { cursor: 'text' } : { cursor: 'default' }}
                        className={titleClass}
                    />
                ))} */}
            </div>
        </>
    );
};
