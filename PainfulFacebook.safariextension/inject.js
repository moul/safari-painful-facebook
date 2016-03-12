(function() {
  if (document.location.pathname !== "/") {
    return;
  }

  var lastPosition = 0;
  var safeZone = 3000;

  window.setInterval(function() {
    if (document.body === undefined) { return; }
    var y = window.pageYOffset || document.scrollTop || document.body.scrollTop || 0;
    if (y >= lastPosition + safeZone) {
      alert("au boulot !");
      lastPosition = y;
    }
  }, 1000);
})();
