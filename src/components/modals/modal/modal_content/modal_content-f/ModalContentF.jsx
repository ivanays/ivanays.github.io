import React, { useEffect, useState } from 'react';

import './ModalContentF.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import { UiLink } from '../../../../ui';


export const ModalContentF = (props) => {

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

    const contentStockClass = classNames({
        'content__stock': media1728 === true,
        'content--1133__stock': media1133 === true,
        'content--744__stock': media744 === true,
        'content--744l__stock': media744l === true,
        'content--375__stock': media375 === true,
        'content--275__stock': media275 === true,
        'content--1300__stock': media1300 === true,
        'content--900__stock': media900 === true,
        'content--600__stock': media600 === true,
        'content--600l__stock': media600l === true,
    });

    const stockClass = classNames({
        'stock': media1728 === true,
        'stock--1133': media1133 === true,
        'stock--744': media744 === true,
        'stock--744l': media744l === true,
        'stock--375': media375 === true,
        'stock--275': media275 === true,
        'stock--1300': media1300 === true,
        'stock--900': media900 === true,
        'stock--600': media600 === true,
        'stock--600l': media600l === true,
    });

    const stockTitleClass = classNames({
        'stock__title': media1728 === true,
        'stock--1133__title': media1133 === true,
        'stock--744__title': media744 === true,
        'stock--744l__title': media744l === true,
        'stock--375__title': media375 === true,
        'stock--275__title': media275 === true,
        'stock--1300__title': media1300 === true,
        'stock--900__title': media900 === true,
        'stock--600__title': media600 === true,
        'stock--600l__title': media600l === true,
    });

    const stockSliderClass = classNames({
        'stock__slider': media1728 === true,
        'stock--1133__slider': media1133 === true,
        'stock--744__slider': media744 === true,
        'stock--744l__slider': media744l === true,
        'stock--375__slider': media375 === true,
        'stock--275__slider': media275 === true,
        'stock--1300__slider': media1300 === true,
        'stock--900__slider': media900 === true,
        'stock--600__slider': media600 === true,
        'stock--600l__slider': media600l === true,
    });

    const sliderStockClass = classNames({
        'slider-stock': media1728 === true,
        'slider-stock--1133': media1133 === true,
        'slider-stock--744': media744 === true,
        'slider-stock--744l': media744l === true,
        'slider-stock--375': media375 === true,
        'slider-stock--275': media275 === true,
        'slider-stock--1300': media1300 === true,
        'slider-stock--900': media900 === true,
        'slider-stock--600': media600 === true,
        'slider-stock--600l': media600l === true,
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

    const sliderItemsStockClass = classNames({
        'slider__items-stock': media1728 === true,
        'slider--1133__items-stock': media1133 === true,
        'slider--744__items-stock': media744 === true,
        'slider--744l__items-stock': media744l === true,
        'slider--375__items-stock': media375 === true,
        'slider--275__items-stock': media275 === true,
        'slider--1300__items-stock': media1300 === true,
        'slider--900__items-stock': media900 === true,
        'slider--600__items-stock': media600 === true,
        'slider--600l__items-stock': media600l === true,
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

    const sliderItemStockClass = classNames({
        'slider__item-stock': media1728 === true,
        'slider--1133__item-stock': media1133 === true,
        'slider--744__item-stock': media744 === true,
        'slider--744l__item-stock': media744l === true,
        'slider--375__item-stock': media375 === true,
        'slider--275__item-stock': media275 === true,
        'slider--1300__item-stock': media1300 === true,
        'slider--900__item-stock': media900 === true,
        'slider--600__item-stock': media600 === true,
        'slider--600l__item-stock': media600l === true,
    });

    const sliderSlideStockClass = classNames({
        'slider__slide-stock': media1728 === true,
        'slider--1133__slide-stock': media1133 === true,
        'slider--744__slide-stock': media744 === true,
        'slider--744l__slide-stock': media744l === true,
        'slider--375__slide-stock': media375 === true,
        'slider--275__slide-stock': media275 === true,
        'slider--1300__slide-stock': media1300 === true,
        'slider--900__slide-stock': media900 === true,
        'slider--600__slide-stock': media600 === true,
        'slider--600l__slide-stock': media600l === true,
    });

    const slideClass = classNames({
        'slide': media1728 === true,
        'slide--1133': media1133 === true,
        'slide--744': media744 === true,
        'slide--744l': media744l === true,
        'slide--375': media375 === true,
        'slide--275': media275 === true,
        'slide--1300': media1300 === true,
        'slide--900': media900 === true,
        'slide--600': media600 === true,
        'slide--600l': media600l === true,
    });

    const slideStockClass = classNames({
        'slide-stock': media1728 === true,
        'slide-stock--1133': media1133 === true,
        'slide-stock--744': media744 === true,
        'slide-stock--744l': media744l === true,
        'slide-stock--375': media375 === true,
        'slide-stock--275': media275 === true,
        'slide-stock--1300': media1300 === true,
        'slide-stock--900': media900 === true,
        'slide-stock--600': media600 === true,
        'slide-stock--600l': media600l === true,
    });

    const slideContentClass = classNames({
        'slide__content': media1728 === true,
        'slide--1133__content': media1133 === true,
        'slide--744__content': media744 === true,
        'slide--744l__content': media744l === true,
        'slide--375__content': media375 === true,
        'slide--275__content': media275 === true,
        'slide--1300__content': media1300 === true,
        'slide--900__content': media900 === true,
        'slide--600__content': media600 === true,
        'slide--600l__content': media600l === true,
    });

    const slideContentStockClass = classNames({
        'slide__content-stock': media1728 === true,
        'slide--1133__content-stock': media1133 === true,
        'slide--744__content-stock': media744 === true,
        'slide--744l__content-stock': media744l === true,
        'slide--375__content-stock': media375 === true,
        'slide--275__content-stock': media275 === true,
        'slide--1300__content-stock': media1300 === true,
        'slide--900__content-stock': media900 === true,
        'slide--600__content-stock': media600 === true,
        'slide--600l__content-stock': media600l === true,
    });

    const slideStock1Class = classNames({
        'slide__stock': media1728 === true,
        'slide--1133__stock': media1133 === true,
        'slide--744__stock': media744 === true,
        'slide--744l__stock': media744l === true,
        'slide--375__stock': media375 === true,
        'slide--275__stock': media275 === true,
        'slide--1300__stock': media1300 === true,
        'slide--900__stock': media900 === true,
        'slide--600__stock': media600 === true,
        'slide--600l__stock': media600l === true,
    });

    const slideValueClass = classNames({
        'slide__value': media1728 === true,
        'slide--1133__value': media1133 === true,
        'slide--744__value': media744 === true,
        'slide--744l__value': media744l === true,
        'slide--375__value': media375 === true,
        'slide--275__value': media275 === true,
        'slide--1300__value': media1300 === true,
        'slide--900__value': media900 === true,
        'slide--600__value': media600 === true,
        'slide--600l__value': media600l === true,
    });

    const slideSpanClass = classNames({
        'slide__span': media1728 === true,
        'slide--1133__span': media1133 === true,
        'slide--744__span': media744 === true,
        'slide--744l__span': media744l === true,
        'slide--375__span': media375 === true,
        'slide--275__span': media275 === true,
        'slide--1300__span': media1300 === true,
        'slide--900__span': media900 === true,
        'slide--600__span': media600 === true,
        'slide--600l__span': media600l === true,
    });

    const slideSpanNumClass = classNames({
        'slide__span-num': media1728 === true,
        'slide--1133__span-num': media1133 === true,
        'slide--744__span-num': media744 === true,
        'slide--744l__span-num': media744l === true,
        'slide--375__span-num': media375 === true,
        'slide--275__span-num': media275 === true,
        'slide--1300__span-num': media1300 === true,
        'slide--900__span-num': media900 === true,
        'slide--600__span-num': media600 === true,
        'slide--600l__span-num': media600l === true,
    });

    const slideSpanSymbolClass = classNames({
        'slide__span-symbol': media1728 === true,
        'slide--1133__span-symbol': media1133 === true,
        'slide--744__span-symbol': media744 === true,
        'slide--744l__span-symbol': media744l === true,
        'slide--375__span-symbol': media375 === true,
        'slide--275__span-symbol': media275 === true,
        'slide--1300__span-symbol': media1300 === true,
        'slide--900__span-symbol': media900 === true,
        'slide--600__span-symbol': media600 === true,
        'slide--600l__span-symbol': media600l === true,
    });

    const contentWranningClass = classNames({
        'content__wranning': media1728 === true,
        'content--1133__wranning': media1133 === true,
        'content--744__wranning': media744 === true,
        'content--744l__wranning': media744l === true,
        'content--375__wranning': media375 === true,
        'content--275__wranning': media275 === true,
        'content--1300__wranning': media1300 === true,
        'content--900__wranning': media900 === true,
        'content--600__wranning': media600 === true,
        'content--600l__wranning': media600l === true,
    });

    const contentWranningStockClass = classNames({
        'content__wranning-stock': media1728 === true,
        'content--1133__wranning-stock': media1133 === true,
        'content--744__wranning-stock': media744 === true,
        'content--744l__wranning-stock': media744l === true,
        'content--375__wranning-stock': media375 === true,
        'content--275__wranning-stock': media275 === true,
        'content--1300__wranning-stock': media1300 === true,
        'content--900__wranning-stock': media900 === true,
        'content--600__wranning-stock': media600 === true,
        'content--600l__wranning-stock': media600l === true,
    });

    const contentInnerClass = classNames({
        'content__inner': media1728 === true,
        'content--1133__inner': media1133 === true,
        'content--744__inner': media744 === true,
        'content--744l__inner': media744l === true,
        'content--375__inner': media375 === true,
        'content--275__inner': media275 === true,
        'content--1300__inner': media1300 === true,
        'content--900__inner': media900 === true,
        'content--600__inner': media600 === true,
        'content--600l__inner': media600l === true,
    });

    const contentInnerStockClass = classNames({
        'content__inner-stock': media1728 === true,
        'content--1133__inner-stock': media1133 === true,
        'content--744__inner-stock': media744 === true,
        'content--744l__inner-stock': media744l === true,
        'content--375__inner-stock': media375 === true,
        'content--275__inner-stock': media275 === true,
        'content--1300__inner-stock': media1300 === true,
        'content--900__inner-stock': media900 === true,
        'content--600__inner-stock': media600 === true,
        'content--600l__inner-stock': media600l === true,
    });

    const contentPClass = classNames({
        'content__p': media1728 === true,
        'content--1133__p': media1133 === true,
        'content--744__p': media744 === true,
        'content--744l__p': media744l === true,
        'content--375__p': media375 === true,
        'content--275__p': media275 === true,
        'content--1300__p': media1300 === true,
        'content--900__p': media900 === true,
        'content--600__p': media600 === true,
        'content--600l__p': media600l === true,
    });

    const contentPStockClass = classNames({
        'content__p-stock': media1728 === true,
        'content--1133__p-stock': media1133 === true,
        'content--744__p-stock': media744 === true,
        'content--744l__p-stock': media744l === true,
        'content--375__p-stock': media375 === true,
        'content--275__p-stock': media275 === true,
        'content--1300__p-stock': media1300 === true,
        'content--900__p-stock': media900 === true,
        'content--600__p-stock': media600 === true,
        'content--600l__p-stock': media600l === true,
    });

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

    const contentPhoneStockClass = classNames({
        'content__phone-stock': media1728 === true,
        'content--1133__phone-stock': media1133 === true,
        'content--744__phone-stock': media744 === true,
        'content--744l__phone-stock': media744l === true,
        'content--375__phone-stock': media375 === true,
        'content--275__phone-stock': media275 === true,
        'content--1300__phone-stock': media1300 === true,
        'content--900__phone-stock': media900 === true,
        'content--600__phone-stock': media600 === true,
        'content--600l__phone-stock': media600l === true,
    });

    const contentNumberClass = classNames({
        'content__number': media1728 === true,
        'content--1133__number': media1133 === true,
        'content--744__number': media744 === true,
        'content--744l__number': media744l === true,
        'content--375__number': media375 === true,
        'content--275__number': media275 === true,
        'content--1300__number': media1300 === true,
        'content--900__number': media900 === true,
        'content--600__number': media600 === true,
        'content--600l__number': media600l === true,
    });

    const contentNumberStockClass = classNames({
        'content__number-stock': media1728 === true,
        'content--1133__number-stock': media1133 === true,
        'content--744__number-stock': media744 === true,
        'content--744l__number-stock': media744l === true,
        'content--375__number-stock': media375 === true,
        'content--275__number-stock': media275 === true,
        'content--1300__number-stock': media1300 === true,
        'content--900__number-stock': media900 === true,
        'content--600__number-stock': media600 === true,
        'content--600l__number-stock': media600l === true,
    });


    const [index, setIndex] = useState(0)

    // const slides = document.querySelectorAll('.slider__slide-stock');

    let slideStock, slideStockActive;

    (media1728 === true) ? slideStock = 'slider__slide-stock' :
        (media1300 === true) ? slideStock = 'slider--1300__slide-stock' :
            (media1133 === true) ? slideStock = 'slider--1133__slide-stock' :
                (media900 === true) ? slideStock = 'slider--900__slide-stock' :
                    (media744 === true) ? slideStock = 'slider--744__slide-stock' :
                        (media744l === true) ? slideStock = 'slider--744l__slide-stock' :
                            (media600 === true) ? slideStock = 'slider--600__slide-stock' :
                                (media600l === true) ? slideStock = 'slider--600l__slide-stock' :
                                    (media375 === true) ? slideStock = 'slider--375__slide-stock' :
                                        (media275 === true) ? slideStock = 'slider--275__slide-stock' : null;
    
    (media1728 === true) ? slideStockActive = 'slider__slide-stock-active' :
        (media1300 === true) ? slideStockActive = 'slider--1300__slide-stock-active' :
            (media1133 === true) ? slideStockActive = 'slider--1133__slide-stock-active' :
                (media900 === true) ? slideStockActive = 'slider--900__slide-stock-active' :
                    (media744 === true) ? slideStockActive = 'slider--744__slide-stock-active' :
                        (media744l === true) ? slideStockActive = 'slider--744l__slide-stock-active' :
                            (media600 === true) ? slideStockActive = 'slider--600__slide-stock-active' :
                                (media600l === true) ? slideStockActive = 'slider--600l__slide-stock-active' :
                                    (media375 === true) ? slideStockActive = 'slider--375__slide-stock-active' :
                                        (media275 === true) ? slideStockActive = 'slider--275__slide-stock-active' : null;

    // (media1728 === true) ? slideStockActive = 'slider__slide-stock-active' :
    //     (media1133 === true) ? slideStockActive = 'slider--1133__slide-stock-active' :
    //         (media744 === true) ? slideStockActive = 'slider--744__slide-stock-active' : null;

    // (media1728 === true) ? slideStockActive = 'slider__slide-stock-active' :
    //     (media1133 === true) ? slideStockActive = 'slider--1133__slide-stock-active' :
    //         (media744 === true) ? slideStockActive = 'slider--744__slide-stock-active' :
    //             (media744l === true) ? slideStockActive = 'slider--744l__slide-stock-active' :
    //                 (media375 === true) ? slideStockActive = 'slider--375__slide-stock-active' :
    //                     (media275 === true) ? slideStockActive = 'slider--275__slide-stock-active' : null;

    const removeActiveSlides = () => {
        const slides = document.querySelectorAll(`.${slideStock}`);
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove(`${slideStockActive}`);
        }
    };

    const activeSlide = (n) => {
        const slides = document.querySelectorAll(`.${slideStock}`);
        removeActiveSlides();
        slides[n].classList.add(`${slideStockActive}`);
    };

    const defaultSlide = () => {
        setIndex(0);
        activeSlide(index);
    };

    const nextSlide = () => {
        const slides = document.querySelectorAll(`.${slideStock}`);
        if (index === (slides.length - 1)) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        activeSlide(index);
    }

    useEffect(() => {
        if (media275 || media375 || media600 || media600l || media744l) return;

        const timeout = setTimeout(() => {
            defaultSlide();
            setIndex(index + 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, []);

    useEffect(() => {
        if (media275 || media375 || media600 || media600l || media744l) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

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

    return (
        <>
            <div className={contentStockClass}>
                <div id="stock" className={stockClass}>
                    <h2 id="stock-title" className={stockTitleClass}>
                        Акция
                    </h2>
                    <div className={stockSliderClass}>
                        <div className={sliderStockClass}>
                            <div className={`${sliderItemsClass} ${sliderItemsStockClass}`}>
                                <div className={`${sliderItemClass} ${sliderItemStockClass}`}>
                                    <div className={sliderSlideStockClass}>
                                        <div className={`${slideClass} ${slideStockClass}`}>
                                            <div className={`${slideContentClass} ${slideContentStockClass}`}>
                                                <p id="slide-stock1" className={slideStock1Class}>
                                                    Постоянным клиентам - скидка
                                                </p>
                                                <p id="slide-value1" className={slideValueClass}>
                                                    <span className={`${slideSpanClass} ${slideSpanNumClass}`}>
                                                        10
                                                    </span>
                                                    <span className={`${slideSpanClass} ${slideSpanSymbolClass}`}>
                                                        %
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={sliderSlideStockClass}>
                                        <div className={`${slideClass} ${slideStockClass}`}>
                                            <div className={`${slideContentClass} ${slideContentStockClass}`}>
                                                <p id="slide-stock1" className={slideStock1Class}>
                                                    Первый раз у нас - cэкономь
                                                </p>
                                                <p id="slide-value1" className={slideValueClass}>
                                                    <span className={`${slideSpanClass} ${slideSpanNumClass}`}>
                                                        15
                                                    </span>
                                                    <span className={`${slideSpanClass} ${slideSpanSymbolClass}`}>
                                                        %
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={sliderSlideStockClass}>
                                        <div className={`${slideClass} ${slideStockClass}`}>
                                            <div className={`${slideContentClass} ${slideContentStockClass}`}>
                                                <p id="slide-stock1" className={slideStock1Class}>
                                                    День рождения - подарок
                                                </p>
                                                <p id="slide-value1" className={slideValueClass}>
                                                    <span className={`${slideSpanClass} ${slideSpanNumClass}`}>
                                                        20
                                                    </span>
                                                    <span className="slide__span slide__span-symbol">
                                                        %
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="content-stock"
                    className={`${contentWranningClass} ${contentWranningStockClass}`}
                >
                    <div className={media275 || media375 || media600 || media600l || media744l ? contentInnerStockClass : contentInnerClass}>
                        {media275 ? null : <p id="p-stock" className={`${contentPClass} ${contentPStockClass}`}>
                            Уточняйте информацию по телефону
                        </p>}
                        <phone
                            id="phone-stock"
                            className={`${contentPhoneClass} ${contentPhoneStockClass}`}
                        >
                            {propsData(props).map((prop, i) => (
                                <UiLink
                                    key={`uiLinkPhoneStock${i}`}
                                    {...prop}
                                    className={`${contentNumberClass} ${contentNumberStockClass}`}
                                />
                            ))}
                            {/* <a
                                href="tel:+79182669130"
                                className="content__number content__number-stock"
                            >
                                +7 918 266 91 30
                            </a> */}
                        </phone>
                    </div>
                </div>
            </div>
        </>
    );
};
