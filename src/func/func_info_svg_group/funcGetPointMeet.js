import gsap from "gsap";

export const funcGetPointMeet = (minXY, maxX, maxY, current1, current2, current3, current4) => {
    let randomX = getX();
    let randomY = getY();




    function getX() {
        return randomIntFromInterval(minXY, maxX);
    };

    function getY() {
        return randomIntFromInterval(minXY, maxY);
    };

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
};