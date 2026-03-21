import React from 'react';

import './ModalContentD.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

import iconPopupD from '../../../../../images/icon-popup-d.svg'

export const ModalContentD = (props) => {

    let queryNumber = funcQueryNumber();

    const contentMessageClass = classNames(`content${queryNumber}__message`);
    const messageClass = classNames(`message${queryNumber}`);
    const messageInnerClass = classNames(`message${queryNumber}__inner`);
    const messageIconClass = classNames(`message${queryNumber}__icon`);
    const messageImgClass = classNames(`message${queryNumber}__img`);
    const messageContentClass = classNames(`message${queryNumber}__content`);
    const messagePClass = classNames(`message${queryNumber}__p`);

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
