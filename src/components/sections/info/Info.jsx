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
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const infoClass = classNames(`info${queryNumber}`);
    const containerClass = classNames(`container${queryNumber}`);
    const containerInfoClass = classNames(`container${queryNumber}-info`);
    const infoSliderClass = classNames(`info${queryNumber}__slider`);
    const sliderClass = classNames(`slider${queryNumber}`);
    const sliderInfoClass = classNames(`slider${queryNumber}-info`);
    const sliderItemsClass = classNames(`slider${queryNumber}__items`);
    const sliderItemsInfoClass = classNames(`slider${queryNumber}__items-info`);
    const sliderItemClass = classNames(`slider${queryNumber}__item`);
    const sliderItemInfoClass = classNames(`slider${queryNumber}__item-info`);
    const sliderInnerClass = classNames(`slider${queryNumber}__inner`);
    const sliderInfoInnerClass = classNames(`slider${queryNumber}-info__inner`);
    const sliderSlideClass = classNames(`slider${queryNumber}__slide`);
    const sliderSlideInfoClass = classNames(`slider${queryNumber}__slide-info`);
    const sliderLinkClass = classNames(`slider${queryNumber}__link`);
    const sliderLinkInfoClass = classNames(`slider${queryNumber}__link-info`);
    
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

