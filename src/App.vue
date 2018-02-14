<template>
  <div id="app">
    <div id="container" itemscope>

      <nav class="nav-collapse">
        <ul>
          <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
          <router-link to="/installers">Installers Page</router-link>
          <router-link to="/faq">FAQ Page</router-link>
          <router-link to="/installation">Installation Page</router-link>
          <router-link to="/other">Other Page</router-link>
          <router-link to="/robpin">Robpin Page</router-link>
          <router-link to="/contactus">Contact Us Page</router-link>
        </ul>
      </nav>
      <header>
        <div class="blue">
          <h2>ATTENTION DOUBLE BASSISTS:</h2>
          <h3>Have a fingered 'C' Extension? &nbsp; Considering getting one?</h3>
          <h1 itemprop="name" class="tk-museo-sans">Anzellotti Bass Capos</h1>
        </div>
        <div class="brown">
          <h2 class="tk-museo-sans">The ultimate solution for 'C' Extension chromatic latches or gates!</h2>
          <div class="flex-box">

            <span><router-link :to="{ name: 'HelloWorld' }">Home</router-link></span>
            <span><router-link to="/installers">Installers Page</router-link></span>
            <span><router-link to="/faq">FAQ Page</router-link></span>
            <span><router-link to="/installation">Installation Page</router-link></span>
            <span><router-link to="/other">Other Page</router-link></span>
            <span><router-link to="/robpin">Robpin Page</router-link></span>
            <span><router-link to="/contactus">Contact Us Page</router-link></span>
          </div>
        </div>

        <div class="mobile-blue">
          <h1 itemprop="name" class="tk-museo-sans">Anzellotti Bass Capos</h1>
        </div>
      </header>

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="scripts/responsiveslides.min.js"></script>
<script src="scripts/responsive-nav.js"></script>
<script type="text/javascript" src="//use.typekit.net/dkv3nlc.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<style>
#app {

}

.rslides {
  position: relative;
  list-style: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 200px;
  min-width: 324px;
  padding: 0;
  margin: 0; }
.rslides li {
  -webkit-backface-visibility: hidden;
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0; }
.rslides li:first-child {
  position: relative;
  display: block;
  float: left; }
.rslides li img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 332px;
  float: left;
  max-width: 500px;
  border: none; }
.rslides li div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.1em;
  color: #ffcc00;
  text-align: left;
  padding: 0 0 0 1em;
  line-height: 2em;
  z-index: 2;
  font-size: 13px; }
.rslides li:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.1em;
  background-color: black;
  opacity: .6; }

html {
  font: normal 100% Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  color: #000;
  height: 100%; }

body {
  text-align: center;
  background: white;
  margin: 0; }
body a:link,
body a:visited,
body a:active {
  font: bold 15px Arial, Helvetica, sans-serif;
  color: #000;
  text-decoration: none; }
body a:hover {
  text-decoration: underline; }

.bold {
  font-weight: bold; }

P {
  font: .85em/1.4em Arial, Helvetica, sans-serif;
  margin: 0 0 1em 0;
  padding: 0;
  text-align: justify; }

img {
  border: 1px solid #ccc;
  margin: 0; }

a.arrow {
  border: 0;
  margin: 0;
  padding: 0 20px 0 0;
  background: url(../static/images/more.png) no-repeat 100% 0; }

h1 {
  font: bold 17px Arial, Helvetica, sans-serif;
  margin: 0; }
h1.heading {
  font: bold 15px Arial, Helvetica, sans-serif;
  padding: 14px 0 0 0;
  margin: 24px 14px 0 14px;
  text-align: left;
  border-bottom: 1px solid black; }
h1.tk-museo-sans {
  font-family: "museo-sans";
  font-size: 1.7em;
  font-style: normal;
  font-weight: 600;
  padding: 12px 0 0 0; }

h2 {
  font-family: arial, ms sans serif, sans-serif;
  padding: 0;
  margin: 0 0 3px 0;
  text-align: left; }

h3, h3.email {
  font-family: arial, ms sans serif, sans-serif;
  color: #766E4A;
  text-align: left;
  margin: 0 0 12px 0; }
h3.email {
  margin: 2em 0;
  flex-grow: 1;
  color: #ffcc00; }
h3.email a {
  font-family: "museo-sans";
  font-style: normal;
  font-size: inherit;
  text-decoration: underline; }

ul {
  margin: 0;
  padding: 0; }

ol {
  margin: 0;
  padding: 1em 0 1em 36px; }

li {
  font: 14px Arial, Helvetica, sans-serif;
  line-height: 1.5em;
  text-align: left; }

.blue {
  border-bottom: 1px solid white;
  background-color: #0076A4; }

.brown {
  border-bottom: 1px solid white;
  background: #766E4A;
  height: 70px;
  width: 100%;
  color: white;
  text-align: center; }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  .brown {
    display: none; } }
.brown h2 {
  font-family: "museo-sans";
  font-style: normal;
  margin: 0;
  padding: 9px 0 0 0;
  line-height: 1.3em;
  text-align: center; }
@media only screen and (max-width: 1024px) {
  .brown h2 {
    font-size: 1.4em; } }
@media only screen and (max-width: 702px) and (min-width: 518px) {
  .brown h2 {
    font-size: 1.0em;
    line-height: 30px; } }
.brown p {
  margin: 6px 0 10px 0; }
.brown ul {
  text-align: center;
  width: auto;
  padding: 0; }
.brown li {
  display: inline-block;
  padding: 0 12px; }
@media only screen and (max-width: 684px) and (min-width: 501px) {
  .brown li {
    padding: 0 5px; } }
.brown li a {
  font: .8em arial;
  color: #cfcfcf;
  letter-spacing: .07em; }
.brown .flex-box {
  justify-content: center;
  flex-wrap: wrap; }
.brown .flex-box a {
  font: .75em arial;
  color: #cfcfcf;
  letter-spacing: .07em;
  display: inline-block;
  padding: 8px 12px 0;
  line-height: 1em; }
.brown .flex-box a.newproduct {
  color: springgreen;
  text-decoration: underline; }
@media only screen and (max-width: 780px) and (min-width: 501px) {
  .brown .flex-box a {
    padding: 4px 5px 0;
    font-size: .7em; } }

.flex-box {
  display: flex;
  align-items: center; }

hr {
  border: 0;
  height: 1px;
  width: 60%;
  margin-bottom: 14px;
  background-image: -webkit-linear-gradient(left, transparent, rgba(0, 0, 0, 0.75), transparent);
  background-image: -moz-linear-gradient(left, transparent, rgba(0, 0, 0, 0.75), transparent);
  background-image: -ms-linear-gradient(left, transparent, rgba(0, 0, 0, 0.75), transparent);
  background-image: -o-linear-gradient(left, transparent, rgba(0, 0, 0, 0.75), transparent); }

h2 hr {
  height: 3px;
  width: 100%;
  background: #0076a4;
  background: -moz-linear-gradient(359deg, #0076a4 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -webkit-linear-gradient(359deg, #0076a4 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -o-linear-gradient(359deg, #0076a4 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -ms-linear-gradient(359deg, #0076a4 42%, rgba(118, 110, 74, 0.1) 100%);
  background: linear-gradient(89deg, #0076a4 42%, rgba(118, 110, 74, 0.1) 100%);
  margin: .2em 0 0 0; }

.blue h2 hr {
  height: 3px;
  width: 100%;
  background: #0076a4;
  background: -moz-linear-gradient(359deg, white 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -webkit-linear-gradient(359deg, white 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -o-linear-gradient(359deg, white 42%, rgba(118, 110, 74, 0.1) 100%);
  background: -ms-linear-gradient(359deg, white 42%, rgba(118, 110, 74, 0.1) 100%);
  background: linear-gradient(89deg, white 42%, rgba(118, 110, 74, 0.1) 100%);
  margin: .2em 0 0 0; }

header {
  width: 100%;
  z-index: 1; }
header h3, header h3.email {
  font-family: "museo-sans";
  font-style: normal; }
header .blue {
  width: 100%;
  height: 124px; }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  header .blue {
    height: 100px; } }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  header .blue {
    display: none; } }
header .blue h1 {
  color: white;
  text-align: center;
  margin: 0;
  padding: 0; }
header .blue h2, header .blue h3 {
  color: white;
  text-align: center; }
header .blue h2 {
  padding-top: 1em;
  font: bold 1.3em/1.4em arial; }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  header .blue h2 {
    padding-top: .6em;
    line-height: 1em; } }
header .blue h3 {
  font: bold 1.1em/1em arial; }
header .mobile-blue {
  display: none;
  background-color: #0076A4;
  height: 42px; }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  header .mobile-blue {
    display: block;
    height: 42px; }
  header .mobile-blue h1.tk-museo-sans {
    padding: 0 9px 0;
    font-size: 1.5em;
    line-height: 1.7em;
    color: white;
    float: left;
    width: auto; } }

footer .blue,
footer .brown {
  width: 100%;
  height: 124px; }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  footer .blue,
  footer .brown {
    display: block; }
  footer .blue ul,
  footer .brown ul {
    display: none; } }
footer .brown {
  border-bottom: 1px solid white;
  background: #766E4A;
  height: 24px;
  width: 100%;
  color: white;
  text-align: center; }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  footer .brown {
    display: none; } }
footer .brown h2 {
  font-family: "museo-sans";
  font-style: normal;
  margin: 0;
  padding: 9px 0 0 0;
  line-height: 1.3em;
  text-align: center; }
@media only screen and (max-width: 1024px) {
  footer .brown h2 {
    font-size: 1.4em; } }
@media only screen and (max-width: 684px) and (min-width: 518px) {
  footer .brown h2 {
    font-size: 1.0em;
    line-height: 30px; } }
footer .brown p {
  margin: 6px 0 10px 0; }
footer .brown ul {
  text-align: center;
  width: auto;
  padding: 0; }
footer .brown li {
  display: inline-block;
  padding: 0 12px; }
@media only screen and (max-width: 684px) and (min-width: 501px) {
  footer .brown li {
    padding: 0 5px; } }
footer .brown li a {
  font: .8em arial;
  color: white;
  letter-spacing: .07em; }
footer .blue {
  display: table; }
footer .blue p {
  display: table-cell;
  vertical-align: middle;
  color: white;
  text-align: right;
  padding: 0 2em 0 0;
  font: .6em arial;
  font-size: .6em; }
footer .blue p a {
  font: .8em arial; }

/*! responsive-nav.js 1.0.32 by @viljamis */
.nav-collapse {
  display: none; }

@media only screen and (min-width: 320px) and (max-width: 518px) {
  display: none;
  .nav-collapse ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
    list-style: none; }

  .nav-collapse * {
    box-sizing: border-box; }

  .nav-collapse li {
    width: 100%;
    display: block;
    float: left; }
  .nav-collapse li a {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 112.5%;
    letter-spacing: 2px;
    color: white;
    text-decoration: none;
    width: 100%;
    background: #766E4A;
    border-bottom: 1px solid white;
    padding: .5em 1em;
    float: left; }

  .js .nav-collapse {
    clip: rect(0 0 0 0);
    max-height: 0;
    position: absolute;
    display: block;
    overflow: hidden;
    zoom: 1; }

  .nav-collapse.opened {
    max-height: 9999px; }

  .disable-pointer-events {
    pointer-events: none !important; }

  .nav-toggle {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    float: right;
    text-indent: -9999px;
    overflow: hidden;
    display: block;
    border: 1px solid #374C77;
    border-radius: 3px 3px 3px 3px;
    cursor: pointer;
    height: 24px;
    padding: 3px 4px 3px;
    margin: 5px 7px 0 0;
    position: relative;
    width: 25px;
    background: #777777;
    background: -moz-linear-gradient(top, #777777 0%, #777777 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #777777), color-stop(100%, #777777));
    background: -webkit-linear-gradient(top, #777777 0%, #777777 100%);
    background: -o-linear-gradient(top, #777777 0%, #777777 100%);
    background: -ms-linear-gradient(top, #777777 0%, #777777 100%);
    background: linear-gradient(to bottom, #777777 0%, #777777 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#777777', endColorstr='#777777', GradientType=0); }
  .nav-toggle div {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 2px 2px 2px 2px;
    height: 2px;
    margin-top: 3px;
    width: 90%; } }
@media only screen and (min-width: 320px) and (max-width: 518px) and (min-width: 684px) {
  .js .nav-collapse {
    position: relative; }

  .js .nav-collapse.closed {
    max-height: none; }

  .nav-toggle {
    display: none; } }
#container {
  height: 100vh;
  margin: 0 auto; }

.scroll-large {
  display: table;
  border-spacing: 40px 0;
  margin: 0 auto; }
@media only screen and (max-width: 684px) {
  .scroll-large {
    height: 100%;
    width: auto;
    display: block;
    border-spacing: none; } }
@media only screen and (max-width: 736px) {
  .scroll-large {
    border-spacing: 30px 0; } }
.scroll-large #scroll-large-img {
  max-width: 100%;
  min-width: 320px;
  max-height: 943px;
  display: table-cell;
  vertical-align: top; }
@media only screen and (max-width: 1037px) {
  .scroll-large #scroll-large-img {
    max-height: 734px; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .scroll-large #scroll-large-img {
    min-width: auto; } }
@media only screen and (max-width: 684px) {
  .scroll-large #scroll-large-img {
    max-height: auto;
    width: 100%;
    display: none; } }
.scroll-large .home-right {
  max-height: 711px;
  width: 55%;
  margin: 0 auto;
  display: table-cell;
  vertical-align: top; }
@media only screen and (max-width: 684px) {
  .scroll-large .home-right {
    position: static;
    display: block;
    padding: 0;
    margin: 0 40px;
    background-color: transparent;
    width: inherit;
    max-height: 100%; } }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  .scroll-large .home-right {
    margin: 0 11px; } }
.scroll-large .home-right h3 {
  font-family: "museo-sans";
  font-style: normal;
  color: #722817;
  margin: 0 0 18px 0;
  text-align: justify; }
@media only screen and (max-width: 684px) {
  .scroll-large .home-right h3 {
    font-size: .9em;
    margin: 0 0 9px 0; } }
.scroll-large .home-right .text-group {
  margin: 1.2em 0 0 0;
  height: 460px; }
@media only screen and (max-width: 1037px) {
  .scroll-large .home-right .text-group {
    height: auto; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .scroll-large .home-right .text-group {
    height: 260px; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .scroll-large .home-right .text-group {
    height: 260px; } }
@media only screen and (max-width: 684px) {
  .scroll-large .home-right .text-group {
    margin: .7em 0 1em 0;
    overflow: visible;
    height: auto; } }
.scroll-large .home-right p {
  font-size: .85em;
  color: #111;
  margin: 0 0 1em 0; }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .scroll-large .home-right p {
    font-size: .85em;
    margin-bottom: .9em; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .scroll-large .home-right p {
    font-size: .85em;
    margin-bottom: 1em; } }
@media only screen and (max-width: 684px) {
  .scroll-large .home-right .rslides {
    min-width: 83vw;
    display: inline-block; }
  .scroll-large .home-right .rslides li img {
    display: block;
    width: inherit;
    height: auto;
    max-height: inherit;
    float: left;
    max-width: inherit;
    border: none; } }

.content {
  max-width: 1024px;
  min-width: 830px;
  margin: 0 auto;
  padding: 33px 0 16px;
  /* iPads (landscape) ----------- */
  /* iPads (portrait) ----------- */ }
@media only screen and (max-width: 1037px) {
  .content {
    max-width: 830px; } }
@media only screen and (max-width: 829px) {
  .content {
    min-width: inherit;
    overflow: hidden; } }
@media only screen and (max-width: 684px) {
  .content {
    padding-top: 16px; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .content {
    max-width: 1024px; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .content {
    min-width: inherit; } }
.content .brown {
  position: static; }
.content #more-text-outside p a {
  display: inline-block;
  min-height: 19px; }
@media only screen and (max-width: 1038px) {
  .content #more-text-inside {
    display: none; }
  .content #more-text-outside {
    margin: 0 40px;
    color: white; }
  .content #more-text-outside a {
    color: white; }
  .content #more-text-outside p {
    font-size: .85em; } }
@media only screen and (max-width: 684px) {
  .content #more-text-inside {
    margin: 0 40px; }
  .content #more-text-outside {
    display: none; } }
@media only screen and (min-width: 1038px) {
  .content #more-text-inside {
    display: inline-block; }
  .content #more-text-outside {
    display: none; } }
@media only screen and (max-width: 684px) {
  .content #more-text-outside {
    display: inline-block;
    padding-top: 16px; } }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  .content #more-text-outside {
    margin: 0 11px; } }
.content #iphone-scroll {
  width: 100%;
  height: 100%;
  margin-bottom: 1em; }
@media only screen and (min-width: 684px) {
  .content #iphone-scroll {
    display: none; } }
.content .final-text {
  margin: 0 40px 2em 40px;
  overflow: hidden;
  font-size: .85em;
  color: white; }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .content .final-text {
    margin: 0 40px;
    font-size: .85em; } }
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .content .final-text {
    margin: 0 40px;
    font-size: .85em; } }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  .content .final-text {
    margin: 0 11px; }
  .content .final-text p {
    font-size: 1em;
    line-height: 1.4em; } }
@media only screen and (min-width: 518px) {
  .content .final-text p {
    font-size: 1em;
    line-height: 1.4em; } }

.blue .content {
  padding: 40px; }
@media only screen and (min-width: 320px) and (max-width: 684px) {
  .blue .content {
    padding: 0 11px 11px; } }

#google {
  text-align: center;
  margin: 0; }

#google-mobile,
#google-mobile * {
  display: none; }

@media only screen and (min-width: 320px) and (max-width: 518px) {
  .flex-box {
    display: block;
    text-align: center; }

  #google {
    display: none; }

  #google-mobile,
  #google-mobile * {
    display: block; } }
#follow-list {
  margin-left: 13px;
  background: rgba(255, 255, 255, 0.3);
  padding: 6px;
  width: 30%;
  min-width: 205px;
  display: flex;
  justify-content: center; }
#follow-list li {
  float: left;
  position: relative;
  margin-right: 17px;
  zoom: 1;
  display: inline; }
#follow-list li:last-child {
  margin-right: 0; }
#follow-list li .follow-div {
  margin: 0;
  padding: 0;
  width: 33px;
  height: 38px; }
#follow-list li a {
  display: block;
  width: 33px;
  height: 38px;
  text-indent: -9999px;
  background: url("../static/images/sprite3.png"); }
#follow-list li a#follow-lnkd {
  background-position: 0 0; }
#follow-list li a#follow-twtr {
  background-position: -33px 0; }
#follow-list li a#follow-fb {
  background-position: -66px 0;
  width: 32px; }
#follow-list li a#follow-g {
  background-position: -98px 0;
  width: 32px; }
@media only screen and (min-width: 320px) and (max-width: 518px) {
  #follow-list {
    margin: 0 auto 2em;
    display: inline-block; } }

.content.robpin p {
  margin: 1em 0; }
.content.robpin .flex-box {
  flex-direction: column; }
.content.robpin .flex-box img {
  max-width: 800px;
  width: 100%; }

.contact-form-container {
  position: relative;
  display: inline-block; }
.contact-form-container .contactUsForm {
  color: green;
  cursor: pointer; }

#contact-frame {
  border: none;
  height: 0;
  width: 290px;
  position: absolute;
  right: 0;
  top: -14px;
  z-index: 4;
  transition: height .5s; }
#contact-frame.shown {
  height: 50vh; }

/*# sourceMappingURL=main.css.map */

</style>
