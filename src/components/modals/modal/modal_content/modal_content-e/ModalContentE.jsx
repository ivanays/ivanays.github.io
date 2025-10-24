import React from 'react';

import './ModalContentE.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

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

    const contentImageClass = classNames({
        'content__image': media1728 === true,
        'content--1133__image': media1133 === true,
        'content--744__image': media744 === true,
        'content--744l__image': media744l === true,
        'content--375__image': media375 === true,
        'content--275__image': media275 === true,
        'content--1300__image': media1300 === true,
        'content--900__image': media900 === true,
        'content--600__image': media600 === true,
        'content--600l__image': media600l === true,
    });

    const imageClass = classNames({
        'image': media1728 === true,
        'image--1133': media1133 === true,
        'image--744': media744 === true,
        'image--744l': media744l === true,
        'image--375': media375 === true,
        'image--275': media275 === true,
        'image--1300': media1300 === true,
        'image--900': media900 === true,
        'image--600': media600 === true,
        'image--600l': media600l === true,
    });

    const imageContentClass = classNames({
        'image__content': media1728 === true,
        'image--1133__content': media1133 === true,
        'image--744__content': media744 === true,
        'image--744l__content': media744l === true,
        'image--375__content': media375 === true,
        'image--275__content': media275 === true,
        'image--1300__content': media1300 === true,
        'image--900__content': media900 === true,
        'image--600__content': media600 === true,
        'image--600l__content': media600l === true,
    });

    const imageImgClass = classNames({
        'image__img': media1728 === true,
        'image--1133__img': media1133 === true,
        'image--744__img': media744 === true,
        'image--744l__img': media744l === true,
        'image--375__img': media375 === true,
        'image--275__img': media275 === true,
        'image--1300__img': media1300 === true,
        'image--900__img': media900 === true,
        'image--600__img': media600 === true,
        'image--600l__img': media600l === true,
    });


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
