jQuery(document).ready(function($) {
  $('#banner').show(); // if needed
  $('.show').hide(); // if needed

  $('.facility-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
