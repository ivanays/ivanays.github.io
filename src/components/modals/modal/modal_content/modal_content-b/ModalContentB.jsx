import React from 'react';

import './ModalContentB.scss';

import { useMediaQuery } from '../../../../../hooks';

import classNames from 'classnames';

import hrefPhone from '../../../../../func/func_phone/funcHrefPhone';
import arrPhone from '../../../../../func/func_phone/funcArrPhone';
import funcQueryMedia from '../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../func/func_query_number/funcQueryNumber';

import { UiLink } from '../../../../ui';

import { ModalContentBTbody } from './modal_content-b_tbody';
import { interpolate } from 'gsap';

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

    let queryNumber = funcQueryNumber();

    const contentTableClass = classNames(`content${queryNumber}__table`);
    const tableClass = classNames(`table${queryNumber}`);
    const tableCaptionClass = classNames(`table${queryNumber}__caption`);
    const tableCaptionWindowsClass = classNames(`table${queryNumber}__caption-windows`);
    const tableHeaderClass = classNames(`table${queryNumber}__header`);
    const tableHeaderWindowsClass = classNames(`table${queryNumber}__header-windows`);
    const tableTrClass = classNames(`table${queryNumber}__tr`);
    const tableTrHeaderClass = classNames(`table${queryNumber}__tr-header`);
    const tableThClass = classNames(`table${queryNumber}__th`);
    const tableThCornerClass = classNames(`table${queryNumber}__th-corner`);
    const tableThTopleftClass = classNames(`table${queryNumber}__th-topleft`);
    const tableThHeaderClass = classNames(`table${queryNumber}__th-header`);
    const tableThStickyClass = classNames(`table${queryNumber}__th-sticky`);
    const tableThToprightClass = classNames(`table${queryNumber}__th-topright`);
    const tableFooterClass = classNames(`table${queryNumber}__footer`);
    const tableFooterWindowsClass = classNames(`table${queryNumber}__footer-windows`);
    const tableTrFooterClass = classNames(`table${queryNumber}__tr-footer`);
    const tableThBottomleftClass = classNames(`table${queryNumber}__th-bottomleft`);
    const tableThFooterClass = classNames(`table${queryNumber}__th-footer`);
    const tableThBottomrightClass = classNames(`table${queryNumber}__th-bottomright`);
    const contentWranningClass = classNames(`content${queryNumber}__wranning`);
    const contentWranningWindowsClass = classNames(`content${queryNumber}__wranning-windows`);
    const contentInnerClass = classNames(`content${queryNumber}__inner`);
    const contentInnerWindowsClass = classNames(`content${queryNumber}__inner-windows`);
    const contentPClass = classNames(`content${queryNumber}__p`);
    const contentPWindowsClass = classNames(`content${queryNumber}__p-windows`);
    const contentPhoneClass = classNames(`content${queryNumber}__phone`);
    const contentPhoneWindowsClass = classNames(`content${queryNumber}__phone-windows`);
    const contentNumberClass = classNames(`content${queryNumber}__number`);
    const contentNumberWindowsClass = classNames(`content${queryNumber}__number-windows`);
    const tableScrollXClass = classNames(`table${queryNumber}__scroll-x`);

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
