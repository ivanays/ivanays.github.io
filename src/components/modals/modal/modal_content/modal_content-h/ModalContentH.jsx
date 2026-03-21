import React from 'react';

import './ModalContentH.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const contentReviewsClass = classNames(`content${queryNumber}__reviews`);
    const reviewsClass = classNames(`reviews${queryNumber}`);
    const reviewsBodyClass = classNames(`reviews${queryNumber}__body`);
    const reviewsContentClass = classNames(`reviews${queryNumber}__content`);
    const reviewsBlockClass = classNames(`reviews${queryNumber}__block`);
    const reviewsTitleClass = classNames(`reviews${queryNumber}__title`);
    const reviewsTitleSubClass = classNames(`reviews${queryNumber}__title-sub`);
    const reviewsPClass = classNames(`reviews${queryNumber}__p`);
    const contentWranningClass = classNames(`content${queryNumber}__wranning`);
    const contentWranningReviewsClass = classNames(`content${queryNumber}__wranning-reviews`);
    const contentInnerClass = classNames(`content${queryNumber}__inner`);
    const contentInnerReviewsClass = classNames(`content${queryNumber}__inner-reviews`);
    const contentInnerIconsClass = classNames(`content${queryNumber}__inner-icons`);
    const contentPClass = classNames(`content__p`);
    const contentPReviewsClass = classNames(`content${queryNumber}__p-reviews`);
    const contentIconsClass = classNames(`content${queryNumber}__icons`);
    const contentIconsReviewsClass = classNames(`content${queryNumber}__icons-reviews`);
    const contentIconClass = classNames(`content${queryNumber}__icon`);
    const contentLinkClass = classNames(`content${queryNumber}__link`);
    const contentLinkReviewsClass = classNames(`content${queryNumber}__link-reviews`);
    const contentImgClass = classNames(`content${queryNumber}__img`);
    const contentImgWhatsappClass = classNames(`content${queryNumber}__img-whatsapp`);
    const contentImgTelegramClass = classNames(`content${queryNumber}__img-telegram`);

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