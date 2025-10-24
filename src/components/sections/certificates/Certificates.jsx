import React, { useLayoutEffect, children, useState, useRef } from 'react';

import './Certificates.scss';

import gsap from 'gsap';
import classNames from 'classnames';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../hooks';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';

import { SliderCert } from '../../sliders/slider_cert/SliderCert';

import { SliderCertContent } from '../../sliders/slider_cert/slider_cert_content';

import dataCertificates from '../../../data/data_certificates/data_certificates_slider/dataCertificatesSlider.json'

export const Certificates = () => {

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

    let queryNumber = '';

    media1728 === true ? queryNumber = '' :
        media1300 === true ? queryNumber = '--1300' :
            media1133 === true ? queryNumber = '--1133' :
                media900 === true ? queryNumber = '--900' :
                    media744 === true ? queryNumber = '--744' :
                        media744l === true ? queryNumber = '--744l' :
                            media600 === true ? queryNumber = '--600' :
                                media600l === true ? queryNumber = '--600l' :
                                    media375 === true ? queryNumber = '--375' :
                                        media275 === true ? queryNumber = '--275' : null
    
    let classCertificates = `certificates${queryNumber}`;

    const certificatesClass = classNames(classCertificates);

    // const certificatesClass = classNames({
    //     'certificates': media1728 === true,
    //     'certificates--1133': media1133 === true,
    //     'certificates--744': media744 === true,
    //     'certificates--744l': media744l === true,
    //     'certificates--375': media375 === true,
    //     'certificates--275': media275 === true,
    //     'certificates--1300': media1300 === true,
    //     'certificates--900': media900 === true,
    //     'certificates--600': media600 === true,
    //     'certificates--600l': media600l === true,
    // });

    const containerCertificatesClass = classNames({
        'container-certificates': media1728 === true,
        'container-certificates--1133': media1133 === true,
        'container-certificates--744': media744 === true,
        'container-certificates--744l': media744l === true,
        'container-certificates--375': media375 === true,
        'container-certificates--275': media275 === true,
        'container-certificates--1300': media1300 === true,
        'container-certificates--900': media900 === true,
        'container-certificates--600': media600 === true,
        'container-certificates--600l': media600l === true,
    });

    const certificatesSliderClass = classNames({
        'certificates__slider': media1728 === true,
        'certificates--1133__slider': media1133 === true,
        'certificates--744__slider': media744 === true,
        'certificates--744l__slider': media744l === true,
        'certificates--375__slider': media375 === true,
        'certificates--275__slider': media275 === true,
        'certificates--1300__slider': media1300 === true,
        'certificates--900__slider': media900 === true,
        'certificates--600__slider': media600 === true,
        'certificates--600l__slider': media600l === true,
    });

    const { isScrolling } = useScrollDirection();

    const sliderCert = useRef();

    const [isSliderCert, setIsSliderCert] = useState(true);

    const animationScaleY = (current, scaleY, opacity, height, duration) => {
        gsap.timeline()
            .to(current, { scaleY: scaleY, opacity: opacity, duration: duration })
            .to(current, { height: height, duration: duration - 1, delay: -1 });
    };

    const imagesCertificates = SliderCertContent;

    const containerRef = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);

    useLayoutEffect(() => {

        const width = containerRef.current.offsetWidth;

        setContainerWidth(width);
    });

    return (
        <>
            <section className={certificatesClass}>
                <div
                    className={containerCertificatesClass}
                    ref={containerRef}
                >
                    <div
                        className={certificatesSliderClass}
                        ref={sliderCert}
                    >
                        <SliderCert
                            data={dataCertificates}
                            images={imagesCertificates}
                            containerWidth={containerWidth}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

