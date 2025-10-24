import React from 'react';

import './ModalContentH.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import iconModalContentH0 from '../../../../../images/whatsapp-review.svg';
import iconModalContentH1 from '../../../../../images/telegram-review.svg';

export const ModalContentH = (props) => {

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

    const contentReviewsClass = classNames({
        'content__reviews': media1728 === true,
        'content--1133__reviews': media1133 === true,
        'content--744__reviews': media744 === true,
        'content--744l__reviews': media744l === true,
        'content--375__reviews': media375 === true,
        'content--275__reviews': media275 === true,
        'content--1300__reviews': media1300 === true,
        'content--900__reviews': media900 === true,
        'content--600__reviews': media600 === true,
        'content--600l__reviews': media600l === true,
    });

    const reviewsClass = classNames({
        'reviews': media1728 === true,
        'reviews--1133': media1133 === true,
        'reviews--744': media744 === true,
        'reviews--744l': media744l === true,
        'reviews--375': media375 === true,
        'reviews--275': media275 === true,
        'reviews--1300': media1300 === true,
        'reviews--900': media900 === true,
        'reviews--600': media600 === true,
        'reviews--600l': media600l === true,
    });

    const reviewsBodyClass = classNames({
        'reviews__body': media1728 === true,
        'reviews--1133__body': media1133 === true,
        'reviews--744__body': media744 === true,
        'reviews--744l__body': media744l === true,
        'reviews--375__body': media375 === true,
        'reviews--275__body': media275 === true,
        'reviews--1300__body': media1300 === true,
        'reviews--900__body': media900 === true,
        'reviews--600__body': media600 === true,
        'reviews--600l__body': media600l === true,
    });

    const reviewsContentClass = classNames({
        'reviews__content': media1728 === true,
        'reviews--1133__content': media1133 === true,
        'reviews--744__content': media744 === true,
        'reviews--744l__content': media744l === true,
        'reviews--375__content': media375 === true,
        'reviews--275__content': media275 === true,
        'reviews--1300__content': media1300 === true,
        'reviews--900__content': media900 === true,
        'reviews--600__content': media600 === true,
        'reviews--600l__content': media600l === true,
    });

    const reviewsBlockClass = classNames({
        'reviews__block': media1728 === true,
        'reviews--1133__block': media1133 === true,
        'reviews--744__block': media744 === true,
        'reviews--744l__block': media744l === true,
        'reviews--375__block': media375 === true,
        'reviews--275__block': media275 === true,
        'reviews--1300__block': media1300 === true,
        'reviews--900__block': media900 === true,
        'reviews--600__block': media600 === true,
        'reviews--600l__block': media600l === true,
    });

    const reviewsTitleClass = classNames({
        'reviews__title': media1728 === true,
        'reviews--1133__title': media1133 === true,
        'reviews--744__title': media744 === true,
        'reviews--744l__title': media744l === true,
        'reviews--375__title': media375 === true,
        'reviews--275__title': media275 === true,
        'reviews--1300__title': media1300 === true,
        'reviews--900__title': media900 === true,
        'reviews--600__title': media600 === true,
        'reviews--600l__title': media600l === true,
    });

    const reviewsTitleSubClass = classNames({
        'reviews__title-sub': media1728 === true,
        'reviews--1133__title-sub': media1133 === true,
        'reviews--744__title-sub': media744 === true,
        'reviews--744l__title-sub': media744l === true,
        'reviews--375__title-sub': media375 === true,
        'reviews--275__title-sub': media275 === true,
        'reviews--1300__title-sub': media1300 === true,
        'reviews--900__title-sub': media900 === true,
        'reviews--600__title-sub': media600 === true,
        'reviews--600l__title-sub': media600l === true,
    });

    const reviewsPClass = classNames({
        'reviews__p': media1728 === true,
        'reviews--1133__p': media1133 === true,
        'reviews--744__p': media744 === true,
        'reviews--744l__p': media744l === true,
        'reviews--375__p': media375 === true,
        'reviews--275__p': media275 === true,
        'reviews--1300__p': media1300 === true,
        'reviews--900__p': media900 === true,
        'reviews--600__p': media600 === true,
        'reviews--600l__p': media600l === true,
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

    const contentWranningReviewsClass = classNames({
        'content__wranning-reviews': media1728 === true,
        'content--1133__wranning-reviews': media1133 === true,
        'content--744__wranning-reviews': media744 === true,
        'content--744l__wranning-reviews': media744l === true,
        'content--375__wranning-reviews': media375 === true,
        'content--275__wranning-reviews': media275 === true,
        'content--1300__wranning-reviews': media1300 === true,
        'content--900__wranning-reviews': media900 === true,
        'content--600__wranning-reviews': media600 === true,
        'content--600l__wranning-reviews': media600l === true,
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

    const contentInnerReviewsClass = classNames({
        'content__inner-reviews': media1728 === true,
        'content--1133__inner-reviews': media1133 === true,
        'content--744__inner-reviews': media744 === true,
        'content--744l__inner-reviews': media744l === true,
        'content--375__inner-reviews': media375 === true,
        'content--275__inner-reviews': media275 === true,
        'content--1300__inner-reviews': media1300 === true,
        'content--900__inner-reviews': media900 === true,
        'content--600__inner-reviews': media600 === true,
        'content--600l__inner-reviews': media600l === true,
    });

    const contentInnerIconsClass = classNames({
        'content__inner-icons': media1728 === true,
        'content--1133__inner-icons': media1133 === true,
        'content--744__inner-icons': media744 === true,
        'content--744l__inner-icons': media744l === true,
        'content--375__inner-icons': media375 === true,
        'content--275__inner-icons': media275 === true,
        'content--1300__inner-icons': media1300 === true,
        'content--90__inner-icons': media900 === true,
        'content--600__inner-icons': media600 === true,
        'content--600l__inner-icons': media600l === true,
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

    const contentPReviewsClass = classNames({
        'content__p-reviews': media1728 === true,
        'content--1133__p-reviews': media1133 === true,
        'content--744__p-reviews': media744 === true,
        'content--744l__p-reviews': media744l === true,
        'content--375__p-reviews': media375 === true,
        'content--275__p-reviews': media275 === true,
        'content--1300__p-reviews': media1300 === true,
        'content--900__p-reviews': media900 === true,
        'content--600__p-reviews': media600 === true,
        'content--600l__p-reviews': media600l === true,
    });

    const contentIconsClass = classNames({
        'content__icons': media1728 === true,
        'content--1133__icons': media1133 === true,
        'content--744__icons': media744 === true,
        'content--744l__icons': media744l === true,
        'content--375__icons': media375 === true,
        'content--275__icons': media275 === true,
        'content--1300__icons': media1300 === true,
        'content--900__icons': media900 === true,
        'content--600__icons': media600 === true,
        'content--600l__icons': media600l === true,
    });

    const contentIconsReviewsClass = classNames({
        'content__icons-reviews': media1728 === true,
        'content--1133__icons-reviews': media1133 === true,
        'content--744__icons-reviews': media744 === true,
        'content--744l__icons-reviews': media744l === true,
        'content--375__icons-reviews': media375 === true,
        'content--275__icons-reviews': media275 === true,
        'content--1300__icons-reviews': media1300 === true,
        'content--900__icons-reviews': media900 === true,
        'content--600__icons-reviews': media600 === true,
        'content--600l__icons-reviews': media600l === true,
    });

    const contentIconClass = classNames({
        'content__icon': media1728 === true,
        'content--1133__icon': media1133 === true,
        'content--744__icon': media744 === true,
        'content--744l__icon': media744l === true,
        'content--375__icon': media375 === true,
        'content--275__icon': media275 === true,
        'content--1300__icon': media1300 === true,
        'content--900__icon': media900 === true,
        'content--600__icon': media600 === true,
        'content--600l__icon': media600l === true,
    });

    const contentLinkClass = classNames({
        'content__link': media1728 === true,
        'content--1133__link': media1133 === true,
        'content--744__link': media744 === true,
        'content--744l__link': media744l === true,
        'content--375__link': media375 === true,
        'content--275__link': media275 === true,
        'content--1300__link': media1300 === true,
        'content--900__link': media900 === true,
        'content--600__link': media600 === true,
        'content--600l__link': media600l === true,
    });

    const contentLinkReviewsClass = classNames({
        'content__link-reviews': media1728 === true,
        'content--1133__link-reviews': media1133 === true,
        'content--744__link-reviews': media744 === true,
        'content--744l__link-reviews': media744l === true,
        'content--375__link-reviews': media375 === true,
        'content--275__link-reviews': media275 === true,
        'content--1300__link-reviews': media1300 === true,
        'content--900__link-reviews': media900 === true,
        'content--600__link-reviews': media600 === true,
        'content--600l__link-reviews': media600l === true,
    });

    const contentImgClass = classNames({
        'content__img': media1728 === true,
        'content--1133__img': media1133 === true,
        'content--744__img': media744 === true,
        'content--744l__img': media744l === true,
        'content--375__img': media375 === true,
        'content--275__img': media275 === true,
        'content--1300__img': media1300 === true,
        'content--900__img': media900 === true,
        'content--600__img': media600 === true,
        'content--600l__img': media600l === true,
    });

    const contentImgWhatsappClass = classNames({
        'content__img-whatsapp': media1728 === true,
        'content--1133__img-whatsapp': media1133 === true,
        'content--744__img-whatsapp': media744 === true,
        'content--744l__img-whatsapp': media744l === true,
        'content--375__img-whatsapp': media375 === true,
        'content--275__img-whatsapp': media275 === true,
        'content--1300__img-whatsapp': media1300 === true,
        'content--900__img-whatsapp': media900 === true,
        'content--600__img-whatsapp': media600 === true,
        'content--600l__img-whatsapp': media600l === true,
    });

    const contentImgTelegramClass = classNames({
        'content__img-telegram': media1728 === true,
        'content--1133__img-telegram': media1133 === true,
        'content--744__img-telegram': media744 === true,
        'content--744l__img-telegram': media744l === true,
        'content--375__img-telegram': media375 === true,
        'content--275__img-telegram': media275 === true,
        'content--1300__img-telegram': media1300 === true,
        'content--900__img-telegram': media900 === true,
        'content--600__img-telegram': media600 === true,
        'content--600l__img-telegram': media600l === true,
    });


    return (
        <>
            <div className={contentReviewsClass}>
                <div id="reviews" className={reviewsClass}>
                    <div className={reviewsBodyClass}>
                        <h2 id="reviews-title" className={reviewsTitleClass}>
                            Отзывы
                        </h2>
                        <div className={reviewsContentClass}>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Александр
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Ефим
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Алла
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Алексей
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Екатерина
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                            <div className={reviewsBlockClass}>
                                <h3 id="user1" className={`${reviewsTitleClass} ${reviewsTitleSubClass}`}>
                                    Аслан
                                </h3>
                                <p id="reviews1" className={reviewsPClass}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Consequuntur, accusamus ipsa doloribus commodi eaque iure
                                    ratione delectus voluptatem. Incidunt sed repellendus est aut
                                    veritatis officia laborum voluptate deleniti quidem esse.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="content-reviews"
                className={contentWranningReviewsClass}
            >
                <div className={contentInnerClass}>
                    <p id="p-reviews" className={`${contentPClass} ${contentPReviewsClass}`}>
                        {media275 ? " " : "Будем рады Вашим отзывам"}
                    </p>
                    <div className={`${contentIconsClass} ${contentIconsReviewsClass}`}>
                        <div className={contentInnerClass}>
                            <div className={contentIconClass}>
                                <a
                                    href=""
                                    className={`${contentLinkClass} ${contentLinkReviewsClass}`}
                                    id="reviews-whatsapp-link"
                                >
                                    <img
                                        src={iconModalContentH0}
                                        alt=""
                                        id="reviews-whatsapp-img"
                                        className={`${contentImgClass} ${contentImgWhatsappClass}`}
                                    ></img>
                                </a>
                            </div>
                            <div class={contentIconClass}>
                                <a
                                    href=""
                                    className={`${contentLinkClass} ${contentLinkReviewsClass}`}
                                    id="reviews-telegram-link"
                                >
                                    <img
                                        src={iconModalContentH1}
                                        alt=""
                                        id="reviews-telegram-img"
                                        className={`${contentImgClass} ${contentImgTelegramClass}`}
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};