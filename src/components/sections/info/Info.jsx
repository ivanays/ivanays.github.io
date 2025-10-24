import React, { useLayoutEffect, children, useState, useRef, createRef } from 'react';

import './Info.scss';

import gsap from 'gsap';
import classNames from 'classnames';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../hooks';

import { InfoSvg230l } from './info_svg_230l';
import { InfoSvg330 } from './info_svg_330';
import { InfoSvg330l } from './info_svg_330l';
import { InfoSvg440 } from './info_svg_440';
import { InfoSvg440l } from './info_svg_440l';

import propsData from '../../../func/func_props/funcProps';
import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

export const Info = (props) => {

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

    const infoClass = classNames({
        'info': media1728 === true,
        'info--1133': media1133 === true,
        'info--744': media744 === true,
        'info--744l': media744l === true,
        'info--375': media375 === true,
        'info--275': media275 === true,
        'info--1300': media1300 === true,
        'info--900': media900 === true,
        'info--600': media600 === true,
        'info--600l': media600l === true,
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

    const containerInfoClass = classNames({
        'container-info': media1728 === true,
        'container--1133-info': media1133 === true,
        'container--744-info': media744 === true,
        'container--744l-info': media744l === true,
        'container--375-info': media375 === true,
        'container--275-info': media275 === true,
        'container--1300-info': media1300 === true,
        'container--900-info': media900 === true,
        'container--600-info': media600 === true,
        'container--600l-info': media600l === true,
    });

    const infoSliderClass = classNames({
        'info__slider': media1728 === true,
        'info--1133__slider': media1133 === true,
        'info--744__slider': media744 === true,
        'info--744l__slider': media744l === true,
        'info--375__slider': media375 === true,
        'info--275__slider': media275 === true,
        'info--1300__slider': media1300 === true,
        'info--900__slider': media900 === true,
        'info--600__slider': media600 === true,
        'info--600l__slider': media600l === true,
    });

    const sliderClass = classNames({
        'slider': media1728 === true,
        'slider--1133': media1133 === true,
        'slider--744': media744 === true,
        'slider--744l': media744l === true,
        'slider--375': media375 === true,
        'slider--275': media275 === true,
        'slider--1300': media1300 === true,
        'slider--900': media900 === true,
        'slider--600': media600 === true,
        'slider--600l': media600l === true,
    });

    const sliderInfoClass = classNames({
        'slider-info': media1728 === true,
        'slider--1133-info': media1133 === true,
        'slider--744-info': media744 === true,
        'slider--744l-info': media744l === true,
        'slider--375-info': media375 === true,
        'slider--275-info': media275 === true,
        'slider--1300-info': media1300 === true,
        'slider--900-info': media900 === true,
        'slider--600-info': media600 === true,
        'slider--600l-info': media600l === true,
    });

    const sliderItemsClass = classNames({
        'slider__items': media1728 === true,
        'slider--1133__items': media1133 === true,
        'slider--744__items': media744 === true,
        'slider--744l__items': media744l === true,
        'slider--375__items': media375 === true,
        'slider--275__items': media275 === true,
        'slider--1300__items': media1300 === true,
        'slider--900__items': media900 === true,
        'slider--600__items': media600 === true,
        'slider--600l__items': media600l === true,
    });

    const sliderItemsInfoClass = classNames({
        'slider__items-info': media1728 === true,
        'slider--1133__items-info': media1133 === true,
        'slider--744__items-info': media744 === true,
        'slider--744l__items-info': media744l === true,
        'slider--375__items-info': media375 === true,
        'slider--275__items-info': media275 === true,
        'slider--1300__items-info': media1300 === true,
        'slider--900__items-info': media900 === true,
        'slider--600__items-info': media600 === true,
        'slider--600l__items-info': media600l === true,
    });

    const sliderItemClass = classNames({
        'slider__item': media1728 === true,
        'slider--1133__item': media1133 === true,
        'slider--744__item': media744 === true,
        'slider--744l__item': media744l === true,
        'slider--375__item': media375 === true,
        'slider--275__item': media275 === true,
        'slider--1300__item': media1300 === true,
        'slider--900__item': media900 === true,
        'slider--600__item': media600 === true,
        'slider--600l__item': media600l === true,
    });

    const sliderItemInfoClass = classNames({
        'slider__item-info': media1728 === true,
        'slider--1133__item-info': media1133 === true,
        'slider--744__item-info': media744 === true,
        'slider--744l__item-info': media744l === true,
        'slider--375__item-info': media375 === true,
        'slider--275__item-info': media275 === true,
        'slider--1300__item-info': media1300 === true,
        'slider--900__item-info': media900 === true,
        'slider--600__item-info': media600 === true,
        'slider--600l__item-info': media600l === true,
    });

    const sliderInnerClass = classNames({
        'slider__inner': media1728 === true,
        'slider--1133__inner': media1133 === true,
        'slider--744__inner': media744 === true,
        'slider--744l__inner': media744l === true,
        'slider--375__inner': media375 === true,
        'slider--275__inner': media275 === true,
        'slider--1300__inner': media1300 === true,
        'slider--900__inner': media900 === true,
        'slider--600__inner': media600 === true,
        'slider--600l__inner': media600l === true,
    });

    const sliderInfoInnerClass = classNames({
        'slider-info__inner': media1728 === true,
        'slider--1133-info__inner': media1133 === true,
        'slider--744-info__inner': media744 === true,
        'slider--744l-info__inner': media744l === true,
        'slider--375-info__inner': media375 === true,
        'slider--275-info__inner': media275 === true,
        'slider--1300-info__inner': media1300 === true,
        'slider--900-info__inner': media900 === true,
        'slider--600-info__inner': media600 === true,
        'slider--600l-info__inner': media600l === true,
    });

    const sliderSlideClass = classNames({
        'slider__slide': media1728 === true,
        'slider--1133__slide': media1133 === true,
        'slider--744__slide': media744 === true,
        'slider--744l__slide': media744l === true,
        'slider--375__slide': media375 === true,
        'slider--275__slide': media275 === true,
        'slider--1300__slide': media1300 === true,
        'slider--900__slide': media900 === true,
        'slider--600__slide': media600 === true,
        'slider--600l__slide': media600l === true,
    });

    const sliderSlideInfoClass = classNames({
        'slider__slide-info': media1728 === true,
        'slider--1133__slide-info': media1133 === true,
        'slider--744__slide-info': media744 === true,
        'slider--744l__slide-info': media744l === true,
        'slider--375__slide-info': media375 === true,
        'slider--275__slide-info': media275 === true,
        'slider--1300__slide-info': media1300 === true,
        'slider--900__slide-info': media900 === true,
        'slider--600__slide-info': media600 === true,
        'slider--600l__slide-info': media600l === true,
    });

    const sliderLinkClass = classNames({
        'slider__link': media1728 === true,
        'slider--1133__link': media1133 === true,
        'slider--744__link': media744 === true,
        'slider--744l__link': media744l === true,
        'slider--375__link': media375 === true,
        'slider--275__link': media275 === true,
        'slider--1300__link': media1300 === true,
        'slider--900__link': media900 === true,
        'slider--600__link': media600 === true,
        'slider--600l__link': media600l === true,
    });

    const sliderLinkInfoClass = classNames({
        'slider__link-info': media1728 === true,
        'slider--1133__link-info': media1133 === true,
        'slider--744__link-info': media744 === true,
        'slider--744l__link-info': media744l === true,
        'slider--375__link-info': media375 === true,
        'slider--275__link-info': media275 === true,
        'slider--1300__link-info': media1300 === true,
        'slider--900__link-info': media900 === true,
        'slider--600__link-info': media600 === true,
        'slider--600l__link-info': media600l === true,
    });

    const { isScrolling } = useScrollDirection();

    const slidesInfoRef = useRef([0, 1, 2].map(() => createRef()));

    const [isSlideInfo1, setIsSlideInfo1] = useState(true);
    const [isSlideInfo2, setIsSlideInfo2] = useState(true);
    const [isSlideInfo3, setIsSlideInfo3] = useState(true);

    const animationScaleY = (current, opacity, duration) => {
        gsap.timeline()
            .to(current, { opacity: opacity, duration: duration });
    };

    useLayoutEffect(() => {
        if (media744l === true || media600 === true || media600l === true || media375 === true || media275 === true) return;
        const headerHeight = 120;
        const handleScroll = () => {

            if (slidesInfoRef.current[0].current.getBoundingClientRect().top < (headerHeight - 20) && props.bottom === false) {
                (isSlideInfo1 === true) ? animationScaleY(slidesInfoRef.current[0].current, 0.2, 0.2) : null;
                setIsSlideInfo1(false);
            } else {
                (isSlideInfo1 === false) ? animationScaleY(slidesInfoRef.current[0].current, 1, 0.2) : null;
                setIsSlideInfo1(true);
            }

            if (slidesInfoRef.current[1].current.getBoundingClientRect().top < (headerHeight - 20) && props.bottom === false) {
                (isSlideInfo2 === true) ? animationScaleY(slidesInfoRef.current[1].current, 0.2, 0.2) : null;
                setIsSlideInfo2(false);
            } else {
                (isSlideInfo2 === false) ? animationScaleY(slidesInfoRef.current[1].current, 1, 0.2) : null;
                setIsSlideInfo2(true);
            }

            if (slidesInfoRef.current[2].current.getBoundingClientRect().top < (headerHeight - 20) && props.bottom === false) {
                (isSlideInfo3 === true) ? animationScaleY(slidesInfoRef.current[2].current, 0.2, 0.2) : null;
                setIsSlideInfo3(false);
            } else {
                (isSlideInfo3 === false) ? animationScaleY(slidesInfoRef.current[2].current, 1, 0.2) : null;
                setIsSlideInfo3(true);
            }

        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        if (props.bottom === true) {
            animationScaleY(slidesInfoRef.current[0].current, 1, 0.2);
            setIsSlideInfo1(true);
            animationScaleY(slidesInfoRef.current[1].current, 1, 0.2);
            setIsSlideInfo2(true);
            animationScaleY(slidesInfoRef.current[2].current, 1, 0.2);
            setIsSlideInfo3(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (slidesInfoRef.current[0].current.getBoundingClientRect().top > headerHeight) {
                animationScaleY(slidesInfoRef.current[0].current, 1, 0.2);
                setIsSlideInfo1(true);
            }
            if (slidesInfoRef.current[1].current.getBoundingClientRect().top > headerHeight) {
                animationScaleY(slidesInfoRef.current[1].current, 1, 0.2);
                setIsSlideInfo2(true);
            }
            if (slidesInfoRef.current[2].current.getBoundingClientRect().top > headerHeight) {
                animationScaleY(slidesInfoRef.current[2].current, 1, 0.2);
                setIsSlideInfo3(true);
            }

        };
    }, [isScrolling]);



    return (
        <>
            <section className={infoClass}>
                <div className={`${containerClass} ${containerInfoClass}`}>
                    <div className={infoSliderClass}>
                        <div className={`${sliderInfoClass}`}>
                            <div className={sliderItemsInfoClass}>
                                <div className={`${sliderItemClass} ${sliderItemInfoClass}`}>
                                    <div className={`${sliderInnerClass} ${sliderInfoInnerClass}`}>
                                        {propsData(props).map((prop, i) => (
                                            <div
                                                className={`${sliderSlideClass} ${sliderSlideInfoClass}`}
                                                key={`divSliderSlideInfo${i}`}
                                                ref={slidesInfoRef.current[i]}
                                            >
                                                <div className={`${sliderLinkClass} ${sliderLinkInfoClass}`}
                                                    key={`aSliderLinkInfo${i}`}
                                                >
                                                    {(media1728 || media900 || media744)
                                                        ? <InfoSvg440 key={`infoSvg${i}`} {...prop} />
                                                        : (media1300 || media1133)
                                                            ? <InfoSvg330 key={`infoSvg${i}`} {...prop} />
                                                            : (media744l)
                                                                ? <InfoSvg440l key={`infoSvg${i}`} {...prop} />
                                                                : (media600)
                                                                    ? <InfoSvg330l key={`infoSvg${i}`} {...prop} />
                                                                    : (media600l)
                                                                        ? <InfoSvg330l key={`infoSvg${i}`} {...prop} />
                                                                        : (media375)
                                                                            ? <InfoSvg330l key={`infoSvg${i}`} {...prop} />
                                                                            : (media275)
                                                                                ? <InfoSvg230l key={`infoSvg${i}`} {...prop} /> : null
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

