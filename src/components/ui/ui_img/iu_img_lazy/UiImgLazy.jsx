import React, { useEffect, useState, useRef } from "react";

import { ClipLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto'
};
const color = "#C975D8";

const UiImgLazy = ({ src, alt, className, id, ref, style }) => {

    const [srcImg, setSrcImg] = useState(null);
    const [imageOpened, setImageOpened] = useState(false);

    useEffect(() => {

        const loadImage = async () => {
            const response = await fetch(src);
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            setSrcImg(objectURL);

            const timeout = setTimeout(() => {
                setImageOpened(true);

            }, 100);

            return () => {
                clearTimeout(timeout);
            };
        };

        loadImage();


    }, []);

    return (
        <>
            {imageOpened ? <img
                src={srcImg}
                alt={alt}
                className={className}
                id={id}
                ref={ref}
                style={{style}}
            /> : <ClipLoader
                color={color}
                cssOverride={override}
            />}
        </>
    );
}

export default UiImgLazy;