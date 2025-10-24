import React from 'react';

import './ModalContentB.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';

import { UiLink } from '../../../../ui';

import { ModalContentBTbody } from './modal_content-b_tbody';

export const ModalContentB = (props) => {

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

    const contentTableClass = classNames({
        'content__table': media1728 === true,
        'content--1133__table': media1133 === true,
        'content--744__table': media744 === true,
        'content--744l__table': media744l === true,
        'content--375__table': media375 === true,
        'content--275__table': media275 === true,
        'content--1300__table': media1300 === true,
        'content--900__table': media900 === true,
        'content--600__table': media600 === true,
        'content--600l__table': media600l === true,
    });

    const tableClass = classNames({
        'table': media1728 === true,
        'table--1133': media1133 === true,
        'table--744': media744 === true,
        'table--744l': media744l === true,
        'table--375': media375 === true,
        'table--275': media275 === true,
        'table--1300': media1300 === true,
        'table--900': media900 === true,
        'table--600': media600 === true,
        'table--600l': media600l === true,
    });

    const tableCaptionClass = classNames({
        'table__caption': media1728 === true,
        'table--1133__caption': media1133 === true,
        'table--744__caption': media744 === true,
        'table--744l__caption': media744l === true,
        'table--375__caption': media375 === true,
        'table--275__caption': media275 === true,
        'table--1300__caption': media1300 === true,
        'table--900__caption': media900 === true,
        'table--600__caption': media600 === true,
        'table--600l__caption': media600l === true,
    });

    const tableCaptionWindowsClass = classNames({
        'table__caption-windows': media1728 === true,
        'table--1133__caption-windows': media1133 === true,
        'table--744__caption-windows': media744 === true,
        'table--744l__caption-windows': media744l === true,
        'table--375__caption-windows': media375 === true,
        'table--275__caption-windows': media275 === true,
        'table--1300__caption-windows': media1300 === true,
        'table--900__caption-windows': media900 === true,
        'table--600__caption-windows': media600 === true,
        'table--600l__caption-windows': media600l === true,
    });

    const tableHeaderClass = classNames({
        'table__header': media1728 === true,
        'table--1133__header': media1133 === true,
        'table--744__header': media744 === true,
        'table--744l__header': media744l === true,
        'table--375__header': media375 === true,
        'table--275__header': media275 === true,
        'table--1300__header': media1300 === true,
        'table--900__header': media900 === true,
        'table--600__header': media600 === true,
        'table--600l__header': media600l === true,
    });

    const tableHeaderWindowsClass = classNames({
        'table__header-windows': media1728 === true,
        'table--1133__header-windows': media1133 === true,
        'table--744__header-windows': media744 === true,
        'table--744l__header-windows': media744l === true,
        'table--375__header-windows': media375 === true,
        'table--275__header-windows': media275 === true,
        'table--1300__header-windows': media1300 === true,
        'table--900__header-windows': media900 === true,
        'table--600__header-windows': media600 === true,
        'table--600l__header-windows': media600l === true,
    });

    const tableTrClass = classNames({
        'table__tr': media1728 === true,
        'table--1133__tr': media1133 === true,
        'table--744__tr': media744 === true,
        'table--744l__tr': media744l === true,
        'table--375__tr': media375 === true,
        'table--275__tr': media275 === true,
        'table--1300__tr': media1300 === true,
        'table--900__tr': media900 === true,
        'table--600__tr': media600 === true,
        'table--600l__tr': media600l === true,
    });

    const tableTrHeaderClass = classNames({
        'table__tr-header': media1728 === true,
        'table--1133__tr-header': media1133 === true,
        'table--744__tr-header': media744 === true,
        'table--744l__tr-header': media744l === true,
        'table--375__tr-header': media375 === true,
        'table--275__tr-header': media275 === true,
        'table--1300__tr-header': media1300 === true,
        'table--900__tr-header': media900 === true,
        'table--600__tr-header': media600 === true,
        'table--600l__tr-header': media600l === true,
    });

    const tableThClass = classNames({
        'table__th': media1728 === true,
        'table--1133__th': media1133 === true,
        'table--744__th': media744 === true,
        'table--744l__th': media744l === true,
        'table--375__th': media375 === true,
        'table--275__th': media275 === true,
        'table--1300__th': media1300 === true,
        'table--900__th': media900 === true,
        'table--600__th': media600 === true,
        'table--600l__th': media600l === true,
    });

    const tableThCornerClass = classNames({
        'table__th-corner': media1728 === true,
        'table--1133__th-corner': media1133 === true,
        'table--744__th-corner': media744 === true,
        'table--744l__th-corner': media744l === true,
        'table--375__th-corner': media375 === true,
        'table--275__th-corner': media275 === true,
        'table--1300__th-corner': media1300 === true,
        'table--900__th-corner': media900 === true,
        'table--600__th-corner': media600 === true,
        'table--600l__th-corner': media600l === true,
    });

    const tableThTopleftClass = classNames({
        'table__th-topleft': media1728 === true,
        'table--1133__th-topleft': media1133 === true,
        'table--744__th-topleft': media744 === true,
        'table--744l__th-topleft': media744l === true,
        'table--375__th-topleft': media375 === true,
        'table--275__th-topleft': media275 === true,
        'table--1300__th-topleft': media1300 === true,
        'table--900__th-topleft': media900 === true,
        'table--600__th-topleft': media600 === true,
        'table--600l__th-topleft': media600l === true,
    });

    const tableThHeaderClass = classNames({
        'table__th-header': media1728 === true,
        'table--1133__th-header': media1133 === true,
        'table--744__th-header': media744 === true,
        'table--744l__th-header': media744l === true,
        'table--375__th-header': media375 === true,
        'table--275__th-header': media275 === true,
        'table--1300__th-header': media1300 === true,
        'table--900__th-header': media900 === true,
        'table--600__th-header': media600 === true,
        'table--600l__th-header': media600l === true,
    });

    const tableThStickyClass = classNames({
        'table__th-sticky': media1728 === true,
        'table--1133__th-sticky': media1133 === true,
        'table--744__th-sticky': media744 === true,
        'table--744l__th-sticky': media744l === true,
        'table--375__th-sticky': media375 === true,
        'table--275__th-sticky': media275 === true,
        'table--1300__th-sticky': media1300 === true,
        'table--900__th-sticky': media900 === true,
        'table--600__th-sticky': media600 === true,
        'table--600l__th-sticky': media600l === true,
    });

    const tableThToprightClass = classNames({
        'table__th-topright': media1728 === true,
        'table--1133__th-topright': media1133 === true,
        'table--744__th-topright': media744 === true,
        'table--744l__th-topright': media744l === true,
        'table--375__th-topright': media375 === true,
        'table--275__th-topright': media275 === true,
        'table--1300__th-topright': media1300 === true,
        'table--900__th-topright': media900 === true,
        'table--600__th-topright': media600 === true,
        'table--600l__th-topright': media600l === true,
    });

    const tableFooterClass = classNames({
        'table__footer': media1728 === true,
        'table--1133__footer': media1133 === true,
        'table--744__footer': media744 === true,
        'table--744l__footer': media744l === true,
        'table--375__footer': media375 === true,
        'table--275__footer': media275 === true,
        'table--1300__footer': media1300 === true,
        'table--900__footer': media900 === true,
        'table--600__footer': media600 === true,
        'table--600l__footer': media600l === true,
    });

    const tableFooterWindowsClass = classNames({
        'table__footer-windows': media1728 === true,
        'table--1133__footer-windows': media1133 === true,
        'table--744__footer-windows': media744 === true,
        'table--744l__footer-windows': media744l === true,
        'table--375__footer-windows': media375 === true,
        'table--275__footer-windows': media275 === true,
        'table--1300__footer-windows': media1300 === true,
        'table--900__footer-windows': media900 === true,
        'table--600__footer-windows': media600 === true,
        'table--600l__footer-windows': media600l === true,
    });

    const tableTrFooterClass = classNames({
        'table__tr-footer': media1728 === true,
        'table--1133__tr-footer': media1133 === true,
        'table--744__tr-footer': media744 === true,
        'table--744l__tr-footer': media744l === true,
        'table--375__tr-footer': media375 === true,
        'table--275__tr-footer': media275 === true,
        'table--1300__tr-footer': media1300 === true,
        'table--900__tr-footer': media900 === true,
        'table--600__tr-footer': media600 === true,
        'table--600l__tr-footer': media600l === true,
    });

    const tableThBottomleftClass = classNames({
        'table__th-bottomleft': media1728 === true,
        'table--1133__th-bottomleft': media1133 === true,
        'table--744__th-bottomleft': media744 === true,
        'table--744l__th-bottomleft': media744l === true,
        'table--375__th-bottomleft': media375 === true,
        'table--275__th-bottomleft': media275 === true,
        'table--1300__th-bottomleft': media1300 === true,
        'table--900__th-bottomleft': media900 === true,
        'table--600__th-bottomleft': media600 === true,
        'table--600l__th-bottomleft': media600l === true,
    });

    const tableThFooterClass = classNames({
        'table__th-footer': media1728 === true,
        'table--1133__th-footer': media1133 === true,
        'table--744__th-footer': media744 === true,
        'table--744l__th-footer': media744l === true,
        'table--375__th-footer': media375 === true,
        'table--275__th-footer': media275 === true,
        'table--1300__th-footer': media1300 === true,
        'table--900__th-footer': media900 === true,
        'table--600__th-footer': media600 === true,
        'table--600l__th-footer': media600l === true,
    });

    const tableThBottomrightClass = classNames({
        'table__th-bottomright': media1728 === true,
        'table--1133__th-bottomright': media1133 === true,
        'table--744__th-bottomright': media744 === true,
        'table--744l__th-bottomright': media744l === true,
        'table--375__th-bottomright': media375 === true,
        'table--275__th-bottomright': media275 === true,
        'table--1300__th-bottomright': media1300 === true,
        'table--900__th-bottomright': media900 === true,
        'table--600__th-bottomright': media600 === true,
        'table--600l__th-bottomright': media600l === true,
    });

    const contentWranningClass = classNames({
        'content__wranning': media1728 === true,
        'content--1133__wranning': media1133 === true,
        'content--744__wranning': media744 === true,
        'content--744l__wranning': media744l === true,
        'content--375__wranning': media375 === true,
        'content--275__wranning': media275 === true,
        'content--1300__wranning': media1300 === true,
        'content--900__wranning': media900 === true,
        'content--600__wranning': media600 === true,
        'content--600l__wranning': media600l === true,
    });

    const contentWranningWindowsClass = classNames({
        'content__wranning-windows': media1728 === true,
        'content--1133__wranning-windows': media1133 === true,
        'content--744__wranning-windows': media744 === true,
        'content--744l__wranning-windows': media744l === true,
        'content--375__wranning-windows': media375 === true,
        'content--275__wranning-windows': media275 === true,
        'content--1300__wranning-windows': media1300 === true,
        'content--900__wranning-windows': media900 === true,
        'content--600__wranning-windows': media600 === true,
        'content--600l__wranning-windows': media600l === true,
    });

    const contentInnerClass = classNames({
        'content__inner': media1728 === true,
        'content--1133__inner': media1133 === true,
        'content--744__inner': media744 === true,
        'content--744l__inner': media744l === true,
        'content--375__inner': media375 === true,
        'content--275__inner': media275 === true,
        'content--1300__inner': media1300 === true,
        'content--900__inner': media900 === true,
        'content--600__inner': media600 === true,
        'content--600l__inner': media600l === true,
    });

    const contentInnerWindowsClass = classNames({
        'content__inner-windows': media1728 === true,
        'content--1133__inner-windows': media1133 === true,
        'content--744__inner-windows': media744 === true,
        'content--744l__inner-windows': media744l === true,
        'content--375__inner-windows': media375 === true,
        'content--275__inner-windows': media275 === true,
        'content--1300__inner-windows': media1300 === true,
        'content--900__inner-windows': media900 === true,
        'content--600__inner-windows': media600 === true,
        'content--600l__inner-windows': media600l === true,
    });

    const contentPClass = classNames({
        'content__p': media1728 === true,
        'content--1133__p': media1133 === true,
        'content--744__p': media744 === true,
        'content--744l__p': media744l === true,
        'content--375__p': media375 === true,
        'content--275__p': media275 === true,
        'content--1300__p': media1300 === true,
        'content--900__p': media900 === true,
        'content--600__p': media600 === true,
        'content--600l__p': media600l === true,
    });

    const contentPWindowsClass = classNames({
        'content__p-windows': media1728 === true,
        'content--1133__p-windows': media1133 === true,
        'content--744__p-windows': media744 === true,
        'content--744l__p-windows': media744l === true,
        'content--375__p-windows': media375 === true,
        'content--275__p-windows': media275 === true,
        'content--1300__p-windows': media1300 === true,
        'content--900__p-windows': media900 === true,
        'content--600__p-windows': media600 === true,
        'content--600l__p-windows': media600l === true,
    });

    const contentPhoneClass = classNames({
        'content__phone': media1728 === true,
        'content--1133__phone': media1133 === true,
        'content--744__phone': media744 === true,
        'content--744l__phone': media744l === true,
        'content--375__phone': media375 === true,
        'content--275__phone': media275 === true,
        'content--1300__phone': media1300 === true,
        'content--900__phone': media900 === true,
        'content--600__phone': media600 === true,
        'content--600l__phone': media600l === true,
    });

    const contentPhoneWindowsClass = classNames({
        'content__phone-windows': media1728 === true,
        'content--1133__phone-windows': media1133 === true,
        'content--744__phone-windows': media744 === true,
        'content--744l__phone-windows': media744l === true,
        'content--375__phone-windows': media375 === true,
        'content--275__phone-windows': media275 === true,
        'content--1300__phone-windows': media1300 === true,
        'content--900__phone-windows': media900 === true,
        'content--600__phone-windows': media600 === true,
        'content--600l__phone-windows': media600l === true,
    });

    const contentNumberClass = classNames({
        'content__number': media1728 === true,
        'content--1133__number': media1133 === true,
        'content--744__number': media744 === true,
        'content--744l__number': media744l === true,
        'content--375__number': media375 === true,
        'content--275__number': media275 === true,
        'content--1300__number': media1300 === true,
        'content--900__number': media900 === true,
        'content--600__number': media600 === true,
        'content--600l__number': media600l === true,
    });

    const contentNumberWindowsClass = classNames({
        'content__number-windows': media1728 === true,
        'content--1133__number-windows': media1133 === true,
        'content--744__number-windows': media744 === true,
        'content--744l__number-windows': media744l === true,
        'content--375__number-windows': media375 === true,
        'content--275__number-windows': media275 === true,
        'content--1300__number-windows': media1300 === true,
        'content--900__number-windows': media900 === true,
        'content--600__number-windows': media600 === true,
        'content--600l__number-windows': media600l === true,
    });

    const tableScrollXClass = classNames({
        'table__scroll-x': media1728 === true,
        'table--1133__scroll-x': media1133 === true,
        'table--744__scroll-x': media744 === true,
        'table--744l__scroll-x': media744l === true,
        'table--375__scroll-x': media375 === true,
        'table--275__scroll-x': media275 === true,
        'table--1300__scroll-x': media1300 === true,
        'table--900__scroll-x': media900 === true,
        'table--600__scroll-x': media600 === true,
        'table--600l__scroll-x': media600l === true,
    });


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
            <div className={contentTableClass}>
                <h2
                    id="caption-windows"
                    className={`${tableCaptionClass} ${tableCaptionWindowsClass}`}
                >
                    Свободные окошки
                </h2>
                <div className={tableScrollXClass}>
                    <table id="table-windows" className={tableClass}>
                        <thead className={`${tableHeaderClass} ${tableHeaderWindowsClass}`}>
                            <tr className={`${tableTrClass} ${tableTrHeaderClass}`}>
                                <th className={`${tableThClass} ${tableThCornerClass} ${tableThTopleftClass} ${tableThStickyClass}`}></th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    ПН
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    ВТ
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    СР
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    ЧТ
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    ПТ
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    СБ
                                </th>
                                <th className={`${tableThClass} ${tableThHeaderClass} ${tableThStickyClass}`}>
                                    ВС
                                </th>
                                <th
                                    id="th-topright"
                                    className={`${tableThClass} ${tableThCornerClass} ${tableThToprightClass} ${tableThStickyClass}`}
                                ></th>
                            </tr>
                        </thead>
                        <ModalContentBTbody />
                        <tfoot className={`${tableFooterClass} ${tableFooterWindowsClass}`}>
                            <tr className={`${tableTrClass} ${tableTrFooterClass}`}>
                                <th className={`${tableThClass} ${tableThCornerClass} ${tableThBottomleftClass} ${tableThStickyClass}`}></th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    12.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    13.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    14.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    15.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    16.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    17.02
                                </th>
                                <th className={`${tableThClass} ${tableThFooterClass} ${tableThStickyClass}`}>
                                    18.02
                                </th>
                                <th
                                    id="th-bottomright"
                                    className={`${tableThClass} ${tableThCornerClass} ${tableThBottomrightClass} ${tableThStickyClass}`}
                                ></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div
                    id="content-windows"
                    className={`${contentWranningClass} ${contentWranningWindowsClass}`}
                >
                    <div className={media275 || media375 || media600 || media600l || media744l ? contentInnerWindowsClass : contentInnerClass}>
                        {media275 ? null : <p id="p-windows" className={`${contentPClass} ${contentPWindowsClass}`}>
                            Уточняйте информацию по телефону
                        </p>}
                        <phone
                            id="phone-windows"
                            className={`${contentPhoneClass} ${contentPhoneWindowsClass}`}
                        >
                            {propsData(props).map((prop, i) => (
                                <UiLink
                                    key={`uiLinkPhoneWindows${i}`}
                                    {...prop}
                                    className={`${contentNumberClass} ${contentNumberWindowsClass}`}
                                />
                            ))}
                            {/* <a
                                href="tel:+79182669130"
                                className="content__number content__number-windows"
                            >
                                +7 918 266 91 30
                            </a> */}
                        </phone>
                    </div>
                </div>
            </div>
        </>
    );
};
