"use strict"

const minXY = 0.75;
const maxX = 18.75;
const maxY = 15.75;

const rect1Width = 420.5;
const rect1Height = 273.5;

const infoSvg1 = $('#info-svg1');

const svg1Path11 = $('#path1-1');
const svg1Rect11 = $('#rect1-1');
const svg1Rect21 = $('#rect2-1');
const svg1Rect11X = $('#rect1-1-animx');
const svg1Rect11Y = $('#rect1-1-animy');
const svg1Rect21X = $('#rect2-1-animx');
const svg1Rect21Y = $('#rect2-1-animy');
const svg1Circle11Path = $('#circle1-1-animpath');
const svg1Circle11R = $('#circle1-1-animr');
const svg1Circle11Fill = $('#circle1-1-animfill');
const svg1Circle21Path = $('#circle2-1-animpath');
const svg1Circle21R = $('#circle2-1-animr');
const svg1Circle21Fill = $('#circle2-1-animfill');

const svg1Path12 = $('#path1-2');
const svg1Rect12 = $('#rect1-2');
const svg1Rect22 = $('#rect2-2');
const svg1Rect12X = $('#rect1-2-animx');
const svg1Rect12Y = $('#rect1-2-animy');
const svg1Rect22X = $('#rect2-2-animx');
const svg1Rect22Y = $('#rect2-2-animy');
const svg1Circle12Path = $('#circle1-2-animpath');
const svg1Circle12R = $('#circle1-2-animr');
const svg1Circle12Fill = $('#circle1-2-animfill');
const svg1Circle22Path = $('#circle2-2-animpath');
const svg1Circle22R = $('#circle2-2-animr');
const svg1Circle22Fill = $('#circle2-2-animfill');

const svg1Path13 = $('#path1-3');
const svg1Rect13 = $('#rect1-3');
const svg1Rect23 = $('#rect2-3');
const svg1Rect13X = $('#rect1-3-animx');
const svg1Rect13Y = $('#rect1-3-animy');
const svg1Rect23X = $('#rect2-3-animx');
const svg1Rect23Y = $('#rect2-3-animy');
const svg1Circle13Path = $('#circle1-3-animpath');
const svg1Circle13R = $('#circle1-3-animr');
const svg1Circle13Fill = $('#circle1-3-animfill');
const svg1Circle23Path = $('#circle2-3-animpath');
const svg1Circle23R = $('#circle2-3-animr');
const svg1Circle23Fill = $('#circle2-3-animfill');


getPointMeet1();
getPointMeet2();
getPointMeet3();

setInterval(getPointMeet1, 10000);
setInterval(getPointMeet2, 11000);
setInterval(getPointMeet3, 12000);

function getPointMeet1() {
  let randomX = getX();
  let randomY = getY();
  
  $(svg1Rect11X).attr('values', `${maxX}; ${randomX}; ${maxX}`);
  $(svg1Rect11Y).attr('values', `${maxY}; ${randomY}; ${maxY}`);
  $(svg1Rect21X).attr('values', `${minXY}; ${randomX}; ${minXY}`);
  $(svg1Rect21Y).attr('values', `${minXY}; ${randomY}; ${minXY}`);

}

function getPointMeet2() {
  let randomX = getX();
  let randomY = getY();

  $(svg1Rect12X).attr('values', `${maxX}; ${randomX}; ${maxX}`);
  $(svg1Rect12Y).attr('values', `${maxY}; ${randomY}; ${maxY}`);
  $(svg1Rect22X).attr('values', `${minXY}; ${randomX}; ${minXY}`);
  $(svg1Rect22Y).attr('values', `${minXY}; ${randomY}; ${minXY}`);

}

function getPointMeet3() {
  let randomX = getX();
  let randomY = getY();

  $(svg1Rect13X).attr('values', `${maxX}; ${randomX}; ${maxX}`);
  $(svg1Rect13Y).attr('values', `${maxY}; ${randomY}; ${maxY}`);
  $(svg1Rect23X).attr('values', `${minXY}; ${randomX}; ${minXY}`);
  $(svg1Rect23Y).attr('values', `${minXY}; ${randomY}; ${minXY}`);

}

function getX() {
  return randomIntFromInterval(minXY, maxX);
}

function getY() {
  return randomIntFromInterval(minXY, maxY);
} 

function randomIntFromInterval(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) + min)
}