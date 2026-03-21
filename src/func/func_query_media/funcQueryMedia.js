const funcQueryMedia = () => {

    return {
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
    }

};

export default funcQueryMedia;