import React, { useRef, useState, useLayoutEffect } from 'react';

import './Procedures.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

import { useMediaQuery } from '../../../hooks';

import { ProceduresTabs } from './procedures_tabs';

import dataProceduresTabs from '../../../data/data_procedures/data_procedures_tabs/dataProceduresTabs.json';

export default function Procedures(props) {

    let queryNumber = funcQueryNumber();

    const proceduresClass = classNames(`procedures${queryNumber}`);
    const containerClass = classNames(`container${queryNumber}`);
    const containerProceduresClass = classNames(`container-procedures${queryNumber}`);

    const containerRef = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);

    useLayoutEffect(() => {

        const width = containerRef.current.offsetWidth;

        setContainerWidth(width);
    });

    return (
        <>
            <section id="procedures" className={proceduresClass}>
                <div
                    ref={containerRef}
                    className={`${containerClass} ${containerProceduresClass}`}
                >
                    <ProceduresTabs
                        bodyRef={props.bodyRef}
                        faceRef={props.faceRef}
                        data={dataProceduresTabs}
                        containerWidth={containerWidth}
                    />
                </div>
            </section>
        </>
    );
}

