import React from 'react';

import './ModalContentE.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

import certificate1 from '../../../../../images/certificate1.jpg';
import certificate2 from '../../../../../images/certificate2.jpg';
import certificate3 from '../../../../../images/certificate3.jpg';
import certificate4 from '../../../../../images/certificate4.jpg';
import certificate5 from '../../../../../images/certificate5.jpg';
import certificate6 from '../../../../../images/certificate6.jpg';
import certificate7 from '../../../../../images/certificate7.jpg';
import certificate8 from '../../../../../images/certificate8.jpg';
import certificate9 from '../../../../../images/certificate9.jpg';
import certificate10 from '../../../../../images/certificate10.jpg';
import certificate11 from '../../../../../images/certificate11.jpg';
import certificate12 from '../../../../../images/certificate12.jpg';
import certificate13 from '../../../../../images/certificate13.jpg';

export const ModalContentE = (props) => {

    let queryNumber = funcQueryNumber();

    const contentImageClass = classNames(`content${queryNumber}__image`);
    const imageClass = classNames(`image${queryNumber}`);
    const imageContentClass = classNames(`image${queryNumber}__content`);
    const imageImgClass = classNames(`image${queryNumber}__img`);

    let image;

    switch (props.number) {
        case 1:
            image = certificate1;
            break;
        case 2:
            image = certificate2;
            break;
        case 3:
            image = certificate3;
            break;
        case 4:
            image = certificate4;
            break;
        case 5:
            image = certificate5;
            break;
        case 6:
            image = certificate6;
            break;
        case 7:
            image = certificate7;
            break;
        case 8:
            image = certificate8;
            break;
        case 9:
            image = certificate9;
            break;
        case 10:
            image = certificate10;
            break;
        case 11:
            image = certificate11;
            break;
        case 12:
            image = certificate12;
            break;
        case 13:
            image = certificate13;
            break;
        default:
            console.log("Нет представление этого числа в виде строки");
    }

    return (
        <>
            <div className={contentImageClass}>
                <div id="image" className={imageClass}>
                    <div className={imageContentClass}>
                        <img
                            src={image}
                            alt="cert"
                            id="image-img"
                            className={imageImgClass}
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};
