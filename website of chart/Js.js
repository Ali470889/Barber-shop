window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav2").style.position = "fixed";
    document.getElementById("nav2").style.width = "100%";
    document.getElementById("nav2").style.top = "0";
    document.getElementById("nav2").style.zIndex = "1000";
  } else {
    document.getElementById("nav2").style.position = "relative";
    document.getElementById("nav2").style.width = "100%";
    document.getElementById("nav2").style.top = "auto";
    document.getElementById("nav2").style.zIndex = "0";
  }
}
