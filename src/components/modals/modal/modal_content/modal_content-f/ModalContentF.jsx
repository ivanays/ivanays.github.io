import React, { useEffect, useState } from 'react';

import './ModalContentF.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const contentStockClass = classNames(`content${queryNumber}__stock`);
    const stockClass = classNames(`stock${queryNumber}`);
    const stockTitleClass = classNames(`stock${queryNumber}__title`);
    const stockSliderClass = classNames(`stock${queryNumber}__slider`);
    const sliderStockClass = classNames(`slider-stock${queryNumber}`);
    const sliderItemsClass = classNames(`slider${queryNumber}__items`);
    const sliderItemsStockClass = classNames(`slider${queryNumber}__items-stock`);
    const sliderItemClass = classNames(`slider${queryNumber}__item`);
    const sliderItemStockClass = classNames(`slider${queryNumber}__item-stock`);
    const sliderSlideStockClass = classNames(`slider${queryNumber}__slide-stock`);
    const slideClass = classNames(`slide${queryNumber}`);
    const slideStockClass = classNames(`slide-stock${queryNumber}`);
    const slideContentClass = classNames(`slide${queryNumber}__content`);
    const slideContentStockClass = classNames(`slide${queryNumber}__content-stock`);
    const slideStock1Class = classNames(`slide${queryNumber}__stock`);
    const slideValueClass = classNames(`slide${queryNumber}__value`);
    const slideSpanClass = classNames(`slide${queryNumber}__span`);
    const slideSpanNumClass = classNames(`slide${queryNumber}__span-num`);
    const slideSpanSymbolClass = classNames(`slide${queryNumber}__span-symbol`);
    const contentWranningClass = classNames(`content${queryNumber}__wranning`);
    const contentWranningStockClass = classNames(`content${queryNumber}__wranning-stock`);
    const contentInnerClass = classNames(`content${queryNumber}__inner`);
    const contentInnerStockClass = classNames(`content${queryNumber}__inner-stock`);
    const contentPClass = classNames(`content${queryNumber}__p`);
    const contentPStockClass = classNames(`content${queryNumber}__p-stock`);
    const contentPhoneClass = classNames(`content${queryNumber}__phone`);
    const contentPhoneStockClass = classNames(`content${queryNumber}__phone-stock`);
    const contentNumberClass = classNames(`content${queryNumber}__number`);
    const contentNumberStockClass = classNames(`content${queryNumber}__number-stock`);

    const [index, setIndex] = useState(0)

    // const slides = document.querySelectorAll('.slider__slide-stock');

    let slideStock, slideStockActive;

    (media1728 === true) ? slideStock = 'slider--1728__slide-stock' :
        (media1300 === true) ? slideStock = 'slider--1300__slide-stock' :
            (media1133 === true) ? slideStock = 'slider--1133__slide-stock' :
                (media900 === true) ? slideStock = 'slider--900__slide-stock' :
                    (media744 === true) ? slideStock = 'slider--744__slide-stock' :
                        (media744l === true) ? slideStock = 'slider--744l__slide-stock' :
                            (media600 === true) ? slideStock = 'slider--600__slide-stock' :
                                (media600l === true) ? slideStock = 'slider--600l__slide-stock' :
                                    (media375 === true) ? slideStock = 'slider--375__slide-stock' :
                                        (media275 === true) ? slideStock = 'slider--275__slide-stock' : null;
    
    (media1728 === true) ? slideStockActive = 'slider--1728__slide-stock-active' :
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
