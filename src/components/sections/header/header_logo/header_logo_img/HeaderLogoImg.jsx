import React from 'react';

import './HeaderLogoImg.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../hooks';

import { UiImg } from '../../../../ui';
import logoHeader from '../../../../../images/logo-header.png';

import propsData from '../../../../../func/func_props/funcProps';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

export const HeaderLogoImg = (props) => {

    let queryNumber = funcQueryNumber();

    const logoHeaderClass = classNames(`logo-header${queryNumber}`);

    return (
        <>
            {propsData(props, [logoHeader]).map((prop, i) => (
                <UiImg key={`uiImgHeaderLogoImg${i}`} {...prop} className={logoHeaderClass} />
            ))}
        </>
    );
};
