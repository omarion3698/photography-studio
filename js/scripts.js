$(window).load(function(){
  if ($('#back-to-top').length) {
    var scrollTrigger = 100,
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $ ('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0 
      }, 700);
      });
  }
});

$(function() {
  SyntaxHighlighter.all();
});
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider) {
    $('body').removeClass('loading');
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

$('html,body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
});