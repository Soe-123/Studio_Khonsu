/*scroll view*/
$('.scroll').wrap('<div class="scroll-group"></div>');
$('.scroll').css({
  'overflow': 'hidden',
  height: 'auto'
});
$('.scroll-group').wrap('<div class="scroll-wrap"></div>');
$('.scroll-wrap').css({
  'overflow': 'hidden'
});

/*animate*/
var targetY = $('.scroll').eq(0).outerHeight();

var scroll = function(resetY) {

  //animate 기본 동작 변형 "swing" -> "linear"
  $('.scroll-group').animate({
    top: targetY * -1 + 'px'
  }, 20000, "linear", function() {
    $('.scroll-group').css({
      top: 0
    });
    scroll();
  });
}

scroll();