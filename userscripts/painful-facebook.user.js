// ==UserScript==
// @name           Painful Facebook
// @version        1
// @author         Manfred Touron
// @namespace      http://m.42.am/
// @description    Facebook timeline + Pain = Productivity !
// @include        https://www.facebook.com/*
// @updateURL      https://raw.githubusercontent.com/moul/safari-painful-facebook/master/userscripts/painful-facebook.user.js
// @downloadURL    https://raw.githubusercontent.com/moul/safari-painful-facebook/master/userscripts/painful-facebook.user.js
// ==/UserScript==


(function() {
  if (document.location.pathname !== "/") {
    return;
  }

  var lastPosition = 0;
  var safeZone = 3000;

  window.setInterval(function() {
    if (document.body == null) { return; }
    var y = window.pageYOffset || document.scrollTop || document.body.scrollTop || 0;
    if (y >= lastPosition + safeZone) {
      alert("au boulot !");
      lastPosition = y;
    }
  }, 1000);
})();
