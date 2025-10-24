import React, { useLayoutEffect, useState, useRef } from "react";

import './Companies.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from "../../../hooks";

import classNames from "classnames";

import funcQueryMedia from "../../../func/func_query_media/funcQueryMedia";

import { UiH2, UiP } from '../../ui';

export const Companies = (props) => {

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

    const companiesClass = classNames({
        'companies': media1728 === true,
        'companies--1133': media1133 === true,
        'companies--744': media744 === true,
        'companies--744l': media744l === true,
        'companies--375': media375 === true,
        'companies--275': media275 === true,
        'companies--1300': media1300 === true,
        'companies--900': media900 === true,
        'companies--600': media600 === true,
        'companies--600l': media600l === true,
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

    const containerCompaniesClass = classNames({
        'container-companies': media1728 === true,
        'container-companies--1133': media1133 === true,
        'container-companies--744': media744 === true,
        'container-companies--744l': media744l === true,
        'container-companies--375': media375 === true,
        'container-companies--275': media275 === true,
        'container-companies--1300': media1300 === true,
        'container-companies--900': media900 === true,
        'container-companies--600': media600 === true,
        'container-companies--600l': media600l === true,
    });

    const companiesListClass = classNames({
        'companies__list': media1728 === true,
        'companies--1133__list': media1133 === true,
        'companies--744__list': media744 === true,
        'companies--744l__list': media744l === true,
        'companies--375__list': media375 === true,
        'companies--275__list': media275 === true,
        'companies--1300__list': media1300 === true,
        'companies--900__list': media900 === true,
        'companies--600__list': media600 === true,
        'companies--600l__list': media600l === true,
    });

    const companiesItemClass = classNames({
        'companies__item': media1728 === true,
        'companies--1133__item': media1133 === true,
        'companies--744__item': media744 === true,
        'companies--744l__item': media744l === true,
        'companies--375__item': media375 === true,
        'companies--275__item': media275 === true,
        'companies--1300__item': media1300 === true,
        'companies--900__item': media900 === true,
        'companies--600__item': media600 === true,
        'companies--600l__item': media600l === true,
    });

    const companiesItemMychwayClass = classNames({
        'companies__item-mychway': media1728 === true,
        'companies--1133__item-mychway': media1133 === true,
        'companies--744__item-mychway': media744 === true,
        'companies--744l__item-mychway': media744l === true,
        'companies--375__item-mychway': media375 === true,
        'companies--275__item-mychway': media275 === true,
        'companies--1300__item-mychway': media1300 === true,
        'companies--900__item-mychway': media900 === true,
        'companies--600__item-mychway': media600 === true,
        'companies--600l__item-mychway': media600l === true,
    });

    const companiesFrameClass = classNames({
        'companies__frame': media1728 === true,
        'companies--1133__frame': media1133 === true,
        'companies--744__frame': media744 === true,
        'companies--744l__frame': media744l === true,
        'companies--375__frame': media375 === true,
        'companies--275__frame': media275 === true,
        'companies--1300__frame': media1300 === true,
        'companies--900__frame': media900 === true,
        'companies--600__frame': media600 === true,
        'companies--600l__frame': media600l === true,
    });

    const companiesFrameMychwayClass = classNames({
        'companies__frame-mychway': media1728 === true,
        'companies--1133__frame-mychway': media1133 === true,
        'companies--744__frame-mychway': media744 === true,
        'companies--744l__frame-mychway': media744l === true,
        'companies--375__frame-mychway': media375 === true,
        'companies--275__frame-mychway': media275 === true,
        'companies--1300__frame-mychway': media1300 === true,
        'companies--900__frame-mychway': media900 === true,
        'companies--600__frame-mychway': media600 === true,
        'companies--600l__frame-mychway': media600l === true,
    });

    const companiesGroupClass = classNames({
        'companies__group': media1728 === true,
        'companies--1133__group': media1133 === true,
        'companies--744__group': media744 === true,
        'companies--744l__group': media744l === true,
        'companies--375__group': media375 === true,
        'companies--275__group': media275 === true,
        'companies--1300__group': media1300 === true,
        'companies--900__group': media900 === true,
        'companies--600__group': media600 === true,
        'companies--600l__group': media600l === true,
    });

    const companiesGroupMychwayClass = classNames({
        'companies__group-mychway': media1728 === true,
        'companies--1133__group-mychway': media1133 === true,
        'companies--744__group-mychway': media744 === true,
        'companies--744l__group-mychway': media744l === true,
        'companies--375__group-mychway': media375 === true,
        'companies--275__group-mychway': media275 === true,
        'companies--1300__group-mychway': media1300 === true,
        'companies--900__group-mychway': media900 === true,
        'companies--600__group-mychway': media600 === true,
        'companies--600l__group-mychway': media600l === true,
    });

    const companiesItemAuroClass = classNames({
        'companies__item-auro': media1728 === true,
        'companies--1133__item-auro': media1133 === true,
        'companies--744__item-auro': media744 === true,
        'companies--744l__item-auro': media744l === true,
        'companies--375__item-auro': media375 === true,
        'companies--275__item-auro': media275 === true,
        'companies--1300__item-auro': media1300 === true,
        'companies--900__item-auro': media900 === true,
        'companies--600__item-auro': media600 === true,
        'companies--600l__item-auro': media600l === true,
    });

    const companiesItemSalonartClass = classNames({
        'companies__item-salonart': media1728 === true,
        'companies--1133__item-salonart': media1133 === true,
        'companies--744__item-salonart': media744 === true,
        'companies--744l__item-salonart': media744l === true,
        'companies--375__item-salonart': media375 === true,
        'companies--275__item-salonart': media275 === true,
        'companies--1300__item-salonart': media1300 === true,
        'companies--900__item-salonart': media900 === true,
        'companies--600__item-salonart': media600 === true,
        'companies--600l__item-salonart': media600l === true,
    });

    const companiesItemVibroClass = classNames({
        'companies__item-vibro': media1728 === true,
        'companies--1133__item-vibro': media1133 === true,
        'companies--744__item-vibro': media744 === true,
        'companies--744l__item-vibro': media744l === true,
        'companies--375__item-vibro': media375 === true,
        'companies--275__item-vibro': media275 === true,
        'companies--1300__item-vibro': media1300 === true,
        'companies--900__item-vibro': media900 === true,
        'companies--600__item-vibro': media600 === true,
        'companies--600l__item-vibro': media600l === true,
    });

    const companiesItemDrceuracleClass = classNames({
        'companies__item-drceuracle': media1728 === true,
        'companies--1133__item-drceuracle': media1133 === true,
        'companies--744__item-drceuracle': media744 === true,
        'companies--744l__item-drceuracle': media744l === true,
        'companies--375__item-drceuracle': media375 === true,
        'companies--275__item-drceuracle': media275 === true,
        'companies--1300__item-drceuracle': media1300 === true,
        'companies--900__item-drceuracle': media900 === true,
        'companies--600__item-drceuracle': media600 === true,
        'companies--600l__item-drceuracle': media600l === true,
    });

    const companiesFrameAuroClass = classNames({
        'companies__frame-auro': media1728 === true,
        'companies--1133__frame-auro': media1133 === true,
        'companies--744__frame-auro': media744 === true,
        'companies--744l__frame-auro': media744l === true,
        'companies--375__frame-auro': media375 === true,
        'companies--275__frame-auro': media275 === true,
        'companies--1300__frame-auro': media1300 === true,
        'companies--900__frame-auro': media900 === true,
        'companies--600__frame-auro': media600 === true,
        'companies--600l__frame-auro': media600l === true,
    });

    const companiesFrameSalonartClass = classNames({
        'companies__frame-salonart': media1728 === true,
        'companies--1133__frame-salonart': media1133 === true,
        'companies--744__frame-salonart': media744 === true,
        'companies--744l__frame-salonart': media744l === true,
        'companies--375__frame-salonart': media375 === true,
        'companies--275__frame-salonart': media275 === true,
        'companies--1300__frame-salonart': media1300 === true,
        'companies--900__frame-salonart': media900 === true,
        'companies--600__frame-salonart': media600 === true,
        'companies--600l__frame-salonart': media600l === true,
    });

    const companiesFrameVibroClass = classNames({
        'companies__frame-vibro': media1728 === true,
        'companies--1133__frame-vibro': media1133 === true,
        'companies--744__frame-vibro': media744 === true,
        'companies--744l__frame-vibro': media744l === true,
        'companies--375__frame-vibro': media375 === true,
        'companies--275__frame-vibro': media275 === true,
        'companies--1300__frame-vibro': media1300 === true,
        'companies--900__frame-vibro': media900 === true,
        'companies--600__frame-vibro': media600 === true,
        'companies--600l__frame-vibro': media600l === true,
    });

    const companiesFrameDrceuracleClass = classNames({
        'companies__frame-drceuracle': media1728 === true,
        'companies--1133__frame-drceuracle': media1133 === true,
        'companies--744__frame-drceuracle': media744 === true,
        'companies--744l__frame-drceuracle': media744l === true,
        'companies--375__frame-drceuracle': media375 === true,
        'companies--275__frame-drceuracle': media275 === true,
        'companies--1300__frame-drceuracle': media1300 === true,
        'companies--900__frame-drceuracle': media900 === true,
        'companies--600__frame-drceuracle': media600 === true,
        'companies--600l__frame-drceuracle': media600l === true,
    });

    const companiesGroupAuroClass = classNames({
        'companies__group-auro': media1728 === true,
        'companies--1133__group-auro': media1133 === true,
        'companies--744__group-auro': media744 === true,
        'companies--744l__group-auro': media744l === true,
        'companies--375__group-auro': media375 === true,
        'companies--275__group-auro': media275 === true,
        'companies--1300__group-auro': media1300 === true,
        'companies--900__group-auro': media900 === true,
        'companies--600__group-auro': media600 === true,
        'companies--600l__group-auro': media600l === true,
    });

    const companiesGroupSalonartClass = classNames({
        'companies__group-salonart': media1728 === true,
        'companies--1133__group-salonart': media1133 === true,
        'companies--744__group-salonart': media744 === true,
        'companies--744l__group-salonart': media744l === true,
        'companies--375__group-salonart': media375 === true,
        'companies--275__group-salonart': media275 === true,
        'companies--1300__group-salonart': media1300 === true,
        'companies--900__group-salonart': media900 === true,
        'companies--600__group-salonart': media600 === true,
        'companies--600l__group-salonart': media600l === true,
    });

    const companiesGroupVibroClass = classNames({
        'companies__group-vibro': media1728 === true,
        'companies--1133__group-vibro': media1133 === true,
        'companies--744__group-vibro': media744 === true,
        'companies--744l__group-vibro': media744l === true,
        'companies--375__group-vibro': media375 === true,
        'companies--275__group-vibro': media275 === true,
        'companies--1300__group-vibro': media1300 === true,
        'companies--900__group-vibro': media900 === true,
        'companies--600__group-vibro': media600 === true,
        'companies--600l__group-vibro': media600l === true,
    });

    const companiesGroupDrceuracleClass = classNames({
        'companies__group-drceuracle': media1728 === true,
        'companies--1133__group-drceuracle': media1133 === true,
        'companies--744__group-drceuracle': media744 === true,
        'companies--744l__group-drceuracle': media744l === true,
        'companies--375__group-drceuracle': media375 === true,
        'companies--275__group-drceuracle': media275 === true,
        'companies--1300__group-drceuracle': media1300 === true,
        'companies--900__group-drceuracle': media900 === true,
        'companies--600__group-drceuracle': media600 === true,
        'companies--600l__group-drceuracle': media600l === true,
    });

    const companiesNameClass = classNames({
        'companies__name': media1728 === true,
        'companies--1133__name': media1133 === true,
        'companies--744__name': media744 === true,
        'companies--744l__name': media744l === true,
        'companies--375__name': media375 === true,
        'companies--275__name': media275 === true,
        'companies--1300__name': media1300 === true,
        'companies--900__name': media900 === true,
        'companies--600__name': media600 === true,
        'companies--600l__name': media600l === true,
    });

    const companiesNameMychwayClass = classNames({
        'companies__name-mychway': media1728 === true,
        'companies--1133__name-mychway': media1133 === true,
        'companies--744__name-mychway': media744 === true,
        'companies--744l__name-mychway': media744l === true,
        'companies--375__name-mychway': media375 === true,
        'companies--275__name-mychway': media275 === true,
        'companies--1300__name-mychway': media1300 === true,
        'companies--900__name-mychway': media900 === true,
        'companies--600__name-mychway': media600 === true,
        'companies--600l__name-mychway': media600l === true,
    });

    const companiesNameAuroClass = classNames({
        'companies__name-auro': media1728 === true,
        'companies--1133__name-auro': media1133 === true,
        'companies--744__name-auro': media744 === true,
        'companies--744l__name-auro': media744l === true,
        'companies--375__name-auro': media375 === true,
        'companies--275__name-auro': media275 === true,
        'companies--1300__name-auro': media1300 === true,
        'companies--900__name-auro': media900 === true,
        'companies--600__name-auro': media600 === true,
        'companies--600l__name-auro': media600l === true,
    });

    const companiesNameSalonartClass = classNames({
        'companies__name-salonart': media1728 === true,
        'companies--1133__name-salonart': media1133 === true,
        'companies--744__name-salonart': media744 === true,
        'companies--744l__name-salonart': media744l === true,
        'companies--375__name-salonart': media375 === true,
        'companies--275__name-salonart': media275 === true,
        'companies--1300__name-salonart': media1300 === true,
        'companies--900__name-salonart': media900 === true,
        'companies--600__name-salonart': media600 === true,
        'companies--600l__name-salonart': media600l === true,
    });

    const companiesNameVibroClass = classNames({
        'companies__name-vibro': media1728 === true,
        'companies--1133__name-vibro': media1133 === true,
        'companies--744__name-vibro': media744 === true,
        'companies--744l__name-vibro': media744l === true,
        'companies--375__name-vibro': media375 === true,
        'companies--275__name-vibro': media275 === true,
        'companies--1300__name-vibro': media1300 === true,
        'companies--900__name-vibro': media900 === true,
        'companies--600__name-vibro': media600 === true,
        'companies--600l__name-vibro': media600l === true,
    });

    const companiesNameDrceuracleClass = classNames({
        'companies__name-drceuracle': media1728 === true,
        'companies--1133__name-drceuracle': media1133 === true,
        'companies--744__name-drceuracle': media744 === true,
        'companies--744l__name-drceuracle': media744l === true,
        'companies--375__name-drceuracle': media375 === true,
        'companies--275__name-drceuracle': media275 === true,
        'companies--1300__name-drceuracle': media1300 === true,
        'companies--900__name-drceuracle': media900 === true,
        'companies--600__name-drceuracle': media600 === true,
        'companies--600l__name-drceuracle': media600l === true,
    });

    const companiesBlurClass = classNames({
        'companies__blur': media1728 === true,
        'companies--1133__blur': media1133 === true,
        'companies--744__blur': media744 === true,
        'companies--744l__blur': media744l === true,
        'companies--375__blur': media375 === true,
        'companies--275__blur': media275 === true,
        'companies--1300__blur': media1300 === true,
        'companies--900__blur': media900 === true,
        'companies--600__blur': media600 === true,
        'companies--600l__blur': media600l === true,
    });

    const companiesBlurMychwayClass = classNames({
        'companies__blur-mychway': media1728 === true,
        'companies--1133__blur-mychway': media1133 === true,
        'companies--744__blur-mychway': media744 === true,
        'companies--744l__blur-mychway': media744l === true,
        'companies--375__blur-mychway': media375 === true,
        'companies--275__blur-mychway': media275 === true,
        'companies--1300__blur-mychway': media1300 === true,
        'companies--900__blur-mychway': media900 === true,
        'companies--600__blur-mychway': media600 === true,
        'companies--600l__blur-mychway': media600l === true,
    });

    const companiesBlurAuroClass = classNames({
        'companies__blur-auro': media1728 === true,
        'companies--1133__blur-auro': media1133 === true,
        'companies--744__blur-auro': media744 === true,
        'companies--744l__blur-auro': media744l === true,
        'companies--375__blur-auro': media375 === true,
        'companies--275__blur-auro': media275 === true,
        'companies--1300__blur-auro': media1300 === true,
        'companies--900__blur-auro': media900 === true,
        'companies--600__blur-auro': media600 === true,
        'companies--600l__blur-auro': media600l === true,
    });

    const companiesBlurSalonartClass = classNames({
        'companies__blur-salonart': media1728 === true,
        'companies--1133__blur-salonart': media1133 === true,
        'companies--744__blur-salonart': media744 === true,
        'companies--744l__blur-salonart': media744l === true,
        'companies--375__blur-salonart': media375 === true,
        'companies--275__blur-salonart': media275 === true,
        'companies--1300__blur-salonart': media1300 === true,
        'companies--900__blur-salonart': media900 === true,
        'companies--600__blur-salonart': media600 === true,
        'companies--600l__blur-salonart': media600l === true,
    });

    const companiesBlurVibroClass = classNames({
        'companies__blur-vibro': media1728 === true,
        'companies--1133__blur-vibro': media1133 === true,
        'companies--744__blur-vibro': media744 === true,
        'companies--744l__blur-vibro': media744l === true,
        'companies--375__blur-vibro': media375 === true,
        'companies--275__blur-vibro': media275 === true,
        'companies--1300__blur-vibro': media1300 === true,
        'companies--900__blur-vibro': media900 === true,
        'companies--600__blur-vibro': media600 === true,
        'companies--600l__blur-vibro': media600l === true,
    });

    const companiesBlurDrceuracleClass = classNames({
        'companies__blur-drceuracle': media1728 === true,
        'companies--1133__blur-drceuracle': media1133 === true,
        'companies--744__blur-drceuracle': media744 === true,
        'companies--744l__blur-drceuracle': media744l === true,
        'companies--375__blur-drceuracle': media375 === true,
        'companies--275__blur-drceuracle': media275 === true,
        'companies--1300__blur-drceuracle': media1300 === true,
        'companies--900__blur-drceuracle': media900 === true,
        'companies--600__blur-drceuracle': media600 === true,
        'companies--600l__blur-drceuracle': media600l === true,
    });

    const { isScrolling } = useScrollDirection();

    const companiesListRef = useRef();

    const [isCompaniesList, setIsCompaniesList] = useState(true);

    useLayoutEffect(() => {
        if (media744l === true || media600 === true || media600l === true || media375 === true || media275 === true) return;
        const headerHeight = 120;
        const handleScroll = () => {

            if (companiesListRef.current.getBoundingClientRect().top < headerHeight - 120) {
                setIsCompaniesList(false);
            } else {
                setIsCompaniesList(true);
            }

        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        if (props.bottom === true) {
            setIsCompaniesList(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (companiesListRef.current.getBoundingClientRect().top > headerHeight) {
                setIsCompaniesList(true);
            }
        };
    }, [isScrolling]);

    const propsData = (props, index = 0) => {
        let propsAll = props;

        return propsAll.data[index];
    };

    return (
        <>
            <section className={companiesClass} style={{ zIndex: 1 }} >
                <div className={containerCompaniesClass}>
                    <ul
                        className={companiesListClass}
                        ref={companiesListRef}
                        style={(isCompaniesList === true || props.bottom === true) ? { opacity: 1 }
                            : (isCompaniesList === false) ? { opacity: 0.1 } : null}
                    >
                        <li className={`${companiesItemClass} ${companiesItemMychwayClass}`}>
                            <div className={`${companiesFrameClass} ${companiesFrameMychwayClass}`}>
                                <div className={`${companiesGroupClass} ${companiesGroupMychwayClass}`}>
                                    {propsData(props, 0).map((prop, i) => (
                                        (i === 0) ? <UiH2
                                            key={`uiH2CompanyMychway${i}`}
                                            {...prop}
                                            className={`${companiesNameClass} ${companiesNameMychwayClass}`}
                                        />
                                            : (i === 1) ? <UiP
                                                key={`uiPCompanyMychway${i}`}
                                                {...prop}
                                                className={`${companiesBlurClass} ${companiesBlurMychwayClass}`}
                                            />
                                                : null
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className={`${companiesItemClass} ${companiesItemAuroClass}`}>
                            <div className={`${companiesFrameClass} ${companiesFrameAuroClass}`}>
                                <div className={`${companiesGroupClass} ${companiesGroupAuroClass}`}>
                                    {propsData(props, 1).map((prop, i) => (
                                        (i === 0) ? <UiH2
                                            key={`uiH2CompanyAuro${i}`}
                                            {...prop}
                                            className={`${companiesNameClass} ${companiesNameAuroClass}`}
                                        />
                                            : (i === 1) ? <UiP
                                                key={`uiPCompanyAuro${i}`}
                                                {...prop}
                                                className={`${companiesBlurClass} ${companiesBlurAuroClass}`}
                                            />
                                                : null
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className={`${companiesItemClass} ${companiesItemSalonartClass}`}>
                            <div className={`${companiesFrameClass} ${companiesFrameSalonartClass}`}>
                                <div className={`${companiesGroupClass} ${companiesGroupSalonartClass}`}>
                                    {propsData(props, 2).map((prop, i) => (
                                        (i === 0) ? <UiH2
                                            key={`uiH2CompanySalonart${i}`}
                                            {...prop}
                                            className={`${companiesNameClass} ${companiesNameSalonartClass}`}
                                        />
                                            : (i === 1) ? <UiP
                                                key={`uiPCompanySalonart${i}`}
                                                {...prop}
                                                className={`${companiesBlurClass} ${companiesBlurSalonartClass}`}
                                            />
                                                : null
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className={`${companiesItemClass} ${companiesItemVibroClass}`}>
                            <div className={`${companiesFrameClass} ${companiesFrameVibroClass}`}>
                                <div className={`${companiesGroupClass} ${companiesGroupVibroClass}`}>
                                    {propsData(props, 3).map((prop, i) => (
                                        (i === 0) ? <UiH2
                                            key={`uiH2CompanyVibro${i}`}
                                            {...prop}
                                            className={`${companiesNameClass} ${companiesNameVibroClass}`}
                                        />
                                            : (i === 1) ? <UiP
                                                key={`uiPCompanyVibro${i}`}
                                                {...prop}
                                                className={`${companiesBlurClass} ${companiesBlurVibroClass}`}
                                            />
                                                : null
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className={`${companiesItemClass} ${companiesItemDrceuracleClass}`}>
                            <div className={`${companiesFrameClass} ${companiesFrameDrceuracleClass}`}>
                                <div className={`${companiesGroupClass} ${companiesGroupDrceuracleClass}`}>
                                    {propsData(props, 4).map((prop, i) => (
                                        (i === 0) ? <UiH2
                                            key={`uiH2CompanyDrceuracle${i}`}
                                            {...prop}
                                            className={`${companiesNameClass} ${companiesNameDrceuracleClass}`}
                                        />
                                            : (i === 1) ? <UiP
                                                key={`uiPCompanyDrceuracle${i}`}
                                                {...prop}
                                                className={`${companiesBlurClass} ${companiesBlurDrceuracleClass}`}
                                            />
                                                : null
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}