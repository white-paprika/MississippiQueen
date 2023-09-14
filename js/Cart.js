$(document).ready(function() {
    $("#open-cart-btn").click(function() {
      $('.cart').addClass("cart__show");
    });
  });
  
$(document).ready(function() {
 $("#cart__close").click(function() {
   $('.cart').removeClass("cart__show");
 });
});