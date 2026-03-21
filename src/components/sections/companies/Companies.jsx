import React, { useLayoutEffect, useState, useRef } from "react";

import './Companies.scss';

import { useScrollDirection } from 'react-use-scroll-direction';
import { useMediaQuery } from "../../../hooks";

import classNames from "classnames";

import funcQueryMedia from "../../../func/func_query_media/funcQueryMedia";
import funcQueryNumber from "../../../func/func_query_number/funcQueryNumber";

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

    let queryNumber = funcQueryNumber();

    const companiesClass = classNames(`companies${queryNumber}`);
    const containerClass = classNames(`container${queryNumber}`);
    const containerCompaniesClass = classNames(`container-companies${queryNumber}`);
    const companiesListClass = classNames(`companies${queryNumber}__list`);
    const companiesItemClass = classNames(`companies${queryNumber}__item`);
    const companiesItemMychwayClass = classNames(`companies${queryNumber}__item-mychway`);
    const companiesFrameClass = classNames(`companies${queryNumber}__frame`);
    const companiesFrameMychwayClass = classNames(`companies${queryNumber}__frame-mychway`);
    const companiesGroupClass = classNames(`companies${queryNumber}__group`);
    const companiesGroupMychwayClass = classNames(`companies${queryNumber}__group-mychway`);
    const companiesItemAuroClass = classNames(`companies${queryNumber}__item-auro`);
    const companiesItemSalonartClass = classNames(`companies${queryNumber}__item-salonart`);
    const companiesItemVibroClass = classNames(`companies${queryNumber}__item-vibro`);
    const companiesItemDrceuracleClass = classNames(`companies${queryNumber}__item-drceuracle`);
    const companiesFrameAuroClass = classNames(`companies${queryNumber}__frame-auro`);
    const companiesFrameSalonartClass = classNames(`companies${queryNumber}__frame-salonart`);
    const companiesFrameVibroClass = classNames(`companies${queryNumber}__frame-vibro`);
    const companiesFrameDrceuracleClass = classNames(`companies${queryNumber}__frame-drceuracle`);
    const companiesGroupAuroClass = classNames(`companies${queryNumber}__group-auro`);
    const companiesGroupSalonartClass = classNames(`companies${queryNumber}__group-salonart`);
    const companiesGroupVibroClass = classNames(`companies${queryNumber}__group-vibro`);
    const companiesGroupDrceuracleClass = classNames(`companies${queryNumber}__group-drceuracle`);
    const companiesNameClass = classNames(`companies${queryNumber}__name`);
    const companiesNameMychwayClass = classNames(`companies${queryNumber}__name-mychway`);
    const companiesNameAuroClass = classNames(`companies${queryNumber}__name-auro`);
    const companiesNameSalonartClass = classNames(`companies${queryNumber}__name-salonart`);
    const companiesNameVibroClass = classNames(`companies${queryNumber}__name-vibro`);
    const companiesNameDrceuracleClass = classNames(`companies${queryNumber}__name-drceuracle`);
    const companiesBlurClass = classNames(`companies${queryNumber}__blur`);
    const companiesBlurMychwayClass = classNames(`companies${queryNumber}__blur-mychway`);
    const companiesBlurAuroClass = classNames(`companies${queryNumber}__blur-auro`);
    const companiesBlurSalonartClass = classNames(`companies${queryNumber}__blur-salonart`);
    const companiesBlurVibroClass = classNames(`companies${queryNumber}__blur-vibro`);
    const companiesBlurDrceuracleClass = classNames(`companies${queryNumber}__blur-drceuracle`);

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