import { useState, useEffect } from "react";

const mq = (query) => {
    return window.matchMedia(query).matches;
};

export const useMediaQuery = (query) => {
    const [isMatches, setMatches] = useState(mq(query));

    const update = () => setMatches(mq(query));

    useEffect(() => {
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("resize", update);
        };
    }, []);

    return isMatches;
};

// import { useState, useEffect } from 'react';

// export const useMediaQuery = (query) => {
//     const [isMatches, setIsMatches] = useState(false);

//     useEffect(() => {
//         const matchQueryList = window.matchMedia(query);

//         function handleChange(e) {
//             setIsMatches(e.matches);
//         }
//         matchQueryList.addEventListener("change", handleChange);
//         return () => {
//             matchQueryList.removeEventListener("change", handleChange);
//         };
//     }, [query]);

//     return isMatches;
// };