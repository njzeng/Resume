$(document).ready(function() {
  $('.enter').click(function(e) {
    $(".enter").animate({
      height: 'toggle'
    });
  });

  $(window).on('scroll', function() {
    // window height
    var w = $(window).height();
    w = (w/2);
    // number of px scrolled
    var px = $(window).scrollTop();

    if (px > w) {
      // $('.topnav').fadeIn();
      $('.topnav').fadeIn();
    } else {
      $('.topnav').fadeOut();
    }
  });
});