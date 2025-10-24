// "use client";

import React, { useState, useRef, Suspense, lazy, useEffect, useLayoutEffect, useContext } from 'react';

import './app.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useScrollbarWidth } from '../hooks';
import { useWindowHeight } from '../hooks';
import { useMediaQuery } from '../hooks';

import { ErrorBoundary } from 'react-error-boundary';
import { ClipLoader } from 'react-spinners';

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { CSSPlugin } from 'gsap/CSSPlugin'
import classNames from 'classnames';

import { Header, Main, Companies, Info, Certificates, Footer } from './sections';
const Procedures = lazy(() => import('./sections/procedures/Procedures'));


import { ModalProvider } from '../contexts';
import { ModalContext } from '../contexts';

import {
    ErrorScreenProc,
    ErrorScreenCert,
    ErrorScreenFooter,
    ErrorScreenMain,
    ErrorScreenHeader,
    ErrorScreenCompanies,
    ErrorScreenInfo
} from '../error/error_screens';

import funcQueryMedia from '../func/func_query_media/funcQueryMedia';

import dataCompanies from '../data/data_companies/dataCompanies.json';
import dataInfo from '../data/data_info/dataInfo.json';

const override = {
    display: 'block',
    margin: '0 auto',
    marginBottom: 80
};

const color = "#C975D8";


function App() {

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

    const wrapperClass = classNames({
        'wrapper': media1728 === true,
        'wrapper--1133': media1133 === true,
        'wrapper--744': media744 === true,
        'wrapper--744l': media744l === true,
        'wrapper--375': media375 === true,
        'wrapper--275': media275 === true,
        'wrapper--1300': media1300 === true,
        'wrapper--900': media900 === true,
        'wrapper--600': media600 === true,
        'wrapper--600l': media600l === true,
    });

    const wrapperProceduresClass = classNames({
        'wrapper__procedures': media1728 === true,
        'wrapper--1133__procedures': media1133 === true,
        'wrapper--744__procedures': media744 === true,
        'wrapper--744l__procedures': media744l === true,
        'wrapper--375__procedures': media375 === true,
        'wrapper--275__procedures': media275 === true,
        'wrapper--1300__procedures': media1300 === true,
        'wrapper--900__procedures': media900 === true,
        'wrapper--600__procedures': media600 === true,
        'wrapper--600l__procedures': media600l === true,
    });

    const wrapperCertificatesClass = classNames({
        'wrapper__certificates': media1728 === true,
        'wrapper--1133__certificates': media1133 === true,
        'wrapper--744__certificates': media744 === true,
        'wrapper--744l__certificates': media744l === true,
        'wrapper--375__certificates': media375 === true,
        'wrapper--275__certificates': media275 === true,
        'wrapper--1300__certificates': media1300 === true,
        'wrapper--900__certificates': media900 === true,
        'wrapper--600__certificates': media600 === true,
        'wrapper--600l__certificates': media600l === true,
    });

    const scrollbarWidth = useScrollbarWidth();

    const { headerHeight, isToggled } = useContext(ModalContext);

    const bodyRef = useRef(null);
    const faceRef = useRef(null);

    const [state, setState] = useState({})
    const callback = payload => {
        setState(payload);
    }

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSPlugin);
    const artRef1 = useRef(null);
    const scrollTo = (target, offsety) =>
        gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: offsety } });
    const artRef1Scroll = () => {
        scrollTo(artRef1.current, state.height + Number(0));
    };

    const headerRef = useRef();
    const scrollRef = useRef();
    // const proceduresRef = useRef();

    const { isScrolling, isScrollingUp, isScrollingDown } = useScrollDirection();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isBottom, setIsBottom] = useState(false);

    const windowHeight = useWindowHeight();

    const animateHeaderOut = (y, duration) => {
        gsap.timeline()
            .to(headerRef.current, { y: y, opacity: 0, duration: duration });
    };

    const animateHeaderIn = (duration) => {
        gsap.timeline()
            .to(headerRef.current, { opacity: 1, duration: duration });
    };

    useLayoutEffect(() => {
        const handleScroll = () => {

            const position = window.scrollY;
            setScrollPosition(position);

            const bottom = (position + windowHeight + 10) > scrollRef.current.scrollHeight;

            if (bottom === true) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }

            if (isScrollingDown) {
                animateHeaderOut(position, 1);
                animateHeaderIn(1);
            } else if (isScrollingUp) {
                animateHeaderOut(position - (headerHeight + 2), 0.01);
                animateHeaderOut(position, 1);
                animateHeaderIn(1);
            }

        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);


    return (
        <>
            <ModalProvider>
                <div ref={scrollRef}>
                    <div
                        className={wrapperClass}
                        ref={headerRef}
                        style={isBottom ? { display: 'none' }
                            : { display: 'block', position: 'relative', margin: 'auto', top: 0, left: 0, right: 0, zIndex: 99 }
                        }
                    >
                        <ErrorBoundary FallbackComponent={ErrorScreenHeader}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                {<Header callback={callback} scroll={artRef1Scroll} ref={headerRef} position={scrollPosition} />}
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div
                        className={wrapperClass}
                        id='wrapper-main'
                    >
                        <ErrorBoundary FallbackComponent={ErrorScreenMain}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Main bottom={isBottom} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div ref={artRef1} className={wrapperProceduresClass}>
                        <ErrorBoundary FallbackComponent={ErrorScreenProc}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Procedures bodyRef={bodyRef} faceRef={faceRef} bottom={isBottom} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div className={wrapperClass}>
                        <ErrorBoundary FallbackComponent={ErrorScreenCompanies}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Companies data={dataCompanies} bottom={isBottom} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div className={wrapperClass}>
                        <ErrorBoundary FallbackComponent={ErrorScreenInfo}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Info data={dataInfo} bottom={isBottom} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div className={wrapperCertificatesClass}>
                        <ErrorBoundary FallbackComponent={ErrorScreenCert}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Certificates bottom={isBottom} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div className={wrapperClass} >
                        <ErrorBoundary FallbackComponent={ErrorScreenFooter}>
                            <Suspense fallback={<ClipLoader
                                color={color}
                                cssOverride={override}
                            />}>
                                <Footer bodyRef={bodyRef} faceRef={faceRef} scroll={artRef1Scroll} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
            </ModalProvider>
        </>
    );
}

export default App;
