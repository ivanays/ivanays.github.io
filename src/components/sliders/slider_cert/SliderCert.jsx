import React, { useState, useEffect, useLayoutEffect, createRef, useRef, useContext } from 'react';

import gsap from 'gsap';

import './SliderCert.scss';

import { useMediaQuery } from '../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

import { ModalContext } from '../../../contexts/ModalContext';
import { ModalContentE } from '../../modals/modal/modal_content';

import certificate1 from '../../../images/certificate1.jpg';
import certificate2 from '../../../images/certificate2.jpg';
import certificate3 from '../../../images/certificate3.jpg';
import certificate4 from '../../../images/certificate4.jpg';
import certificate5 from '../../../images/certificate5.jpg';
import certificate6 from '../../../images/certificate6.jpg';
import certificate7 from '../../../images/certificate7.jpg';
import certificate8 from '../../../images/certificate8.jpg';
import certificate9 from '../../../images/certificate9.jpg';
import certificate10 from '../../../images/certificate10.jpg';
import certificate11 from '../../../images/certificate11.jpg';
import certificate12 from '../../../images/certificate12.jpg';
import certificate13 from '../../../images/certificate13.jpg';

import { UiButton, UiImg } from '../../ui';

export const SliderCert = (props) => {

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

    const sliderCertificatesClass = classNames({
        'slider-certificates': media1728 === true,
        'slider-certificates--1133': media1133 === true,
        'slider-certificates--744': media744 === true,
        'slider-certificates--744l': media744l === true,
        'slider-certificates--375': media375 === true,
        'slider-certificates--275': media275 === true,
        'slider-certificates--1300': media1300 === true,
        'slider-certificates--900': media900 === true,
        'slider-certificates--600': media600 === true,
        'slider-certificates--600l': media600l === true,
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

    const sliderSlideCertificatesClass = classNames({
        'slider__slide-certificates': media1728 === true,
        'slider--1133__slide-certificates': media1133 === true,
        'slider--744__slide-certificates': media744 === true,
        'slider--744l__slide-certificates': media744l === true,
        'slider--375__slide-certificates': media375 === true,
        'slider--275__slide-certificates': media275 === true,
        'slider--1300__slide-certificates': media1300 === true,
        'slider--900__slide-certificates': media900 === true,
        'slider--600__slide-certificates': media600 === true,
        'slider--600l__slide-certificates': media600l === true,
    });

    const sliderSlideCertificatesMobileClass = classNames({
        'slider__slide-certificates-mobile': media1728 === true,
        'slider--1133__slide-certificates-mobile': media1133 === true,
        'slider--744__slide-certificates-mobile': media744 === true,
        'slider--744l__slide-certificates-mobile': media744l === true,
        'slider--375__slide-certificates-mobile': media375 === true,
        'slider--275__slide-certificates-mobile': media275 === true,
        'slider--1300__slide-certificates-mobile': media1300 === true,
        'slider--900__slide-certificates-mobile': media900 === true,
        'slider--600__slide-certificates-mobile': media600 === true,
        'slider--600l__slide-certificates-mobile': media600l === true,
    });

    const sliderSlideCertificatesActiveClass = classNames({
        'slider__slide-certificates-active': media1728 === true,
        'slider--1133__slide-certificates-active': media1133 === true,
        'slider--744__slide-certificates-active': media744 === true,
        'slider--744l__slide-certificates-active': media744l === true,
        'slider--375__slide-certificates-active': media375 === true,
        'slider--275__slide-certificates-active': media275 === true,
        'slider--1300__slide-certificates-active': media1300 === true,
        'slider--900__slide-certificates-active': media900 === true,
        'slider--600__slide-certificates-active': media600 === true,
        'slider--600l__slide-certificates-active': media600l === true,
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

    const sliderLinkCertificatesClass = classNames({
        'slider__link-certificates': media1728 === true,
        'slider--1133__link-certificates': media1133 === true,
        'slider--744__link-certificates': media744 === true,
        'slider--744l__link-certificates': media744l === true,
        'slider--375__link-certificates': media375 === true,
        'slider--275__link-certificates': media275 === true,
        'slider--1300__link-certificates': media1300 === true,
        'slider--900__link-certificates': media900 === true,
        'slider--600__link-certificates': media600 === true,
        'slider--600l__link-certificates': media600l === true,
    });

    const sliderCardClass = classNames({
        'slider__card': media1728 === true,
        'slider--1133__card': media1133 === true,
        'slider--744__card': media744 === true,
        'slider--744l__card': media744l === true,
        'slider--375__card': media375 === true,
        'slider--275__card': media275 === true,
        'slider--1300__card': media1300 === true,
        'slider--900__card': media900 === true,
        'slider--600__card': media600 === true,
        'slider--600l__card': media600l === true,
    });

    const sliderCardCertificatesClass = classNames({
        'slider__card-certificates': media1728 === true,
        'slider--1133__card-certificates': media1133 === true,
        'slider--744__card-certificates': media744 === true,
        'slider--744l__card-certificates': media744l === true,
        'slider--375__card-certificates': media375 === true,
        'slider--275__card-certificates': media275 === true,
        'slider--1300__card-certificates': media1300 === true,
        'slider--900__card-certificates': media900 === true,
        'slider--600__card-certificates': media600 === true,
        'slider--600l__card-certificates': media600l === true,
    });

    let images = [
        certificate1,
        certificate2,
        certificate3,
        certificate4,
        certificate5,
        certificate6,
        certificate7,
        certificate8,
        certificate9,
        certificate10,
        certificate11,
        certificate12,
        certificate13
    ];

    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [touchPosition, setTouchPosition] = useState(null);
    const [sliderDirection, setSliderDirection] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [sliderLockRight, setSliderLockRight] = useState(false);

    const slidesRef = useRef(images.map(() => createRef()));
    const sliderRef = useRef(null);

    const { openModal, stopSliderProcCert, autoPlaySliderProcCert } = useContext(ModalContext);

    const popupBodyClass = classNames({
        'popup__body': media1728 === true,
        'popup--1133__body': media1133 === true,
        'popup--744__body': media744 === true,
        'popup--744l__body': media744l === true,
        'popup--375__body': media375 === true,
        'popup--275__body': media275 === true,
        'popup--1300__body': media1300 === true,
        'popup--900__body': media900 === true,
        'popup--600__body': media600 === true,
        'popup--600l__body': media600l === true,
    });

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const propsData = (props, [...arg] = []) => {
        let propsAll = props;
        let arrImages = [...arg];
        let data = [[], []];
        arrImages.length !== -1 ? arrImages.map(() => {
            data[0].push(JSON.parse(JSON.stringify(propsAll.data[0])));
            data[1].push(JSON.parse(JSON.stringify(propsAll.data[1])));
        }) : null;
        data[0].length == arrImages.length ? data[0].map((value, i) => data[0][i].id = `${propsAll.data[0].id}${i}`) : null;
        data[1].length == arrImages.length ? data[1].map((value, i) => data[1][i].id = `${propsAll.data[1].id}${i}`) : null;
        data[1].length == arrImages.length ? data[1].map((value, i) => data[1][i].alt = `${propsAll.data[1].alt}${i}`) : null;
        data[1].length == arrImages.length ? arrImages.map((value, i) => (data[1][i].src = value)) : null;
        return data;
    };

    const animationSliderTouchMove = (x) => {
        gsap.timeline().to(
            sliderRef.current, {
            x: x,
            duration: 0.3
        }
        )
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        // console.log(touchDown);
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {

        if (touchPosition === null) return;

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;
        // console.log(direction);

        setSliderDirection(direction);
        // console.log(sliderDirection);

        setTouchPosition(null);
    };

    useLayoutEffect(() => {

        if (media1728 === true || media1300 === true || media1133 === true) return;

        let widthSlider = 0;
        let heightSlider = 0;
        let widthSlide = 281;
        let heightSlide = 202;

        for (let i = 0; i < items.length; i++) {
            // widthSlide = slidesRef.current[i].current.offsetWidth;
            let width = widthSlide + 30;
            widthSlider += width;
        }

        heightSlider = sliderRef.current.offsetHeight;

        setSliderWidth(widthSlider - 30);
        setSliderHeight(heightSlide);
    }, [items]);


    useEffect(() => {

        if (media1728 === true || media1300 === true || media1133 === true) return;

        const containerWidth = props.containerWidth;
        const k = 281 - (containerWidth - Math.floor(containerWidth / 311) * 311);

        if (sliderDirection > 5) {
            if (sliderLockRight === false) {
                if (Math.abs(sliderPosition) < sliderWidth - containerWidth - 311) {
                    animationSliderTouchMove((sliderPosition - 311));
                    setSliderPosition((sliderPosition - 311));
                } else {
                    animationSliderTouchMove((sliderPosition - k));
                    setSliderPosition((sliderPosition - k));
                    setSliderLockRight(true);
                }
            }

        }

        if (sliderDirection < -5 && sliderLockRight === true) {
            animationSliderTouchMove((sliderPosition + k));
            setSliderPosition((sliderPosition + k));
            setSliderLockRight(false);
        }

        if (sliderDirection < -5 && sliderLockRight === false) {
            if (sliderPosition !== 0) {
                animationSliderTouchMove((sliderPosition + 311));
                setSliderPosition((sliderPosition + 311));
            }
        }

    }, [sliderDirection]);


    const sliderSlide = (number) => {
        const current = document.querySelector(`#uiDivCertificates${number}`);
        return current;
    };

    const slidesDefault = () => {
        const slides = document.querySelectorAll(`.${sliderSlideCertificatesClass}`);

        for (let i = 0; i < slides.length; i++) {
            if (media1728 === true || media1133 === true) {
                slides[i].classList.remove(sliderSlideCertificatesMobileClass);
                slides[i].classList.remove(sliderSlideCertificatesActiveClass);
            }

            if (media900 === true || media744 === true || media744l === true || media375 === true || media275 === true) {
                slides[i].classList.remove(sliderSlideCertificatesMobileClass);
                slides[i].classList.remove(sliderSlideCertificatesActiveClass);

                slides[i].classList.add(sliderSlideCertificatesMobileClass);
            }
        }
    }

    useEffect(() => {
        const loadData = () => {
            setItems(images);
        };
        loadData();

        slidesDefault();

        if (!autoPlay || !autoPlaySliderProcCert || media900 === true || media744 === true || media744l === true || media600 === true || media600l === true || media375 === true || media275 === true) return;

        const currentSlide = sliderSlide(0);
        currentSlide.classList.add(sliderSlideCertificatesActiveClass);

    }, []);

    const changeSlide = (direction = 1) => {
        if (!autoPlay || !autoPlaySliderProcCert || media900 === true || media744 === true || media744l === true || media600 === true || media600l === true || media375 === true || media275 === true) return;

        slidesDefault();

        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);

        const currentSlide = sliderSlide(slideNumber);
        currentSlide.classList.add(sliderSlideCertificatesActiveClass);
    };

    useEffect(() => {

        if (!autoPlay || !autoPlaySliderProcCert || media900 === true || media744 === true || media744l === true || media600 === 600 || media600l === true || media375 === true || media275 === true) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, 4000);

        return () => {
            clearInterval(interval);
        };

    }, [items.length, slide, autoPlay, autoPlaySliderProcCert]);

    const handleSlideMouseEnter = () => {
        setAutoPlay(false);
    };

    const handleSlideMouseLeave = () => {
        setAutoPlay(true);
    };

    const handleClickModalE = (number) => {
        stopSliderProcCert();
        openModal({
            id: `${modalId}e${number + Number(1)}`,
            className: `${modalBodyClassName}e`,
            content: <ModalContentE number={number + Number(1)} />,
        });
    };

    return (
        <>
            <div
                className={sliderCertificatesClass}
                ref={sliderRef}
                style={media900 === true || media744 === true || media744l === true || media600 === true || media600l === true || media375 === true || media275 === true ? { width: `${sliderWidth}px`, height: `${sliderHeight}px` } : null}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {propsData(props, props.images)[0].map((propi, i) => (
                    <>
                        <div className={`${sliderSlideClass} ${sliderSlideCertificatesClass}`}
                            key={`divSliderSlideCertificates${i}`}
                            id={`uiDivCertificates${i}`}
                            ref={slidesRef.current[i]}
                            onMouseEnter={() => { handleSlideMouseEnter() }}
                            onMouseLeave={() => { handleSlideMouseLeave() }}
                            onClick={() => { handleClickModalE(i) }}
                        >
                            <UiButton
                                key={`uiButtonCertificate${i}`}
                                {...propi}
                                className={`${sliderLinkClass} ${sliderLinkCertificatesClass}`}
                            >
                                {propsData(props, props.images)[1].map((propj, j) => (
                                    (i === j) ? <UiImg
                                        key={`uiImgCertificate${j}`}
                                        {...propj}
                                        className={`${sliderCardClass} ${sliderCardCertificatesClass}`}
                                    /> : null
                                ))}
                            </UiButton>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

