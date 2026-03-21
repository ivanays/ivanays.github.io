import React, { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks";

const funcQueryNumber = () => {

    const queryMedia = {
        query1728: "screen and (min-width: 1728px)",
        query1300: "screen and (min-width: 1300px) and (max-width: 1727px)",
        query1133: "screen and (min-width: 1133px) and (max-width: 1299px)",
        query900: "screen and (min-width: 900px) and (max-width: 1132px)",
        query744: "screen and (min-width: 744px) and (max-width: 899px) and (orientation: portrait)",
        // query744: "screen and (min-width: 744px) and (max-width: 899px) and (min-height: 745px)",
        query744l: "screen and (min-width: 744px) and (max-width: 899px) and (orientation: landscape)",
        // query744l: "screen and (min-width: 744px) and (max-width: 899px) and (max-height: 744px)",
        query600: "screen and (min-width: 600px) and (max-width: 743px) and (orientation: portrait)",
        // query600: "screen and (min-width: 600px) and (max-width: 743px) and (min-height: 601px)",
        query600l: "screen and (min-width: 600px) and (max-width: 743px) and (orientation: landscape)",
        // query600l: "screen and (min-width: 600px) and (max-width: 743px) and (max-height: 600px)",
        query375: "screen and (min-width: 375px) and (max-width: 599px) and (orientation: portrait)",
        // query375: "screen and (min-width: 375px) and (max-width: 599px)",
        query275: "screen and (min-width: 275px) and (max-width: 374px) and (orientation: portrait)",
        // query275: "screen and (min-width: 275px) and (max-width: 374px)",
        portrait: "orientation: portrait",
        landscape: "orientation: landscape",
    };

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

    let queryNumber = '';

    media1728 === true ? queryNumber = '--1728' :
        media1300 === true ? queryNumber = '--1300' :
            media1133 === true ? queryNumber = '--1133' :
                media900 === true ? queryNumber = '--900' :
                    media744 === true ? queryNumber = '--744' :
                        media744l === true ? queryNumber = '--744l' :
                            media600 === true ? queryNumber = '--600' :
                                media600l === true ? queryNumber = '--600l' :
                                    media375 === true ? queryNumber = '--375' :
                                        media275 === true ? queryNumber = '--275' : null;
    return queryNumber;

};

export default funcQueryNumber;