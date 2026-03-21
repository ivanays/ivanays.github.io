import React from 'react';

import './InfoSvg440.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../../func/func_query_number/funcQueryNumber';

import { useMediaQuery } from '../../../../hooks';

import { InfoSvg440Group0 } from './info_svg_440_group_0';
import { InfoSvg440Group1 } from './info_svg_440_group_1';
import { InfoSvg440Group2 } from './info_svg_440_group_2';

export const InfoSvg440 = ({
    idSvg,
    xlinkHref,
    idTitle1,
    idText1,
    idTitle2,
    idText2,
    childrenTitle1,
    childrenText1,
    childrenTitle2,
    childrenText2,
}) => {

    let queryNumber = funcQueryNumber();

    const sliderSvgClass = classNames(`slider${queryNumber}__svg`);
    const sliderSvgInfoClass = classNames(`slider${queryNumber}__svg-info`);
    const sliderSvgTitleClass = classNames(`slider${queryNumber}__svg-title`);
    const sliderSvgTextClass = classNames(`slider${queryNumber}__svg-text`);

    return (
        <>
            <svg
                id={idSvg}
                className={`${sliderSvgClass} ${sliderSvgInfoClass}`}
                x="0"
                y="0"
                width="440"
                height="290"
                viewBox="0 0 440 290"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <defs>
                    <>
                        {idSvg === "info-svg-0" ? <InfoSvg440Group0 /> : null}
                        {idSvg === "info-svg-1" ? <InfoSvg440Group1 /> : null}
                        {idSvg === "info-svg-2" ? <InfoSvg440Group2 /> : null}
                    </>

                    <linearGradient
                        id="paint0_linear_167_1734"
                        x1="220"
                        y1="29"
                        x2="220"
                        y2="261"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E8CCEE" />
                        <stop offset="0.387873" stop-color="#F0E1F4" />
                        <stop offset="0.490872" stop-color="#F2E7F6" />
                        <stop offset="0.599364" stop-color="#F0E1F3" />
                        <stop offset="1" stop-color="#E8CCEE" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_167_1734"
                        x1="-376.696"
                        y1="-228.268"
                        x2="282.892"
                        y2="646.91"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.684967" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.685008" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_167_1734"
                        x1="-440.696"
                        y1="-289.951"
                        x2="351.893"
                        y2="705.801"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.659701" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.660524" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_167_1734"
                        x1="-458.696"
                        y1="-304.951"
                        x2="333.893"
                        y2="690.801"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.702083" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.702183" stop-color="#831598" />
                    </linearGradient>
                </defs>

                <use xlinkHref={xlinkHref} x="0" y="0" viewBox="0 0 440 290"></use>

                <text
                    id={idTitle1}
                    textAnchor="middle"
                    x="220"
                    y="94"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle1}
                </text>
                <text
                    id={idText1}
                    textAnchor="middle"
                    x="220"
                    y="124"
                    className={sliderSvgTextClass}
                >
                    {childrenText1}
                </text>
                <text
                    id={idTitle2}
                    textAnchor="middle"
                    x="220"
                    y="174"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle2}
                </text>
                <text
                    id={idText2}
                    textAnchor="middle"
                    x="220"
                    y="204"
                    className={sliderSvgTextClass}
                >
                    {childrenText2}
                </text>
            </svg>
        </>
    );
};
