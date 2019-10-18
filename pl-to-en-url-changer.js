// ==UserScript==
// @name         Language changer from pl-pl -> en-us
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change language for some sites from any other languages to en-US
// @author       Piotr Wolszakiewicz
// @match        https://*/pl-pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var originalUrl = window.location.href;
    /*var enUrl = originalUrl.replace("pl-pl", "en-us");*/

    const regex = /(https?:\/\/)([\w\d\.\-]+)(\/[\w]{2}-[\w]{2})([\/\w\/.]+)/ig;
    const subst = `$1$2/en-us$4`;
    var enUrl = originalUrl.replace(regex, subst);

    window.location.replace(enUrl);

})();