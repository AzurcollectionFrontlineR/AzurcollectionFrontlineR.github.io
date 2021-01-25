// ==UserScript==
// @name         RemonemoRedux
// @namespace    RemonemoRedux
// @version      0.1
// @description  more simply more visiably
// @author       Dreadnought
// @resource remonemoredux.css https://azurcollectionfrontliner.github.io/strages/remonemoredux.css
// @match        *://remohere.innobot.net/*
// @grant           GM_addStyle
// @grant           GM_getResourceText
// ==/UserScript==

var overideCSS ;

overideCSS = GM_getResourceText ("remonemoredux.css");
GM_addStyle (overideCSS);

