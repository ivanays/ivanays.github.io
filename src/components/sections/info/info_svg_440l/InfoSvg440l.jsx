import React from 'react';

import './InfoSvg440l.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import { useMediaQuery } from '../../../../hooks';

export const InfoSvg440l = ({
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

    const sliderSvgClass = classNames({
        'slider__svg': media1728 === true,
        'slider--1133__svg': media1133 === true,
        'slider--744__svg': media744 === true,
        'slider--744l__svg': media744l === true,
        'slider--375__svg': media375 === true,
        'slider--275__svg': media275 === true,
        'slider--1300__svg': media1300 === true,
        'slider--900__svg': media900 === true,
        'slider--600__svg': media600 === true,
        'slider--600l__svg': media600l === true,
    });

    const sliderSvgInfoClass = classNames({
        'slider__svg-info': media1728 === true,
        'slider--1133__svg-info': media1133 === true,
        'slider--744__svg-info': media744 === true,
        'slider--744l__svg-info': media744l === true,
        'slider--375__svg-info': media375 === true,
        'slider--275__svg-info': media275 === true,
        'slider--1300__svg-info': media1300 === true,
        'slider--900__svg-info': media900 === true,
        'slider--600__svg-info': media600 === true,
        'slider--600l__svg-info': media600l === true,
    });

    const sliderSvgTitleClass = classNames({
        'slider__svg-title': media1728 === true,
        'slider--1133__svg-title': media1133 === true,
        'slider--744__svg-title': media744 === true,
        'slider--744l__svg-title': media744l === true,
        'slider--375__svg-title': media375 === true,
        'slider--275__svg-title': media275 === true,
        'slider--1300__svg-title': media1300 === true,
        'slider--900__svg-title': media900 === true,
        'slider--600__svg-title': media600 === true,
        'slider--600l__svg-title': media600l === true,
    });

    const sliderSvgTextClass = classNames({
        'slider__svg-text': media1728 === true,
        'slider--1133__svg-text': media1133 === true,
        'slider--744__svg-text': media744 === true,
        'slider--744l__svg-text': media744l === true,
        'slider--375__svg-text': media375 === true,
        'slider--275__svg-text': media275 === true,
        'slider--1300__svg-text': media1300 === true,
        'slider--900__svg-text': media900 === true,
        'slider--600__svg-text': media600 === true,
        'slider--600l__svg-text': media600l === true,
    });

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

                <g id="svg-group-0">
                    <path
                        id="path1-1"
                        d="M32.5 51C32.5 39.1259 42.1259 29.5 54 29.5H402C405.038 29.5 407.5 31.9624 407.5 35V239C407.5 250.874 397.874 260.5 386 260.5H38C34.9624 260.5 32.5 258.038 32.5 255V51Z"
                        fill="url(#paint0_linear_167_1734)"
                        stroke="url(#paint1_linear_167_1734)"
                    />

                    <path
                        id="path-circle1"
                        d="M0,0 L 0,-86 C 0,-86 0,-92 -6,-92 L -353,-92 C -353,-92 -375,-92 -375,-70"
                        fill="none"
                        stroke="none"
                    />

                    <path
                        id="path-circle2"
                        d="M0,0 L -184,0 C -184,0 -190,0 -190,-6 L -190,-209 C -190,-209 -190,-231 -168,-231.5"
                        fill="none"
                        stroke="none"
                    />

                    <rect
                        id="rect1-1"
                        x="18.75"
                        y="15.75"
                        width="420.5"
                        height="273.5"
                        rx="34.25"
                        stroke="url(#paint2_linear_167_1734)"
                        strokeWidth="1.5"
                    ></rect>

                    <rect
                        id="rect2-1"
                        x="0.75"
                        y="0.75"
                        width="420.5"
                        height="273.5"
                        rx="34.25"
                        stroke="url(#paint3_linear_167_1734)"
                        strokeWidth="1.5"
                    ></rect>
                </g>

                <defs>

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
