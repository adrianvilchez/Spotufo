function myFunction() {

  if ($(".temazosChillScroll").scrollTop() > 290){
        $('.nombreCanciones').addClass("fixed").fadeIn();
        $('.menuReproduccion').css('border-bottom', '1px solid #7B7B7B');
  }
  else {
        $('.nombreCanciones').removeClass("fixed");
        $('.menuReproduccion').css('border-bottom', '0px solid');
  }
}
