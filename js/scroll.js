function myFunction() {

  if ($(".temazosChillScroll").scrollTop() > 290){

        $('.nombreCanciones').addClass("fixed").fadeIn();
  }
  else {

        $('.nombreCanciones').removeClass("fixed");
  }
}
