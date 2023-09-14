$(document).ready(function() {
  $("#menu").click(function() {
    $('.menu').addClass("show");
  });
});

$(document).ready(function() {
  $("#menu__close").click(function() {
    $('.menu').removeClass("show");
  });
});