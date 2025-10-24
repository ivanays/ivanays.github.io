import React, { useRef, useState, useLayoutEffect } from 'react';

import './Procedures.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

import { useMediaQuery } from '../../../hooks';

import { ProceduresTabs } from './procedures_tabs';

import dataProceduresTabs from '../../../data/data_procedures/data_procedures_tabs/dataProceduresTabs.json';

export default function Procedures(props) {

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

    const proceduresClass = classNames({
        'procedures': media1728 === true,
        'procedures--1133': media1133 === true,
        'procedures--744': media744 === true,
        'procedures--744l': media744l === true,
        'procedures--375': media375 === true,
        'procedures--275': media275 === true,
        'procedures--1300': media1300 === true,
        'procedures--900': media900 === true,
        'procedures--600': media600 === true,
        'procedures--600l': media600l === true,
    });

    const containerClass = classNames({
        'container': media1728 === true,
        'container--1133': media1133 === true,
        'container--744': media744 === true,
        'container--744l': media744l === true,
        'container--375': media375 === true,
        'container--275': media275 === true,
        'container--1300': media1300 === true,
        'container--900': media900 === true,
        'container--600': media600 === true,
        'container--600l': media600l === true,
    });

    const containerProceduresClass = classNames({
        'container-procedures': media1728 === true,
        'container-procedures--1133': media1133 === true,
        'container-procedures--744': media744 === true,
        'container-procedures--744l': media744l === true,
        'container-procedures--375': media375 === true,
        'container-procedures--275': media275 === true,
        'container-procedures--1300': media1300 === true,
        'container-procedures--900': media900 === true,
        'container-procedures--600': media600 === true,
        'container-procedures--600l': media600l === true,
    });

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

