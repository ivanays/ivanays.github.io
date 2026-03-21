import React from 'react';

import './ModalContentA.scss';

import imgPopupContentA0 from '../../../../../images/fr-lifting.png';

import { useMediaQuery } from '../../../../../hooks';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const contentArticleClass = classNames(`content${queryNumber}__article`);
    const contentWranningClass = classNames(`content${queryNumber}__wranning`);
    const contentWranningArticleClass = classNames(`content${queryNumber}__wranning-home`);
    const contentInnerClass = classNames(`content${queryNumber}__inner`);
    const contentInnerArticleClass = classNames(`content${queryNumber}__inner-home`);
    const contentPClass = classNames(`content${queryNumber}__p`);
    const contentPArticleClass = classNames(`content${queryNumber}__p-home`);
    const contentPhoneClass = classNames(`content${queryNumber}__phone`);
    const contentPhoneArticleClass = classNames(`content${queryNumber}__phone-home`);
    const contentNumberClass = classNames(`content${queryNumber}__number`);
    const contentNumberArticleClass = classNames(`content${queryNumber}__number-home`);


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
                        </phone>
                    </div>
                </div>
            </div>
        </>
    );
};
