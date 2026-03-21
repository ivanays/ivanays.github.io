import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useContext
} from 'react';

import './Header.scss';

import gsap from 'gsap';

import classNames from 'classnames';

import { ModalContext } from '../../../contexts';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useLoadImageBg } from '../../../hooks';
import { useMediaQuery } from '../../../hooks';
import { useWindowHeight } from '../../../hooks';
import { useWindowWidth } from '../../../hooks';

import funcQueryMedia from '../../../func/func_query_media/funcQueryMedia';
import funcQueryNumber from '../../../func/func_query_number/funcQueryNumber';

import { ClipLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto'
};
const color = "#C975D8";

import {
    HeaderLogo,
    HeaderTitle,
    HeaderMenu,
    HeaderBurger,
    HeaderPhone,
    HeaderPhoneIcon,
} from './index';

import { ModalClose } from '../../modals/modal/modal_close';

import HeaderBg1728 from '../../../images/bg-header.png';
import HeaderBg1300 from '../../../images/bg-header1300.png';
import HeaderBg1133 from '../../../images/bg-header1133.png';
import HeaderBg900 from '../../../images/bg-header900.png';
import HeaderBg744 from '../../../images/bg-header744.png';
import HeaderBg600 from '../../../images/bg-header600.png';
import HeaderBg375 from '../../../images/bg-header375.png';
import HeaderBg275 from '../../../images/bg-header275_60.png';

import dataHeaderLogo from '../../../data/data_header/data_header_logo/dataHeaderLogo.json';
import dataHeaderTitle from '../../../data/data_header/data_header_title/dataHeaderTitle.json';
import dataHeaderMenu from '../../../data/data_header/data_header_menu/dataHeaderMenu.json';
import dataHeaderBurger from '../../../data/data_header/data_header_burger/dataHeaderBurger.json';
import dataHeaderPhone from '../../../data/data_header/data_header_phone/dataHeaderPhone.json';
import dataPhone from '../../../data/data_phone/dataPhone.json';
import dataModelClose from '../../../data/data_modal/data_modal_close/dataModalClose.json'

export const Header = (props) => {

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

    let queryNumber = funcQueryNumber();

    const headerClass = classNames(`header${queryNumber}`);
    const headerInnerClass = classNames(`header${queryNumber}__inner`);
    const headerLeftClass = classNames(`header${queryNumber}__left`);
    const headerInnerLeftClass = classNames(`header${queryNumber}__inner-left`);
    const headerLineClass = classNames(`header${queryNumber}__line`);
    const headerRightClass = classNames(`header${queryNumber}__right`);
    const headerInnerRightClass = classNames(`header${queryNumber}__inner-right`);
    const containerClass = classNames(`container${queryNumber}`);
    const blockClass = classNames(`block${queryNumber}`);
    const blockLockClass = classNames(`block-lock${queryNumber}`);
    const blockBodyClass = classNames(`block${queryNumber}__body`);

    const ref = useRef(null);
    const headerLeft = useRef(null);

    const [width, setWidth] = useState(1728);
    const [height, setHeight] = useState(140);

    const { modalOpened, scrollbarWidthBody, isToggled, handleToggle } = useContext(ModalContext);

    const { isScrolling, isScrollingUp, isScrollingDown } = useScrollDirection();

    const animateHeaderLeft = () => {
        gsap.timeline()
            .to(headerLeft.current, {
                opacity: 0,
                blur: 2,
                scale: 0
            })
            .to(headerLeft.current, {
                opacity: 1,
                blur: 0,
                scale: 1,
                duration: 2
            });
    }

    const [left, setLeft] = useState(0);

    const windowHeight = useWindowHeight();
    const windowWidth = useWindowWidth();


    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

    useEffect(() => {
        setLeft(0);
    }, []);

    useEffect(() => {
        setLeft((windowWidth - width) / 2);
    }, [isScrolling]);

    const state = {
        width: width,
        height: height,
    };

    function loadCallback() {
        return props.callback(state);
    }

    useEffect(() => {
        loadCallback();
        if (media1728 === true || media1300 === true || media1133 === true || media900 || media744 === true) animateHeaderLeft();
    }, []);

    const loadedImageBg1728 = useLoadImageBg(HeaderBg1728);
    const loadedImageBg1300 = useLoadImageBg(HeaderBg1300);
    const loadedImageBg1133 = useLoadImageBg(HeaderBg1133);
    const loadedImageBg900 = useLoadImageBg(HeaderBg900);
    const loadedImageBg744 = useLoadImageBg(HeaderBg744);
    const loadedImageBg744l = useLoadImageBg(HeaderBg744);
    const loadedImageBg600 = useLoadImageBg(HeaderBg600);
    const loadedImageBg600l = useLoadImageBg(HeaderBg600);
    const loadedImageBg375 = useLoadImageBg(HeaderBg375);
    const loadedImageBg275 = useLoadImageBg(HeaderBg275);

    let loadedImageBg;

    (media1728) ? loadedImageBg = loadedImageBg1728
        : (media1300) ? loadedImageBg = loadedImageBg1300
            : (media1133) ? loadedImageBg = loadedImageBg1133
                : (media900) ? loadedImageBg = loadedImageBg900
                    : (media744) ? loadedImageBg = loadedImageBg744
                        : (media744l) ? loadedImageBg = loadedImageBg744l
                            : (media600) ? loadedImageBg = loadedImageBg600
                                : (media600l) ? loadedImageBg = loadedImageBg600l
                                    : (media375) ? loadedImageBg = loadedImageBg375
                                        : (media275) ? loadedImageBg = loadedImageBg275 : null;

    const rightHeader = modalOpened ? `${scrollbarWidthBody}px` : '0px';

    const handleClose = () => {
        isToggled ? handleToggle() : null;
    }

    return (
        <>
            <header ref={ref} className={headerClass} style={{
                background: `url(${loadedImageBg}), linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
                right: rightHeader,
                zIndex: 99
            }}>
                <div className={containerClass}>
                    <div className={headerInnerClass}>
                        <div
                            className={headerLeftClass}
                            style={props.position === 0 ? { opacity: 1 } : { opacity: 0 }}
                            ref={headerLeft}
                        >
                            <div className={`${headerInnerClass} ${headerInnerLeftClass}`}>
                                {props.position === 0 ? <HeaderLogo data={dataHeaderLogo} position={props.position} /> : null}
                                {props.position === 0 ? <HeaderTitle data={dataHeaderTitle} position={props.position} /> : null}
                            </div>
                            {props.position === 0 ? <div className={headerLineClass}></div> : null}
                        </div>
                        <div className={headerRightClass}>
                            <div className={`${headerInnerClass} ${headerInnerRightClass}`}>
                                <div className={isToggled ? blockClass : blockLockClass} onClick={handleClose} style={isToggled ?
                                    {
                                        position: 'fixed',
                                        width: `${windowWidth}px`,
                                        height: `${windowHeight}px`,
                                        left: `-${left}px`,
                                        top: '0px'
                                        // top: `${props.position}px`
                                    } : null}>
                                    <div className={isToggled ? blockBodyClass : blockLockClass} onClick={(event) => event.stopPropagation()}>
                                        {isToggled ? <ModalClose data={dataModelClose} handleClose={handleClose} /> : null}
                                        <HeaderMenu
                                            callback={loadCallback}
                                            scroll={props.scroll}
                                            data={dataHeaderMenu}
                                        />
                                    </div>
                                </div>
                                <HeaderBurger data={dataHeaderBurger} />
                                {media275 || media375 || media600 || media600l || media744 || media744l || media900
                                    ? <HeaderPhoneIcon dataPhone={dataPhone} data={dataHeaderPhone} />
                                    : <HeaderPhone dataPhone={dataPhone} data={dataHeaderPhone} />
                                }
                                {/* <HeaderPhone dataPhone={dataPhone} data={dataHeaderPhone} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
