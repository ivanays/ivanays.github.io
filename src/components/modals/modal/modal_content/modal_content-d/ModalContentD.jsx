import React from 'react';

import './ModalContentD.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import iconPopupD from '../../../../../images/icon-popup-d.svg'

export const ModalContentD = (props) => {

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

    const contentMessageClass = classNames({
        'content__message': media1728 === true,
        'content--1133__message': media1133 === true,
        'content--744__message': media744 === true,
        'content--744l__message': media744l === true,
        'content--375__message': media375 === true,
        'content--275__message': media275 === true,
        'content--1300__message': media1300 === true,
        'content--900__message': media900 === true,
        'content--600__message': media600 === true,
        'content--600l__message': media600l === true,
    });

    const messageClass = classNames({
        'message': media1728 === true,
        'message--1133': media1133 === true,
        'message--744': media744 === true,
        'message--744l': media744l === true,
        'message--375': media375 === true,
        'message--275': media275 === true,
        'message--1300': media1300 === true,
        'message--900': media900 === true,
        'message--600': media600 === true,
        'message--600l': media600l === true,
    });

    const messageInnerClass = classNames({
        'message__inner': media1728 === true,
        'message--1133__inner': media1133 === true,
        'message--744__inner': media744 === true,
        'message--744l__inner': media744l === true,
        'message--375__inner': media375 === true,
        'message--275__inner': media275 === true,
        'message--1300__inner': media1300 === true,
        'message--900__inner': media900 === true,
        'message--600__inner': media600 === true,
        'message--600l__inner': media600l === true,
    });

    const messageIconClass = classNames({
        'message__icon': media1728 === true,
        'message--1133__icon': media1133 === true,
        'message--744__icon': media744 === true,
        'message--744l__icon': media744l === true,
        'message--375__icon': media375 === true,
        'message--275__icon': media275 === true,
        'message--1300__icon': media1300 === true,
        'message--900__icon': media900 === true,
        'message--600__icon': media600 === true,
        'message--600l__icon': media600l === true,
    });

    const messageImgClass = classNames({
        'message__img': media1728 === true,
        'message--1133__img': media1133 === true,
        'message--744__img': media744 === true,
        'message--744l__img': media744l === true,
        'message--375__img': media375 === true,
        'message--275__img': media275 === true,
        'message--1300__img': media1300 === true,
        'message--900__img': media900 === true,
        'message--600__img': media600 === true,
        'message--600l__img': media600l === true,
    });

    const messageContentClass = classNames({
        'message__content': media1728 === true,
        'message--1133__content': media1133 === true,
        'message--744__content': media744 === true,
        'message--__content': media744l === true,
        'message--375__content': media375 === true,
        'message--275__content': media275 === true,
        'message--1300__content': media1300 === true,
        'message--900__content': media900 === true,
        'message--600__content': media600 === true,
        'message--600l__content': media600l === true,
    });

    const messagePClass = classNames({
        'message__p': media1728 === true,
        'message--1133__p': media1133 === true,
        'message--744__p': media744 === true,
        'message--744l__p': media744l === true,
        'message--375__p': media375 === true,
        'message--275__p': media275 === true,
        'message--1300__p': media1300 === true,
        'message--900__p': media900 === true,
        'message--600__p': media600 === true,
        'message--600l__p': media600l === true,
    });


    return (
        <>
            <div className={contentMessageClass}>
                <div id="message" className={messageClass}>
                    <div className={messageInnerClass}>
                        <div className={messageIconClass}>
                            <img
                                src={iconPopupD}
                                alt=""
                                id="message-img"
                                className={messageImgClass}
                            ></img>
                        </div>
                        <div className={messageContentClass}>
                            <p id="message-p" className={messagePClass}>
                                Не откладывай на завтра то, что можно начать сегодня.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
