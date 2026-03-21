import React from 'react';

import './ModalContentG.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import imgPopupContentG0 from '../../../../../images/fr-lifting.png'

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

import { UiLink } from '../../../../ui';

export const ModalContentG = (props) => {

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

    const contentHomeClass = classNames(`content${queryNumber}__home`);
    const homeClass = classNames(`home${queryNumber}`);
    const homeBodyClass = classNames(`home${queryNumber}__body`);
    const homeTitleClass = classNames(`home${queryNumber}__title`);
    const homeTitleSubClass = classNames(`home${queryNumber}__title-sub`);
    const homeContentClass = classNames(`home${queryNumber}__content`);
    const homeBlockClass = classNames(`home${queryNumber}__block`);
    const homePClass = classNames(`home${queryNumber}__p}`);
    const homeImageClass = classNames(`home${queryNumber}__image`);
    const contentWranningClass = classNames(`content__wranning`);
    const contentWranningHomeClass = classNames(`content${queryNumber}__wranning-home`);
    const contentInnerClass = classNames(`content${queryNumber}__inner`);
    const contentInnerHomeClass = classNames(`content${queryNumber}__inner-home`);
    const contentPClass = classNames(`content${queryNumber}__p`);
    const contentPHomeClass = classNames(`content${queryNumber}__p-home`);
    const contentPhoneClass = classNames(`content${queryNumber}__phone`);
    const contentPhoneHomeClass = classNames(`content${queryNumber}__phone-home`);
    const contentNumberClass = classNames(`content${queryNumber}__number`);
    const contentNumberHomeClass = classNames(`content${queryNumber}__number-home`);

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
            <div className={contentHomeClass}>
                <div id="home" className={homeClass}>
                    <div className={homeBodyClass}>
                        <h2 id="home-title" className={homeTitleClass}>
                            Выезд на дом
                        </h2>
                        <div className={homeContentClass}>
                            <div className={homeBlockClass}>
                                <h3 className={`${homeTitleClass} ${homeTitleSubClass}`}>Массаж1</h3>
                                <p className={homePClass}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Maiores nulla quo, sequi quasi necessitatibus unde reiciendis
                                    voluptate dolores natus, officiis odit eaque repellendus
                                    obcaecati ipsum nemo temporibus sit corrupti saepe?
                                </p>
                                <img
                                    src={imgPopupContentG0}
                                    alt=""
                                    className={homeImageClass}
                                ></img>
                            </div>
                            <div className={homeBlockClass}>
                                <h3 className={`${homeTitleClass} ${homeTitleSubClass}`}>Массаж2</h3>
                                <p className={homePClass}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Maiores nulla quo, sequi quasi necessitatibus unde reiciendis
                                    voluptate dolores natus, officiis odit eaque repellendus
                                    obcaecati ipsum nemo temporibus sit corrupti saepe?
                                </p>
                                <img
                                    src={imgPopupContentG0}
                                    alt=""
                                    className={homeImageClass}
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="content-home"
                    className={contentWranningHomeClass}
                >
                    <div className={media275 || media375 || media600 || media600l ? contentInnerHomeClass : contentInnerClass}>
                        {media275 ? null : <p id="p-home" className={`${contentPClass} ${contentPHomeClass}`}>
                            Уточняйте информацию по телефону
                        </p>}
                        <phone
                            id="phone-home"
                            className={`${contentPhoneClass} ${contentPhoneHomeClass}`}
                        >

                            {propsData(props).map((prop, i) => (
                                <UiLink
                                    key={`uiLinkPhoneHome${i}`}
                                    {...prop}
                                    className={`${contentNumberClass} ${contentNumberHomeClass}`}
                                />
                            ))}

                            {/* <a
                                href={hrefPhone(props)}
                                // href="tel:+79182669130"
                                className={`${contentNumberClass} ${contentNumberHomeClass}`}
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