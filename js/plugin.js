/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

// src To Head 

// var jqueryToAdd = document.createElement("script");

// jqueryToAdd.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';

// document.getElementsByTagName('head')[0].appendChild(jqueryToAdd);


var numberChildbody = document.getElementById("numberChildbody"),
  jquerySrc = document.createElement("script"),
  bootstrapSrc = document.createElement("script"),
  wowSrc = document.createElement("script"),
  owlSrc = document.createElement("script"),
  magnificSrd = document.createElement("script"),
  pluginHideShowSrc = document.createElement("script"),
  validateMiniSrc = document.createElement("script"),
  gmapsStc1 = document.createElement("script"),
  gmapsStc2 = document.createElement("script"),
  backgroundVideo = document.createElement("script"),
  backgroundmove = document.createElement("script"),
  snakeSrc = document.createElement("script"),
  typedSrc = document.createElement("script"),
  mixitupSrc = document.createElement("script"),
  countToSrc = document.createElement("script"),
  
  pluginWorkSrc = document.createElement("script"),
  toolSrc = document.createElement("script"),
  body = document.getElementsByTagName("body")[0];

jquerySrc.src = "js/JQuery/jquery-3-6-0.min.js";

bootstrapSrc.src = "js/bootstrap/bootstrap-5.0.1-min.js";

wowSrc.src = "js/wow/wow.min.js";

owlSrc.src = "js/owl/owl.carousel.min.js";

magnificSrd.src = "js/magnific/jquery.magnific-popup.js";

pluginHideShowSrc.src = "js/Show-And-Hide-box/jquery.expandable.js";

validateMiniSrc.src = "js/form/jquery.validateMini.min.js";

gmapsStc1.src = "http://maps.google.com/maps/api/js";
gmapsStc2.src = "js/gmap/gmaps.min.js";

backgroundVideo.src = 'js/background-video/jquery.vide.js';

backgroundmove.src = "js/backgroundmove/jquery.backgroundMove.js";

snakeSrc.src = "js/snake/snake.min.js";

typedSrc.src = "js/typedjs/typed.min.js";

mixitupSrc.src = "js/filter/mixitup.min.js";

countToSrc.src = 'js/countTo/jquery.countTo.js';

/**************************/

pluginWorkSrc.src = "js/plugin-work.js";
toolSrc.src = "js/My-Tools.js";


/*************/

body.insertBefore(jquerySrc, body.childNodes[body.childNodes.length - 1]);

body.insertBefore(bootstrapSrc, body.childNodes[body.childNodes.length - 1]);

body.insertBefore(wowSrc, body.childNodes[body.childNodes.length - 1]);

body.insertBefore(owlSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(magnificSrd, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(pluginHideShowSrc,body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(validateMiniSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(gmapsStc1, body.childNodes[body.childNodes.length - 1]);
// body.insertBefore(gmapsStc2, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(backgroundVideo, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(backgroundmove, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(snakeSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(typedSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(mixitupSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(countToSrc, body.childNodes[body.childNodes.length - 1]);

// ********* // 
// body.insertBefore(pluginWorkSrc, body.childNodes[body.childNodes.length - 1]);
// body.insertBefore(myTol, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(pluginWorkSrc, body.childNodes[body.childNodes.length - 1]);

// body.insertBefore(toolSrc, body.childNodes[body.childNodes.length - 1]);



//

numberChildbody.textContent = body.childNodes.length + " childNodes ";

// alert(body.childElementCount);
