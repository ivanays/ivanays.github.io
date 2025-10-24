import React from 'react';

import '../ModalContentA.scss';

import imgPopupContentA0 from '../../../../../../images/fr-lifting.png';

import { useMediaQuery } from '../../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../../func/func_query_media/funcQueryMedia';

export const ModalContentAB5 = (props) => {

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

    const articleClass = classNames({
        'article': media1728 === true,
        'article--1133': media1133 === true,
        'article--744': media744 === true,
        'article--744l': media744l === true,
        'article--375': media375 === true,
        'article--275': media275 === true,
        'article--1300': media1300 === true,
        'article--900': media900 === true,
        'article--600': media600 === true,
        'article--600l': media600l === true,
    });

    const articleBodyClass = classNames({
        'article__body': media1728 === true,
        'article--1133__body': media1133 === true,
        'article--744__body': media744 === true,
        'article--744l__body': media744l === true,
        'article--375__body': media375 === true,
        'article--275__body': media275 === true,
        'article--1300__body': media1300 === true,
        'article--900__body': media900 === true,
        'article--600__body': media600 === true,
        'article--600l__body': media600l === true,
    });

    const articleTitleClass = classNames({
        'article__title': media1728 === true,
        'article--1133__title': media1133 === true,
        'article--744__title': media744 === true,
        'article--744l__title': media744l === true,
        'article--375__title': media375 === true,
        'article--275__title': media275 === true,
        'article--1300__title': media1300 === true,
        'article--900__title': media900 === true,
        'article--600__title': media600 === true,
        'article--600l__title': media600l === true,
    });

    const articleTitleSubClass = classNames({
        'article__title-sub': media1728 === true,
        'article--1133__title-sub': media1133 === true,
        'article--744__title-sub': media744 === true,
        'article--744l__title-sub': media744l === true,
        'article--375__title-sub': media375 === true,
        'article--275__title-sub': media275 === true,
        'article--1300__title-sub': media1300 === true,
        'article--900__title-sub': media900 === true,
        'article--600__title-sub': media600 === true,
        'article--600l__title-sub': media600l === true,
    });

    const articleTitleProcedureClass = classNames({
        'article__title-procedure': media1728 === true,
        'article--1133__title-procedure': media1133 === true,
        'article--744__title-procedure': media744 === true,
        'article--744l__title-procedure': media744l === true,
        'article--375__title-procedure': media375 === true,
        'article--275__title-procedure': media275 === true,
        'article--1300__title-procedure': media1300 === true,
        'article--900__title-procedure': media900 === true,
        'article--600__title-procedure': media600 === true,
        'article--600l__title-procedure': media600l === true,
    });

    const articleContentClass = classNames({
        'article__content': media1728 === true,
        'article--1133__content': media1133 === true,
        'article--744__content': media744 === true,
        'article--744l__content': media744l === true,
        'article--375__content': media375 === true,
        'article--275__content': media275 === true,
        'article--1300__content': media1300 === true,
        'article--900__content': media900 === true,
        'article--600__content': media600 === true,
        'article--600l__content': media600l === true,
    });

    const articleBlockClass = classNames({
        'article__block': media1728 === true,
        'article--1133__block': media1133 === true,
        'article--744__block': media744 === true,
        'article--744l__block': media744l === true,
        'article--375__block': media375 === true,
        'article--275__block': media275 === true,
        'article--1300__block': media1300 === true,
        'article--900__block': media900 === true,
        'article--600__block': media600 === true,
        'article--600l__block': media600l === true,
    });

    const articleProcedureClass = classNames({
        'article__procedure': media1728 === true,
        'article--1133__procedure': media1133 === true,
        'article--744__procedure': media744 === true,
        'article--744l__procedure': media744l === true,
        'article--375__procedure': media375 === true,
        'article--275__procedure': media275 === true,
        'article--1300__procedure': media1300 === true,
        'article--900__procedure': media900 === true,
        'article--600__procedure': media600 === true,
        'article--600l__procedure': media600l === true,
    });

    const articlePClass = classNames({
        'article__p': media1728 === true,
        'article--1133__p': media1133 === true,
        'article--744__p': media744 === true,
        'article--744l__p': media744l === true,
        'article--375__p': media375 === true,
        'article--275__p': media275 === true,
        'article--1300__p': media1300 === true,
        'article--900__p': media900 === true,
        'article--600__p': media600 === true,
        'article--600l__p': media600l === true,
    });

    const articleSpanClass = classNames({
        'article__span': media1728 === true,
        'article--1133__span': media1133 === true,
        'article--744__span': media744 === true,
        'article--744l__span': media744l === true,
        'article--375__span': media375 === true,
        'article--275__span': media275 === true,
        'article--1300__span': media1300 === true,
        'article--900__span': media900 === true,
        'article--600__span': media600 === true,
        'article--600l__span': media600l === true,
    });

    const articleSpanMachineClass = classNames({
        'article__span-machine': media1728 === true,
        'article--1133__span-machine': media1133 === true,
        'article--744__span-machine': media744 === true,
        'article--744l__span-machine': media744l === true,
        'article--375__span-machine': media375 === true,
        'article--275__span-machine': media275 === true,
        'article--1300__span-machine': media1300 === true,
        'article--900__span-machine': media900 === true,
        'article--600__span-machine': media600 === true,
        'article--600l__span-machine': media600l === true,
    });

    const articleImageClass = classNames({
        'article__image': media1728 === true,
        'article--1133__image': media1133 === true,
        'article--744__image': media744 === true,
        'article--744l__image': media744l === true,
        'article--375__image': media375 === true,
        'article--275__image': media275 === true,
    });

    const articleIndicationsClass = classNames({
        'article__indications': media1728 === true,
        'article--1133__indications': media1133 === true,
        'article--744__indications': media744 === true,
        'article--744l__indications': media744l === true,
        'article--375__indications': media375 === true,
        'article--275__indications': media275 === true,
        'article--1300__indications': media1300 === true,
        'article--900__indications': media900 === true,
        'article--600__indications': media600 === true,
        'article--600l__indications': media600l === true,
    });

    const articleItemsClass = classNames({
        'article__items': media1728 === true,
        'article--1133__items': media1133 === true,
        'article--744__items': media744 === true,
        'article--744l__items': media744l === true,
        'article--375__items': media375 === true,
        'article--275__items': media275 === true,
        'article--1300__items': media1300 === true,
        'article--900__items': media900 === true,
        'article--600__items': media600 === true,
        'article--600l__items': media600l === true,
    });

    const articleItemClass = classNames({
        'article__item': media1728 === true,
        'article--1133__item': media1133 === true,
        'article--744__item': media744 === true,
        'article--744l__item': media744l === true,
        'article--375__item': media375 === true,
        'article--275__item': media275 === true,
        'article--1300__item': media1300 === true,
        'article--900__item': media900 === true,
        'article--600__item': media600 === true,
        'article--600l__item': media600l === true,
    });

    const articlePItemClass = classNames({
        'article__p-item': media1728 === true,
        'article--1133__p-item': media1133 === true,
        'article--744__p-item': media744 === true,
        'article--744l__p-item': media744l === true,
        'article--375__p-item': media375 === true,
        'article--275__p-item': media275 === true,
        'article--1300__p-item': media1300 === true,
        'article--900__p-item': media900 === true,
        'article--600__p-item': media600 === true,
        'article--600l__p-item': media600l === true,
    });

    const articleContraindicationsClass = classNames({
        'article__contraindications': media1728 === true,
        'article--1133__contraindications': media1133 === true,
        'article--744__contraindications': media744 === true,
        'article--744l__contraindications': media744l === true,
        'article--375__contraindications': media375 === true,
        'article--275__contraindications': media275 === true,
        'article--1300__contraindications': media1300 === true,
        'article--900__contraindications': media900 === true,
        'article--600__contraindications': media600 === true,
        'article--600l__contraindications': media600l === true,
    });

    const articlePriceClass = classNames({
        'article__price': media1728 === true,
        'article--1133__price': media1133 === true,
        'article--744__price': media744 === true,
        'article--744l__price': media744l === true,
        'article--375__price': media375 === true,
        'article--275__price': media275 === true,
        'article--1300__price': media1300 === true,
        'article--900__price': media900 === true,
        'article--600__price': media600 === true,
        'article--600l__price': media600l === true,
    });

    const articleItemPriceClass = classNames({
        'article__item-price': media1728 === true,
        'article--1133__item-price': media1133 === true,
        'article--744__item-price': media744 === true,
        'article--744l__item-price': media744l === true,
        'article--375__item-price': media375 === true,
        'article--275__item-price': media275 === true,
        'article--1300__item-price': media1300 === true,
        'article--900__item-price': media900 === true,
        'article--600__item-price': media600 === true,
        'article--600l__item-price': media600l === true,
    });


    return (
        <>
            <article id="article-procedure" className={articleClass}>
                <div className={articleBodyClass}>
                    <h2 id="article-title" className={articleTitleClass}>
                        Миостимуляция
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
            </article>
        </>
    );
};
