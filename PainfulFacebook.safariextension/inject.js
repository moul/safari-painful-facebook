(function() {
  if (document.location.pathname !== "/") {
    return;
  }

  var lastPosition = 0;
  var safeZone = 1000;

  window.setInterval(function() {
    var y = window.pageYOffset || document.scrollTop || document.body.scrollTop || 0;
    if (y >= lastPosition + safeZone) {
      alert("au boulot !");
      lastPosition = y;
    }
  }, 1000);
})();
