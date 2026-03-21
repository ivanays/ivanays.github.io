import React from 'react';

import '../ModalContentA.scss';

import imgPopupContentA0 from '../../../../../../images/fr-lifting.png';

import { useMediaQuery } from '../../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../../func/func_query_number/funcQueryNumber';

export const ModalContentAF10 = (props) => {

    let queryNumber = funcQueryNumber();

    const articleClass = classNames(`article${queryNumber}`);
    const articleBodyClass = classNames(`article${queryNumber}__body`);
    const articleTitleClass = classNames(`article${queryNumber}__title`);
    const articleTitleSubClass = classNames(`article${queryNumber}__title-sub`);
    const articleTitleProcedureClass = classNames(`article${queryNumber}__title-procedure`);
    const articleContentClass = classNames(`article${queryNumber}__content`);
    const articleBlockClass = classNames(`article${queryNumber}__block`);
    const articleProcedureClass = classNames(`article${queryNumber}__procedure`);
    const articlePClass = classNames(`article${queryNumber}__p`);
    const articleSpanClass = classNames(`article${queryNumber}__span`);
    const articleSpanMachineClass = classNames(`article${queryNumber}__span-machine`);
    const articleImageClass = classNames(`article${queryNumber}__image`);
    const articleIndicationsClass = classNames(`article${queryNumber}__indications`);
    const articleItemsClass = classNames(`article${queryNumber}__items`);
    const articleItemClass = classNames(`article${queryNumber}__item`);
    const articlePItemClass = classNames(`article${queryNumber}__p-item`);
    const articleContraindicationsClass = classNames(`article${queryNumber}__contraindications`);
    const articlePriceClass = classNames(`article${queryNumber}__price`);
    const articleItemPriceClass = classNames(`article${queryNumber}__item-price`);

    return (
        <>
            <article id="article-procedure" className={articleClass}>
                <div className={articleBodyClass}>
                    <h2 id="article-title" className={articleTitleClass}>
                        Чистка лица
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
