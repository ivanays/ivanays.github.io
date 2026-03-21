// "use client";

import React, { useState, useRef, Suspense, lazy, useEffect, useLayoutEffect, useContext } from 'react';
import { useOrientation } from 'react-use';

import './app.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useNavigate } from 'react-router';

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
import funcQueryNumber from '../func/func_query_number/funcQueryNumber';

import dataCompanies from '../data/data_companies/dataCompanies.json';
import dataInfo from '../data/data_info/dataInfo.json';

const override = {
    display: 'block',
    margin: '0 auto',
    marginBottom: 80
};

const color = "#C975D8";


function App() {

    const { type } = useOrientation();
    console.log(type);

    useEffect(() => {
        window.sessionStorage.setItem('orientation', type);
    }), [];

    useEffect(() => {
        const orientation = window.sessionStorage.getItem('orientation');
        if (orientation !== type) {
            window.sessionStorage.setItem('orientation', type);
            window.location.reload();
        }
    }), [type];
    
    const queryNumber = funcQueryNumber();
    console.log(queryNumber);

    const wrapperClass = classNames(`wrapper${queryNumber}`);
    const wrapperProceduresClass = classNames(`wrapper${queryNumber}__procedures`);
    const wrapperCertificatesClass = classNames(`wrapper${queryNumber}__certificates`);

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
