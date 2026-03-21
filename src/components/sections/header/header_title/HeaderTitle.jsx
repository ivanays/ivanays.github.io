import React, { useRef, useEffect } from 'react';

import './HeaderTitle.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../hooks';

import { UiH1 } from '../../../ui';

import propsData from '../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const headerTitleClass = classNames(`header${queryNumber}__title`);
    const titleClass = classNames(`title${queryNumber}`);

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
