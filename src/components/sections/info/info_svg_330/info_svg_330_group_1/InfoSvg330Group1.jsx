import React, { useEffect, useState } from "react";

import './InfoSvg330Group1.scss';

import { funcRandomIntFromInterval } from "../../../../../func/func_random/func_random_int_from_interval/funcRandomIntFromInterval";

export const InfoSvg330Group1 = () => {

    const minXY = 0.75;
    const maxX = 14.25;
    const maxY = 12.12;

    const [randomX, setRandomX] = useState();
    const [randomY, setRandomY] = useState();

    const setRandomXY = () => {
        const x = funcRandomIntFromInterval(minXY, maxX);
        const y = funcRandomIntFromInterval(minXY, maxY);

        setRandomX(x);
        setRandomY(y);
    };

    useEffect(() => {
        setRandomXY();
    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            setRandomXY();

        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [randomX, randomY]);

    return (
        <>
            <g id="svg-group-1">

                <path id="path1-1" d="M54 29.5H292C295.038 29.5 297.5 31.9624 297.5 35V169C297.5 180.874 287.874 190.5 276 190.5H38C34.9624 190.5 32.5 188.038 32.5 185V51C32.5 39.1259 42.1259 29.5 54 29.5Z" fill="url(#paint0_linear_1325_1581)" stroke="url(#paint1_linear_1325_1581)" />
                <rect id="rect1-2" x="14.25" y="12.1289" width="315" height="207.121" rx="34.25" stroke="url(#paint2_linear_1325_1581)" stroke-width="1.5" />
                <rect id="rect2-2" x="0.75" y="0.75" width="315" height="207.121" rx="34.25" stroke="url(#paint3_linear_1325_1581)" stroke-width="1.5" />

                <circle
                    id="circle1-2"
                    cx="407"
                    cy="121"
                    r="0.5"
                    fill="#841799"
                    stroke="#841799"
                    strokeWidth="0.5"
                ></circle>

                <animateMotion
                    xlinkHref="#circle1-2"
                    dur="8.5s"
                    repeatCount="indefinite"
                    begin="3s"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle1-2-animpath"
                >
                    <mpath xlinkHref="#path-circle1"></mpath>
                </animateMotion>

                <animate
                    xlinkHref="#circle1-2"
                    attributeType="XML"
                    attributeName="r"
                    keyTimes="0; 0.1; 0.95; 0.96; 0.97; 1"
                    values="0.5; 2; 2; 10; 0.1; 0.1"
                    dur="8.5s"
                    begin="3s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle1-2-animr"
                ></animate>

                <animate
                    xlinkHref="#circle1-2"
                    attributeType="XML"
                    attributeName="fill"
                    from="#841799"
                    to="#fff"
                    dur="8.5s"
                    begin="3s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle1-2-animfill"
                ></animate>

                <circle
                    id="circle2-2"
                    cx="222"
                    cy="260"
                    r="0.5"
                    fill="#841799"
                    stroke="#841799"
                    strokeWidth="0.5"
                ></circle>

                <animateMotion
                    xlinkHref="#circle2-2"
                    dur="8.5s"
                    repeatCount="indefinite"
                    begin="3s"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle2-2-animpath"
                >
                    <mpath xlinkHref="#path-circle2"></mpath>
                </animateMotion>

                <animate
                    xlinkHref="#circle2-2"
                    attributeType="XML"
                    attributeName="r"
                    keyTimes="0; 0.1; 0.95; 0.96; 0.97; 1"
                    values="0.5; 2; 2; 10; 0.1; 0.1"
                    dur="8.5s"
                    begin="3s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle2-2-animr"
                ></animate>

                <animate
                    xlinkHref="#circle2-2"
                    attributeType="XML"
                    attributeName="fill"
                    from="#841799"
                    to="#fff"
                    dur="8.5s"
                    begin="3s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="circle2-2-animfill"
                ></animate>

                <animate
                    xlinkHref="#rect1-2"
                    attributeType="XML"
                    attributeName="x"
                    from="18.75"
                    to="18.75"
                    values={`${maxX}; ${randomX}; ${maxX}`}
                    keyTimes="0; 0.5; 1"
                    keySplines=".42 0 1 1; 0 0 .59 1;"
                    dur="11s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                    restart="whenNotActive"
                    id="rect1-2-animx"
                ></animate>

                <animate
                    xlinkHref="#rect1-2"
                    attributeType="XML"
                    attributeName="y"
                    from="15.75"
                    to="15.75"
                    values={`${maxY}; ${randomY}; ${maxY}`}
                    keyTimes="0; 0.5; 1"
                    keySplines=".42 0 1 1; 0 0 .59 1;"
                    dur="11s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                    restart="whenNotActive"
                    id="rect1-2-animy"
                ></animate>

                <animate
                    xlinkHref="#rect2-2"
                    attributeType="XML"
                    attributeName="x"
                    from="0.75"
                    to="0.75"
                    values={`${minXY}; ${randomX}; ${minXY}`}
                    keyTimes="0; 0.5; 1"
                    keySplines=".42 0 1 1; 0 0 .59 1;"
                    dur="11s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                    restart="whenNotActive"
                    id="rect2-2-animx"
                ></animate>

                <animate
                    xlinkHref="#rect2-2"
                    attributeType="XML"
                    attributeName="y"
                    from="0.75"
                    to="0.75"
                    values={`${minXY}; ${randomY}; ${minXY}`}
                    keyTimes="0; 0.5; 1"
                    keySplines=".42 0 1 1; 0 0 .59 1;"
                    dur="11s"
                    begin="0s"
                    repeatCount="indefinite"
                    fill="freeze"
                    restart="whenNotActive"
                    id="rect2-2-animy"
                ></animate>

                <animate
                    xlinkHref="#title2-1r"
                    attributeType="XML"
                    attributeName="x"
                    keyTime="0; 0.01; 0.02; 0.03; 0.04; 0.05; 0.06; 1"
                    values="220; 226; 216; 224; 218; 222; 220; 220"
                    dur="8.5s"
                    begin="11.5s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="title2-1-animx"
                ></animate>

                <animate
                    xlinkHref="#text2-1r"
                    attributeType="XML"
                    attributeName="x"
                    keyTime="0; 0.01; 0.02; 0.03; 0.04; 0.05; 0.06; 1"
                    values="220; 218; 220; 222; 224; 222; 220; 220"
                    dur="8.5s"
                    begin="11.5s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="text2-1-animx"
                ></animate>

                <animate
                    xlinkHref="#title2-2r"
                    attributeType="XML"
                    attributeName="x"
                    keyTime="0; 0.01; 0.02; 0.03; 0.04; 0.05; 0.06; 1"
                    values="220; 222; 224; 226; 228; 230; 220; 220"
                    dur="8.5s"
                    begin="11.5s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="title2-2-animx"
                ></animate>

                <animate
                    xlinkHref="#text2-2r"
                    attributeType="XML"
                    attributeName="x"
                    keyTime="0; 0.01; 0.02; 0.03; 0.04; 0.05; 0.06; 1"
                    values="220; 214; 216; 218; 220; 222; 220; 220"
                    dur="8.5s"
                    begin="11.5s"
                    repeatCount="indefinite"
                    fill="remove"
                    restart="whenNotActive"
                    id="text2-2-animx"
                ></animate>
            </g>
        </>
    );
}
