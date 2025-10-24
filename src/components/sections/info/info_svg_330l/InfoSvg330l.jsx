import React from 'react';

import './InfoSvg330l.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import { useMediaQuery } from '../../../../hooks';

export const InfoSvg330l = ({
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
                width="330"
                height="220"
                viewBox="0 0 330 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* <g id="&#208;&#184;&#208;&#189;&#209;&#132;&#208;&#190;2-copy">
                    <path id="Rectangle 142" d="M54 29.5H292C295.038 29.5 297.5 31.9624 297.5 35V169C297.5 180.874 287.874 190.5 276 190.5H38C34.9624 190.5 32.5 188.038 32.5 185V51C32.5 39.1259 42.1259 29.5 54 29.5Z" fill="url(#paint0_linear_1325_1581)" stroke="url(#paint1_linear_1325_1581)" />
                    <rect id="Rectangle 100" x="14.25" y="12.1289" width="315" height="207.121" rx="34.25" stroke="url(#paint2_linear_1325_1581)" stroke-width="1.5" />
                    <rect id="Rectangle 102" x="0.75" y="0.75" width="315" height="207.121" rx="34.25" stroke="url(#paint3_linear_1325_1581)" stroke-width="1.5" />
                </g>

                <defs>
                    <linearGradient id="paint0_linear_1325_1581" x1="165" y1="29" x2="165" y2="191" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E8CCEE" />
                        <stop offset="0.387873" stop-color="#F0E1F4" />
                        <stop offset="0.490872" stop-color="#F2E7F6" />
                        <stop offset="0.599364" stop-color="#F0E1F3" />
                        <stop offset="1" stop-color="#E8CCEE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1325_1581" x1="-257.13" y1="-150.644" x2="201.755" y2="466.228" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.684967" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.685008" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1325_1581" x1="-330.522" y1="-219.964" x2="272.259" y2="528.722" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.659701" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.660524" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1325_1581" x1="-344.022" y1="-231.342" x2="258.759" y2="517.343" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.702083" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.702183" stop-color="#831598" />
                    </linearGradient>
                </defs> */}


                <g id="&#208;&#184;&#208;&#189;&#209;&#132;&#208;&#190;5-copy">
                    <path id="Rectangle 142" d="M42 13.5H294C306.426 13.5 316.5 23.5736 316.5 36V178C316.5 193.188 304.188 205.5 289 205.5H34C22.6782 205.5 13.5 196.322 13.5 185V42C13.5 26.2599 26.2599 13.5 42 13.5Z" fill="url(#paint0_linear_1442_1571)" stroke="url(#paint1_linear_1442_1571)" />
                    <rect id="Rectangle 100" x="6.75" y="5.75" width="322.5" height="213.5" rx="34.25" stroke="url(#paint2_linear_1442_1571)" stroke-width="1.5" />
                    <rect id="Rectangle 102" x="0.75" y="0.75" width="322.5" height="212.5" rx="34.25" stroke="url(#paint3_linear_1442_1571)" stroke-width="1.5" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1442_1571" x1="165" y1="13" x2="165" y2="206" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E8CCEE" />
                        <stop offset="0.387873" stop-color="#F0E1F4" />
                        <stop offset="0.490872" stop-color="#F2E7F6" />
                        <stop offset="0.599364" stop-color="#F0E1F3" />
                        <stop offset="1" stop-color="#E8CCEE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1442_1571" x1="-317.435" y1="-201.02" x2="235.393" y2="511.882" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.684967" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.685008" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1442_1571" x1="-346.174" y1="-233.417" x2="275.914" y2="534.09" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.659701" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.660524" stop-color="#831598" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1442_1571" x1="-352.174" y1="-237.308" x2="266.417" y2="529.451" gradientUnits="userSpaceOnUse">
                        <stop offset="0.461286" stop-color="#841799" />
                        <stop offset="0.702083" stop-color="#831598" stop-opacity="0" />
                        <stop offset="0.702183" stop-color="#831598" />
                    </linearGradient>
                </defs>


                <use xlinkHref={xlinkHref} x="0" y="0" viewBox="0 0 330 220"></use>

                <text
                    id={idTitle1}
                    textAnchor="middle"
                    x="169"
                    y="72"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle1}
                </text>
                <text
                    id={idText1}
                    textAnchor="middle"
                    x="169"
                    y="95"
                    className={sliderSvgTextClass}
                >
                    {childrenText1}
                </text>
                <text
                    id={idTitle2}
                    textAnchor="middle"
                    x="169"
                    y="134"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle2}
                </text>
                <text
                    id={idText2}
                    textAnchor="middle"
                    x="169"
                    y="157"
                    className={sliderSvgTextClass}
                >
                    {childrenText2}
                </text>

            </svg>

            {/* <svg
                id={idSvg}
                className="slider__svg slider__svg-info"
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
                    className="slider__svg-title"
                >
                    {childrenTitle1}
                </text>
                <text
                    id={idText1}
                    textAnchor="middle"
                    x="220"
                    y="124"
                    className="slider__svg-text"
                >
                    {childrenText1}
                </text>
                <text
                    id={idTitle2}
                    textAnchor="middle"
                    x="220"
                    y="174"
                    className="slider__svg-title"
                >
                    {childrenTitle2}
                </text>
                <text
                    id={idText2}
                    textAnchor="middle"
                    x="220"
                    y="204"
                    className="slider__svg-text"
                >
                    {childrenText2}
                </text>
            </svg> */}
        </>
    );
};
