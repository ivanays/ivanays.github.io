import React, { useRef, useLayoutEffect, useEffect, useContext, useState } from 'react';

import './ModalContentBTbody.scss';

import classNames from 'classnames';

import { useMediaQuery } from '../../../../../../hooks';

import funcQueryMedia from '../../../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../../../func/func_query_number/funcQueryNumber';

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

    let queryNumber = funcQueryNumber();

    const tableBodyClass = classNames(`table${queryNumber}__body`);
    const tableBodyWindowsClass = classNames(`table${queryNumber}__body-windows`);
    const tableTrClass = classNames(`table${queryNumber}__tr`);
    const tableTrBodyClass = classNames(`table${queryNumber}__tr-body`);
    const tableThClass = classNames(`table${queryNumber}__th`);
    const tableThBodyClass = classNames(`table${queryNumber}__th-body`);
    const tableBorderBottomClass = classNames(`table${queryNumber}__border-bottom`);
    const tableThFirstClass = classNames(`table${queryNumber}__th-first`);
    const tableTdClass = classNames(`table${queryNumber}__td`);
    const tableTdBodyClass = classNames(`table${queryNumber}__td-body`);
    const tableSubBodyClass = classNames(`table${queryNumber}__sub-body`);
    const tableSupBodyClass = classNames(`table${queryNumber}__sup-body`);
    const tableThLastClass = classNames(`table${queryNumber}__th-last`);


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
