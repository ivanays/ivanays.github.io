import React from 'react';

import './InfoSvg230l.scss';

import classNames from 'classnames';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import { useMediaQuery } from '../../../../hooks';

export const InfoSvg230l = ({
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
                width="265"
                height="177"
                viewBox="0 0 265 177"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="&#208;&#184;&#208;&#189;&#209;&#132;&#208;&#190;4-copy">
                    <path id="Rectangle 142" d="M42 11.5H233C243.77 11.5 252.5 20.2304 252.5 31V137C252.5 152.74 239.74 165.5 224 165.5H34C22.1259 165.5 12.5 155.874 12.5 144V41C12.5 24.7076 25.7076 11.5 42 11.5Z" fill="url(#paint0_linear_1441_1571)" stroke="url(#paint1_linear_1441_1571)" />
                    <rect id="Rectangle 100" x="5.75" y="5.75" width="258.5" height="170.5" rx="34.25" stroke="url(#paint2_linear_1441_1571)" stroke-width="1.5" />
                    <rect id="Rectangle 102" x="0.75" y="0.75" width="258.5" height="170.5" rx="34.25" stroke="url(#paint3_linear_1441_1571)" stroke-width="1.5" />
                </g>
                <defs>
                    <defs>
                        <linearGradient id="paint0_linear_1441_1571" x1="132.5" y1="11" x2="132.5" y2="166" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E8CCEE" />
                            <stop offset="0.387873" stop-color="#F0E1F4" />
                            <stop offset="0.490872" stop-color="#F2E7F6" />
                            <stop offset="0.599364" stop-color="#F0E1F3" />
                            <stop offset="1" stop-color="#E8CCEE" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1441_1571" x1="-249.957" y1="-160.882" x2="195.424" y2="406.063" gradientUnits="userSpaceOnUse">
                            <stop offset="0.461286" stop-color="#841799" />
                            <stop offset="0.684967" stop-color="#831598" stop-opacity="0" />
                            <stop offset="0.685008" stop-color="#831598" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1441_1571" x1="-277.609" y1="-185.733" x2="219.742" y2="429.772" gradientUnits="userSpaceOnUse">
                            <stop offset="0.461286" stop-color="#841799" />
                            <stop offset="0.659701" stop-color="#831598" stop-opacity="0" />
                            <stop offset="0.660524" stop-color="#831598" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1441_1571" x1="-282.609" y1="-190.733" x2="214.742" y2="424.772" gradientUnits="userSpaceOnUse">
                            <stop offset="0.461286" stop-color="#841799" />
                            <stop offset="0.702083" stop-color="#831598" stop-opacity="0" />
                            <stop offset="0.702183" stop-color="#831598" />
                        </linearGradient>
                    </defs>
                </defs>

                <use xlinkHref={xlinkHref} x="0" y="0" viewBox="0 0 265 177"></use>
                {/* <use xlinkHref={xlinkHref} x="0" y="0" viewBox="0 0 230 153"></use> */}

                <text
                    id={idTitle1}
                    textAnchor="middle"
                    x="132"
                    y="55"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle1}
                </text>
                <text
                    id={idText1}
                    textAnchor="middle"
                    x="132"
                    y="78"
                    className={sliderSvgTextClass}
                >
                    {childrenText1}
                </text>
                <text
                    id={idTitle2}
                    textAnchor="middle"
                    x="132"
                    y="109"
                    className={sliderSvgTitleClass}
                >
                    {childrenTitle2}
                </text>
                <text
                    id={idText2}
                    textAnchor="middle"
                    x="132"
                    y="132"
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
