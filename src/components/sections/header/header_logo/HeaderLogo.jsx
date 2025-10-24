import React, { useLayoutEffect, useRef } from 'react';

import { useMediaQuery } from '../../../../hooks';

import funcQueryMedia from '../../../../func/func_query_media/funcQueryMedia';

import './HeaderLogo.scss';

import { UiLink } from '../../../ui';
import { HeaderLogoImg } from './header_logo_img';

import dataHeaderLogoImg from '../../../../data/data_header/data_header_logo/data_header_logo_img/dataHeaderLogoImg.json';

import propsData from '../../../../func/func_props/funcProps';

export const HeaderLogo = (props) => {

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
    const portrait = useMediaQuery(queryMedia.portrait);
    const landscape = useMediaQuery(queryMedia.landscape);

    const linkHeaderLogoRef = useRef();

    useLayoutEffect(() => {
        linkHeaderLogoRef.current.click();
        console.log('click!!!')
    }, [portrait, landscape]);

  return (
    <>
      <div className="header__logo">
        {propsData(props).map((prop, i) => (
            <UiLink key={`uiLinkHeaderLogo${i}`}
                {...prop}
                style={props.position === 0 ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }}
                disabled={props.position === 0 ? false : true}
                ref={linkHeaderLogoRef}
            >
            <HeaderLogoImg data={dataHeaderLogoImg} />
          </UiLink>
        ))}
      </div>
    </>
  );
};
