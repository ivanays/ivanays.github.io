"use client";
import React, { Suspense, lazy, useState, useRef } from "react";
import { ClipLoader } from 'react-spinners';

const LazyImage = lazy(() => import('./iu_img_lazy/UiImgLazy'));

const override = {
    display: 'block',
    margin: '0 auto'
};
const color = "#C975D8";

export const UiImg = ({ src, alt, className, id, ref, style }) => {

    return (
        <Suspense fallback={<ClipLoader
            color={color}
            cssOverride={override}
        />}>
            <LazyImage src={src} alt={alt} className={className} id={id} ref={ref} style={style} />
        </Suspense>
    );
}

