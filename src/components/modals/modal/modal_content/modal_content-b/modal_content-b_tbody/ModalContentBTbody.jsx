import React, { useRef, useLayoutEffect, useEffect, useContext, useState } from 'react';

import './ModalContentBTbody.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../../hooks';

import funcQueryMedia from '../../../../../../func/func_query_media/funcQueryMedia';

import { ModalContext } from '../../../../../../contexts';

export const ModalContentBTbody = (props) => {

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

    const tableBodyClass = classNames({
        'table__body': media1728 === true,
        'table--1133__body': media1133 === true,
        'table--744__body': media744 === true,
        'table--744l__body': media744l === true,
        'table--375__body': media375 === true,
        'table--275__body': media275 === true,
        'table--1300__body': media1300 === true,
        'table--900__body': media900 === true,
        'table--600__body': media600 === true,
        'table--600l__body': media600l === true,
    });

    const tableBodyWindowsClass = classNames({
        'table__body-windows': media1728 === true,
        'table--1133__body-windows': media1133 === true,
        'table--744__body-windows': media744 === true,
        'table--744l__body-windows': media744l === true,
        'table--375__body-windows': media375 === true,
        'table--275__body-windows': media275 === true,
        'table--1300__body-windows': media1300 === true,
        'table--900__body-windows': media900 === true,
        'table--600__body-windows': media600 === true,
        'table--600l__body-windows': media600l === true,
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

    const tableTrBodyClass = classNames({
        'table__tr-body': media1728 === true,
        'table--1133__tr-body': media1133 === true,
        'table--744__tr-body': media744 === true,
        'table--744l__tr-body': media744l === true,
        'table--375__tr-body': media375 === true,
        'table--275__tr-body': media275 === true,
        'table--1300__tr-body': media1300 === true,
        'table--900__tr-body': media900 === true,
        'table--600__tr-body': media600 === true,
        'table--600l__tr-body': media600l === true,
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

    const tableThBodyClass = classNames({
        'table__th-body': media1728 === true,
        'table--1133__th-body': media1133 === true,
        'table--744__th-body': media744 === true,
        'table--744l__th-body': media744l === true,
        'table--375__th-body': media375 === true,
        'table--275__th-body': media275 === true,
        'table--1300__th-body': media1300 === true,
        'table--900__th-body': media900 === true,
        'table--600__th-body': media600 === true,
        'table--600l__th-body': media600l === true,
    });

    const tableBorderBottomClass = classNames({
        'table__border-bottom': media1728 === true,
        'table--1133__border-bottom': media1133 === true,
        'table--744__border-bottom': media744 === true,
        'table--744l__border-bottom': media744l === true,
        'table--375__border-bottom': media375 === true,
        'table--275__border-bottom': media275 === true,
        'table--1300__border-bottom': media1300 === true,
        'table--900__border-bottom': media900 === true,
        'table--600__border-bottom': media600 === true,
        'table--600l__border-bottom': media600l === true,
    });

    const tableThFirstClass = classNames({
        'table__th-first': media1728 === true,
        'table--1133__th-first': media1133 === true,
        'table--744__th-first': media744 === true,
        'table--744l__th-first': media744l === true,
        'table--375__th-first': media375 === true,
        'table--275__th-first': media275 === true,
        'table--1300__th-first': media1300 === true,
        'table--900__th-first': media900 === true,
        'table--600__th-first': media600 === true,
        'table--600l__th-first': media600l === true,
    });

    const tableTdClass = classNames({
        'table__td': media1728 === true,
        'table--1133__td': media1133 === true,
        'table--744__td': media744 === true,
        'table--744l__td': media744l === true,
        'table--375__td': media375 === true,
        'table--275__td': media275 === true,
        'table--1300__td': media1300 === true,
        'table--900__td': media900 === true,
        'table--600__td': media600 === true,
        'table--600l__td': media600l === true,
    });

    const tableTdBodyClass = classNames({
        'table__td-body': media1728 === true,
        'table--1133__td-body': media1133 === true,
        'table--744__td-body': media744 === true,
        'table--744l__td-body': media744l === true,
        'table--375__td-body': media375 === true,
        'table--275__td-body': media275 === true,
        'table--1300__td-body': media1300 === true,
        'table--900__td-body': media900 === true,
        'table--600__td-body': media600 === true,
        'table--600l__td-body': media600l === true,
    });

    const tableSubBodyClass = classNames({
        'table__sub-body': media1728 === true,
        'table--1133__sub-body': media1133 === true,
        'table--744__sub-body': media744 === true,
        'table--744l__sub-body': media744l === true,
        'table--375__sub-body': media375 === true,
        'table--275__sub-body': media275 === true,
        'table--1300__sub-body': media1300 === true,
        'table--900__sub-body': media900 === true,
        'table--600__sub-body': media600 === true,
        'table--600l__sub-body': media600l === true,
    });

    const tableSupBodyClass = classNames({
        'table__sup-body': media1728 === true,
        'table--1133__sup-body': media1133 === true,
        'table--744__sup-body': media744 === true,
        'table--744l__sup-body': media744l === true,
        'table--375__sup-body': media375 === true,
        'table--275__sup-body': media275 === true,
        'table--1300__sup-body': media1300 === true,
        'table--900__sup-body': media900 === true,
        'table--600__sup-body': media600 === true,
        'table--600l__sup-body': media600l === true,
    });

    const tableThLastClass = classNames({
        'table__th-last': media1728 === true,
        'table--1133__th-last': media1133 === true,
        'table--744__th-last': media744 === true,
        'table--744l__th-last': media744l === true,
        'table--375__th-last': media375 === true,
        'table--275__th-last': media275 === true,
        'table--1300__th-last': media1300 === true,
        'table--900__th-last': media900 === true,
        'table--600__th-last': media600 === true,
        'table--600l__th-last': media600l === true,
    });


    const { modalOpened } = useContext(ModalContext);

    const tbodyRef = useRef(null);
    const tbodyTrRef = useRef(null);
    const tbodyTrThLastRef = useRef(null);

    const [width, setWidth] = useState(40);

    useLayoutEffect(() => {
        let widthScroll = 0;
        let widthThLast = 0;

        widthScroll = tbodyRef.current.offsetWidth - tbodyTrRef.current.offsetWidth;
        widthThLast = tbodyTrThLastRef.current.offsetWidth - widthScroll;
        setWidth(widthThLast);

    }, []);

    return (
        <>
            <tbody id="tbody-windows" className={media375 ? tableBodyWindowsClass : tableBodyClass} ref={tbodyRef}>
                {/* <tbody id="tbody-windows" className={`${tableBodyClass} ${tableBodyWindowsClass}`} ref={tbodyRef}> */}
                <tr id="tbody-windows-tr" className={`${tableTrClass} ${tableTrBodyClass}`} ref={tbodyTrRef}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        |
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        13<sup className={`${tableSubBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        9<sup className={`${tableSupBodyClass}`}>30</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }} ref={tbodyTrThLastRef}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableBorderBottomClass} ${tableThFirstClass}`}>
                        ||
                    </th>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass} ${tableBorderBottomClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass} ${tableBorderBottomClass}`} style={{ width: width }}></th>
                </tr>
                <tr className={`${tableTrClass} ${tableTrBodyClass}`}>
                    <th className={`${tableThClass} ${tableThBodyClass} ${tableThFirstClass}`}>||</th>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}>
                        15<sup className={`${tableSupBodyClass}`}>00</sup>
                    </td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <td className={`${tableTdClass} ${tableTdBodyClass}`}></td>
                    <th className={`${tableThClass} ${tableThLastClass}`} style={{ width: width }}></th>
                </tr>
            </tbody>
        </>
    );
};
