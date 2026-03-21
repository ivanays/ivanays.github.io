import React, { useContext } from 'react';

import './HeaderBurger.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import { useMediaQuery } from '../../../../hooks';

import { ModalContext } from '../../../../contexts';

import { UiButton } from '../../../ui';
import { HeaderBurgerImg } from '../header_burger/header_burger_img';

import dataHeaderBurgerImg from '../../../../data/data_header/data_header_burger/data_header_burger_img/dataHeaderBurgerImg.json';

import dataPhone from '../../../../data/data_phone/dataPhone.json';
import dataModalContentC from '../../../../data/data_modal/data_modal_content/data_modal_content_c/dataModalContentC.json';

export const HeaderBurger = (props) => {

    const { openModal, handleToggle, isToggled } = useContext(ModalContext);

    const modalId = 'popup-';
    const modalBodyClassName = 'popup__body popup__body-';

    let queryNumber = funcQueryNumber();

    const headerBurgerClass = classNames(`header${queryNumber}__burger`);
    const headerLinkClass = classNames(`header${queryNumber}__link`);
    const headerLinkBurgerClass = classNames(`header${queryNumber}__link-burger`);

    const handleClickBurger = () => {
        handleToggle();

    };

    return (
        <>
            <div className={headerBurgerClass}>
                {
                    <UiButton
                        key={`uiLinkHeaderBurger0`}
                        id={'header-burger-link-0'}
                        className={`${headerLinkClass} ${headerLinkBurgerClass}`}
                        onClick={handleClickBurger}
                    >
                        <HeaderBurgerImg data={dataHeaderBurgerImg} />
                    </UiButton>
                }
            </div>
        </>
    );
};
