import React from 'react';

import './Main.scss';

import { MainSidebar } from './main_sidebar';
import { MainIcons } from './main_icons';

import { useLoadImageBg } from '../../../hooks';
import { useMediaQuery } from '../../../hooks';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

import MainBg1728 from '../../../images/bg-main.jpg';
import MainBg1300 from '../../../images/bg-main1300-1.jpg';
import MainBg1133 from '../../../images/bg-main1133.jpg';
import MainBg900 from '../../../images/bg-main900.jpg';
import MainBg744 from '../../../images/bg-main744.jpg';
import MainBg600 from '../../../images/bg-main600.jpg';
import MainBg357 from '../../../images/bg-main375.jpg';

import dataMainSidebar from '../../../data/data_main/data_main_sidebar/dataMainSidebar.json';
import dataMainIcons from '../../../data/data_main/data_main_icons/dataMainIcons.json';
import dataPhone from '../../../data/data_phone/dataPhone.json'

export const Main = () => {

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

    const mainClass = classNames(`main${queryNumber}`);
    const mainInnerClass = classNames(`main${queryNumber}__inner`);

    const loadedImageBg1728 = useLoadImageBg(MainBg1728);
    const loadedImageBg1300 = useLoadImageBg(MainBg1300);
    const loadedImageBg1133 = useLoadImageBg(MainBg1133);
    const loadedImageBg900 = useLoadImageBg(MainBg900);
    const loadedImageBg744 = useLoadImageBg(MainBg744);
    const loadedImageBg600 = useLoadImageBg(MainBg600);
    const loadedImageBg375 = useLoadImageBg(MainBg357);
    const loadedImageBg275 = useLoadImageBg(MainBg357);

    let loadedImageBg;

    (media1728) ? loadedImageBg = loadedImageBg1728
        : (media1300) ? loadedImageBg = loadedImageBg1300
            : (media1133) ? loadedImageBg = loadedImageBg1133
                : (media900) ? loadedImageBg = loadedImageBg900
                    : (media744) ? loadedImageBg = loadedImageBg744
                        : (media744l) ? loadedImageBg = loadedImageBg744
                            : (media600) ? loadedImageBg = loadedImageBg600
                                : (media600l) ? loadedImageBg = loadedImageBg600
                                    : (media375) ? loadedImageBg = loadedImageBg375
                                        : (media275) ? loadedImageBg = loadedImageBg275 : null;

    return (
        <>
            <section className={mainClass} style={{ backgroundImage: `url(${loadedImageBg})` }}>
                <div className={mainInnerClass}>
                    <MainSidebar dataPhone={dataPhone} data={dataMainSidebar} />
                    <MainIcons data={dataMainIcons} />
                </div>
            </section>
        </>
    );
};
