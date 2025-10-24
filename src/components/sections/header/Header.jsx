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

    const headerClass = classNames({
        'header': media1728 === true,
        'header--1133': media1133 === true,
        'header--744': media744 === true,
        'header--744l': media744l === true,
        'header--375': media375 === true,
        'header--275': media275 === true,
        'header--1300': media1300 === true,
        'header--900': media900 === true,
        'header--600': media600 === true,
        'header--600l': media600l === true,
    });

    const headerInnerClass = classNames({
        'header__inner': media1728 === true,
        'header--1133__inner': media1133 === true,
        'header--744__inner': media744 === true,
        'header--744l__inner': media744l === true,
        'header--375__inner': media375 === true,
        'header--275__inner': media275 === true,
        'header--1300__inner': media1300 === true,
        'header--900__inner': media900 === true,
        'header--600__inner': media600 === true,
        'header--600l__inner': media600l === true,
    });

    const headerLeftClass = classNames({
        'header__left': media1728 === true,
        'header--1133__left': media1133 === true,
        'header--744__left': media744 === true,
        'header--744l__left': media744l === true,
        'header--375__left': media375 === true,
        'header--275__left': media275 === true,
        'header--1300__left': media1300 === true,
        'header--900__left': media900 === true,
        'header--600__left': media600 === true,
        'header--600l__left': media600l === true,
    });

    const headerInnerLeftClass = classNames({
        'header__inner-left': media1728 === true,
        'header--1133__inner-left': media1133 === true,
        'header--744__inner-left': media744 === true,
        'header--744l__inner-left': media744l === true,
        'header--375__inner-left': media375 === true,
        'header--275__inner-left': media275 === true,
        'header--1300__inner-left': media1300 === true,
        'header--900__inner-left': media900 === true,
        'header--600__inner-left': media600 === true,
        'header--600l__inner-left': media600l === true,
    });

    const headerLineClass = classNames({
        'header__line': media1728 === true,
        'header--1133__line': media1133 === true,
        'header--744__line': media744 === true,
        'header--744l__line': media744l === true,
        'header--375__line': media375 === true,
        'header--275__line': media275 === true,
        'header--1300__line': media1300 === true,
        'header--900__line': media900 === true,
        'header--600__line': media600 === true,
        'header--600l__line': media600l === true,
    });

    const headerRightClass = classNames({
        'header__right': media1728 === true,
        'header--1133__right': media1133 === true,
        'header--744__right': media744 === true,
        'header--744l__right': media744l === true,
        'header--375__right': media375 === true,
        'header--275__right': media275 === true,
        'header--1300__right': media1300 === true,
        'header--900__right': media900 === true,
        'header--600__right': media600 === true,
        'header--600l__right': media600l === true,
    });

    const headerInnerRightClass = classNames({
        'header__inner-right': media1728 === true,
        'header--1133__inner-right': media1133 === true,
        'header--744__inner-right': media744 === true,
        'header--744l__inner-right': media744l === true,
        'header--375__inner-right': media375 === true,
        'header--275__inner-right': media275 === true,
        'header--1300__inner-right': media1300 === true,
        'header--900__inner-right': media900 === true,
        'header--600__inner-right': media600 === true,
        'header--600l__inner-right': media600l === true,
    });

    const containerClass = classNames({
        'container': media1728 === true,
        'container--1133': media1133 === true,
        'container--744': media744 === true,
        'container--744l': media744l === true,
        'container--375': media375 === true,
        'container--275': media275 === true,
        'container--1300': media1300 === true,
        'container--900': media900 === true,
        'container--600': media600 === true,
        'container--600l': media600l === true,
    });

    const blockClass = classNames({
        'block': media1728 === true,
        'block--1133': media1133 === true,
        'block--744': media744 === true,
        'block--744l': media744l === true,
        'block--375': media375 === true,
        'block--275': media275 === true,
        'block--1300': media1300 === true,
        'block--900': media900 === true,
        'block--600': media600 === true,
        'block--600l': media600l === true,
    });

    const blockLockClass = classNames({
        'block-lock': media1728 === true,
        'block-lock--1133': media1133 === true,
        'block-lock--744': media744 === true,
        'block-lock--744l': media744l === true,
        'block-lock--375': media375 === true,
        'block-lock--275': media275 === true,
        'block-lock--1300': media1300 === true,
        'block-lock--900': media900 === true,
        'block-lock--600': media600 === true,
        'block-lock--600l': media600l === true,
    });

    const blockBodyClass = classNames({
        'block__body': media1728 === true,
        'block--1133__body': media1133 === true,
        'block--744__body': media744 === true,
        'block--744l__body': media744l === true,
        'block--375__body': media375 === true,
        'block--275__body': media275 === true,
        'block--1300__body': media1300 === true,
        'block--900__body': media900 === true,
        'block--600__body': media600 === true,
        'block--600l__body': media600l === true,
    });

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
