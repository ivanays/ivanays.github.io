import React from 'react';

import './ModalContentG.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import imgPopupContentG0 from '../../../../../images/fr-lifting.png'

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

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

    const contentHomeClass = classNames({
        'content__home': media1728 === true,
        'content--1133__home': media1133 === true,
        'content--744__home': media744 === true,
        'content--744l__home': media744l === true,
        'content--375__home': media375 === true,
        'content--275__home': media275 === true,
        'content--1300__home': media1300 === true,
        'content--900__home': media900 === true,
        'content--600__home': media600 === true,
        'content--600l__home': media600l === true,
    });

    const homeClass = classNames({
        'home': media1728 === true,
        'home--1133': media1133 === true,
        'home--744': media744 === true,
        'home--744l': media744l === true,
        'home--375': media375 === true,
        'home--275': media275 === true,
        'home--1300': media1300 === true,
        'home--900': media900 === true,
        'home--600': media600 === true,
        'home--600l': media600l === true,
    });

    const homeBodyClass = classNames({
        'home__body': media1728 === true,
        'home--1133__body': media1133 === true,
        'home--744__body': media744 === true,
        'home--744l__body': media744l === true,
        'home--375__body': media375 === true,
        'home--275__body': media275 === true,
        'home--1300__body': media1300 === true,
        'home--900__body': media900 === true,
        'home--600__body': media600 === true,
        'home--600l__body': media600l === true,
    });

    const homeTitleClass = classNames({
        'home__title': media1728 === true,
        'home--1133__title': media1133 === true,
        'home--744__title': media744 === true,
        'home--744l__title': media744l === true,
        'home--375__title': media375 === true,
        'home--275__title': media275 === true,
        'home--1300__title': media1300 === true,
        'home--900__title': media900 === true,
        'home--600__title': media600 === true,
        'home--600l__title': media600l === true,
    });

    const homeTitleSubClass = classNames({
        'home__title-sub': media1728 === true,
        'home--1133__title-sub': media1133 === true,
        'home--744__title-sub': media744 === true,
        'home--744l__title-sub': media744l === true,
        'home--375__title-sub': media375 === true,
        'home--275__title-sub': media275 === true,
        'home--1300__title-sub': media1300 === true,
        'home--900__title-sub': media900 === true,
        'home--600__title-sub': media600 === true,
        'home--600l__title-sub': media600l === true,
    });

    const homeContentClass = classNames({
        'home__content': media1728 === true,
        'home--1133__content': media1133 === true,
        'home--744__content': media744 === true,
        'home--744l__content': media744l === true,
        'home--375__content': media375 === true,
        'home--275__content': media275 === true,
        'home--1300__content': media1300 === true,
        'home--900__content': media900 === true,
        'home--600__content': media600 === true,
        'home--600l__content': media600l === true,
    });

    const homeBlockClass = classNames({
        'home__block': media1728 === true,
        'home--1133__block': media1133 === true,
        'home--744__block': media744 === true,
        'home--744l__block': media744l === true,
        'home--375__block': media375 === true,
        'home--275__block': media275 === true,
        'home--1300__block': media1300 === true,
        'home--900__block': media900 === true,
        'home--600__block': media600 === true,
        'home--600l__block': media600l === true,
    });

    const homePClass = classNames({
        'home__p': media1728 === true,
        'home--1133__p': media1133 === true,
        'home--744__p': media744 === true,
        'home--744l__p': media744l === true,
        'home--375__p': media375 === true,
        'home--275__p': media275 === true,
        'home--1300__p': media1300 === true,
        'home--900__p': media900 === true,
        'home--600__p': media600 === true,
        'home--600l__p': media600l === true,
    });

    const homeImageClass = classNames({
        'home__image': media1728 === true,
        'home--1133__image': media1133 === true,
        'home--744__image': media744 === true,
        'home--744l__image': media744l === true,
        'home--375__image': media375 === true,
        'home--275__image': media275 === true,
        'home--1300__image': media1300 === true,
        'home--900__image': media900 === true,
        'home--600__image': media600 === true,
        'home--600l__image': media600l === true,
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

    const contentWranningHomeClass = classNames({
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

    const contentInnerHomeClass = classNames({
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

    const contentPHomeClass = classNames({
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

    const contentPhoneHomeClass = classNames({
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

    const contentNumberHomeClass = classNames({
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