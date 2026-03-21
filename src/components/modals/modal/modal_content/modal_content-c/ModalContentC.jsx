import React from 'react';

import './ModalContentC.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import { UiImg, UiLink } from '../../../../ui';
import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

import iconPopupC from '../../../../../images/icon-popup-c.svg';

export const ModalContentC = (props) => {

    let queryNumber = funcQueryNumber();

    const contentPhoneClass = classNames(`content${queryNumber}__phone`);
    const phoneClass = classNames(`phone${queryNumber}`);
    const phoneInnerClass = classNames(`phone${queryNumber}__inner`);
    const phoneIconClass = classNames(`phone${queryNumber}__icon`);
    const phoneItemsClass = classNames(`phone${queryNumber}__items`);
    const phoneNumberClass = classNames(`phone${queryNumber}__number`);
    const phoneImgClass = classNames(`phone${queryNumber}__img`);

    const propsData = (props) => {
        let propsAll = props;
        let data = [];
        arrPhone(propsAll).length !== -1
            ? data.push(JSON.parse(JSON.stringify(propsAll.data)))
            : null;
        data[0][0].href = hrefPhone(propsAll);
        arrPhone(propsAll).map((value, i) => {
            i === 1 || i === 4 || i === 7 || i === 9
                ? (data[0][0].children += ` ${value}`)
                : (data[0][0].children += `${value}`);
        });
        return data[0];
    };

    return (
        <>
            <div className={contentPhoneClass}>
                <div id="phone" className={phoneClass}>
                    <div className={phoneInnerClass}>
                        <div className={phoneIconClass}>
                            <UiImg
                                key={`uiImgModalContentC0`}
                                id={propsData(props)[1].id}
                                className={phoneImgClass}
                                // className={propsData(props)[1].className}
                                alt={propsData(props)[1].alt}
                                src={iconPopupC}
                            />
                        </div>
                        <phone className={phoneItemsClass}>
                            <UiLink
                                key={`uiLinkModalContentC0`}
                                id={propsData(props)[0].id}
                                className={phoneNumberClass}
                                // className={propsData(props)[0].className}
                                href={propsData(props)[0].href}
                            >
                                {propsData(props)[0].children}
                            </UiLink>
                        </phone>
                    </div>
                </div>
            </div>
        </>
    );
};
