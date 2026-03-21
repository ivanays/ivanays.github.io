import React, { useLayoutEffect, children, useState, useRef } from 'react';

import './Certificates.scss';

import gsap from 'gsap';
import classNames from 'classnames';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from '../../../hooks';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

import { SliderCert } from '../../sliders/slider_cert/SliderCert';

import { SliderCertContent } from '../../sliders/slider_cert/slider_cert_content';

import dataCertificates from '../../../data/data_certificates/data_certificates_slider/dataCertificatesSlider.json'

export const Certificates = () => {

    let queryNumber = funcQueryNumber();

    const certificatesClass = classNames(`certificates${queryNumber}`);
    const containerCertificatesClass = classNames(`container-certificates${queryNumber}`);
    const certificatesSliderClass = classNames(`certificates${queryNumber}__slider`);

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

