// ==UserScript==
// @name            Add ID photo to Doda’s resume
// @description     Add ID photo to Doda’s resume
// @version         1.0
// @author          undecV (https://github.com/undecV)
// @homepageURL     https://github.com/undecV
// @match           https://doda.jp/dcfront/mypage/mypageCareerSheet/
// @icon            https://doda.jp/favicon.ico
// @grant           none
// ==/UserScript==

var x = document.getElementsByClassName("r63_mypage_line_l_0002")[0];
x.style["background-image"] = "url('../mypageResumeDownload/?rsf=8')";
x.style["background-position"] = "center";
x.style["background-size"] =  "cover";
x.innerHTML = '';
