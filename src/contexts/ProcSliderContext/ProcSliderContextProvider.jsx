import React, {
    useEffect,
    useState,
    useRef,
    createRef,
    useLayoutEffect,
    useContext
} from 'react';

import './ProcSliderContextProvider.scss';

import PropTypes, { bool, number } from 'prop-types';
import classNames from 'classnames';

import funcQueryMedia from '../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../func/func_query_number/funcQueryNumber';

import gsap from 'gsap';

import { useMediaQuery } from '../../hooks';

import { ProcSliderContext } from './ProcSliderContext';
import { ModalContext } from '../ModalContext';

import { ModalContentA } from '../../components/modals/modal/modal_content';

import dataModalContentA from '../../data/data_modal/data_modal_content/data_modal_content_a/dataModalContentA.json';
import dataPhone from '../../data/data_phone/dataPhone.json'

import { SliderProcButtons } from '../../components/sliders/slider_proc/slider_proc_buttons';
import { SliderProcDots } from '../../components/sliders/slider_proc/slider_proc_dots';

import { UiButton, UiImg } from '../../components/ui';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const ProcSliderProvider = (props) => {

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

    const sliderClass = classNames(`slider${queryNumber}`);
    const sliderProceduresClass = classNames(`slider-procedures${queryNumber}`);
    const sliderBodyClass = classNames(`slider-body${queryNumber}`);
    const sliderSlideClass = classNames(`slider${queryNumber}__slide`);
    const sliderSlideProceduresClass = classNames(`slider${queryNumber}__slide-procedures`);
    const sliderSlideBodyActiveClass = classNames(`slider${queryNumber}__slide-body-active`);
    const sliderLinkClass = classNames(`slider${queryNumber}__link`);
    const sliderLinkProceduresClass = classNames(`slider${queryNumber}__link-procedures`);
    const sliderCardClass = classNames(`slider${queryNumber}__card}`);
    const sliderCardProceduresClass = classNames(`slider${queryNumber}__card-procedures`);
    const buttonsClass = classNames(`buttons${queryNumber}`);
    const dotsClass = classNames(`dots${queryNumber}`);
    const popupBodyClass = classNames(`popup${queryNumber}__body`);

    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(0);
    const [countViewport, setCountViewport] = useState(1);
    const [countFirstSlideViewport, setCountFirstSlideViewport] = useState(0);
    const [pauseAnimationSlide, setPauseAnimationSlide] = useState(0);
    const [pauseInterval, setPauseInterval] = useState(0);
    const [arrFirstSlideViewport, setArrFirstSlideViewport] = useState([]);
    const [autoPlay, setAutoPlay] = useState(true);
    const [touchPosition, setTouchPosition] = useState(null);
    const [sliderDirection, setSliderDirection] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [sliderLockRight, setSliderLockRight] = useState(false);

    const slidesRef = useRef(props.images.map(() => createRef()));
    const sliderRef = useRef(null);

    const viewportWidth = props.viewportWidth;
    const viewportHeight = props.viewportHeight;

    // const countSlides = 4;

    let countSlides;

    (media1728 === true) ? countSlides = 4 :
        (media1300 === true) ? countSlides = 3 :
            (media1133 === true) ? countSlides = 3 :
                (media900 === true) ? countSlides = 3 : null;
                    // (media744 === true) ? countSlides = 3 :
                    //     (media744l === true) ? countSlides = 3 :
                    //         (media600 === true) ? countSlides = 2 :
                    //             (media600l === true) ? countSlides = 2 :
                    //                 (media375 === true) ? countSlides = 2 :
                    //                     (media275 === true) ? countSlides = 2 : null;

    const { openModal, closeModal, playSliderProcCert, stopSliderProcCert, autoPlaySliderProcCert } = useContext(ModalContext);

    const modalId = 'popup-';
    const modalBodyClassName = `${popupBodyClass} ${popupBodyClass}-`;
    // const modalBodyClassName = 'popup__body popup__body-';

    const propsData = (props, [...arg] = []) => {
        let propsAll = props;
        let arrImages = [...arg];
        let data = [[], []];
        arrImages.length !== -1
            ? arrImages.map(() => {
                data[0].push(JSON.parse(JSON.stringify(propsAll.data[0])));
                data[1].push(JSON.parse(JSON.stringify(propsAll.data[1])));
            })
            : null;
        data[0].length == arrImages.length
            ? data[0].map(
                (value, i) => (data[0][i].id = `${propsAll.data[0].id}${i}`)
            )
            : null;
        data[1].length == arrImages.length
            ? data[1].map(
                (value, i) => (data[1][i].id = `${propsAll.data[1].id}${i}`)
            )
            : null;
        data[1].length == arrImages.length
            ? data[1].map(
                (value, i) => (data[1][i].alt = `${propsAll.data[1].alt}${i}`)
            )
            : null;
        data[1].length == arrImages.length
            ? arrImages.map((value, i) => (data[1][i].src = value))
            : null;
        return data;
    };

    const sliderSlideAllClass = classNames(
        sliderSlideClass,
        sliderSlideProceduresClass,
        sliderSlideBodyActiveClass
    );

    const sliderSlide = (number) => {
        // const current = `#uiDivProcedureBody${number}`;
        const slideRef = slidesRef.current[number];
        const current = slideRef.current;
        return current;
    };

    const sliderDefault = () => {
        let current;
        (media1728 === true) ? current = '.slider--1728__slide-body-active' :
            (media1300 === true) ? current = '.slider--1300__slide-body-active' :
                (media1133 === true) ? current = '.slider--1133__slide-body-active' : null;
        // let current = '.slider__slide-body-active';
        animationSliderDefault(current);
    };

    const slidesAllActive = () => {
        let current;
        (media900 === true) ? current = '.slider--900__slide-body-active' :
            (media744 === true) ? current = '.slider--744__slide-body-active' :
                (media744l === true) ? current = '.slider--744l__slide-body-active' :
                    (media600 === true) ? current = '.slider--600__slide-body-active' :
                        (media600l === true) ? current = '.slider--600l__slide-body-active' :
                            (media375 === true) ? current = '.slider--375__slide-body-active' :
                                (media275 === true) ? current = '.slider--275__slide-body-active' : null;
        // let current = '.slider__slide-body-active';
        animationSlidesAllActive(current);
    };

    useEffect(() => {
        const loadData = () => {
            setItems(props.images);
        };
        loadData();

        if (media900 || media744 || media744l || media600 || media375 || media275) {
            return slidesAllActive();
        };

        if (autoPlay || autoPlaySliderProcCert) {
            sliderDefault();
            let current = sliderSlide(0);
            animationSlide(current, 0);
        }
        const getArrCountFirstSlideViewport = () => {
            let arr = [];
            let count = countSlides;

            for (let i = 0; i < (props.images.length - count); i += count) {
                arr.push(i);
            }

            arr.push(props.images.length - count);

            return arr;
        }

        const arrFirstSlideViewport = getArrCountFirstSlideViewport();
        setArrFirstSlideViewport(arrFirstSlideViewport);
        animationButtonsViewport();
    }, [
        items,
        autoPlay,
        autoPlaySliderProcCert,
        media744l,
        media375
    ]);

    useLayoutEffect(() => {
        let widthSlider = 0;
        let heightSlider = 0;
        // let widthSlide = 336;
        let widthSlide;
        let heightSlide;

        (media1728 || media1300 || media1133) ? widthSlide = 336 :
            (media900 || media744 || media744l || media600 || media600l || media375 || media275) ? widthSlide = 204 : null;

        (media1728 || media1300 || media1133) ? heightSlide = 364 :
            (media900 || media744 || media744l || media600 || media600l || media375 || media275) ? heightSlide = 222 : null;

        for (let i = 0; i < items.length; i++) {
            // widthSlide = slidesRef.current[i].current.offsetWidth;
            let width = widthSlide + 30;
            widthSlider += width;
        }

        heightSlider = sliderRef.current.offsetHeight;

        setSlideWidth(widthSlide);
        setSliderWidth(widthSlider - 30);
        setSliderHeight(heightSlide);
    }, [items]);

    const animationSlide = (current, time) => {
        let pause = time;
        gsap
            .timeline()
            .to(current, {
                opacity: 1,
                blur: 0,
                scale: 1,
                duration: 0.5,
                delay: pause,
                ease: 'elastic',
            })
            .to(current, {
                opacity: 1,
                blur: 0,
                scale: 1,
                duration: 1,
            })
            .to(current, {
                opacity: 0.7,
                blur: 1,
                scale: 0.95,
                duration: 0.5,
                ease: 'elastic',
            }, `+=${pause}`);
    };

    const animationSliderDefault = (current) => {
        gsap.timeline().to(current, {
            opacity: 0.7,
            blur: 1,
            scale: 0.95,
            duration: 0.01,
        });
    };

    const animationSlidesAllActive = (current) => {
        gsap.timeline().to(current, {
            opacity: 1,
            blur: 0,
            scale: 1,
            duration: 0.01,
        });
    };

    const animationButtonsViewport = () => {
        gsap.timeline().to(`.buttons-viewport${queryNumber}`, {
            opacity: 0,
            blur: 1,
            scale: 0,
            duration: 1,
            onComplete: function () { setCountFirstSlideViewport(slide); }
        }).to(`.buttons-viewport${queryNumber}`, {
            opacity: 1,
            blur: 0,
            scale: 1,
            duration: 1,
        });
    };

    const animationSliderViewport = (current, offsetX, duration, delay) => {
        gsap.timeline().to(`.buttons-viewport${queryNumber}`, {
            opacity: 0,
            blur: 1,
            scale: 0,
            duration: 1,
            onComplete: function () { slide === items.length - 1 ? setCountViewport(1) : setCountViewport((nextActiveStep) => nextActiveStep + 1); }
        }).to(current, {
            translateX: offsetX,
            duration: duration,
            delay: delay,
        }).to(`.buttons-viewport${queryNumber}`, {
            opacity: 1,
            blur: 0,
            scale: 1,
            duration: 1,
        });
    };

    const animationSliderViewportHandle = (current, offsetX, duration, delay) => {
        gsap.timeline().to(`.buttons-viewport${queryNumber}`, {
            opacity: 0,
            blur: 1,
            scale: 0,
            duration: 1,
        }).to(current, {
            translateX: offsetX,
            duration: duration,
            delay: delay,
        }).to(`.buttons-viewport${queryNumber}`, {
            opacity: 1,
            blur: 0,
            scale: 1,
            duration: 1,
        });
    };

    const animationSliderTouchMove = (x) => {
        gsap.timeline().to(
            sliderRef.current, {
            x: x,
            duration: 0.3
        }
        )
    };

    const changeSlide = (direction = 1) => {

        if (!autoPlay || !autoPlaySliderProcCert) return;

        if (media900 || media744 || media744l || media600 || media600l || media375 || media275) {
            return slidesAllActive();
        };

        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);

        let currentSlide = sliderSlide(slideNumber);

        let time = 0;

        slideNumber === countViewport * countSlides ? time = 2 : time = 0;

        setPauseAnimationSlide(time);

        animationSlide(currentSlide, time);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);

        let k = number / countSlides;

        if (number === 0) {
            setCountViewport(1);
            setCountFirstSlideViewport(number);
        }
        if (number === k * countSlides) {
            setCountViewport(k + 1);
            setCountFirstSlideViewport(number);
        }
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


    useEffect(() => {

        if (media1728 === true || media1300 || media1133 === true) return;

        const containerWidth = props.containerWidth;
        const k = 204 - (containerWidth - Math.floor(containerWidth / 234) * 234);

        if (sliderDirection > 5) {
            if (sliderLockRight === false) {
                if (Math.abs(sliderPosition) < sliderWidth - containerWidth - 234) {
                    animationSliderTouchMove((sliderPosition - 234));
                    setSliderPosition((sliderPosition - 234));
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
                animationSliderTouchMove((sliderPosition + 234));
                setSliderPosition((sliderPosition + 234));
            }
        }

    }, [sliderDirection]);

    const handleClickModalA = (number) => {
        stopSliderProcCert();
        openModal({
            id: `${modalId}a`,
            className: `${modalBodyClassName}a`,
            content: <ModalContentA dataPhone={dataPhone} data={dataModalContentA} sliderType={props.sliderType} sliderNumber={Number(number)} />,
        });
    };

    const handleSlideMouseEnter = (current) => {
        setAutoPlay(false);
        gsap.to(current, { opacity: 1, blur: 0, scale: 1, duration: 0.5, ease: "elastic", });
    };

    const handleSlideMouseLeave = (current) => {
        gsap.to(current, { opacity: 0.7, blur: 1, scale: 0.95, duration: 0.5, ease: "elastic", });
        setAutoPlay(true);
    };

    const handleChangeViewport = (number) => {

        if (!autoPlay || !autoPlaySliderProcCert) return;

        if (media900 || media744 || media744l || media600 || media375 || media275) {
            return slidesAllActive();
        };

        setAutoPlay(false);

        goToSlide(number);

        const currentSlider = sliderRef.current;
        const ratio = sliderWidth / viewportWidth;
        const ratioFloor = Math.floor(ratio);

        let offsetX = -(sliderWidth - viewportWidth);

        let time = 0;

        if (number === 0) {
            animationSliderViewportHandle(currentSlider, 0, 1, 0);
        }

        if (number === items.length - countSlides) {
            animationSliderViewportHandle(currentSlider, -(sliderWidth - viewportWidth), 1, 0);
        }

        if (number > 0 && number < items.length - countSlides) {
            let k = number / countSlides;
            animationSliderViewportHandle(currentSlider, -(k * (viewportWidth + 30)), 1, 0);
        }

        let currentSlide = sliderSlide(number);

        animationSlide(currentSlide, 1);

        const timeout = setTimeout(() => {
            setAutoPlay(true);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }

    }

    useEffect(() => {

        if (!autoPlay || !autoPlaySliderProcCert) return;

        if (media900 || media744 || media744l || media600 || media600l || media375 || media275) {
            return slidesAllActive();
        };

        const currentSlider = sliderRef.current;
        const ratio = sliderWidth / viewportWidth;
        const ratioFloor = Math.floor(ratio);

        let offsetX = -(sliderWidth - viewportWidth);

        let time = 0;

        if (slide === 0) {
            animationButtonsViewport();
        }

        if (
            slide > countViewport * countSlides - 1 &&
            ratioFloor === countViewport
        ) {
            const run = () => {
                animationSliderViewport(currentSlider, offsetX, 1, 0);
            };
            run();
            time = 4000;
            setCountFirstSlideViewport(slide);
        }

        if (
            slide > countViewport * countSlides - 1 &&
            ratioFloor > countViewport
        ) {
            const run = () => {
                animationSliderViewport(
                    currentSlider,
                    -(countViewport * countSlides * (slideWidth + 30)),
                    1,
                    0
                );
            };
            run();
            time = 4000;
            setCountFirstSlideViewport(slide);
        }

        if (slide === items.length - countSlides + 1) {
            setCountFirstSlideViewport(slide);
        }

        if (slide === items.length - 1) {
            const run = () => {
                animationSliderViewport(currentSlider, 0, 1, 2.5);
            };
            run();
            time = 4000;
            setCountViewport(1);
        }

        setPauseInterval(time);

        const interval = setInterval(() => {
            changeSlide(1);
        }, props.autoPlayTime + time);

        return () => {
            clearInterval(interval);
        };
    }, [items.length,
        slide,
        autoPlay,
        autoPlaySliderProcCert,
        media744l,
        media375
    ]);

    const valueModelProvider = {
        goToSlide,
        changeSlide,
        handleChangeViewport,
        autoPlay: autoPlay,
        slideCount: items.length,
        slideNumber: slide,
        countSlides: countSlides,
        countViewport: countViewport,
        countFirstSlideViewport: countFirstSlideViewport,
        pauseAnimationSlide: pauseAnimationSlide,
        pauseInterval: pauseInterval,
        arrFirstSlideViewport: arrFirstSlideViewport,
        items,
    }

    if (slidesRef === null || sliderRef === null) throw new Error('ERROR_PROC_SLIDER_REFS');
    if ((viewportWidth === null && typeof (viewportWidth) === 'undefined')
        || (viewportHeight === null && typeof (viewportHeight) === 'undefined')) throw new Error('ERROR_PROC_SLIDER_VIEWPORT');

    return (
        <>
            {/* <div
                style={{ width: `${sliderWidth}px`, height: `${sliderHeight}px` }}
                className={sliderClass}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            > */}
            <ProcSliderContext.Provider
                value={valueModelProvider}
            >
                <div
                    id="slider-procedures"
                    ref={sliderRef}
                    className={`${sliderProceduresClass}`}
                    style={{ width: `${sliderWidth}px`, height: `${sliderHeight}px` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    {propsData(props, props.images)[0].map((propi, i) => (
                        <div
                            key={`uiDivProcedure${i}`}
                            id={`uiDivProcedure${i}`}
                            ref={slidesRef.current[i]}
                            className={sliderSlideAllClass}
                            onMouseEnter={() => { handleSlideMouseEnter(slidesRef.current[i].current) }}
                            onMouseLeave={() => { handleSlideMouseLeave(slidesRef.current[i].current) }}
                        // onClick={() => { handleClickModalA() }}
                        >
                            <UiButton
                                key={`uiLinkProcedure${i}`}
                                {...propi}
                                className={`${sliderLinkClass} ${sliderLinkProceduresClass}`}
                                onClick={() => { handleClickModalA(i) }}
                            >
                                {propsData(props, props.images)[1].map((propj, j) =>
                                    i === j ? (
                                        <UiImg
                                            key={`uiImgProcedure${j}`}
                                            {...propj}
                                            className={`${sliderCardClass} ${sliderCardProceduresClass}`}
                                        />
                                    ) : null
                                )}
                            </UiButton>
                        </div>
                    ))}
                </div>
                {(media1728 || media1300 || media1133)
                    ? <div className={buttonsClass}>
                        <SliderProcButtons typeButtons={'pre'} />
                        <div className={dotsClass}>
                            <SliderProcDots />
                        </div>
                        <SliderProcButtons typeButtons={'next'} />
                    </div>
                    : null}
            </ProcSliderContext.Provider>
            {/* </div> */}
        </>
    );
};

ProcSliderProvider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    typeButtons: PropTypes.string
};

ProcSliderProvider.defaultProps = {
    autoPlay: true,
    autoPlayTime: 2500,
};


