import React from 'react';

import './ModalContentA.scss';

import imgPopupContentA0 from '../../../../../images/fr-lifting.png';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import { ModalContentAB0 } from './modal_content-a-b/ModalContentAB0';
import { ModalContentAB1 } from './modal_content-a-b/ModalContentAB1';
import { ModalContentAB2 } from './modal_content-a-b/ModalContentAB2';
import { ModalContentAB3 } from './modal_content-a-b/ModalContentAB3';
import { ModalContentAB4 } from './modal_content-a-b/ModalContentAB4';
import { ModalContentAB5 } from './modal_content-a-b/ModalContentAB5';
import { ModalContentAB6 } from './modal_content-a-b/ModalContentAB6';

import { ModalContentAF0 } from './modal_content-a-f/ModalContentAF0';
import { ModalContentAF1 } from './modal_content-a-f/ModalContentAF1';
import { ModalContentAF2 } from './modal_content-a-f/ModalContentAF2';
import { ModalContentAF3 } from './modal_content-a-f/ModalContentAF3';
import { ModalContentAF4 } from './modal_content-a-f/ModalContentAF4';
import { ModalContentAF5 } from './modal_content-a-f/ModalContentAF5';
import { ModalContentAF6 } from './modal_content-a-f/ModalContentAF6';
import { ModalContentAF7 } from './modal_content-a-f/ModalContentAF7';
import { ModalContentAF8 } from './modal_content-a-f/ModalContentAF8';
import { ModalContentAF9 } from './modal_content-a-f/ModalContentAF9';
import { ModalContentAF10 } from './modal_content-a-f/ModalContentAF10';
import { ModalContentAF11 } from './modal_content-a-f/ModalContentAF11';
import { ModalContentAF12 } from './modal_content-a-f/ModalContentAF12';
import { ModalContentAF13 } from './modal_content-a-f/ModalContentAF13';

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import { UiLink } from '../../../../ui';

export const ModalContentA = (props) => {

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

    const contentArticleClass = classNames({
        'content__article': media1728 === true,
        'content--1133__article': media1133 === true,
        'content--744__article': media744 === true,
        'content--744l__article': media744l === true,
        'content--375__article': media375 === true,
        'content--275__article': media275 === true,
        'content--1300__article': media1300 === true,
        'content--900__article': media900 === true,
        'content--600__article': media600 === true,
        'content--600l__article': media600l === true,
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

    const contentWranningArticleClass = classNames({
        'content__wranning-home': media1728 === true,
        'content--1133__wranning-home': media1133 === true,
        'content--744__wranning-home': media744 === true,
        'content--744l__wranning-home': media744l === true,
        'content--375__wranning-home': media375 === true,
        'content--275__wranning-home': media275 === true,
        'content--1300__wranning-home': media1300 === true,
        'content--900__wranning-home': media900 === true,
        'content--600__wranning-home': media600 === true,
        'content--600l__wranning-home': media600l === true,
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

    const contentInnerArticleClass = classNames({
        'content__inner-home': media1728 === true,
        'content--1133__inner-home': media1133 === true,
        'content--744__inner-home': media744 === true,
        'content--744l__inner-home': media744l === true,
        'content--375__inner-home': media375 === true,
        'content--275__inner-home': media275 === true,
        'content--1300__inner-home': media1300 === true,
        'content--900__inner-home': media900 === true,
        'content--600__inner-home': media600 === true,
        'content--600l__inner-home': media600l === true,
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

    const contentPArticleClass = classNames({
        'content__p-home': media1728 === true,
        'content--1133__p-home': media1133 === true,
        'content--744__p-home': media744 === true,
        'content--744l__p-home': media744l === true,
        'content--375__p-home': media375 === true,
        'content--275__p-home': media275 === true,
        'content--1300__p-home': media1300 === true,
        'content--900__p-home': media900 === true,
        'content--600__p-home': media600 === true,
        'content--600l__p-home': media600l === true,
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

    const contentPhoneArticleClass = classNames({
        'content__phone-home': media1728 === true,
        'content--1133__phone-home': media1133 === true,
        'content--744__phone-home': media744 === true,
        'content--744l__phone-home': media744l === true,
        'content--375__phone-home': media375 === true,
        'content--275__phone-home': media275 === true,
        'content--1300__phone-home': media1300 === true,
        'content--900__phone-home': media900 === true,
        'content--600__phone-home': media600 === true,
        'content--600l__phone-home': media600l === true,
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

    const contentNumberArticleClass = classNames({
        'content__number-home': media1728 === true,
        'content--1133__number-home': media1133 === true,
        'content--744__number-home': media744 === true,
        'content--744l__number-home': media744l === true,
        'content--375__number-home': media375 === true,
        'content--275__number-home': media275 === true,
        'content--1300__number-home': media1300 === true,
        'content--900__number-home': media900 === true,
        'content--600__number-home': media600 === true,
        'content--600l__number-home': media600l === true,
    });


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
            <div className={contentArticleClass}>
                {props.sliderType === 'b' && props.sliderNumber === 0 ? <ModalContentAB0 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 1 ? <ModalContentAB1 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 2 ? <ModalContentAB2 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 3 ? <ModalContentAB3 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 4 ? <ModalContentAB4 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 5 ? <ModalContentAB5 /> : null}
                {props.sliderType === 'b' && props.sliderNumber === 6 ? <ModalContentAB6 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 0 ? <ModalContentAF0 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 1 ? <ModalContentAF1 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 2 ? <ModalContentAF2 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 3 ? <ModalContentAF3 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 4 ? <ModalContentAF4 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 5 ? <ModalContentAF5 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 6 ? <ModalContentAF6 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 7 ? <ModalContentAF7 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 8 ? <ModalContentAF8 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 9 ? <ModalContentAF9 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 10 ? <ModalContentAF10 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 11 ? <ModalContentAF11 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 12 ? <ModalContentAF12 /> : null}
                {props.sliderType === 'f' && props.sliderNumber === 13 ? <ModalContentAF13 /> : null}

                {/* <article id="article-procedure" className={articleClass}>
                    <div className={articleBodyClass}>
                        <h2 id="article-title" className={articleTitleClass}>
                            Прокачка мышц
                        </h2>
                        <div className={articleContentClass}>
                            <div id="procedure" className={articleBlockClass}>
                                <h3
                                    id="procedure-title"
                                    className={`${articleTitleClass} ${articleTitleSubClass} ${articleTitleProcedureClass}`}
                                >
                                    Микроигольчатый RF лифтин
                                </h3>
                                <div id="procedure-content" className={articleProcedureClass}>
                                    <p id="procedure-p" className={articlePClass}>
                                        <span className={`${articleSpanClass} ${articleSpanMachineClass}`}>
                                            EMS (Electric Mio Stimulation)
                                        </span>
                                        Данный аппарат помогает создать более стройное тело, сделать
                                        его подтянутым, проработать контуры, а также уменьшить
                                        жировые отложения , одновременно прокачивая мышцы,
                                        скрывающиеся под ними.
                                    </p>
                                </div>
                            </div>
                            <div id="image" className={articleBlockClass}>
                                <h3
                                    id="procedure-title"
                                    className={`${articleTitleClass} ${articleTitleSubClass}`}
                                ></h3>
                                <div id="image-content" className={articleImageClass}>
                                    <img
                                        src={imgPopupContentA0}
                                        alt=""
                                        id="image-procedre"
                                        className={articleImageClass}
                                    ></img>
                                </div>
                            </div>
                            <div id="indications" className={articleBlockClass}>
                                <h3
                                    id="indications-title"
                                    className={`${articleTitleClass} ${articleTitleSubClass}`}
                                >
                                    Преимущества
                                </h3>
                                <div id="indications-content" className={articleIndicationsClass}>
                                    <ul id="indications-items" className={articleItemsClass}>
                                        <li id="indications-item1" className={articleItemClass}>
                                            <p id="indications-p1" className="article__p article__p-item">
                                                улучшение состояния мышц
                                            </p>
                                        </li>
                                        <li id="indications-item2" className={articleItemClass}>
                                            <p id="indications-p2" className={`${articlePClass} ${articlePItemClass}`}>
                                                устранение излишков жировых отложений в области
                                                живота,ягодиц,рук и ног
                                            </p>
                                        </li>
                                        <li id="indications-item3" className={articleItemClass}>
                                            <p id="indications-p3" className={`${articlePClass} ${articlePItemClass}`}>
                                                живота,ягодиц,рук и ног
                                            </p>
                                        </li>
                                        <li id="indications-item4" className={articleItemClass}>
                                            <p id="indications-p4" className={`${articlePClass} ${articlePItemClass}`}>
                                                укрепление мышц живота после родов
                                            </p>
                                        </li>
                                        <li id="indications-item5" className={articleItemClass}>
                                            <p id="indications-p5" className={`${articlePClass} ${articlePItemClass}`}>
                                                не требует реабилитации
                                            </p>
                                        </li>
                                        <li id="indications-item6" className={articleItemClass}>
                                            <p id="indications-p6" className={`${articlePClass} ${articlePItemClass}`}>
                                                длительность процедуры 30 минут
                                            </p>
                                        </li>
                                        <li id="indications-item7" className={articleItemClass}>
                                            <p id="indications-p7" className={`${articlePClass} ${articlePItemClass}`}>
                                                изменения уже после первой процедуры
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="contraindications" className={articleBlockClass}>
                                <h3
                                    id="contraindications-title"
                                    className={`${articleTitleClass} ${articleTitleSubClass}`}
                                >
                                    Противопоказания
                                </h3>
                                <div
                                    id="contraindications-content"
                                    className={articleContraindicationsClass}
                                >
                                    <ul id="contraindications-items" className={articleItemsClass}>
                                        <li id="contraindications-item1" className={articleItemClass}>
                                            <p
                                                id="contraindications-p1"
                                                className={`${articlePClass} ${articlePItemClass}`}
                                            >
                                                наличие кардиостимулятора
                                            </p>
                                        </li>
                                        <li id="contraindications-item2" className={articleItemClass}>
                                            <p
                                                id="contraindications-p2"
                                                className={`${articlePClass} ${articlePItemClass}`}
                                            >
                                                электронные и металические импланты
                                            </p>
                                        </li>
                                        <li id="contraindications-item3" className={articleItemClass}>
                                            <p
                                                id="contraindications-p3"
                                                className={`${articlePClass} ${articlePItemClass}`}
                                            >
                                                лёгочная недостаточность
                                            </p>
                                        </li>
                                        <li id="contraindications-item4" className={articleItemClass}>
                                            <p
                                                id="contraindications-p4"
                                                className={`${articlePClass} ${articlePItemClass}`}
                                            >
                                                беременность
                                            </p>
                                        </li>
                                        <li id="contraindications-item5" className={articleItemClass}>
                                            <p
                                                id="contraindications-p5"
                                                className={`${articlePClass} ${articlePItemClass}`}
                                            >
                                                недавно проведённые хирургические операции
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="price" className={articleBlockClass}>
                                <h3 id="price-title" className={`${articleTitleClass} ${articleTitleSubClass}`}>
                                    Прайс
                                </h3>
                                <div id="price-content" className={articlePriceClass}>
                                    <ul id="price-items" className={articleItemsClass}>
                                        <li
                                            id="price-item1"
                                            className={`${articleItemClass} ${articleItemPriceClass}`}
                                        >
                                            <p id="price-p1" className={`${articlePClass} ${articlePItemClass}`}>
                                                1 Процедура
                                            </p>
                                            <p id="price-p11" className={`${articlePClass} ${articlePItemClass}`}>
                                                2 500
                                            </p>
                                        </li>
                                        <li
                                            id="price-item2"
                                            className={`${articleItemClass} ${articleItemPriceClass}`}
                                        >
                                            <p id="price-p2" className={`${articlePClass} ${articlePItemClass}`}>
                                                5 Процедур
                                            </p>
                                            <p id="price-p21" className={`${articlePClass} ${articlePItemClass}`}>
                                                10 000
                                            </p>
                                        </li>
                                        <li
                                            id="price-item3"
                                            className={`${articleItemClass} ${articleItemPriceClass}`}
                                        >
                                            <p id="price-p3" className={`${articlePClass} ${articlePItemClass}`}>
                                                10 Процедур
                                            </p>
                                            <p id="price-p31" className={`${articlePClass} ${articlePItemClass}`}>
                                                22 000
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
                <div
                    id="content-article"
                    className={`${contentWranningClass} ${contentWranningArticleClass}`}
                >
                    <div className={media275 || media375 ? contentInnerArticleClass : contentInnerClass}>
                        {media275 ? null : <p id="p-article" className={`${contentPClass} ${contentPArticleClass}`}>
                            Уточняйте информацию по телефону
                        </p>}
                        <phone
                            id="phone-article"
                            className={`${contentPhoneClass} ${contentPhoneArticleClass}`}
                        >
                            {propsData(props).map((prop, i) => (
                                <UiLink
                                    key={`uiLinkPhoneProcedures${i}`}
                                    {...prop}
                                    className={`${contentNumberClass} ${contentNumberArticleClass}`}
                                />
                            ))}
                            {/* <a
                href="tel:+79182669130"
                className="content__number content__number-article"
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
